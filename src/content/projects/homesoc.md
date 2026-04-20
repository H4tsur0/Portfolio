---
title: "Network Traffic Anomaly Detector"
slug: "network-anomaly-detector"
description: "A machine-learning pipeline that identifies anomalous network traffic patterns by analyzing pcap files and flagging deviations from learned baselines."
stack: ["Python", "Scikit-learn", "Wireshark", "Pandas", "Matplotlib"]
category: "forensics"
featured: true
status: "completed"
date: "2024-03"
outcome: "Achieved 94% detection accuracy on the CICIDS2017 dataset with <2% false positive rate."
---

## Overview

Network intrusion detection is a problem of signal in noise. Modern enterprise networks generate terabytes of traffic daily, and the malicious packets are designed to look like the benign ones. This project builds a baseline behavioral model and flags deviations.

## Methodology

### Data collection

I used the CICIDS2017 dataset — a benchmark collection of labeled network flows including benign traffic and attacks like DDoS, port scanning, and brute force attempts. I also captured my own test traffic using Wireshark on a local lab network.

### Feature engineering

Raw packet captures are not directly usable for ML. I extracted 78 features per flow including:

- Packet inter-arrival times (mean, std, max)
- Flow duration and byte counts
- TCP flag frequencies
- Port entropy

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
