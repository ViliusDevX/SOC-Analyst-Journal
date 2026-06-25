# SOC Analyst Journal

Live demo: https://soc-journal-kappa.vercel.app/

SOC Analyst Journal is a long-term cybersecurity learning project focused on SOC analysis, CySA+ preparation, alert triage, incident investigation, and practical security reasoning.

The project combines cybersecurity study content with an interactive React frontend. It documents my raw learning progression while also building toward a free SOC practice platform where users can practice investigation thinking through realistic scenarios.

---

## Current Content

* 185 CySA+ / SOC practice questions
* 22 raw investigation scenarios from my learning journal
* 30 interactive *Scenario Lab* scenarios
* 124 *Scenario Lab* questions
* 10 structured questionnaire entries
* Raw markdown practice sessions preserved in the repository

---

## Current Features

### My Journey

A learning journal section that documents my CySA+ and SOC preparation over time.

Features include:

* Raw practice answers
* Reviewed answers marked as correct, partial, or incorrect
* Mistake tracking
* Scenario writeups
* Structured JSON-based questionnaire entries
* Toggleable answer review/checking system

The goal of this section is to show real progression, not polished perfect answers.

### Scenario Lab

An interactive SOC scenario practice system.

Features include:

* 30 realistic practice scenarios
* Search by scenario title, category, or difficulty
* Filter by difficulty
* Filter by category
* Step-by-step multiple-choice investigation questions
* Immediate answer checking
* Explanations after each answer
* Scenario completion tracking
* Best score tracking
* Overall accuracy statistics
* Progress saved in localStorage
* Reset progress option

Scenario Lab categories include:

* Cloud / Identity
* Malware Analysis
* DNS / Command and Control
* Lateral Movement
* Web Application Compromise
* Insider Threat / DLP
* Ransomware / Incident Response
* Vulnerability Management
* SOC Operations
* Linux Security

Each category includes easy, medium, and hard scenarios.

---

## Purpose

I created this project for three main reasons.

### 1. Capture My Learning Progression

This project documents my cybersecurity learning process over time, including raw answers, mistakes, corrections, reasoning, and improvement.

The answers are intentionally kept mostly raw because I want the project to show real development instead of pretending every response was perfect from the beginning.

### 2. Showcase Cybersecurity and Development Skills

SOC Analyst Journal combines security analysis with frontend development.

The project demonstrates:

* SOC-style investigation reasoning
* CySA+ preparation
* Alert triage thinking
* MITRE ATT&CK-oriented analysis
* Incident response concepts
* Reusable components
* JSON-driven content
* State management
* localStorage progress tracking

### 3. Build a Free SOC Practice Platform

The long-term goal is to turn this into a free practice platform for people who want to improve SOC analyst skills.

Instead of only reading theory, users can practice realistic investigation decisions, review explanations, and build stronger alert triage instincts.

---

## Project Structure

```txt
Journal/
  Raw markdown practice sessions and notes

src/data/my-journey/
  Structured JSON questionnaire entries used by the My Journey page

src/data/scenario-lab/
  Interactive Scenario Lab questions and scenarios

src/components/
  Reusable React components such as cards, navigation, and section headers

src/pages/
  Main application pages:
  - Home
  - My Journey
  - Scenario Lab
  - About Me
```

---

## Technologies Used

* React
* React Router
* Tailwind CSS
* JavaScript
* JSON
* Vite
* Git / GitHub
* Vercel

---

## Roadmap

Planned improvements:

* Add more Scenario Lab content
* Add better explanations for difficult questions
* Add category-based progress tracking
* Add question randomization
* Add review mode for completed scenarios
* Add more realistic SOC evidence formats
* Add detection engineering examples
* Add Sigma-style detection logic practice
* Improve mobile layout and UI polish
* Add more advanced incident response scenarios

---

## Notes

Some answers are intentionally preserved in raw form, including mistakes and uncertainty, because the goal is to show real learning progression.

UPD: CySA+ passed 2026-06-17 
