# Subhadeep Bhandari — Portfolio & AI/ML Systems

> A high-performance WebGL portfolio showcasing applied AI/ML systems, computer vision, time-series forecasting pipelines, and full-stack engineering.

---

## 🌟 Overview

This portfolio delivers an immersive 3D Kyoto architectural sanctuary combined with instant, production-grade web performance:
- **Instant First Paint & Zero-Iframe Architecture**: Fully modernized for sub-100ms First Contentful Paint, direct DOM indexing for search engines, and responsive mobile rendering.
- **Synchronous WebGL Sanctuary Engine**: Procedurally lit torii gates, timber halls, lantern glow, and real-time reflection mechanics powered by Three.js without artificial preloader delays.
- **Featured Technical Builds (The Creations)**:
  - **SatQuery AI** (*Smart India Hackathon 2026 · Team 214 Spaced Out*): Multimodal vision-language assistant for remote sensing imagery (FastAPI, PyTorch, OpenCV, React, Leaflet).
  - **Ferry Forecast** (*Unified Mentors Internship · Aug–Nov 2026*): Short-term ticket demand forecasting & predictive decision support across 261,538 Toronto Ferry records (XGBoost, Random Forest, Streamlit).
  - **GreenLeaf Nexus** (*Personal Project*): Full-stack billing and inventory management system with atomic stock deduction, near-expiry alerts, and a 7-day moving-average replenishment forecasting dashboard (Flask, SQLAlchemy, Pandas, Plotly, pytest).
- **Verified Credentials & Leadership (The Honors)**:
  - **Google Build with AI Bootcamp** (*Google for Developers / Hack2skill · Bangalore, Nov 17, 2026*): Certificate ID `2026H2S10BWAIBBLR-P00229`.
  - **Deloitte Data Analytics Job Simulation** (*Forage · Nov 15, 2026*): Data Analysis & Forensic Technology, Enrolment `6af88bcb291935b560e3b7ea`.
  - **Smart India Hackathon 2026 Finalist**: Team 214 – Spaced Out (Problem Statement SIH26167).
  - **Google Gemini Student Ambassador (2025)**: Campus technical lead for generative AI and agentic workflows.
- **The Workshop**: Capability matrix across AI/ML (PyTorch, scikit-learn, OpenCV), Programming (Python, Java, JavaScript, SQL), Frameworks (FastAPI, Flask, Streamlit, React, Plotly), and System Engineering.
- **Direct Connect**: One-click Resume PDF download, verified certificate inspection, and direct contact channels.

---

## 🛠️ Technology Stack

- **Graphics & 3D**: [Three.js](https://threejs.org/) + Custom WebGL Shaders
- **Build System**: [Vite 6](https://vitejs.dev/) + Node.js
- **Styling**: Modern Vanilla CSS (Glassmorphism, custom micro-interactions, responsive CSS Grid)
- **Deployment**: Vercel / Netlify / GitHub Pages ready (Vite static compilation)

---

## ⚡ Performance Optimizations

1. **Eliminated Nested Iframe Wrapper**: Direct root `index.html` delivery cuts unnecessary React runtime downloads (saving 150KB+ minified JS) and removes iframe sandbox reflows.
2. **Removed Artificial Preloader Stepping**: Eliminated 12 sequential `setTimeout` delays in `boot()` and `start()`, bringing Time to Interactive (TTI) from ~2.5s down to under 100ms.
3. **Resource Preloading**: Added `<link rel="preload">` hints for critical fonts (`fonts.css`), Three.js runtime, and above-the-fold portrait assets (`subhadeep_beginning.webp`).
4. **Lazy Asset Loading**: Applied `loading="lazy"` and `decoding="async"` across all offscreen screenshots, SVGs, and modal assets.
5. **DPR Capping**: Capped WebGL device pixel ratio to maintain 60 FPS rendering on high-DPI and mobile displays.

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Compiled assets will be output to the `dist/` directory in <500ms.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Guide

### Option 1: Vercel (Recommended)
1. Push your repository to GitHub.
2. Import project in [Vercel](https://vercel.com/).
3. Framework: **Vite**; Output Directory: `dist`.
4. Click **Deploy**.

### Option 2: GitHub Pages (Automated via Actions)
Included `.github/workflows/deploy.yml` builds and deploys `dist/` automatically on push to `main`:
1. In repository settings, navigate to **Settings** > **Pages**.
2. Select **Source** -> **GitHub Actions**.

### Option 3: Netlify
1. Connect repository on Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

---

## 📬 Contact & Channels

- **Subhadeep Bhandari**
- **Location**: Bengaluru, Karnataka, India
- **Education**: B.Tech in CSE, JAIN (Deemed-to-be University) — Expected July 2029
- **Email**: [subhadeepbhandari25@gmail.com](mailto:subhadeepbhandari25@gmail.com)
- **Phone**: [+91 9110977616](tel:+919110977616)
- **LinkedIn**: [linkedin.com/in/subhadeep-bhandari-9a9098382](https://www.linkedin.com/in/subhadeep-bhandari-9a9098382)
- **GitHub**: [github.com/SubhadeepBhandari25](https://github.com/SubhadeepBhandari25)
- **Instagram**: [@subhadeep__025](https://www.instagram.com/subhadeep__025/)

---
*© 2026 Subhadeep Bhandari. All rights reserved.*
