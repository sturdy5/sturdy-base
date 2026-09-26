---
title: Kubernetes & Cloud Native
description: Production Kubernetes knowledge base, container orchestration, and ecosystem tooling.
---

Welcome to the **Kubernetes & Cloud Native** section of Sturdy Base. This section provides reference material, operational runbooks, and architectural patterns for Kubernetes. My primary experience with Kubernetes has been with Red Hat OpenShift. A lot of the content here applies to OpenShift as well. I will try to highlight where there are differences as I find they exist.

## Core Concepts

- **Control Plane & Workloads:** Pods, Deployments, StatefulSets, DaemonSets, and Jobs.
- **Networking & Ingress:** CNI plugins, Services (ClusterIP, NodePort, LoadBalancer), Ingress Controllers, and Gateway API.
- **Storage:** PersistentVolumes (PV), PersistentVolumeClaims (PVC), and CSI drivers.
- **Security & RBAC:** Roles, RoleBindings, ServiceAccounts, NetworkPolicies, and Admission Controllers.
- **GitOps & Helm:** ArgoCD, Flux, Helm packaging, and declarative cluster management.

## Recommended Guides

- [Cluster Architecture](/sturdy-base/kubernetes/cluster-architecture/) - Overview of the control plane and worker nodes.
- [Plugins](/sturdy-base/kubernetes/plugins/) - A guide to using plugins with `kubectl` and `oc`
- [Useful Kubectl Commands](/sturdy-base/kubernetes/useful-kubectl-commands/) - Practical command-line cheat sheet.
