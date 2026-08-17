#!/usr/bin/env python3
"""
Build Ahesan Chowdhury's CV as a two-page PDF with clickable links
(page 1: summary, skills, experience — page 2: projects, education, languages).

Usage:
    python3 scripts/build_cv.py

Writes public/resume/Ahesan_Chowdhury_Resume.pdf (the file the portfolio's
"Download Resume" buttons serve). Edit the CONTENT section below to update the
CV, re-run, commit, push — Vercel redeploys with the new PDF automatically.

Requires: Python 3.9+ and `pip install reportlab`
"""

from pathlib import Path
from typing import Optional

from reportlab.lib.colors import HexColor, black
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

# ─────────────────────────────── CONTENT ────────────────────────────────────

NAME = "Ahesan Chowdhury"
TITLE = "Software Engineer | Java Backend Developer"
LOCATION = "Bengaluru, Karnataka, India"
PHONE = "+91 97495 95125"
EMAIL = "ahesanchowdhury@gmail.com"
PORTFOLIO = "ahesan.vercel.app"
LINKEDIN = "linkedin.com/in/ahesan-chowdhury-44a8202aa"
GITHUB = "github.com/itsAhesan"

SUMMARY = (
    "Software Engineer with close to two years of experience building Java backend "
    "systems, currently working full-time on a client e-commerce platform. Builds REST "
    "APIs with Spring Boot and Spring MVC, models relational schemas, and works across "
    "the persistence layer with Spring Data JPA and Hibernate on MySQL. Comfortable "
    "across the full SDLC in an Agile team, from requirement gathering and "
    "proof-of-concept work through code review, CI/CD and production support."
)

SKILLS = [
    ("Languages", "Java (8, 17), SQL, JavaScript, HTML5, CSS3"),
    ("Frameworks", "Spring Boot, Spring MVC, Spring Data JPA, Spring ORM, Spring WebSocket, "
                   "Hibernate, J2EE, JSP/JSTL, Hibernate Validator"),
    ("Architecture", "REST APIs, RESTful web services, Microservices, MVC, layered architecture "
                     "(Controller/Service/Repository/DTO), OOP, design patterns (Factory, Singleton)"),
    ("Databases", "MySQL, JDBC, schema design and normalization, indexing, joins, query optimization"),
    ("Cloud &amp; DevOps", "AWS S3, CI/CD pipelines, Git, GitHub, Maven, Apache Tomcat"),
    ("Testing &amp; Tools", "Postman, Swagger/OpenAPI, Jira, Slack, Lombok, Jackson, Apache POI, PDFBox"),
    ("Frontend", "React, JavaScript, Bootstrap, HTML, CSS"),
    ("Practices", "Agile/Scrum, SDLC, code review, technical documentation, production support"),
]

EXPERIENCE = [
    {
        "role": "Software Engineer",
        "org": "Trigent Software – Professional Services",
        "loc": "Bengaluru, India",
        "period": "March 2026 – Present",
        "bullets": [
            "Contribute across the full SDLC of a client e-commerce application – requirement "
            "gathering, design, analysis, development and production support – as part of a "
            "6-member Agile Scrum team.",
            "Designed the relational database schema for the e-commerce platform, defining entity "
            "relationships and constraints across catalogue, order and customer data.",
            "Build and maintain the backend persistence layer using Spring Data JPA, implementing "
            "repository interfaces and custom queries over the application's core entities.",
            "Deliver proof-of-concept implementations for new requirements and carry the accepted "
            "approaches through to the production codebase.",
            "Work across the stack on backend services and frontend integration, enforcing coding "
            "conventions and maintaining technical documentation for handover and support.",
            "Contribute to the CI/CD pipeline for continuous integration and automated deployment.",
        ],
    },
    {
        "role": "Software Engineer Intern",
        "org": "X-workZ ODC",
        "loc": "Bengaluru, India",
        "period": "April 2025 – February 2026",
        "bullets": [
            "Built and tested RESTful endpoints with Spring Boot, applying Hibernate Validator "
            "request validation and centralized custom exception handling for consistent API "
            "error responses.",
            "Designed normalized relational schemas and optimized SQL queries using joins, indexing "
            "and grouping to reduce query execution time on reporting workloads.",
            "Developed the Happy Cow dairy management system end to end in Spring MVC and "
            "Hibernate – role-based admin and agent dashboards, OTP-based password reset, account "
            "locking, and real-time payment notifications over Spring WebSocket.",
            "Applied Java 8 Streams, Lambdas and Optional to write null-safe data-processing logic, "
            "reducing boilerplate and null-pointer defects in business-rule code.",
            "Built reusable utility classes and DTO mappers using OOP principles and the Factory "
            "and Singleton patterns, standardizing entity-to-response conversion across services.",
        ],
    },
    {
        "role": "Full-stack Developer Intern",
        "org": "AJARK IT Solutions Pvt Ltd",
        "loc": "Hyderabad, India (Remote)",
        "period": "October 2024 – April 2025",
        "bullets": [
            "Developed and maintained RESTful APIs in Spring Boot, handling request validation, "
            "service-layer business logic and MySQL persistence through JPA/Hibernate.",
            "Integrated AWS S3 for secure file upload, storage and retrieval within backend "
            "services, including progress-tracked uploads and downloads.",
            "Built UI components with HTML, CSS, JavaScript and React, wiring them to backend REST "
            "endpoints for end-to-end feature delivery.",
            "Worked in an Agile team using Jira and Slack, participating in code reviews and "
            "deployments; tested APIs with Postman and managed builds with Maven.",
        ],
    },
]

