"""Remove postings a single board lists more than once.

Boards repeat themselves: one hospital listed the same nursing job 13 times in
one day's export. Counting rows would inflate the number of open jobs, so two
postings from the same board are treated as one when their title, employer and
city/state match. ZIP codes are ignored - the same job is often listed under
several nearby ZIPs.

Postings from different boards are never compared, because they share no job
id and the build only keeps a sample of each board's postings.
"""

from __future__ import annotations

import re
from typing import Any

_NON_ALNUM = re.compile(r"[^a-z0-9]+")
_ZIP = re.compile(r"\s+\d{5}(?:\s+\d{4})?$")


def _normalize(value: str) -> str:
    return _NON_ALNUM.sub(" ", (value or "").lower()).strip()


def _city(location: str) -> str:
    """City and state only - the ZIP is not part of the job's identity."""
    return _ZIP.sub("", _normalize(location)).strip()


def posting_key(posting: dict[str, Any]) -> tuple[str, str, str]:
    return (
        _normalize(posting.get("title", "")),
        _normalize(posting.get("employer", "")),
        _city(posting.get("location", "")),
    )


def unique_postings(postings: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Keep the first posting for each title/employer/city."""
    seen: set[tuple[str, str, str]] = set()
    unique: list[dict[str, Any]] = []
    for posting in postings:
        key = posting_key(posting)
        if key in seen:
            continue
        seen.add(key)
        unique.append(posting)
    return unique
