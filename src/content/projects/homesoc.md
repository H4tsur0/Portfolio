---
title: "HomeSOC"
slug: "homesoc"
description: "A self-hosted Security Operations Center (SOC) home lab built on Fedora Linux. Features centralized log management, real-time network and host-based intrusion detection (NIDS/HIDS), and automated threat intelligence integration with Telegram alerting."
stack: ["Fedora", "Wazuh", "Suricata", "Loki", "Grafana", "Alloy", "Python", "Firewalld", "Telegram Bot", "OpenSearch", "Filebeat"]
category: "Defensive"
featured: true
status: "completed"
date: "2026-04"
outcome: "Achieved a complete working set up of the Alerts system on both Telegram and Grafana Dashboard."
---

## Overview

A fully operational, self-hosted Security Operations Center built on a Fedora Linux mini PC. HomeSOC detects network intrusions, monitors host activity across two machines, aggregates all logs into a unified dashboard, and delivers real-time threat alerts to your phone — built entirely with free, open-source tools used in enterprise SOCs.

## Methodology

### Detection

I used the default rules of suricata IDS with some aditional alert rules i implemented myself and Wazuh HIDS with basic alert rules connected to a Lenovo T14(agent).

### Log Ship

I used Loki as an indexer to compile the alerts from both Suricata and Wazuh, and ship the logs using Alloy towards Grafana. The Alloy will also ship the alerts to the telegram bot when alert level is high.

### Model

I trained an Isolation Forest for unsupervised anomaly detection and a Random Forest classifier for supervised labeling. The hybrid approach handles zero-day-like patterns the classifier hasn't seen.

## Results

| Metric | Score |
|--------|-------|
| Detection rate | 94.2% |
| False positive rate | 1.8% |
| Avg inference time | 3.2ms/flow |

## Reflection

The most challenging part was feature selection. Many features are highly correlated — packet byte counts and flow duration tell overlapping stories. Dimensionality reduction via PCA improved both accuracy and inference speed.
