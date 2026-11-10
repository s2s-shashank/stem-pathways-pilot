# STEM Jobs

A fast, free website that shows students what STEM careers actually look like
in **New Jersey**, **New York** and **Pennsylvania** — how many jobs are open
right now, what they pay, where the jobs are, and what to study to get one.

Built with [Astro](https://astro.build) and deployed to GitHub Pages. There is
no server, no database and no tracking: every page is a static HTML file.

## How it works

```
pipeline/          Python data pipeline (standard library only)
  build_data.py    Runs every source, writes src/data/generated/*.json
  taxonomy.py      Which occupations count as STEM (grouped by SOC major group)
  xlsx.py          Minimal .xlsx reader (BLS publishes spreadsheets)
  htmltable.py     Minimal HTML table reader (state job boards publish tables)
  fetcher.py       HTTP with retries and a contact user-agent
  dates.py         Reads the dates on postings, so old ones can be dropped
  sources/         One module per data source
src/               The Astro site
  data/generated/  JSON written by the pipeline - NOT in the repository.
                   The workflow downloads it before every build, so you
                   run the pipeline yourself when you work locally.
  data/profiler.ts The Career Exploration activities and interest types
  pages/           /, /nj, /ny, /pa, /compare, /careers, /explore, /quiz, /sources
  components/      Charts and page sections (all inline SVG or CSS)
tools/             Tests for Career Exploration and the data pipeline
```

The pipeline runs on every push and once a day, commits nothing, and the
site is rebuilt and published from the numbers it just downloaded. If a
source breaks, the site keeps the last good numbers instead of going blank.

## Cleaning out old jobs

Each build starts from scratch, so yesterday's postings never pile up. What
does need cleaning is what the boards themselves keep: the New York vacancy
list still showed rows posted three years ago, and the federal API returns
announcements that can stay open for months. So each posting is checked
before it is counted:

- a posting that states a close date is dropped once that date has passed
  (the federal API publishes `ApplicationCloseDate`);
- a posting with a date but no close date is dropped after a year
  (`MAX_AGE_DAYS` in `pipeline/dates.py`);
- a posting with no date at all is kept - the board lists it as open.

The dates are also what the "some real examples" list is sorted by, so the
newest postings are the ones students see.

## Running it locally

The data files are not in the repository, so fetch them once before you start:

```bash
npm install
cp .env.example .env    # add your API keys
python3 -m pipeline.build_data   # refresh the data (writes src/data/generated/)
npm run dev             # http://localhost:4321
npm run build           # static site in dist/
```

The data files are ignored by git, so running the pipeline never dirties
your working copy. If you build without them, the build stops and says so
rather than publishing a site with empty pages.

## Data sources

| Source | What we use | Key needed |
| --- | --- | --- |
| BLS OEWS | Employment and wages by occupation, per state and metro | No |
| BLS Employment Projections | Job growth, openings, typical education | No |
| O*NET | Job descriptions and study pathways | No |
| USAJOBS | Open federal STEM jobs | Yes (free) |
| CareerOneStop | Open private-sector STEM jobs, counted per occupation | Yes (free) |
| NJ Civil Service | Open NJ state and local announcements | No |
| StateJobsNY | Open NY State vacancies | No |
| Commonwealth Careers | Open PA state jobs | No |

## Private-sector job counts

CareerOneStop accepts an O*NET occupation code in its search, so the pipeline
asks it about every occupation it tracks - "how many Software Developer
postings are open in New Jersey?". The answers become the "open now" column on
each career page and the "who is hiring" charts on the state pages.

Because the search is done once per occupation, one job can be counted more
than once - a software job can match both "Software Developer" and "Web
Developer". The site therefore calls these numbers "job matches", not
postings, and says so where they are shown.

We use the **v1** endpoint on purpose. The v2 endpoint (which returns full
postings) needs a separate data request to the National Labor Exchange, so
depending on it would make the site fragile.

## What counts as STEM here

We start from the Bureau of Labor Statistics definition (computer and
mathematical, architecture and engineering, and life and physical science
occupations, plus related managers) and add the technical, health and
skilled-trade occupations that students usually think of as STEM careers.
Every occupation code is listed in `pipeline/taxonomy.py`, so the rule set is
easy to read and easy to change.

Careers are grouped by the U.S. Department of Labor's SOC 2018 major groups
(for example `15-0000` Computer and Mathematical). The group comes from the
first two digits of the SOC code, so `taxonomy.py` lists codes only. The
group names, colours and icons live in `src/data/categories.json`.

## Career Exploration

The yellow **Career Exploration** button (home page, header, Labs2Life) opens
`/explore`, an interest quiz in the style of the U.S. Department of Labor's
[O*NET Interest Profiler](https://www.onetcenter.org/IP.html). The student rates
everyday activities - "fix a broken machine", "study cells under a
microscope", "lead a team" - from *Love it* to *No way*. The answers become
a score for each of six interest types (Realistic, Investigative, Artistic,
Social, Enterprising, Conventional), and the page ranks every STEM career in
the data against that profile, with real pay, job growth and people employed.

What it adds on top of the O*NET version:

- a quick (30 activities) or full (60) quiz, one activity at a time, with
  keyboard answers (1-5) and a back button;
- results filtered by how much school a student wants (high school plus
  training, 2-year, 4-year, master's or higher) and by field, and sorted by
  match, pay or growth;
- pay and job counts for New Jersey, New York, Pennsylvania or all three;
- a results link: the scores live in the page address (`#p=72-90-35-60-41-55`),
  so a student can bookmark, share or print them;
- English and Spanish (`/es/explore`).

How it works, with no server and no tracking:

- `src/data/profiler.ts` holds the six interest types and the 60 activities
  (English and Spanish). The first 30 in the deck hold five of each type, so
  they are the quick quiz.
- `src/lib/profiler-codes.ts` gives every occupation a three-letter interest
  code such as `IRC`, matched by SOC code prefix. **These codes are our own
  estimate from the kind of work, not O*NET's published table**, and the page
  says so. It also groups specialties (all the physician types are one
  family), maps education to four school steps and skips "All Other" lines.
- `src/lib/profiler-jobs.ts` merges the three state files into one job list.
- `src/lib/profiler-score.ts` is the pure matching logic: type scores, the
  centred weighted match (letters count 3, 2 and 1), filters, sorting and the
  results link.
- `src/pages/explore.astro` (and `src/pages/es/explore.astro`) draws the quiz
  and results in the browser from one JSON block in the page.

Answers are never stored or sent anywhere. The only things the site writes to a
device are the password-gate flag and the flag that says the "how to browse"
guide has been shown once.

```bash
npm test               # interest codes, scoring, filters, results link
npm run test:data      # posting dates and the "keep the last numbers" rule
```

## Live site

<https://s2s-shashank.github.io/stem-pathways-pilot/>

## Deploying

`.github/workflows/pages.yml` runs on every push and once a day. It runs the
data pipeline, hands the numbers it downloaded to the build as an artifact,
builds the site and publishes it to GitHub Pages.

The data files are never committed: they are in `.gitignore`, the workflow
downloads them into the build, and there is nothing to merge. The last run's
data is kept in the workflow cache so that a broken source keeps the previous
numbers instead of blanking the site.

Repository secrets:

- `USAJOBS_API_KEY` - from <https://developer.usajobs.gov/api-token/>
- `BLS_CONTACT_EMAIL` - your email, so BLS can reach you
- `CAREERONESTOP_USER_ID` and `CAREERONESTOP_TOKEN` - from
  <https://api.careeronestop.org/>
- `SITE_PASSWORD` - the password for the gate page (see below). It can be a
  repository secret or a secret of the `github-pages` environment; the build
  job names that environment so it can read the latter.

Set **Settings → Pages → Source** to **GitHub Actions**.

## Password gate

Every page sends visitors without the unlock flag to `/enter/`, a page with
the logo animation and a password box. A right password stores a flag in
`localStorage` (`stempathways:unlocked`) and the logo glides into the home
page with an Astro view transition (`transition:name="hero-logo"`).

The password is read from `SITE_PASSWORD` at build time (`.env` locally, a
repository secret on GitHub). Only a PBKDF2 hash is published. The build
fails if it is missing.

This is a static site, so the gate runs in the browser. It keeps casual
visitors out, but it is **not access control**: the page files are still
public to anyone who requests them directly or sets the flag by hand. Do not
put anything behind it that must stay private.

## Licence and data use

All data comes from US government sources and is in the public domain. The
site code is yours to reuse.
