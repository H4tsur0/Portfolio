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
role: Alerts Analyst
---

## Overview

A fully operational, self-hosted Security Operations Center built on a Fedora Linux mini PC. HomeSOC detects network intrusions, monitors host activity across two machines, aggregates all logs into a unified dashboard, and delivers real-time threat alerts to your phone — built entirely with free, open-source tools used in enterprise SOCs.

## Methodology

### Detection

I used the default rules of suricata NIDS with some aditional alert rules i implemented myself and Wazuh HIDS with basic alert rules connected to a Lenovo T14(agent).

### Log Ship

I used Loki as an indexer to compile the alerts from both Suricata and Wazuh, and ship the logs using Alloy towards Grafana. The Alloy will also ship the alerts to the telegram bot when alert severity is above a certain level.

### Model

The environment consists of a centralized management node and distributed endpoints, integrating host-based and network-based detection.

- Central SOC Node (Intel NUC): Fedora 42 server hosting the Wazuh Manager, Indexer, Dashboard, and Suricata IDS.
- Monitored Endpoint (ThinkPad T14): Fedora 42 workstation running the Wazuh Agent for real-time telemetry.
- Alert Engine: Custom Python engine tailing JSON logs, performing VirusTotal IP reputation lookups, and routing critical alerts to Telegram.

## Documentation

Visit our webpage for the full guide: https://kat2120.github.io/SOCHomeLab/index.html

## Reflection

Since this was my very first time doing a security based project myself, i learned a lot more about how NIDS and HIDS works, and i learned more about how grafana create visual graphs and design a dashboard from logs, and how grafana itself receives logs from Suricata and Wazuh.