PROJECTS = [
    {
        "name": "Happy Cow – Dairy Management System",
        "stack": "Java, Spring MVC, Hibernate, MySQL, Spring WebSocket, JSP/JSTL, Maven, Tomcat, Swagger",
        "url": "github.com/itsAhesan/happy-cow",
        "bullets": [
            "Enterprise-style dairy operations platform with separate admin and agent dashboards, "
            "role-based access control, milk collection tracking, and bi-monthly payment window "
            "processing.",
            "Implemented idempotent, transactional payment settlement that recomputes totals "
            "server-side and rejects already-settled windows; secured accounts with BCrypt "
            "hashing, locking after failed attempts, an OTP-based password reset over email, "
            "and a full audit trail across all entities.",
            "Added real-time payment notifications via Spring WebSocket, Excel import/export with "
            "Apache POI, PDF invoice generation with PDFBox, and QR code generation with ZXing.",
            "Structured the codebase in a clean layered architecture – Controller, Service, "
            "Repository, Entity and DTO – with REST APIs documented in Swagger.",
        ],
    },
    {
        "name": "Video Manager – Cloud Video Upload Service",
        "stack": "Java 17, Spring Boot 3.3.5, AWS S3, React, Vite, Axios, Bootstrap",
        "url": "github.com/itsAhesan/video-upload-application",
        "bullets": [
            "Full-stack application for uploading, streaming, downloading and deleting videos, "
            "backed by AWS S3 object storage.",
            "Built the Spring Boot REST backend for S3 integration and a React frontend with "
            "real-time progress bars for long-running upload and download operations.",
        ],
    },
]

EDUCATION = [
    ("Bachelor of Science (B.Sc)", "University of North Bengal (NBU)", "2020 – 2024", "CGPA: 7.3"),
    ("Higher Secondary (Class XII)", "New Jalpaiguri Railway Colony High School", "2018 – 2020", "71%"),
]

LANGUAGES = "English (Fluent), Hindi (Fluent), Bengali (Fluent)"

# ─────────────────────────────── STYLING ────────────────────────────────────

ACCENT = HexColor("#1F6FB2")     # headings / name (matches the original CV)
BAND = HexColor("#E8F1F9")       # section heading background band
LINK = HexColor("#1F6FB2")
MUTED = HexColor("#5C6B7A")

# Two-page layout: page 1 = summary / skills / experience, page 2 = projects /
# education / languages. Comfortable, readable sizes rather than a cramped page.
BODY_SIZE = 8.9
LEADING = 11.7

s_name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=21, leading=24,
                        textColor=ACCENT, alignment=TA_CENTER, spaceAfter=1)
s_title = ParagraphStyle("title", fontName="Helvetica", fontSize=10.5, leading=13,
                         textColor=ACCENT, alignment=TA_CENTER, spaceAfter=3)
s_contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=8.6, leading=11.5,
                           textColor=black, alignment=TA_CENTER)
s_section = ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9.6, leading=12,
                           textColor=ACCENT)
s_body = ParagraphStyle("body", fontName="Helvetica", fontSize=BODY_SIZE, leading=LEADING,
                        textColor=black)
s_bullet = ParagraphStyle("bullet", parent=s_body, leftIndent=9, bulletIndent=0,
                          spaceAfter=1.0)
s_role = ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10, leading=12.8,
                        textColor=black, spaceBefore=4)
