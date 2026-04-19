---
title: "CTF Write-up Collection"
slug: "ctf-writeups"
description: "A curated collection of write-ups from competitive Capture the Flag competitions, documenting methodology, tools, and thought process for each challenge solved."
stack: ["Bash", "Python", "GDB", "Burp Suite", "pwntools"]
category: "offensive"
featured: true
status: "completed"
date: "2024-01"
outcome: "Top 15% finish at NahamCon CTF 2024. Documented 20+ challenge solutions across web, pwn, and forensics categories."
---

## Overview

Capture the Flag competitions are the closest thing cybersecurity has to philosophical puzzles — the answer is always right in front of you, but invisible until you ask the right question. This collection documents my methodology across three categories.

## Web challenges

Web security challenges involve identifying and exploiting vulnerabilities in intentionally broken web applications. My approach:

1. **Reconnaissance** — Map all endpoints, parameters, headers
2. **Hypothesis** — Identify likely vulnerability classes (SQLi, XSS, IDOR, SSRF)
3. **Exploit** — Build targeted payloads
4. **Exfiltrate** — Extract the flag cleanly

### Example: JWT None Algorithm

A challenge presented a JWT-authenticated API. I noticed the `alg` header wasn't validated server-side — setting it to `"none"` and stripping the signature granted admin access.

## Binary exploitation (pwn)

Pwn challenges require deep understanding of memory layout. I focused on:

- Buffer overflows and return address control
- Format string vulnerabilities
- Ret2libc technique for ASLR bypass

## Forensics

Forensics challenges are pure detective work — analyzing disk images, memory dumps, and network captures for hidden data.
