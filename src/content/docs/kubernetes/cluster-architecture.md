---
title: Cluster Architecture
description: Understanding the control plane components and worker nodes in Kubernetes.
sidebar:
  order: 2
---

A Kubernetes cluster consists of a set of worker machines (nodes) that run containerized applications, managed by a control plane.

## Control Plane Components

The control plane's components make global decisions about the cluster (for example, scheduling), as well as detecting and responding to cluster events.

1. **kube-apiserver:** The front end for the control plane. Exposes the Kubernetes API.
2. **etcd:** Consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data.
3. **kube-scheduler:** Watches for newly created Pods with no assigned node, and selects a node for them to run on.
4. **kube-controller-manager:** Runs controller processes including node controller, job controller, and endpointslice controller.
5. **cloud-controller-manager:** Embeds cloud-specific control logic (linking your cluster into cloud provider APIs).

## Node Components

Node components run on every node, maintaining running pods and providing the Kubernetes runtime environment:

- **kubelet:** An agent that runs on each node in the cluster, ensuring that containers are running in a Pod.
- **kube-proxy:** A network proxy that runs on each node, maintaining network rules on nodes that allow network communication to Pods.
- **Container Runtime:** The software responsible for running containers (e.g. `containerd`, `CRI-O`).
