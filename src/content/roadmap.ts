import { RoadmapStage } from '../types/curriculum';

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    stageNumber: 0,
    id: 'environment',
    title: 'Stage 0 — Development Environment Setup',
    shortDescription: 'Configure your local workspace with VS Code, Terminal, Node.js, Git, and DevTools.',
    goal: 'Install and configure the complete local toolchain required to write, preview, test, and version control code.',
    topics: [
      'Development environment overview & software toolchain',
      'VS Code installation, recommended extensions (Prettier, ESLint), and settings',
      'Terminal & Command Line essentials (navigation, mkdir, touch, running commands)',
      'Node.js & npm LTS installation and verification (node -v, npm -v)',
      'Browser Developer Tools (Elements, Console, Network, and Responsive Device Mode)',
      'Git & GitHub setup (identity config, .gitignore, git init, add, commit, push)',
      'React environment setup (npm create vite@latest, JSX, and hot module reload)',
      'Express.js backend environment setup (npm init, server.js, and nodemon auto-restart)',
      'Connecting React & Express concurrently in local development (ports 5173 & 5000)'
    ],
    keyOutcomes: [
      'Configure Visual Studio Code with automated formatting on save and extension tooling.',
      'Operate the terminal comfortably to navigate folders, install packages, and launch local servers.',
      'Scaffold and launch a local React development environment using Vite.',
      'Initialize and run a local Express.js backend server listening on network ports.',
      'Run React and Express concurrently and connect them without CORS errors.'
    ],
    estimatedHours: '6-10 hours',
    firstTopicId: 'env-getting-started'
  },
  {
    stageNumber: 1,
    id: 'html',
    title: 'Stage 1 — HTML',
    shortDescription: 'Learn the structure and semantics of modern websites.',
    goal: 'Understand how webpages are structured, tagged, and delivered to browsers.',
    topics: [
      'HTML basics',
      'Document structure (<!DOCTYPE>, <html>, <head>, <body>)',
      'Elements and nested tags',
      'Attributes (id, class, src, href, alt)',
      'Text formatting & headings (<h1> to <h6>, <p>, <span>)',
      'Hyperlinks and navigation (<a> tag, targets, relative vs absolute URLs)',
      'Images & media (<img>, <picture>, <video>, responsive formats)',
      'Lists (ordered, unordered, definition lists)',
      'Tables (tabular data, <table>, <thead>, <tbody>, accessibility)',
      'Forms & input controls (<form>, <input>, <select>, <textarea>, validation)',
      'Semantic HTML (<header>, <nav>, <main>, <article>, <section>, <footer>, <aside>)'
    ],
    keyOutcomes: [
      'Construct valid, accessible, and standards-compliant HTML5 documents.',
      'Select proper semantic tags for accessibility (a11y) and search indexing (SEO).',
      'Build functional user input forms with validation attributes.'
    ],
    estimatedHours: '15-20 hours',
    firstTopicId: 'html-what-is-html'
  },
  {
    stageNumber: 2,
    id: 'css',
    title: 'Stage 2 — CSS',
    shortDescription: 'Learn how to style, color, format, and lay out webpages.',
    goal: 'Master visual presentation, responsive layout engines (Flexbox & Grid), and design math.',
    topics: [
      'What is CSS and how styling cascades',
      'CSS Syntax (selectors, properties, values)',
      'Selectors (element, class, ID, attribute, pseudo-classes, specificity)',
      'Colors (named, hex, rgb/rgba, hsl) and units (px, rem, em, %, vh, vw)',
      'The Box Model (content, padding, border, margin)',
      'box-sizing: border-box vs content-box',
      'Display property (block, inline, inline-block, none)',
      'Positioning (static, relative, absolute, fixed, sticky, z-index)',
      'Flexbox (main axis, cross axis, justify-content, align-items, flex-grow)',
      'CSS Grid (grid-template-columns, fr units, gap, template-areas)',
      'Responsive Design & Media Queries (mobile-first breakpoints)'
    ],
    keyOutcomes: [
      'Build pixel-accurate, responsive layouts that adapt smoothly across desktop, tablet, and mobile.',
      'Control layout flow with complete confidence using Flexbox and Grid without hacks.',
      'Prevent layout overflow bugs by mastering the CSS Box Model.'
    ],
    estimatedHours: '25-30 hours',
    firstTopicId: 'css-what-is-css'
  },
  {
    stageNumber: 3,
    id: 'javascript',
    title: 'Stage 3 — JavaScript',
    shortDescription: 'Learn programming fundamentals and browser behavior.',
    goal: 'Understand programmatic logic, data manipulation, asynchronous operations, and DOM control.',
    topics: [
      'Variables & declaration rules (let, const, var, temporal dead zone)',
      'Primitive Data Types (String, Number, BigInt, Boolean, Undefined, Null, Symbol)',
      'Non-Primitive Data Types (Objects, Arrays, Functions)',
      'Operators (arithmetic, assignment, comparison, logical, ternary, nullish coalescing)',
      'Control flow (if/else, switch) and Loops (for, while, for...of, for...in)',
      'Functions (declarations, expressions, arrow functions, return values, parameters, scope)',
      'Array methods (map, filter, reduce, find, forEach, slice, splice)',
      'Objects (properties, methods, computed keys, destructuring, Object.keys/entries)',
      'DOM manipulation (query selectors, modifying text & classes, event listeners, bubbling)',
      'Asynchronous programming (Event loop, Callbacks, Promises, async/await, Fetch API)',
      'Advanced JS (Closures, Hoisting, the this keyword, ES Modules, try/catch Error Handling)'
    ],
    keyOutcomes: [
      'Write clean, modern ES6+ JavaScript code using functional methods and immutability.',
      'Make dynamic DOM changes and handle user interaction events smoothly.',
      'Fetch data from remote REST endpoints asynchronously without race conditions.'
    ],
    estimatedHours: '40-50 hours',
    firstTopicId: 'js-what-is-javascript'
  },
  {
    stageNumber: 4,
    id: 'react',
    title: 'Stage 4 — React',
    shortDescription: 'Learn modern declarative component-based UI engineering.',
    goal: 'Build structured, maintainable frontend applications with unidirectional data flow.',
    topics: [
      'What is React and why declarative UI outperforms imperative DOM mutations',
      'Components (functional components, composition, component tree hierarchy)',
      'JSX (syntax rules, expressions in braces, conditional rendering patterns)',
      'Props (passing data, props destructuring, default props, immutability of props)',
      'State & useState (local component memory, batching, re-renders, state update functions)',
      'Event handling in React (synthetic events, passing event handlers as props)',
      'Rendering Lists (Array.prototype.map, importance of stable key props)',
      'React Hooks (useState, useEffect lifecycle and dependencies, useRef for DOM & mutable refs)',
      'Custom Hooks (extracting reusable component logic)',
      'Client-Side Routing (pages, dynamic route parameters, navigation links)',
      'API Integration (useEffect fetch patterns, loading states, error boundaries, mutation states)'
    ],
    keyOutcomes: [
      'Deconstruct complex user interfaces into modular, reusable React components.',
      'Manage application state cleanly using hooks without unnecessary re-renders.',
      'Connect frontend components to external APIs with resilient loading and error states.'
    ],
    estimatedHours: '35-45 hours',
    firstTopicId: 'react-what-is-react'
  },
  {
    stageNumber: 5,
    id: 'express',
    title: 'Stage 5 — Node.js + Express.js',
    shortDescription: 'Learn server-side engineering and REST API architecture.',
    goal: 'Understand backend runtimes, request-response lifecycles, and production API design.',
    topics: [
      'What is Node.js? (V8 runtime, single-threaded event loop, non-blocking I/O)',
      'What is Express.js and how it simplifies HTTP server creation',
      'npm & package.json (dependencies, scripts, semantic versioning)',
      'Modules (CommonJS require vs ES Modules import/export)',
      'Creating an Express server (listen, ports, handling connections)',
      'Routing & HTTP Methods (GET, POST, PUT, PATCH, DELETE, URL parameters, query strings)',
      'Request and Response objects (req.body, req.params, req.query, res.json, res.status)',
      'Middleware (request pipeline, built-in express.json, custom logging/auth, error-handling middleware)',
      'REST APIs (resource naming, idempotence, HTTP status codes 200, 201, 400, 401, 403, 404, 500)',
      'Backend Architecture (separation of concerns: routes, controllers, services, database adapters)',
      'Backend Security (environment variables, CORS, rate limiting, request validation, sanitization)'
    ],
    keyOutcomes: [
      'Design and deploy production-ready RESTful APIs in Express.js.',
      'Organize backend server code with clean controllers, routes, and middleware pipelines.',
      'Handle errors gracefully and secure endpoints against malformed payloads.'
    ],
    estimatedHours: '30-40 hours',
    firstTopicId: 'express-what-is-node'
  },
  {
    stageNumber: 6,
    id: 'fullstack',
    title: 'Stage 6 — Full-Stack Development',
    shortDescription: 'Connect frontend and backend into unified production web applications.',
    goal: 'Master end-to-end integration, databases, authentication, deployment, and systems architecture.',
    topics: [
      'Full-Stack Architecture (client-server model, decoupled SPAs vs server rendering)',
      'API Communication (CORS configuration, JSON serialization, bearer token authorization headers)',
      'Databases (Relational SQL vs Document NoSQL, schemas, migrations, connection pools)',
      'Authentication Concepts (stateless JWT tokens vs stateful server sessions, secure HTTP-only cookies)',
      'Authorization Concepts (Role-Based Access Control, protecting frontend views & backend endpoints)',
      'Environment Variables (client VITE_ prefixes vs server secrets, security boundaries)',
      'Deployment & DevOps (production build artifacts, reverse proxies, environment configuration, cloud hosting)'
    ],
    keyOutcomes: [
      'Connect a React SPA frontend seamlessly to an Express.js backend API.',
      'Implement real-world data persistence, user auth pipelines, and security checks.',
      'Package and deploy full-stack applications to modern cloud infrastructure.'
    ],
    estimatedHours: '30-40 hours',
    firstTopicId: 'fullstack-architecture'
  }
];