s_meta = ParagraphStyle("meta", fontName="Helvetica", fontSize=8.5, leading=11,
                        textColor=MUTED, spaceAfter=1.5)
s_stack = ParagraphStyle("stack", fontName="Helvetica", fontSize=8.4, leading=10.8,
                         textColor=ACCENT)
s_url = ParagraphStyle("url", fontName="Helvetica", fontSize=8.4, leading=10.8,
                       textColor=MUTED, spaceAfter=1.5)


def link(url_display: str, href: Optional[str] = None, color: HexColor = LINK) -> str:
    """Inline clickable link markup for Paragraph."""
    href = href or f"https://{url_display}"
    return f'<a href="{href}" color="{color.hexval()}">{url_display}</a>'


def section(title: str):
    """Section heading rendered as a full-width tinted band (like the original CV)."""
    tbl = Table([[Paragraph(title, s_section)]], colWidths=["100%"])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), BAND),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 2.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
    ]))
    return [Spacer(1, 5), tbl, Spacer(1, 3.5)]


def bullets(items):
    return [Paragraph(item, s_bullet, bulletText="–") for item in items]


def build(out_path: Path) -> None:
    doc = SimpleDocTemplate(
        str(out_path), pagesize=A4,
        leftMargin=16 * mm, rightMargin=16 * mm, topMargin=11 * mm, bottomMargin=11 * mm,
        title=f"{NAME} – {TITLE}", author=NAME,
        subject="Resume – Java Backend Developer",
        keywords="Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, AWS S3, REST APIs",
    )
    story = []

    # ── Header ──
    story.append(Paragraph(NAME, s_name))
    story.append(Paragraph(TITLE, s_title))
    story.append(Paragraph(
        f"{LOCATION} &nbsp;·&nbsp; {PHONE} &nbsp;·&nbsp; "
        f"{link(EMAIL, 'mailto:' + EMAIL)}", s_contact))
    story.append(Paragraph(
        f"<b>Portfolio:</b> {link(PORTFOLIO)} &nbsp;·&nbsp; "
        f"{link(LINKEDIN)} &nbsp;·&nbsp; {link(GITHUB)}", s_contact))
    rule = Table([[""]], colWidths=["100%"], rowHeights=[1.6])
    rule.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), ACCENT)]))
    story += [Spacer(1, 4), rule]

    # ── Summary ──
    story += section("PROFESSIONAL SUMMARY")
    story.append(Paragraph(SUMMARY, s_body))

    # ── Skills ──
    story += section("TECHNICAL SKILLS")
    for label, value in SKILLS:
        story.append(Paragraph(
            f'<font color="{ACCENT.hexval()}"><b>{label}</b></font>&nbsp;&nbsp;{value}',
            ParagraphStyle("skill", parent=s_body, spaceAfter=0.8)))

    # ── Experience ──
    story += section("PROFESSIONAL EXPERIENCE")
    for job in EXPERIENCE:
        story.append(KeepTogether([
            Paragraph(job["role"], s_role),
            Paragraph(
                f'<font color="{ACCENT.hexval()}"><b>{job["org"]}</b></font> · {job["loc"]}'
                f' &nbsp;|&nbsp; {job["period"]}', s_meta),
            *bullets(job["bullets"][:1]),
        ]))
        story += bullets(job["bullets"][1:])

    # ── Projects (page 2 — keeps every section unbroken across the page turn) ──
    story.append(PageBreak())
    story += section("PROJECTS")
    for proj in PROJECTS:
        story.append(KeepTogether([
            Paragraph(proj["name"], s_role),
            Paragraph(proj["stack"], s_stack),
            Paragraph(link(proj["url"], color=MUTED), s_url),
            *bullets(proj["bullets"][:1]),
        ]))
        story += bullets(proj["bullets"][1:])

    # ── Education ──
    story += section("EDUCATION")
    for degree, school, period, score in EDUCATION:
        story.append(Paragraph(degree, s_role))
        story.append(Paragraph(
            f'<font color="{ACCENT.hexval()}"><b>{school}</b></font> &nbsp;|&nbsp; {period}'
            f' &nbsp;|&nbsp; {score}', s_meta))

    # ── Languages ──
    story += section("LANGUAGES")
    story.append(Paragraph(LANGUAGES, s_body))

    doc.build(story)


if __name__ == "__main__":
    root = Path(__file__).resolve().parent.parent
    target = root / "public" / "resume" / "Ahesan_Chowdhury_Resume.pdf"
    target.parent.mkdir(parents=True, exist_ok=True)
    build(target)
    print(f"Wrote {target}")
