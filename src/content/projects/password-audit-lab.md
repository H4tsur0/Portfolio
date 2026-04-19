---
title: "Password Audit & Cracking Lab"
slug: "password-audit-lab"
description: "A controlled lab environment for testing password policy strength using Hashcat and John the Ripper against intentionally weak credential databases."
stack: ["Hashcat", "John the Ripper", "Python", "Kali Linux"]
category: "red team"
featured: false
status: "completed"
date: "2023-10"
outcome: "Cracked 78% of MD5-hashed passwords in under 2 hours using hybrid attack mode. Documented policy recommendations."
---

## Overview

Password policies are the most consistently underestimated security control. Organizations spend millions on firewalls and endpoint protection, then store SHA1-hashed passwords without salting. This lab quantifies exactly how bad that is.

## Setup

I built a controlled environment with three components:

1. A weak credential database — 500 accounts with intentionally policy-violating passwords (common words, keyboard walks, name + year patterns)
2. Hashcat configured with multiple attack modes
3. A measurement layer tracking crack rates over time

## Attack modes tested

**Dictionary attack** — using the rockyou.txt wordlist (14 million entries). Most effective for common passwords.

**Rule-based attack** — applying transformation rules to dictionary words (capitalize first letter, append numbers, substitute letters). Dramatically increased coverage.

**Hybrid attack** — combining wordlist with mask patterns. This hit the `word + year` pattern that many password policies accidentally encourage.

## Results

| Attack mode | Passwords cracked | Time |
|---|---|---|
| Dictionary | 43% | 12 min |
| Rule-based | 64% | 47 min |
| Hybrid | 78% | 1h 54m |

## Recommendations documented

The most important finding: requiring "complexity" (uppercase + number + symbol) without requiring length produces passwords that are harder for humans to remember but not harder for machines to crack. Minimum 16-character passphrases outperform complexity requirements on both usability and security.
