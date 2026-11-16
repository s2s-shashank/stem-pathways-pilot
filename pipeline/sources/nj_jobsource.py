"""New Jersey JobSource - the state's public job board for private employers.

The board has no API, but it lets a guest download the current search results
as a CSV. We run one empty-keyword search for the whole state and download
that export: the same list a visitor can get from the page, about 50,000
postings.

The page is a JSF application, so the export takes four requests: open the
search page, submit the search, select "Export all data" (the page does this
with an AJAX call), then ask for the CSV. The bot filter rejects anything that
is not a browser, hence the browser headers the other NJ sources use too.
"""

from __future__ import annotations

import csv
import html
import http.cookiejar
import io
import re
import urllib.parse
import urllib.request
from typing import Any

from .. import taxonomy
from ..dedupe import unique_postings
from ..fetcher import BROWSER_HEADERS

URL = "https://jobsource.nj.gov/jz/views/jobzone/search/jobSearchResult.jsf"
NAME = "NJ JobSource"

#: A full export normally has thousands of STEM rows. Far fewer means the
#: page changed shape or the download was cut short, and the build should
#: keep yesterday's numbers instead of publishing a tiny total.
MIN_STEM_ROWS = 100

_FORM = re.compile(r'<form[^>]*\bid="jobSearchResultForm"')
_ACTION = re.compile(r'\baction="([^"]+)"')
_VIEWSTATE = re.compile(r'name="javax\.faces\.ViewState"[^>]*value="([^"]+)"')
_AJAX_VIEWSTATE = re.compile(
    r'<update id="javax\.faces\.ViewState"><!\[CDATA\[(.*?)\]\]>', re.S
)
_BUTTON = re.compile(r"<button\b([^>]*)>(.*?)</button>", re.S | re.I)

#: The export runs long, so it gets more time than a normal page.
TIMEOUT = 180


def _request(
    url: str, data: bytes | None = None, ajax: bool = False
) -> urllib.request.Request:
    headers = dict(BROWSER_HEADERS)
    # urllib does not decompress gzip, so ask for the plain body.
    headers.pop("Accept-Encoding", None)
    if data is not None:
        headers["Content-Type"] = "application/x-www-form-urlencoded"
        headers["Referer"] = URL
    if ajax:
        headers["Faces-Request"] = "partial/ajax"
        headers["X-Requested-With"] = "XMLHttpRequest"
        headers["Accept"] = "application/xml, text/xml, */*; q=0.01"
    return urllib.request.Request(url, data=data, headers=headers)


def _get(opener: urllib.request.OpenerDirector, url: str) -> str:
    with opener.open(_request(url), timeout=TIMEOUT) as response:
        return response.read().decode("utf-8", errors="replace")


def _post(
    opener: urllib.request.OpenerDirector,
    url: str,
    fields: dict[str, str],
    ajax: bool = False,
) -> tuple[bytes, str]:
    data = urllib.parse.urlencode(fields).encode()
    with opener.open(_request(url, data, ajax), timeout=TIMEOUT) as response:
        return response.read(), response.headers.get("Content-Type", "")


def _form(page: str) -> str:
    match = _FORM.search(page)
    if not match:
        raise RuntimeError("NJ JobSource: the search form is missing")
    end = page.find("<form", match.end())
    return page[match.start() : end if end >= 0 else len(page)]


def _value(pattern: re.Pattern[str], text: str, what: str) -> str:
    match = pattern.search(text)
    if not match:
        raise RuntimeError(f"NJ JobSource: could not find the {what}")
    return html.unescape(match.group(1))


def _search_button(form: str) -> str:
    """The first Search button belongs to the job form; its id is generated."""
    for match in _BUTTON.finditer(form):
        label = re.sub(r"<[^>]+>", "", match.group(2)).strip().lower()
        ident = re.search(r'\bid="([^"]+)"', match.group(1))
        if (
            label == "search"
            and ident
            and ident.group(1).startswith("jobSearchResultForm:")
        ):
            return ident.group(1)
    raise RuntimeError("NJ JobSource: could not find the Search button")


