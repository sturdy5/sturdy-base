# Sturdy Base 🏛️

> A modern, searchable personal engineering knowledge base covering IT Infrastructure, Application Development, and Kubernetes orchestration. Built with [Astro Starlight](https://starlight.astro.build/) and deployed automatically to GitHub Pages.

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:4321/sturdy-base/](http://localhost:4321/sturdy-base/) in your browser. Live reloading is enabled by default.

### 3. Build for Production
```bash
npm run build
```
This builds static assets into `dist/` and compiles the full-text [Pagefind](https://pagefind.app/) search index.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Content Organization

All documentation lives in `src/content/docs/`:

```
src/content/docs/
├── index.mdx                       # Homepage / Landing page
├── it/                             # IT & Systems Infrastructure
│   ├── index.md                    # IT section landing
│   └── networking-basics.md        # Example guide
├── app-dev/                        # Application Development
│   ├── index.md                    # App Dev section landing
│   └── 12-factor-apps.md           # Example guide
└── kubernetes/                     # Kubernetes & Cloud Native
    ├── index.md                    # Kubernetes section landing
    ├── cluster-architecture.md     # Architectural overview
    └── useful-kubectl-commands.md  # Interactive tabs & cheat sheet
```

### Adding New Articles

To add a new article, simply create a new `.md` or `.mdx` file inside the relevant category directory (or create a new subfolder). Starlight will automatically discover the page and add it to the sidebar navigation!

Example frontmatter for a new article:

```markdown
---
title: My New Topic Guide
description: Concise overview of what this guide covers.
sidebar:
  order: 4   # (Optional) Control the ordering in the sidebar menu
---

# Your Content Here
Write in standard Markdown or MDX!
```

---

## 🚢 GitHub Pages Deployment

This repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

### One-Time GitHub Configuration:
1. Go to your GitHub repository: `https://github.com/sturdy5/sturdy-base`
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your code to the `main` branch. The action will build the site and deploy it to:
   **`https://sturdy5.github.io/sturdy-base/`**
