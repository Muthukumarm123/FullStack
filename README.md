# WebDev Encyclopedia 📚

> A modern, polished, responsive **Web Development Learning & Reference Platform** covering the entire modern stack from local environment setup to full-stack cloud deployment.

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express-4.x-emerald.svg)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-purple.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Highlights

- **Encyclopedic Curriculum**: Deep hierarchical topics from basic markup to full-stack systems architecture.
- **Visual Learning Roadmap**: 7 sequential connected stages (**Stage 0: Dev Environment** through **Stage 6: Full-Stack**).
- **Zero-Comment Educational Text**: Real documentation formatted with typography, tables, callouts, and step breakdowns—never hidden inside code comments.
- **Visual Architecture Diagrams**: Visual models for the CSS Box Model, DOM tree, Flexbox axes, React state cycle, and Express request-response pipelines.
- **Instant Global Search (`⌘K` / `Ctrl+K`)**: Real-time keyword matching across titles, categories, and paragraphs with technology filters.
- **Local Progress Tracking**: Mark lessons as *Not started*, *In progress*, or *Completed* with automatic progress calculation across technologies and stages.
- **Reference Cheatsheets**: Syntax lookups and quick tables for HTML, CSS, JavaScript, React, and Express.
- **Full-Stack Express Integration**: Express server (`server.ts`) providing search and progress endpoints while mounting Vite middleware in development.

---

## 📖 Curriculum Overview

