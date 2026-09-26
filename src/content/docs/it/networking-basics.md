---
title: Networking Fundamentals
description: Essential networking concepts for IT engineers and developers.
sidebar:
  order: 2
---

A solid grasp of networking fundamentals is critical for troubleshooting distributed systems and infrastructure.

## Key Concepts

### OSI vs. TCP/IP Model

Understanding the abstraction layers helps pinpoint where failures occur:

| Layer | OSI Name | Common Protocols |
| :--- | :--- | :--- |
| **7** | Application | HTTP, DNS, SSH, TLS |
| **4** | Transport | TCP, UDP, QUIC |
| **3** | Network | IPv4, IPv6, ICMP, BGP |
| **2** | Data Link | Ethernet, ARP, VLAN (802.1Q) |
| **1** | Physical | Fiber, Twisted Pair |

### Essential Diagnostic Tools

When troubleshooting connectivity, use standard utilities progressively up the stack:

```bash
# Layer 3: ICMP reachability
ping -c 4 1.1.1.1

# Layer 3/4: Route tracing
traceroute -n 1.1.1.1

# Layer 4: Port connectivity
nc -zv 10.0.0.5 443

# Layer 7: DNS resolution
dig +short A github.com
```
