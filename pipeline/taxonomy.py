"""What counts as STEM here, and how we group it.

Groups are the BLS / U.S. Department of Labor SOC 2018 major groups, derived
from the first two digits of the SOC code, so this file only lists codes.

The Bureau of Labor Statistics defines STEM occupations as the computer and
mathematical, architecture and engineering, and life and physical science
groups, plus related managers, teachers and salespeople. We start from that
definition and add the technical, health and skilled-trade occupations that
students routinely think of as STEM careers (nurses, lab technicians,
machinists, electricians).

Every code below was checked against the occupation titles in the BLS
May 2025 data, so the mapping is easy to audit and easy for a teacher to
change.
"""

from __future__ import annotations

import re

# ---------------------------------------------------------------------------
# Categories
#
# The list itself lives in src/data/categories.json so the site and the
# pipeline always agree on names, colours and ids. This module only decides
# which category an occupation belongs to.
# ---------------------------------------------------------------------------
import json
import os

_CATEGORIES_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src",
    "data",
    "categories.json",
)


def _load_categories() -> dict[str, dict[str, str]]:
    try:
        with open(_CATEGORIES_PATH, encoding="utf-8") as handle:
            raw = json.load(handle)
    except (OSError, json.JSONDecodeError):
        return {}
    return {entry["id"]: entry for entry in raw}


CATEGORIES: dict[str, dict[str, str]] = _load_categories()

#: Every category id the pipeline is allowed to use.
CATEGORY_IDS: set[str] = set(CATEGORIES)

# ---------------------------------------------------------------------------
# Detailed SOC code -> STEM list
# ---------------------------------------------------------------------------
STEM_CODES: set[str] = set()


def _add(*codes: str) -> None:
    STEM_CODES.update(codes)


# Computer and information systems (15-12xx)
_add(
    "15-1211",  # Computer Systems Analysts
    "15-1212",  # Information Security Analysts
    "15-1221",  # Computer and Information Research Scientists
    "15-1231",  # Computer Network Support Specialists
    "15-1232",  # Computer User Support Specialists
    "15-1241",  # Computer Network Architects
    "15-1242",  # Database Administrators
    "15-1243",  # Database Architects
    "15-1244",  # Network and Computer Systems Administrators
    "15-1251",  # Computer Programmers
    "15-1252",  # Software Developers
    "15-1253",  # Software Quality Assurance Analysts and Testers
    "15-1254",  # Web Developers
    "15-1255",  # Web and Digital Interface Designers
    "15-1299",  # Computer Occupations, All Other
    "11-3021",  # Computer and Information Systems Managers
)

# Math and data (15-20xx)
_add(
    "15-2011",  # Actuaries
    "15-2021",  # Mathematicians
    "15-2031",  # Operations Research Analysts
    "15-2041",  # Statisticians
    "15-2051",  # Data Scientists
    "15-2099",  # Mathematical Science Occupations, All Other
    "43-9111",  # Statistical Assistants
)

# Engineering (17-2xxx) plus the technicians and drafters (17-3xxx)
_add(
    "17-2011",  # Aerospace Engineers
    "17-2031",  # Bioengineers and Biomedical Engineers
    "17-2041",  # Chemical Engineers
    "17-2051",  # Civil Engineers
    "17-2061",  # Computer Hardware Engineers
    "17-2071",  # Electrical Engineers
    "17-2072",  # Electronics Engineers
    "17-2081",  # Environmental Engineers
    "17-2111",  # Health and Safety Engineers
    "17-2112",  # Industrial Engineers
    "17-2131",  # Materials Engineers
    "17-2141",  # Mechanical Engineers
    "17-2199",  # Engineers, All Other
    "17-3011",  # Architectural and Civil Drafters
    "17-3012",  # Electrical and Electronics Drafters
    "17-3013",  # Mechanical Drafters
    "17-3019",  # Drafters, All Other
    "17-3022",  # Civil Engineering Technologists and Technicians
    "17-3023",  # Electrical and Electronic Engineering Technologists
    "17-3024",  # Electro-Mechanical and Mechatronics Technologists
    "17-3025",  # Environmental Engineering Technologists
    "17-3026",  # Industrial Engineering Technologists
    "17-3027",  # Mechanical Engineering Technologists
    "17-3028",  # Calibration Technologists
    "17-3029",  # Engineering Technologists, All Other
    "11-9041",  # Architectural and Engineering Managers
)

