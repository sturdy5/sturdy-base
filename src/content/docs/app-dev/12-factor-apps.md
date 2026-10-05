---
title: The Twelve-Factor App
description: Key principles for building modern, cloud-native software applications.
sidebar:
  order: 4
---

The Twelve-Factor App methodology is a foundational framework for creating scalable, maintainable web applications and microservices.

## The Factors

1. **Codebase:** One codebase tracked in revision control, many deploys.
2. **Dependencies:** Explicitly declare and isolate dependencies.
3. **Config:** Store configuration in the environment (never hardcoded in source code).
4. **Backing Services:** Treat backing resources (databases, message queues) as attached resources.
5. **Build, Release, Run:** Strictly separate build and run stages.
6. **Processes:** Execute the app as one or more stateless processes.
7. **Port Binding:** Export services via port binding.
8. **Concurrency:** Scale out via the process model.
9. **Disposability:** Maximize robustness with fast startup and graceful shutdown.
10. **Dev/Prod Parity:** Keep development, staging, and production as similar as possible.
11. **Logs:** Treat logs as event streams.
12. **Admin Processes:** Run admin/management tasks as one-off processes.
