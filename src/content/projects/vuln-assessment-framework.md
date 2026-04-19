---
title: "Vulnerability Assessment Framework"
slug: "vuln-assessment-framework"
description: "A modular, automated framework for conducting structured vulnerability assessments on small network environments — built as a senior capstone project."
stack: ["Bash", "Python", "Nmap", "OpenVAS", "Metasploit"]
category: "assessment"
featured: true
status: "in-progress"
date: "2025-01"
outcome: "In progress — target completion June 2025."
---

## Overview

Most vulnerability assessment tools are either too enterprise-heavy (Tenable, Qualys) or too manual (point-and-click Nessus). This framework targets the middle ground: a structured, scriptable assessment pipeline for small networks that produces actionable reports.

## Architecture

The framework has four stages:

1. **Discovery** — Nmap-based host and service enumeration
2. **Enumeration** — Version fingerprinting and banner grabbing
3. **Vulnerability matching** — CVE lookup against identified services
4. **Reporting** — Markdown report generation with severity scoring

## Current status

Stages 1 and 2 are complete and tested. Stage 3 (CVE matching) is in active development — integrating with the NVD API for real-time lookups. Stage 4 is planned.

## Design philosophy

I'm building this to be readable first. Most security scripts are write-once, run-once. I want this to be auditable — every decision should be traceable in the code.