```text
├── 0. Dev Environment Setup
│   ├── Toolchain Overview (Editor, Terminal, Runtime, Browser, Git)
│   ├── Code Editor: VS Code Setup & Recommended Extensions
│   ├── Terminal & Command Line Essentials
│   ├── Node.js & npm LTS Installation and Verification
│   ├── Browser Developer Tools (Elements, Console, Network, Responsive Mode)
│   ├── Git & GitHub Setup (.gitignore, Identity, Commits)
│   ├── Project Scaffolding with Vite
│   └── Connecting React & Express in Local Development
│
├── 1. HTML
│   ├── Document Structure (<!DOCTYPE>, <html>, <head>, <body>)
│   ├── Elements, Attributes, & Void Tags
│   ├── Text Hierarchy, Links, Images & Lists
│   ├── Accessible Tables & Form Controls
│   └── Semantic HTML (<header>, <nav>, <main>, <article>, <section>, <footer>)
│
├── 2. CSS
│   ├── Syntax, Cascade, & Specificity Hierarchy
│   ├── Selectors, Colors (Hex, RGB, HSL), & Units (rem, em, %, vh, vw)
│   ├── The Box Model & Global box-sizing: border-box
│   ├── Display Properties (block, inline, inline-block, flex, grid)
│   ├── Flexbox 1D Engine (Main Axis, Cross Axis, justify-content, align-items)
│   ├── CSS Grid 2D Engine (fr units, auto-fit, minmax)
│   └── Responsive Design & Mobile-First Media Queries
│
├── 3. JavaScript
│   ├── Variables (let, const, var, block scope, Temporal Dead Zone)
│   ├── Primitive Data Types (String, Number, BigInt, Boolean, Undefined, Null, Symbol)
│   │   └── In-Depth String Lesson (length, toUpperCase, toLowerCase, includes, startsWith, slice, trim)
│   ├── Non-Primitive Types (Objects, Arrays)
│   ├── Operators & Expressions (===, ??, Ternary)
│   ├── Control Flow & Loops (for, while, for...of)
│   ├── Functions, Arrow Functions, & Lexical Scope
│   ├── Functional Array Methods (map, filter, reduce, find)
│   ├── Objects & Destructuring
│   ├── DOM Manipulation & Synthetic Event Handling
│   └── Asynchronous JS (Event Loop, Promises, async/await, Fetch API)
│
├── 4. React
│   ├── Declarative UI Paradigm (UI = f(state))
│   ├── Project Setup & Where React Lives (Vite, index.html, App.tsx)
│   ├── Functional Components & Reusability
│   ├── JSX Syntax, Expressions, & Conditional Rendering
│   ├── Props & Unidirectional Data Flow
│   ├── State & useState Hook with Updater Functions
│   ├── Controlled Forms & Synthetic Events
│   ├── Rendering Lists & Unique Key Props
│   ├── Hooks: useEffect & useRef with Cleanup Functions
│   └── API Integration (Idle, Loading, Success, Error States)
│
├── 5. Express.js
│   ├── Node.js V8 Runtime & Express Web Framework
│   ├── Where Express Runs (Node.js in Terminal, NOT the browser!)
│   ├── Initializing Servers, Ports, & Routing
│   ├── HTTP Methods (GET, POST, PUT, PATCH, DELETE) & Status Codes
│   ├── Middleware Pipelines & 4-Parameter Error Handlers
│   ├── REST API Resource Naming & JSON Serialization
│   └── Backend Architecture (Routes, Controllers, Services, Security)
│
├── 6. Full-Stack Development
│   ├── Client-Server Architecture & Decoupled SPAs
│   ├── API Communication, CORS, & Vite Proxying
│   ├── Databases (Relational SQL vs. Document NoSQL)
│   ├── Authentication Concepts (JWT vs. Session Cookies)
│   └── Production Builds & Cloud Deployment
│
└── 7. Quick Reference Cheatsheets
    ├── HTML5 Cheatsheet
    ├── CSS3 Cheatsheet
    ├── JavaScript ES6+ Cheatsheet
    ├── React Cheatsheet
    └── Express.js Cheatsheet
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) and `npm` installed:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/webdev-encyclopedia.git
   cd webdev-encyclopedia
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 🛠️ Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Boots the full-stack Express server with Vite middleware on port 3000. |
| **Production Build** | `npm run build` | Compiles and optimizes frontend assets into the `dist/` bundle. |
| **Production Start** | `npm start` | Runs the production Express server serving optimized static assets. |
| **Linting** | `npm run lint` | Type-checks the codebase using TypeScript (`tsc --noEmit`). |
| **Preview** | `npm run preview` | Previews the compiled production build locally. |

---

## 📁 Project Structure

```text
webdev-encyclopedia/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Breadcrumb.tsx       # Typography breadcrumb trail
│   │   ├── CalloutBox.tsx       # Accessible callout alerts (Tip, Note, Warning)
│   │   ├── CodeBlock.tsx        # Syntax block with copy button & explanation
│   │   ├── DiagramBox.tsx       # Interactive visual architecture diagrams
│   │   ├── HomeView.tsx         # Platform landing page
│   │   ├── Navbar.tsx           # Top navigation bar
│   │   ├── ReferenceView.tsx    # Syntax cheatsheet viewer
│   │   ├── RoadmapView.tsx      # Connected 7-stage visual roadmap
│   │   ├── SearchModal.tsx      # Global search modal with tech filters (⌘K)
│   │   ├── Sidebar.tsx          # Deep hierarchical expandable navigation
│   │   ├── TableOfContents.tsx  # Sticky "On this page" TOC
│   │   └── TopicPage.tsx        # Comprehensive lesson renderer
│   │
│   ├── content/            # Structured educational curriculum data
│   │   ├── environmentTopics.ts # Dev environment setup lessons
│   │   ├── htmlTopics.ts        # HTML curriculum
│   │   ├── cssTopics.ts         # CSS curriculum
│   │   ├── jsTopics.ts          # JavaScript curriculum
│   │   ├── reactTopics.ts       # React curriculum
│   │   ├── expressTopics.ts     # Express.js curriculum
│   │   ├── fullstackTopics.ts   # Full-stack architecture curriculum
│   │   ├── referenceTopics.ts   # Cheatsheets
│   │   ├── roadmap.ts           # 7-stage roadmap configuration
│   │   └── index.ts             # Registry & search index
│   │
│   ├── types/
│   │   └── curriculum.ts   # TypeScript interfaces for lessons & navigation
│   │
│   ├── App.tsx             # Root React application
│   ├── index.css           # Global Tailwind CSS imports & theme
│   └── main.tsx            # Client entry point
│
├── server.ts               # Express backend & API endpoints
├── index.html              # HTML5 entry point
├── package.json            # Manifest & dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── README.md               # Documentation
```

---

## 📤 How to Publish to GitHub

Follow these steps in your terminal to publish this repository to your GitHub account:

### 1. Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Enter repository name: `webdev-encyclopedia`.
3. Choose **Public** (or Private).
4. Leave *Add a README file*, *.gitignore*, and *license* **unchecked** (we already have them).
5. Click **Create repository**.

### 2. Push from Your Terminal
Run the following commands in the root of your project:

```bash
# 1. Initialize Git (if not already initialized)
git init

# 2. Stage all files
git add .

# 3. Create your first commit
git commit -m "feat: complete Web Development Learning Encyclopedia"

# 4. Rename the default branch to main
git branch -M main

# 5. Connect to your GitHub repository (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/webdev-encyclopedia.git

# 6. Push your code to GitHub
git push -u origin main
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