# Architecture and land surveying (17-10xx)
_add(
    "17-1011",  # Architects
    "17-1012",  # Landscape Architects
    "17-1021",  # Cartographers and Photogrammetrists
    "17-1022",  # Surveyors
    "17-3031",  # Surveying and Mapping Technicians
)

# Life, physical and environmental science (19-xxxx)
_add(
    "19-1012",  # Food Scientists and Technologists
    "19-1013",  # Soil and Plant Scientists
    "19-1021",  # Biochemists and Biophysicists
    "19-1022",  # Microbiologists
    "19-1023",  # Zoologists and Wildlife Biologists
    "19-1029",  # Biological Scientists, All Other
    "19-1031",  # Conservation Scientists
    "19-1041",  # Epidemiologists
    "19-1042",  # Medical Scientists
    "19-1099",  # Life Scientists, All Other
    "19-2012",  # Physicists
    "19-2021",  # Atmospheric and Space Scientists
    "19-2031",  # Chemists
    "19-2032",  # Materials Scientists
    "19-2041",  # Environmental Scientists and Specialists
    "19-2042",  # Geoscientists
    "19-2043",  # Hydrologists
    "19-2099",  # Physical Scientists, All Other
    "19-4012",  # Agricultural Technicians
    "19-4013",  # Food Science Technicians
    "19-4021",  # Biological Technicians
    "19-4031",  # Chemical Technicians
    "19-4042",  # Environmental Science and Protection Technicians
    "19-4044",  # Hydrologic Technicians
    "19-4092",  # Forensic Science Technicians
    "19-4099",  # Life, Physical, and Social Science Technicians
    "19-5011",  # Occupational Health and Safety Specialists
    "19-5012",  # Occupational Health and Safety Technicians
    "11-9121",  # Natural Sciences Managers
)

# Health and medicine (29-xxxx)
_add(
    "29-1011",  # Chiropractors
    "29-1021",  # Dentists
    "29-1029",  # Dentists, All Other Specialties
    "29-1031",  # Dietitians and Nutritionists
    "29-1041",  # Optometrists
    "29-1051",  # Pharmacists
    "29-1071",  # Physician Assistants
    "29-1081",  # Podiatrists
    "29-1122",  # Occupational Therapists
    "29-1123",  # Physical Therapists
    "29-1124",  # Radiation Therapists
    "29-1125",  # Recreational Therapists
    "29-1126",  # Respiratory Therapists
    "29-1127",  # Speech-Language Pathologists
    "29-1128",  # Exercise Physiologists
    "29-1129",  # Therapists, All Other
    "29-1131",  # Veterinarians
    "29-1141",  # Registered Nurses
    "29-1151",  # Nurse Anesthetists
    "29-1161",  # Nurse Midwives
    "29-1171",  # Nurse Practitioners
    "29-1181",  # Audiologists
    "29-1212",  # Cardiologists
    "29-1213",  # Dermatologists
    "29-1214",  # Emergency Medicine Physicians
    "29-1215",  # Family Medicine Physicians
    "29-1216",  # General Internal Medicine Physicians
    "29-1217",  # Neurologists
    "29-1218",  # Obstetricians and Gynecologists
    "29-1221",  # Pediatricians
    "29-1222",  # Physicians, Pathologists
    "29-1223",  # Psychiatrists
    "29-1224",  # Radiologists
    "29-1229",  # Physicians, All Other
    "29-1242",  # Orthopedic Surgeons
    "29-1243",  # Pediatric Surgeons
    "29-1249",  # Surgeons, All Other
    "29-1291",  # Acupuncturists
    "29-1292",  # Dental Hygienists
    "29-1299",  # Healthcare Diagnosing or Treating Practitioners
    "29-2010",  # Clinical Laboratory Technologists
    "29-2031",  # Cardiovascular Technologists
    "29-2032",  # Diagnostic Medical Sonographers
    "29-2033",  # Nuclear Medicine Technologists
    "29-2034",  # Radiologic Technologists
    "29-2035",  # Magnetic Resonance Imaging Technologists
    "29-2036",  # Medical Dosimetrists
    "29-2042",  # Emergency Medical Technicians
    "29-2043",  # Paramedics
    "29-2051",  # Dietetic Technicians
    "29-2052",  # Pharmacy Technicians
    "29-2053",  # Psychiatric Technicians
    "29-2055",  # Surgical Technologists
    "29-2056",  # Veterinary Technologists
    "29-2057",  # Ophthalmic Medical Technicians
    "29-2061",  # Licensed Practical and Vocational Nurses
    "29-2072",  # Medical Records Specialists
    "29-2081",  # Opticians, Dispensing
    "29-2091",  # Orthotists and Prosthetists
    "29-2092",  # Hearing Aid Specialists
    "29-2099",  # Health Technologists and Technicians, All Other
    "29-9021",  # Health Information Technologists
    "29-9091",  # Athletic Trainers
    "29-9092",  # Genetic Counselors
    "29-9093",  # Surgical Assistants
    "29-9099",  # Healthcare Practitioners and Technical Occupations, All Other
)