def parse_csv(text: str) -> list[dict[str, Any]]:
    """Read the export and keep the rows whose title is a STEM job."""
    postings: list[dict[str, Any]] = []
    for row in csv.DictReader(io.StringIO(text)):
        title = (row.get("Title") or "").strip()
        category = taxonomy.category_for_title(title)
        if not category:
            continue
        postings.append(
            {
                "title": title,
                "employer": (row.get("Company") or "").strip(),
                "location": (row.get("Location") or "").strip(),
                "salaryMin": None,
                "salaryMax": None,
                "url": URL,
                "category": category,
                "posted": (row.get("Date") or "").strip(),
            }
        )
    return postings


def collect(state: str = "") -> dict[str, Any]:
    print("NJ JobSource")
    opener = urllib.request.build_opener(
        urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar())
    )

    page = _get(opener, URL)
    form = _form(page)
    action = urllib.parse.urljoin(URL, _value(_ACTION, form, "form action"))
    viewstate = _value(_VIEWSTATE, form, "ViewState")
    button = _search_button(form)

    # Statewide search with no keyword: every posting on the board.
    fields = {
        "jobSearchResultForm": "jobSearchResultForm",
        "jobSearchResultForm:keywordInput": "",
        "jobSearchResultForm:jsfLocRadio": "state",
        "javax.faces.ViewState": viewstate,
        button: button,
    }
    body, _ = _post(opener, action, fields)
    results = body.decode("utf-8", errors="replace")
    viewstate = _value(_VIEWSTATE, _form(results), "ViewState")

    # The export size is a radio button on the results page. The browser
    # announces the change to the server before the download will contain
    # more than the current page.
    ajax_fields = {
        "javax.faces.partial.ajax": "true",
        "javax.faces.source": "jobSearchResultForm:exportAmtStrGuest",
        "javax.faces.partial.execute": "jobSearchResultForm:exportAmtStrGuest",
        "javax.faces.partial.render": "jobSearchResultForm:exportGridGuest",
        "jobSearchResultForm:exportAmtStrGuest": "all",
        "javax.faces.behavior.event": "valueChange",
        "javax.faces.partial.event": "valueChange",
        "jobSearchResultForm": "jobSearchResultForm",
        "jobSearchResultForm:keywordInput": "",
        "jobSearchResultForm:jsfLocRadio": "state",
        "javax.faces.ViewState": viewstate,
    }
    body, _ = _post(opener, action, ajax_fields, ajax=True)
    partial = body.decode("utf-8", errors="replace")
    if _AJAX_VIEWSTATE.search(partial):
        viewstate = _value(_AJAX_VIEWSTATE, partial, "ViewState")

    csv_fields = {
        "jobSearchResultForm": "jobSearchResultForm",
        "jobSearchResultForm:keywordInput": "",
        "jobSearchResultForm:jsfLocRadio": "state",
        "jobSearchResultForm:exportAmtStrGuest": "all",
        "javax.faces.ViewState": viewstate,
        "jobSearchResultForm:jdeCSVLinkGuest": "jobSearchResultForm:jdeCSVLinkGuest",
    }
    body, content_type = _post(opener, action, csv_fields)
    if "csv" not in content_type:
        raise RuntimeError(
            f"NJ JobSource: the export was not a CSV ({content_type or 'no content type'})"
        )

    postings = unique_postings(parse_csv(body.decode("utf-8", errors="replace")))
    if len(postings) < MIN_STEM_ROWS:
        raise RuntimeError(
            f"NJ JobSource: only {len(postings)} STEM postings, "
            f"expected at least {MIN_STEM_ROWS}"
        )
    print(f"  {len(postings)} unique STEM postings")
    return {"postings": postings, "total": len(postings)}
