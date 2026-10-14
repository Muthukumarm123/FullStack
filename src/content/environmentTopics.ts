import { TopicItem } from '../types/curriculum';

export const ENVIRONMENT_TOPICS: TopicItem[] = [
  {
    id: 'env-getting-started',
    slug: 'development-environment-overview',
    technology: 'environment',
    techName: 'Environment',
    category: 'Getting Started',
    title: 'Development Environment Overview',
    shortDescription: 'The essential software toolchain every web developer needs installed and configured before writing code.',
    estimatedMinutes: 9,
    breadcrumbs: ['Environment', 'Getting Started', 'Overview'],
    sections: [
      {
        id: 'what-is-dev-env',
        heading: 'The Modern Web Developer Toolchain',
        paragraphs: [
          'Before writing a single line of HTML, CSS, or JavaScript, you need a local development environment. A development environment is the suite of software applications, runtimes, command-line utilities, and configurations installed on your personal computer that enables you to author, preview, test, and debug code.',
          'Trying to learn web development without a properly configured environment is like trying to learn carpentry without tools. Modern web development relies on a coordinated ecosystem of five fundamental tools working in harmony.'
        ]
      },
      {
        id: 'five-core-tools',
        heading: 'The 5 Essential Pillars of Your Setup',
        bulletPoints: [
          '1. The Code Editor (VS Code): Your digital workshop where you write, refactor, and organize source code files with syntax highlighting and auto-completion.',
          '2. The Web Browser & DevTools (Chrome / Firefox): The rendering engine that executes your code, plus built-in inspector consoles for inspecting DOM nodes, CSS rules, and network traffic.',
          '3. The Terminal / Shell: The text-based command interface used to run build tools, manage dependencies, launch dev servers, and execute Git commands.',
          '4. Node.js & npm: The JavaScript runtime executing server scripts and the package manager providing access to over 2 million open-source libraries.',
          '5. Git & GitHub: The distributed version control system tracking every code change, plus the cloud host for backing up repositories and collaborating.'
        ],
        diagram: {
          type: 'custom',
          title: 'How the Local Development Toolchain Connects',
          description: 'VS Code (Authoring) ↔ Terminal (Build/Scripts) ↔ Node.js & npm (Runtime & Packages) ↔ Browser & DevTools (Testing & DOM) ↔ Git / GitHub (Version Control)'
        }
      },
      {
        id: 'operating-systems',
        heading: 'Operating System Compatibility',
        paragraphs: [
          'Web development is completely cross-platform. You can build professional production web applications on macOS, Windows, or Linux:',
          'macOS and Linux are UNIX-based systems with native POSIX terminals. Windows users can work natively using PowerShell, or install WSL2 (Windows Subsystem for Linux) to run a genuine Ubuntu environment directly alongside Windows.'
        ]
      }
    ],
    keyPoints: [
      'A development environment is your local workstation configuration of editor, runtime, terminal, browser, and version control.',
      'Web development is cross-platform across macOS, Windows (WSL2), and Linux.',
      'Setting up your tools properly once saves hundreds of hours of debugging downstream.'
    ],
    relatedTopicIds: ['env-vscode-setup', 'env-terminal-cli', 'env-nodejs-npm', 'env-browser-devtools'],
    nextTopicId: 'env-vscode-setup'
  },
  {
    id: 'env-vscode-setup',
    slug: 'vscode-setup',
    technology: 'environment',
    techName: 'Environment',
    category: 'Code Editor',
    title: 'Code Editor: Visual Studio Code Setup',
    shortDescription: 'Installing VS Code, essential extensions for web development, format-on-save, and keyboard shortcuts.',
    estimatedMinutes: 11,
    breadcrumbs: ['Environment', 'Code Editor', 'VS Code Setup'],
    sections: [
      {
        id: 'why-vscode',
        heading: 'Why Visual Studio Code?',
        paragraphs: [
          'Visual Studio Code (commonly known as VS Code) is a free, open-source code editor developed by Microsoft. It is by far the most popular editor among web developers worldwide due to its speed, lightweight footprint, built-in terminal, and vast extension ecosystem.',
          'While lightweight text editors like Notepad or TextEdit can technically edit .html files, they lack syntax coloring, bracket matching, linting diagnostics, auto-closing tags, and Git integration—all of which are essential for professional development.'
        ]
      },
      {
        id: 'installation-steps',
        heading: 'Downloading & Installing VS Code',
        numberedList: [
          '1. Visit the official website: code.visualstudio.com.',
          '2. Download the installer for your operating system (macOS Universal, Windows x64, or Linux .deb/.rpm).',
          '3. Run the installer and ensure you check the box: "Add to PATH" (this allows you to launch folders directly from your terminal by typing "code .").',
          '4. On macOS, open the Command Palette (Cmd+Shift+P), type "Shell Command: Install \'code\' command in PATH", and press Enter.'
        ]
      },
      {
        id: 'essential-extensions',
        heading: 'Must-Have Extensions for Web Development',
        paragraphs: [
          'Open the Extensions view by clicking the blocks icon on the left sidebar or pressing Ctrl+Shift+X (Cmd+Shift+X on Mac) and install the following curated extensions:'
        ],
        table: {
          headers: ['Extension Name', 'Publisher', 'Why You Need It'],
          rows: [
            ['Prettier - Code formatter', 'Prettier', 'Automatically formats your HTML, CSS, JavaScript, and JSON with consistent spacing every time you save.'],
            ['ESLint', 'Microsoft', 'Identifies JavaScript and React syntax errors, anti-patterns, and unused variables in real-time as you type.'],
            ['Tailwind CSS IntelliSense', 'Tailwind Labs', 'Provides intelligent autocomplete, class linting, and color previews for Tailwind utility classes.'],
            ['Live Server', 'Ritwick Dey', 'Launches a local development server with live browser reload for static HTML, CSS, and JS projects.'],
            ['Auto Rename Tag', 'Jun Han', 'Automatically renames the matching HTML closing tag whenever you edit an opening tag.']
          ]
        }
      },
      {
        id: 'recommended-settings',
        heading: 'Recommended settings.json Configuration',
        paragraphs: [
          'To enable automatic formatting whenever you save a file, open your Settings (Cmd+, or Ctrl+,), click the Open Settings (JSON) icon in the top right, and add the following configuration:'
        ],
        codeExample: {
          language: 'json',
          code: `{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.bracketPairColorization.enabled": true,
  "files.autoSave": "onFocusChange"
}`,
          explanationPoints: [
            '"editor.formatOnSave": true tells VS Code to invoke Prettier every time you press Cmd+S or Ctrl+S.',
            '"editor.tabSize": 2 enforces the 2-space indentation standard used across modern JavaScript and React codebases.',
            '"editor.bracketPairColorization.enabled": true colors matching brackets, parentheses, and curly braces to eliminate syntax nesting confusion.'
          ],
          commonMistakes: [
            'Installing multiple conflicting code formatters (e.g. Beautify and Prettier at the same time), which causes erratic reformatting bugs.'
          ]
        }
      }
    ],
    keyPoints: [
      'Download VS Code from code.visualstudio.com and install the "code" command in PATH.',
      'Install essential extensions: Prettier, ESLint, Tailwind CSS IntelliSense, and Live Server.',
      'Configure "editor.formatOnSave": true to maintain clean, professional formatting effortlessly.'
    ],
    relatedTopicIds: ['env-getting-started', 'env-terminal-cli', 'env-nodejs-npm'],
    prevTopicId: 'env-getting-started',
    nextTopicId: 'env-terminal-cli'
  },
  {
    id: 'env-terminal-cli',
    slug: 'terminal-cli',
    technology: 'environment',
    techName: 'Environment',
    category: 'Terminal',
    title: 'Terminal & Command Line Essentials',
    shortDescription: 'Mastering the shell, directory navigation, file creation, flags, and running developer scripts.',
    estimatedMinutes: 12,
    breadcrumbs: ['Environment', 'Terminal', 'Terminal & CLI Essentials'],
    sections: [
      {
        id: 'what-is-the-terminal',
        heading: 'What is the Terminal?',
        paragraphs: [
          'The Terminal (also called the Command Line Interface or CLI) is a text-based interface used to control your operating system. Instead of clicking icons and folders in a graphical file manager (like Finder or Windows Explorer), you type concise textual commands.',
          'Modern web development relies extensively on the terminal to start development servers, install open-source npm packages, run automated test suites, execute Git commands, and build deployment bundles.'
        ],
        callout: {
          type: 'tip',
          title: 'Integrated Terminal in VS Code',
          text: 'You do not need to switch back and forth between separate apps! Press Ctrl+` (or Cmd+` on Mac) inside VS Code to toggle the built-in terminal directly at your project root.'
        }
      },
      {
        id: 'essential-commands',
        heading: 'Essential CLI Commands Reference',
        table: {
          headers: ['Command', 'Action / Description', 'Example Usage'],
          rows: [
            ['pwd', 'Print Working Directory (shows your current location)', 'pwd'],
            ['ls (or dir on Windows)', 'List files and folders in current directory', 'ls -la (lists all including hidden files)'],
            ['cd <path>', 'Change Directory (navigate into a folder)', 'cd my-project or cd .. (moves up one level)'],
            ['mkdir <name>', 'Make Directory (creates a new folder)', 'mkdir src components'],
            ['touch <name>', 'Create a new empty file', 'touch index.html styles.css App.jsx'],
            ['rm <file>', 'Remove/delete a file', 'rm temp.txt'],
            ['rm -rf <dir>', 'Recursively remove an entire directory (Use with caution!)', 'rm -rf node_modules'],
            ['clear', 'Clears the terminal screen buffer', 'clear']
          ]
        }
      },
      {
        id: 'command-walkthrough',
        heading: 'Hands-On Workflow Walkthrough',
        paragraphs: [
          'Here is the standard terminal sequence a web developer executes when initiating a new project folder from scratch:'
        ],
        codeExample: {
          language: 'bash',
          code: `# 1. Navigate to your projects directory
cd ~/Projects

# 2. Create a new directory for your web application
mkdir portfolio-site

# 3. Step inside the newly created directory
cd portfolio-site

# 4. Open the current folder in Visual Studio Code
code .`,
          explanationPoints: [
            '~ represents your user home directory (/Users/username or /home/username).',
            'code . tells the OS to launch VS Code and set the current directory (.) as the workspace root.',
            'Executing these four commands takes only 3 seconds once muscle memory is formed.'
          ],
          commonMistakes: [
            'Typing paths with spaces without wrapping them in quotes (e.g. cd My Projects instead of cd "My Projects").',
            'Accidentally running commands in the wrong folder because you forgot to check pwd.'
          ]
        }
      }
    ],
    keyPoints: [
      'The terminal is the primary interface for running dev servers, installing dependencies, and managing Git.',
      'Use Ctrl+` (or Cmd+`) to open the integrated terminal directly inside VS Code.',
      'Master the basic navigation commands: pwd, ls, cd, mkdir, and touch.'
    ],
    relatedTopicIds: ['env-vscode-setup', 'env-nodejs-npm', 'env-git-github'],
    prevTopicId: 'env-vscode-setup',
    nextTopicId: 'env-nodejs-npm'
  },
  {
    id: 'env-nodejs-npm',
    slug: 'nodejs-npm-setup',
    technology: 'environment',
    techName: 'Environment',
    category: 'Node & npm',
    title: 'Node.js & npm Installation',
    shortDescription: 'Installing the Node.js JavaScript runtime, package manager (npm), LTS vs Current versions, and verifying your installation.',
    estimatedMinutes: 12,
    breadcrumbs: ['Environment', 'Node & npm', 'Node.js & npm Setup'],
    sections: [
      {
        id: 'why-nodejs',
        heading: 'Why Does a Frontend Developer Need Node.js?',
        paragraphs: [
          'Beginners often ask: "If I am learning frontend development (HTML, CSS, React), why do I need Node.js installed on my machine?"',
          'While your end users run JavaScript in their browsers, modern frontend developers use Node.js to power their local development tooling: compilers (Vite, Babel), bundle optimizers, CSS processors (Tailwind CSS, PostCSS), and linters (ESLint).',
          'Furthermore, Node.js comes bundled with npm (Node Package Manager), the global registry where over 2 million open-source libraries (such as React, Lucide icons, Express, and date-fns) are published and distributed.'
        ]
      },
      {
        id: 'lts-vs-current',
        heading: 'LTS (Long Term Support) vs. Current',
        paragraphs: [
          'When downloading Node.js from nodejs.org, you are presented with two options:'
        ],
        bulletPoints: [
          'LTS (Recommended for Most Users): The stable, battle-tested release with guaranteed enterprise security updates and compatibility across all major packages. ALWAYS choose the LTS release for professional work.',
          'Current: Contains the latest bleeding-edge features and experimental APIs. May introduce breaking changes or compatibility issues with certain npm packages.'
        ]
      },
      {
        id: 'installation-and-verification',
        heading: 'Installation & Verification Commands',
        paragraphs: [
          'After installing Node.js from nodejs.org (or using a version manager like nvm or fnm), open a new terminal window and verify the installation:'
        ],
        codeExample: {
          language: 'bash',
          code: `# Verify Node.js is installed and print the version
node -v
# Output should look like: v20.18.0 or v22.11.0

# Verify npm is installed and print the version
npm -v
# Output should look like: 10.8.2

# Check where the executable binaries are located on your system
which node
# macOS/Linux output: /usr/local/bin/node or ~/.nvm/...
# Windows command: where node`,
          explanationPoints: [
            'node -v prints the active Node runtime version.',
            'npm -v prints the active npm package manager version.',
            'If your terminal returns "command not found: node", restart your terminal or ensure Node was added to your system PATH during installation.'
          ],
          commonMistakes: [
            'Testing node -v in a terminal window that was already open before installing Node (open a fresh terminal window to refresh PATH variables!).'
          ]
        }
      },
      {
        id: 'understanding-package-json',
        heading: 'Understanding package.json and node_modules',
        paragraphs: [
          'When you initialize a project using npm init or a scaffolding tool, npm creates a package.json manifest file. This file records your project metadata, scripts, and dependencies.',
          'When you run npm install, npm downloads packages into a local folder named node_modules/. Because node_modules contains thousands of downloaded files, you should NEVER commit node_modules to Git (always include it in .gitignore!).'
        ]
      }
    ],
    keyPoints: [
      'Node.js powers modern build tools, compilers, dev servers, and package management.',
      'Always install the LTS (Long Term Support) version from nodejs.org.',
      'Verify installation in your terminal using node -v and npm -v.',
      'Never commit the node_modules/ directory to Git.'
    ],
    relatedTopicIds: ['env-terminal-cli', 'env-vite-project-scaffolding', 'express-what-is-node'],
    prevTopicId: 'env-terminal-cli',
    nextTopicId: 'env-browser-devtools'
  },
  {
    id: 'env-browser-devtools',
    slug: 'browser-devtools',
    technology: 'environment',
    techName: 'Environment',
    category: 'Browser Tools',
    title: 'Browser & Developer Tools (DevTools)',
    shortDescription: 'Mastering Chrome/Firefox DevTools: Elements inspector, Console, Network tab, and responsive mobile simulation.',
    estimatedMinutes: 13,
    breadcrumbs: ['Environment', 'Browser Tools', 'Browser DevTools'],
    sections: [
      {
        id: 'what-are-devtools',
        heading: 'The Web Developer’s Microscope',
        paragraphs: [
          'Modern web browsers are not just viewers for web content; they are sophisticated development environments. Every modern browser (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge) includes built-in Developer Tools (DevTools).',
          'DevTools allows you to inspect the live DOM tree, test CSS property changes in real time without refreshing, debug JavaScript execution with breakpoints, inspect network API requests, and simulate mobile phone viewports.'
        ],
        callout: {
          type: 'tip',
          title: 'Opening DevTools Shortcut',
          text: 'Press F12 on Windows/Linux, or Cmd+Option+I on Mac. Alternatively, right-click any element on any webpage and select "Inspect".'
        }
      },
      {
        id: 'essential-devtools-tabs',
        heading: 'The 4 Core DevTools Panels',
        table: {
          headers: ['Panel Name', 'Primary Purpose', 'Everyday Use Case'],
          rows: [
            ['Elements (Inspector)', 'Live DOM tree and CSS styles pane', 'Select any button or text to see which CSS rules are active, inspect the Box Model (margin/padding), and tweak colors in real-time.'],
            ['Console', 'JavaScript logs, errors, and live REPL', 'View console.log outputs, inspect unhandled Promise rejections, and test JavaScript expressions interactively.'],
            ['Network', 'HTTP requests, payloads, headers, latency', 'Inspect API fetch calls, verify HTTP 200/404/500 status codes, view JSON payloads, and test slow 3G network throttling.'],
            ['Sources (Debugger)', 'Source code files, breakpoints, step debugging', 'Pause JavaScript execution at specific lines of code to inspect variable values in memory rather than using endless console.logs.']
          ]
        }
      },
      {
        id: 'responsive-device-mode',
        heading: 'Responsive Device Mode',
        paragraphs: [
          'Click the Device Toolbar icon (looks like a phone and tablet) in the top-left of DevTools, or press Cmd+Shift+M (Ctrl+Shift+M on Windows).',
          'This mode allows you to simulate mobile screens (iPhone, Pixel, iPad) and test touch events, device pixel ratios, and custom viewport dimensions to ensure your media queries adapt seamlessly.'
        ]
      }
    ],
    keyPoints: [
      'Open DevTools with F12 or right-click → Inspect.',
      'Use the Elements panel to inspect active CSS rules and the Box Model.',
      'Use the Console panel to view JavaScript errors and runtime logs.',
      'Use the Network panel to inspect asynchronous API fetch requests and JSON responses.',
      'Use Responsive Device Mode (Cmd+Shift+M) to verify mobile layouts.'
    ],
    relatedTopicIds: ['css-responsive-design', 'js-dom', 'env-git-github'],
    prevTopicId: 'env-nodejs-npm',
    nextTopicId: 'env-git-github'
  },
  {
    id: 'env-git-github',
    slug: 'git-github-setup',
    technology: 'environment',
    techName: 'Environment',
    category: 'Version Control',
    title: 'Git & GitHub Setup',
    shortDescription: 'Installing Git, identity configuration, initializing repositories, writing clean commits, and pushing to GitHub.',
    estimatedMinutes: 14,
    breadcrumbs: ['Environment', 'Version Control', 'Git & GitHub Setup'],
    sections: [
      {
        id: 'git-vs-github',
        heading: 'Understanding Git vs. GitHub',
        paragraphs: [
          'Beginners often confuse Git with GitHub, but they are two distinct technologies:'
        ],
        bulletPoints: [
          'Git is a free, open-source distributed version control software that runs locally on your computer. It records snapshots of your project over time, allowing you to track changes, revert to previous versions, and create feature branches.',
          'GitHub is a cloud-based hosting platform where developers store their Git repositories online, share open-source code, and collaborate with teams using Pull Requests.'
        ]
      },
      {
        id: 'initial-git-configuration',
        heading: 'First-Time Git Configuration',
        paragraphs: [
          'After installing Git (from git-scm.com, or via Xcode Command Line Tools on Mac), you must configure your author name and email. Git attaches this information to every commit you make:'
        ],
        codeExample: {
          language: 'bash',
          code: `# Configure your global user name (use your real name or handle)
git config --global user.name "Alex Developer"

# Configure your email (must match your GitHub email!)
git config --global user.email "alex@example.com"

# Set main as the default branch name
git config --global init.defaultBranch main

# Verify your configuration
git config --list`,
          explanationPoints: [
            '--global applies these settings across all Git repositories on your computer.',
            'Ensure the email matches your GitHub account so your commits are linked to your profile.',
            'Setting defaultBranch to main follows current industry standards.'
          ],
          commonMistakes: [
            'Forgetting to configure user.name and user.email, which causes Git to reject your first commit.'
          ]
        }
      },
      {
        id: 'standard-git-workflow',
        heading: 'The Daily Git Lifecycle Commands',
        table: {
          headers: ['Command', 'Phase', 'Description'],
          rows: [
            ['git init', 'Setup', 'Initializes a new, empty Git repository in the current folder.'],
            ['git status', 'Inspection', 'Shows which files have been modified, staged, or untracked.'],
            ['git add .', 'Staging', 'Stages all modified files to prepare them for the next snapshot.'],
            ['git commit -m "message"', 'Commit', 'Records the staged snapshot permanently with a clear descriptive message.'],
            ['git push origin main', 'Remote Sync', 'Uploads local commits to your remote repository on GitHub.']
          ]
        }
      },
      {
        id: 'the-gitignore-file',
        heading: 'The Essential .gitignore File',
        paragraphs: [
          'A .gitignore file tells Git which files or directories to ignore. You should never commit dependencies, build artifacts, or secret API keys to version control.'
        ],
        codeExample: {
          language: 'bash',
          code: `# Standard Web Development .gitignore template

# Dependencies (Installed via npm install)
node_modules/

# Production build output
dist/
build/

# Local environment variables containing secret keys
.env
.env.local

# Operating system noise
.DS_Store
Thumbs.db`,
          explanationPoints: [
            'node_modules/ must always be ignored because it is recreated via npm install.',
            '.env files must always be ignored to prevent committing sensitive database passwords or API keys to public repositories.'
          ],
          commonMistakes: [
            'Committing .env secret files to GitHub, exposing API keys to public automated scrapers.'
          ]
        }
      }
    ],
    keyPoints: [
      'Git is the local version control tool; GitHub is the cloud repository hosting platform.',
      'Configure git config --global user.name and user.email once upon setup.',
      'The core daily workflow is: modify files → git add . → git commit -m "..." → git push.',
      'Always configure a .gitignore file to exclude node_modules/ and .env secrets.'
    ],
    relatedTopicIds: ['env-terminal-cli', 'env-nodejs-npm', 'env-vite-project-scaffolding'],
    prevTopicId: 'env-browser-devtools',
    nextTopicId: 'env-vite-project-scaffolding'
  },
  {
    id: 'env-vite-project-scaffolding',
    slug: 'vite-project-scaffolding',
    technology: 'environment',
    techName: 'Environment',
    category: 'Project Scaffolding',
    title: 'Modern Project Scaffolding with Vite',
    shortDescription: 'Why developers use Vite, scaffolding React + TypeScript projects with npm create vite@latest, and understanding project anatomy.',
    estimatedMinutes: 12,
    breadcrumbs: ['Environment', 'Project Scaffolding', 'Vite Setup'],
    sections: [
      {
        id: 'what-is-vite',
        heading: 'The Modern Build Tool Standard',
        paragraphs: [
          'In earlier years, developers set up React projects using Create React App (CRA) or complex Webpack configurations. However, as projects grew, Webpack required minutes to recompile files during development.',
          'Vite (French for "quick", pronounced /veet/) revolutionized frontend tooling. By leveraging native browser ES Modules (ESM) and an ultra-fast Go-based compiler (esbuild), Vite serves code instantly, providing instantaneous Hot Module Replacement (HMR) and optimized Rollup production builds.'
        ]
      },
      {
        id: 'scaffolding-command',
        heading: 'Creating a New Project with Vite',
        paragraphs: [
          'To create a new, production-ready web application in seconds, open your terminal and run:'
        ],
        codeExample: {
          language: 'bash',
          code: `# 1. Scaffold a new project using Vite
npm create vite@latest my-web-app -- --template react-ts

# 2. Enter the new project directory
cd my-web-app

# 3. Install dependencies from package.json
npm install

# 4. Start the local development server
npm run dev`,
          explanationPoints: [
            'npm create vite@latest triggers Vite’s interactive project generator.',
            '--template react-ts selects the React framework with TypeScript configured out of the box.',
            'npm install downloads dependencies into node_modules/.',
            'npm run dev boots the dev server at http://localhost:5173 with instant hot reloading.'
          ],
          commonMistakes: [
            'Trying to run npm run dev before running npm install (you must install node_modules first!).',
            'Leaving the dev server running in a terminal tab and wondering why a second instance uses port 5174.'
          ]
        }
      },
      {
        id: 'project-anatomy',
        heading: 'Anatomy of a Modern Vite Project',
        table: {
          headers: ['File / Folder', 'Role & Responsibility'],
          rows: [
            ['index.html', 'The single HTML entry point where the browser loads scripts and mounts the root <div>.'],
            ['src/main.tsx', 'The TypeScript/React entry point that calls createRoot() and renders <App /> into index.html.'],
            ['src/App.tsx', 'Your top-level React component holding your UI layout.'],
            ['src/index.css', 'Global CSS styles and Tailwind CSS imports.'],
            ['package.json', 'Project manifest defining dependencies, scripts (dev, build, preview), and versioning.'],
            ['vite.config.ts', 'Configuration file for Vite plugins, path aliases (@/), and server ports.']
          ]
        }
      }
    ],
    keyPoints: [
      'Vite is the modern industry standard build tool for lightning-fast frontend development.',
      'Scaffold new projects with: npm create vite@latest my-app -- --template react-ts.',
      'The standard 3-step workflow is: cd my-app → npm install → npm run dev.',
      'index.html is the entry point, mounting src/main.tsx into <div id="root">.'
    ],
    relatedTopicIds: ['env-nodejs-npm', 'react-what-is-react', 'env-react-express-local-setup'],
    prevTopicId: 'env-git-github',
    nextTopicId: 'env-react-express-local-setup'
  },
  {
    id: 'env-react-express-local-setup',
    slug: 'react-express-local-setup',
    technology: 'environment',
    techName: 'Environment',
    category: 'Full-Stack Setup',
    title: 'Connecting React & Express in Local Development',
    shortDescription: 'Running React (localhost:5173) and Express (localhost:5000) concurrently, configuring two terminals, and setting up Vite API proxying.',
    estimatedMinutes: 14,
    breadcrumbs: ['Environment', 'Full-Stack Setup', 'React & Express Local Setup'],
    sections: [
      {
        id: 'the-two-environment-model',
        heading: 'How React and Express Coexist on Your Computer',
        paragraphs: [
          'A modern full-stack web developer runs TWO separate local server processes simultaneously on their computer during development:',
          '1. The Frontend Process: A Vite development server running on port 5173 that serves your React application, compiles JSX, and provides instant Hot Module Replacement.',
          '2. The Backend Process: A Node.js Express server running on port 5000 that listens for HTTP requests, executes business logic, and communicates with your database.',
          'Your web browser navigates to http://localhost:5173 to render the React UI. When you click a button or load a page, React dispatches an asynchronous fetch() call behind the scenes to http://localhost:5000/api to retrieve or save data.'
        ],
        diagram: {
          type: 'request_response',
          title: 'Local Development Multi-Process Architecture',
          description: 'Terminal 1 [cd client && npm run dev (port 5173)] ↔ Browser UI ↔ HTTP fetch() ↔ Terminal 2 [cd server && npm run dev (port 5000)]'
        }
      },
      {
        id: 'standard-project-layout',
        heading: 'Standard Folder Layout for Full-Stack Projects',
        paragraphs: [
          'The cleanest and most scalable way to organize your local development environment is to separate the frontend and backend into two sibling folders inside one repository:'
        ],
        codeExample: {
          language: 'bash',
          code: `# Project Directory Layout
my-fullstack-app/
├── client/              # React Frontend (scaffolded with Vite)
│   ├── src/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json     # Frontend dependencies (react, lucide-react)
│   └── vite.config.ts
│
├── server/              # Express Backend
│   ├── server.js        # Express server entry point
│   ├── package.json     # Backend dependencies (express, cors, nodemon)
│   └── .env             # Server secrets (PORT=5000, DB_URL)
│
├── .gitignore           # Ignores node_modules/ in both client and server
└── README.md`,
          explanationPoints: [
            'Separating client/ and server/ prevents conflicting dependencies between frontend and backend.',
            'Each folder has its own package.json and isolated node_modules directory.'
          ]
        }
      },
      {
        id: 'the-two-terminal-workflow',
        heading: 'The Daily Two-Terminal Workflow',
        paragraphs: [
          'To develop full-stack applications smoothly, open VS Code and open two terminal tabs side-by-side using the Split Terminal icon (or Ctrl+Shift+5):'
        ],
        codeExample: {
          language: 'bash',
          code: `# --- Terminal Tab 1: Start Express Backend ---
cd server
npm run dev
# Output: [nodemon] server listening on http://localhost:5000

# --- Terminal Tab 2: Start React Frontend ---
cd client
npm run dev
# Output: VITE ready in 240 ms. Local: http://localhost:5173`,
          explanationPoints: [
            'Both terminals must remain open and running simultaneously.',
            'If you stop the backend terminal, frontend fetch() requests will fail with "NetworkError / Connection Refused".'
          ]
        }
      },
      {
        id: 'vite-proxy-solution',
        heading: 'Avoiding CORS with the Vite Proxy in vite.config.ts',
        paragraphs: [
          'Because the browser views port 5173 and port 5000 as different origins, calling fetch("http://localhost:5000/api/users") from React triggers browser CORS security errors unless configured.',
          'Instead of configuring complicated CORS rules, you can configure the Vite dev server to proxy all /api requests automatically to Express:'
        ],
        codeExample: {
          language: 'javascript',
          code: `// client/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Any request starting with /api is forwarded to Express on port 5000!
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});`,
          explanationPoints: [
            'Now, in your React code, you can simply write: fetch("/api/users") without hardcoding ports or IP addresses!',
            'The browser sends the request to localhost:5173/api/users, and Vite seamlessly forwards it to localhost:5000/api/users behind the scenes.'
          ],
          commonMistakes: [
            'Hardcoding "http://localhost:5000" throughout your React components instead of using relative paths ("/api/...") with a proxy.',
            'Forgetting that changing vite.config.ts requires restarting the Vite terminal.'
          ]
        }
      }
    ],
    keyPoints: [
      'Full-stack local development runs two processes: React on port 5173, Express on port 5000.',
      'Separate your project into client/ and server/ subfolders for clean dependency management.',
      'Open two side-by-side terminal tabs in VS Code to run both servers concurrently.',
      'Configure the Vite proxy in vite.config.ts so fetch("/api/...") automatically routes to Express without CORS errors.'
    ],
    relatedTopicIds: ['env-vite-project-scaffolding', 'express-environment-setup', 'react-environment-setup', 'fullstack-architecture'],
    prevTopicId: 'env-vite-project-scaffolding',
    nextTopicId: 'html-what-is-html'
  }
];