# Skilled trades and technical work (49-xxxx and 51-xxxx)
_add(
    "49-2021",  # Radio, Cellular, and Tower Equipment Installers
    "49-2022",  # Telecommunications Equipment Installers and Repairers
    "49-2091",  # Avionics Technicians
    "49-2094",  # Electrical and Electronics Repairers, Commercial and Industrial Equipment
    "49-2095",  # Electrical and Electronics Repairers, Powerhouse and Substation
    "49-2096",  # Electronic Equipment Installers and Repairers, Radio and Television
    "49-2098",  # Security and Fire Alarm Systems Installers
    "49-3011",  # Aircraft Mechanics and Service Technicians
    "49-9041",  # Industrial Machinery Mechanics
    "49-9043",  # Maintenance Workers, Machinery
    "49-9051",  # Electrical Power-Line Installers and Repairers
    "49-9052",  # Telecommunications Line Installers and Repairers
    "49-9062",  # Medical Equipment Repairers
    "49-9069",  # Precision Instrument and Equipment Repairers
    "51-2028",  # Electrical, Electronic, and Electromechanical Assemblers
    "51-2031",  # Engine and Other Machine Assemblers
    "51-4041",  # Machinists
    "51-4111",  # Tool and Die Makers
    "51-4121",  # Welders, Cutters, Solderers, and Brazers
    "51-8011",  # Power Distributors and Dispatchers
    "51-8021",  # Stationary Engineers and Boiler Operators
    "51-8031",  # Water and Wastewater Treatment Operators
    "51-8091",  # Chemical Plant and System Operators
    "51-8092",  # Gas Plant Operators
    "51-8099",  # Plant and System Operators, All Other
)


def category_for_code(code: str) -> str | None:
    """Return the SOC major-group id ("15-0000") for a STEM SOC code, or None."""
    code = code.strip()
    if code not in STEM_CODES:
        return None
    return f"{code[:2]}-0000"


def _check_categories() -> None:
    """Fail loudly if a code lands in a group the site does not know."""
    unknown = {category_for_code(c) for c in STEM_CODES} - CATEGORY_IDS
    if unknown:
        raise RuntimeError(
            "Unknown SOC major groups used by the occupation codes: "
            f"{sorted(unknown)}. Add them to src/data/categories.json."
        )


