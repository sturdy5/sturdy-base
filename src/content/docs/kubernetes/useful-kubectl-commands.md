---
title: Useful Kubectl Commands
description: Quick-reference cheat sheet for day-to-day cluster operations.
sidebar:
  order: 3
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

A curated collection of practical `kubectl` commands for debugging and cluster management.

## Inspecting Workloads

<Tabs>
  <TabItem label="Pods">
```bash
# List all pods with node placement and IP
kubectl get pods -A -o wide

# Sort pods by restart count
kubectl get pods -A --sort-by='.status.containerStatuses[0].restartCount'

# View pod logs with timestamps and follow
kubectl logs -f deployment/my-app --timestamps --tail=100
```
  </TabItem>
  <TabItem label="Nodes">
```bash
# Check node conditions and resource consumption
kubectl top nodes
kubectl describe nodes | grep -A 8 "Conditions:"

# Drain a node for maintenance
kubectl drain <node-name> --ignore-daemonsets --delete-emptydir-data
```
  </TabItem>
  <TabItem label="Events & Debugging">
```bash
# Get sorted cluster events to pinpoint issues
kubectl get events -A --sort-by='.metadata.creationTimestamp'

# Launch an ephemeral debug container inside a pod
kubectl debug -it <pod-name> --image=nicolaka/netshoot --target=<container-name>
```
  </TabItem>
</Tabs>