# ---------------------------------------------------------------------------
# Job title keywords, used to sort live postings into SOC major groups.
#
# Precision matters more than recall here: a wrong "STEM" poster inflates the
# headline number, and a student counting job ads deserves a number we can
# defend. So the lists are deliberately narrow - no bare "technician",
# "maintenance", "operator" or "analyst" - and each entry has to look like
# the occupation titles in the BLS data above.
#
# Checked in order, so the most specific words come first. A group id may
# appear in several rows. Management (11-0000) and office support (43-0000)
# have no title keywords: managers and statistical assistants cannot be
# told apart by title without inflating the counts.
# ---------------------------------------------------------------------------
TITLE_KEYWORDS: list[tuple[str, tuple[str, ...]]] = [
    ("15-0000", (
        "software", "programmer", "web developer", "web design", "web designer",
        "systems analyst", "system analyst", "computer", "cyber", "information security",
        "network engineer", "network administrator", "network systems",
        "database", "data engineer", "information technology", "it support",
        "help desk", "desktop support", "devops", "machine learning",
        "quality assurance", "data engineer", "computer systems",
        "mainframe", "sap", "erp",
    )),
    ("15-0000", (
        "data scientist", "statistician", "actuary", "mathematic", "operations research",
        "business intelligence", "data analyst", "research analyst", "quantitative analyst",
    )),
    # Cartography and mapping are SOC 17-1021 / 17-3031.
    ("17-0000", ("gis", "geospatial")),
    ("17-0000", (
        "engineer", "aerospace engineer", "biomedical engineer", "chemical engineer",
        "civil engineer", "computer engineer", "electrical engineer", "electronic engineer",
        "environmental engineer", "industrial engineer", "materials engineer",
        "mechanical engineer", "nuclear engineer", "structural engineer", "process engineer",
        "quality engineer", "safety engineer", "systems engineer", "test engineer",
        "robotics", "aerospace", "engineering technician", "engineering technologist",
        "draftsman", "drafter", "architectural", "biomedical",
    )),
    ("17-0000", (
        "architect", "surveyor", "cartograph", "landscape architect",
    )),
    # Urban and regional planners are SOC 19-3051.
    ("19-0000", ("urban planner",)),
    ("19-0000", (
        "scientist", "research scientist", "chemist", "physicist", "biologist", "biotech",
        "microbiolog", "biochem", "geneticist", "genomic", "lab scientist",
        "laboratory scientist", "environmental scientist", "geologist", "hydrolog",
        "toxicolog", "pharmacolog", "food scientist", "medical scientist",
        "forensic scientist", "wildlife biolog", "wildlife technician", "ecologist",
        "epidemiolog", "wildlife", "natural resource", "biologist", "aquatic",
        "laboratory technolog", "research scientist", "meteorolog", "horticultur",
    )),
    ("29-0000", (
        "registered nurse", "nurse", "pharmac", "physician", "dentist",
        "physical therapist", "occupational therapist", "speech-language pathologist",
        "respiratory therapist", "radiologic technolog", "sonograph",
        "clinical laboratory technolog", "medical laboratory technolog",
        "paramedic", "emergency medical technician", "emt", "dietetic",
        "optometr", "audiolog", "dental hygien", "dental assistant",
        "surgical technolog", "medical assistant", "veterinary technolog",
        "health information technolog", "chiropract", "podiatr", "optician",
        "radiography", "sonography", "veterinar",
    )),
    ("49-0000", (
        "hvac", "heating and air conditioning", "avionics", "industrial machinery",
        "instrument calibration", "medical equipment repair", "electronic equipment",
        "telecommunications line", "electrical power",
    )),
    # Calibration technologists are SOC 17-3028.
    ("17-0000", ("calibration technolog",)),
    ("51-0000", (
        "machinist", "welder", "welding", "power plant operator",
        "water and wastewater treatment", "tool and die", "power distribution",
        "stationary engineer",
    )),
]


def _compile(keywords: tuple[str, ...]) -> "re.Pattern[str]":
    """Match keywords on word boundaries.

    Plain substring matching is a trap: 'Psychologist' and 'Biologist' both
    contain the letters 'gis', which would file them under geography.
    """
    parts = []
    for keyword in keywords:
        escaped = re.escape(keyword)
        if " " in keyword:
            parts.append(escaped)
        else:
            parts.append(rf"\b{escaped}\b")
    return re.compile("|".join(parts), re.IGNORECASE)


_TITLE_PATTERNS: list[tuple[str, "re.Pattern[str]"]] = [
    (category, _compile(keywords)) for category, keywords in TITLE_KEYWORDS
]


def category_for_title(title: str) -> str | None:
    """Guess a category from a job title, for live postings."""
    for category, pattern in _TITLE_PATTERNS:
        if pattern.search(title):
            return category
    return None


_check_categories()
