import { TopicItem } from '../types/curriculum';

export const EXPRESS_TOPICS: TopicItem[] = [
  {
    id: 'express-what-is-node',
    slug: 'what-is-node',
    technology: 'express',
    techName: 'Express.js',
    category: 'Introduction',
    title: 'What is Node.js and Express.js?',
    shortDescription: 'The V8 JavaScript runtime, non-blocking asynchronous I/O, and the minimalist Express web framework.',
    estimatedMinutes: 10,
    breadcrumbs: ['Express.js', 'Introduction', 'What is Node & Express?'],
    sections: [
      {
        id: 'node-and-express-overview',
        heading: 'JavaScript on the Server',
        paragraphs: [
          'For the first 14 years of its existence, JavaScript lived exclusively inside web browsers. In 2009, Node.js changed the software industry forever by extracting Google Chrome’s V8 JavaScript engine and embedding it inside a standalone C++ runtime.',
          'Node.js gave developers access to the local file system, networking sockets, operating system processes, and hardware I/O—enabling full-stack JavaScript development across both client and server.'
        ]
      },
      {
        id: 'what-is-express',
        heading: 'What is Express.js?',
        paragraphs: [
          'While Node.js provides a low-level native http module, handling URLs, query parameters, cookies, JSON parsing, and routing using pure Node requires writing hundreds of lines of repetitive boilerplate.',
          'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It acts as a streamlined layer on top of Node.js HTTP servers, introducing elegant routing, middleware pipelines, and request/response helpers.'
        ],
        diagram: {
          type: 'request_response',
          title: 'The Express Request-Response Pipeline',
          description: 'Client HTTP Request → Express Middleware Stack (Auth, Parser, Logging) → Route Handler → HTTP JSON Response'
        }
      }
    ],
    importantDifferences: [
      {
        title: 'Node.js vs Express.js',
        itemA: {
          label: 'Node.js (Runtime Environment)',
          explanation: 'The platform and engine executing JavaScript on server machines. Provides low-level operating system APIs (fs, path, http, crypto).',
          code: 'const http = require("node:http");\nconst server = http.createServer(...);'
        },
        itemB: {
          label: 'Express.js (Web Framework)',
          explanation: 'A lightweight framework built on top of Node.js to streamline routing, middleware pipelines, and HTTP request handling.',
          code: 'import express from "express";\nconst app = express();\napp.get("/api/users", ...);'
        },
        keyTakeaway: 'Node.js is the engine; Express.js is the vehicle framework built on top of that engine.'
      }
    ],
    keyPoints: [
      'Node.js runs JavaScript on the server using Google Chrome’s V8 engine.',
      'Express is the de-facto standard routing and middleware framework for Node.js.',
      'Express simplifies parsing request bodies, matching URL patterns, and sending JSON responses.'
    ],
    relatedTopicIds: ['express-environment-setup', 'express-basics-server', 'express-middleware', 'express-rest-apis'],
    nextTopicId: 'express-environment-setup'
  },
  {
    id: 'express-environment-setup',
    slug: 'express-environment-setup',
    technology: 'express',
    techName: 'Express.js',
    category: 'Introduction',
    title: 'Setting Up an Express.js Environment: Where & How to Run Express',
    shortDescription: 'Where backend code runs, initializing npm, installing Express and nodemon, configuring server.js, and testing endpoints with curl and Postman.',
    estimatedMinutes: 13,
    breadcrumbs: ['Express.js', 'Introduction', 'Express Environment Setup'],
    sections: [
      {
        id: 'where-does-express-run',
        heading: 'Where Does Express Code Actually Live & Run?',
        paragraphs: [
          'A fundamental point that confuses almost every new web developer is: "Where do I write and run Express.js? Does it run in the browser like React?"',
          'The answer is an emphatic NO. Express.js does NOT run in the browser. While React executes in the user\'s client browser, Express runs in Node.js on a server computer (or your personal computer acting as the local development server).',
          'You write Express code inside server JavaScript or TypeScript files (such as server.js, app.js, or src/server.ts) using VS Code. You execute Express through your terminal, where it binds to a specific network port (such as 5000 or 3000) and sits listening continuously for inbound HTTP requests.'
        ],
        diagram: {
          type: 'request_response',
          title: 'Where Express Sits in the Web Architecture',
          description: 'Client Browser (React / HTML) [Port 5173] ↔ HTTP Request over Network ↔ Node.js Express Server [Port 5000] ↔ Database'
        }
      },
      {
        id: 'step-by-step-express-project',
        heading: 'Step-by-Step: Initializing an Express Server Project',
        paragraphs: [
          'Follow these exact steps in your terminal to create and launch an Express server from scratch:'
        ],
        codeExample: {
          language: 'bash',
          code: `# Step 1: Create a dedicated directory for your backend project
mkdir my-express-server
cd my-express-server

# Step 2: Initialize a package.json file with default settings
npm init -y

# Step 3: Install Express as a production dependency
npm install express

# Step 4: Install nodemon as a developer dependency for auto-reloading
npm install -D nodemon

# Step 5: Create your primary server entry file
touch server.js

# Step 6: Open the folder in Visual Studio Code
code .`,
          explanationPoints: [
            'mkdir my-express-server && cd my-express-server creates and enters an isolated backend folder.',
            'npm init -y creates package.json to track project dependencies.',
            'npm install express downloads the Express web framework into node_modules/.',
            'npm install -D nodemon installs nodemon, a utility that automatically restarts your server whenever you save code changes (eliminating manual server restarts!).',
            'touch server.js creates the primary JavaScript file where you will write your server code.'
          ],
          commonMistakes: [
            'Running server commands in the same folder where your client-side React files live without separating folders (e.g. client/ vs server/).',
            'Trying to use nodemon without installing it, causing "nodemon: command not found".'
          ]
        }
      },
      {
        id: 'package-json-config',
        heading: 'Configuring package.json for ES Modules & Scripts',
        paragraphs: [
          'Open package.json in VS Code. To use modern import express from "express" syntax and configure one-click startup scripts, add "type": "module" and the "scripts" section:'
        ],
        codeExample: {
          language: 'json',
          code: `{
  "name": "my-express-server",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.21.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}`,
          explanationPoints: [
            '"type": "module" enables modern ES6 import/export statements instead of legacy CommonJS require().',
            '"dev": "nodemon server.js" allows you to launch the server in watch mode by typing npm run dev.',
            '"start": "node server.js" provides the production startup command for cloud hosts.'
          ],
          commonMistakes: [
            'Omitting "type": "module", which causes Node to throw SyntaxError: Cannot use import statement outside a module.'
          ]
        }
      },
      {
        id: 'writing-server-js',
        heading: 'Writing Your First Server File (server.js)',
        paragraphs: [
          'Open server.js and write the minimal working Express server:'
        ],
        codeExample: {
          language: 'javascript',
          code: `import express from 'express';

const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// A test health-check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'Express server is running successfully!',
    timestamp: new Date().toISOString()
  });
});

// Start listening for inbound HTTP requests
app.listen(PORT, () => {
  console.log(\`Server is running and listening on http://localhost:\${PORT}\`);
});`,
          explanationPoints: [
            'import express from "express" brings in the Express library.',
            'const app = express() initializes your web application server instance.',
            'app.use(express.json()) ensures incoming JSON payloads are automatically parsed onto req.body.',
            'app.get("/api/health", ...) creates an HTTP GET endpoint.',
            'app.listen(PORT) opens the operating system network socket on port 5000.'
          ],
          commonMistakes: [
            'Forgetting to call app.listen(), which means the server code executes once and immediately exits without waiting for requests.'
          ]
        }
      },
      {
        id: 'how-to-test-express',
        heading: 'How to Actually Use & Test Your Express Endpoints',
        paragraphs: [
          'Now run your server in the terminal: npm run dev. The terminal should print: Server is running and listening on http://localhost:5000.',
          'Because an Express server is not a graphical webpage, how do you interact with it?'
        ],
        table: {
          headers: ['Testing Method', 'Tool / Environment', 'How to Use It'],
          rows: [
            ['Web Browser', 'Google Chrome / Firefox', 'Enter http://localhost:5000/api/health into the URL address bar. You will see the raw JSON response formatted on your screen! (Note: Browsers can only test GET requests this way).'],
            ['Terminal CLI', 'curl command', 'Run: curl http://localhost:5000/api/health in a second terminal tab to see the JSON string response.'],
            ['API Client Tools', 'Postman / Thunder Client / Insomnia', 'Specialized GUI applications for testing GET, POST, PUT, and DELETE requests with custom request headers and JSON bodies. Thunder Client is a great free VS Code extension!']
          ]
        }
      }
    ],
    keyPoints: [
      'Express runs inside Node.js in the terminal on a server machine, NOT inside the browser.',
      'Initialize Express projects with npm init -y and configure "type": "module" in package.json.',
      'Use nodemon during development to automatically restart the server on file saves.',
      'app.listen(PORT) keeps the server process running and listening on a network port.',
      'Test your endpoints in the browser (for GET), with curl, or using tools like Postman or Thunder Client in VS Code.'
    ],
    relatedTopicIds: ['express-what-is-node', 'express-basics-server', 'env-nodejs-npm', 'fullstack-architecture'],
    prevTopicId: 'express-what-is-node',
    nextTopicId: 'express-basics-server'
  },
  {
    id: 'express-basics-server',
    slug: 'creating-a-server',
    technology: 'express',
    techName: 'Express.js',
    category: 'Express Basics',
    title: 'Creating a Server & Routing',
    shortDescription: 'Initializing Express apps, listening on ports, HTTP methods (GET, POST, PUT, DELETE), and URL parameters.',
    estimatedMinutes: 12,
    breadcrumbs: ['Express.js', 'Express Basics', 'Server & Routing'],
    sections: [
      {
        id: 'server-setup',
        heading: 'Building a Minimal Express Server',
        paragraphs: [
          'Creating a server in Express requires three simple steps: importing express, instantiating the app instance, defining routes, and binding to a network port with app.listen().'
        ],
        codeExample: {
          language: 'javascript',
          code: `import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware to automatically parse JSON request bodies
app.use(express.json());

// 1. GET: Retrieve resources
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

// 2. GET with Route Parameters (:id)
app.get('/api/users/:userId', (req, res) => {
  const { userId } = req.params; // Access dynamic URL segments
  res.status(200).json({ id: userId, username: \`user_\${userId}\` });
});

// 3. POST: Create resources
app.post('/api/users', (req, res) => {
  const { username, email } = req.body; // Parsed by express.json()
  res.status(201).json({ id: Date.now(), username, email, created: true });
});

// Start listening for inbound connections
app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});`,
          explanationPoints: [
            'app.use(express.json()) parses incoming Content-Type: application/json payloads and populates req.body.',
            'Route parameters (:userId) capture variable values from URL segments via req.params.',
            'Query parameters (?page=2&limit=10) are accessible via req.query.',
            'res.status(201).json(...) chains the HTTP status code and serializes the JavaScript object to JSON.'
          ],
          commonMistakes: [
            'Forgetting app.use(express.json()), which causes req.body to be undefined on POST/PUT requests!',
            'Failing to send a response (res.send, res.json), leaving the client browser hanging until it times out.'
          ]
        }
      }
    ],
    keyPoints: [
      'app.listen(port) starts the HTTP server socket.',
      'Routes match HTTP method + URL path combinations (app.get, app.post, app.put, app.delete).',
      'Always chain status codes explicitly using res.status(code).json(data).'
    ],
    relatedTopicIds: ['express-what-is-node', 'express-middleware', 'express-rest-apis'],
    prevTopicId: 'express-what-is-node',
    nextTopicId: 'express-middleware'
  },
  {
    id: 'express-middleware',
    slug: 'middleware',
    technology: 'express',
    techName: 'Express.js',
    category: 'Middleware',
    title: 'Middleware Functions & Error Handlers',
    shortDescription: 'The request-response pipeline, next() invocation, built-in vs custom middleware, and central error handlers.',
    estimatedMinutes: 14,
    breadcrumbs: ['Express.js', 'Middleware', 'Middleware'],
    sections: [
      {
        id: 'what-is-middleware',
        heading: 'The Pipeline Architecture',
        paragraphs: [
          'Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle, typically denoted by a variable named next.',
          'Middleware functions can execute arbitrary code, make changes to the request and response objects, end the request-response cycle, or call next() to pass control to the subsequent middleware function.'
        ],
        codeExample: {
          language: 'javascript',
          code: `import express from 'express';

const app = express();

// 1. Custom Logging Middleware (runs on EVERY request)
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] \${req.method} \${req.url}\`);
  next(); // CRUCIAL: Pass control to the next handler!
});

// 2. Authentication Protection Middleware (Route-specific)
function requireAuth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing Bearer Token' });
  }
  // Token exists, proceed to handler
  next();
}

// Protected route applying middleware
app.get('/api/account/billing', requireAuth, (req, res) => {
  res.json({ balance: 450.00 });
});

// 3. Central Error-Handling Middleware (Must have 4 parameters: err, req, res, next)
app.use((err, req, res, next) => {
  console.error("Unhandled Server Error:", err.stack);
  res.status(err.status || 500).json({
    error: { message: err.message || 'Internal Server Error' }
  });
});`,
          explanationPoints: [
            'If a middleware function does not call next() or send a response (res.json), the request hangs indefinitely.',
            'Error-handling middleware functions MUST accept exactly 4 arguments: (err, req, res, next). Express uses function arity to identify error handlers.'
          ],
          commonMistakes: [
            'Forgetting to return after sending a response inside middleware (e.g. res.status(401).json(); next();), which triggers "Cannot set headers after they are sent to the client" errors.'
          ]
        }
      }
    ],
    keyPoints: [
      'Middleware intercepts requests before they reach the final route handler.',
      'Always call next() to forward execution, or send a response to terminate the cycle.',
      'Express identifies error-handling middleware by its 4-parameter signature (err, req, res, next).'
    ],
    relatedTopicIds: ['express-basics-server', 'express-rest-apis', 'express-security'],
    prevTopicId: 'express-basics-server',
    nextTopicId: 'express-rest-apis'
  },
  {
    id: 'express-rest-apis',
    slug: 'rest-apis',
    technology: 'express',
    techName: 'Express.js',
    category: 'REST APIs',
    title: 'REST APIs & HTTP Status Codes',
    shortDescription: 'Representational State Transfer principles, resource naming, idempotency, and standard HTTP status codes.',
    estimatedMinutes: 13,
    breadcrumbs: ['Express.js', 'REST APIs', 'REST APIs & Status Codes'],
    sections: [
      {
        id: 'what-is-rest',
        heading: 'Principles of RESTful Design',
        paragraphs: [
          'REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use standard HTTP verbs to perform CRUD (Create, Read, Update, Delete) operations on resources named with plural nouns.'
        ],
        table: {
          headers: ['HTTP Method', 'CRUD Action', 'Endpoint URI Example', 'Idempotent?'],
          rows: [
            ['GET', 'Read', '/api/articles', 'Yes (Safe)'],
            ['POST', 'Create', '/api/articles', 'No (Creates new ID)'],
            ['PUT', 'Replace / Full Update', '/api/articles/:id', 'Yes'],
            ['PATCH', 'Partial Update', '/api/articles/:id', 'No (depends on op)'],
            ['DELETE', 'Delete', '/api/articles/:id', 'Yes']
          ]
        }
      },
      {
        id: 'status-codes-table',
        heading: 'Standard HTTP Status Codes',
        table: {
          headers: ['Code', 'Category', 'Meaning & Best Use Case'],
          rows: [
            ['200 OK', 'Success', 'Standard success response for GET, PUT, PATCH requests.'],
            ['201 Created', 'Success', 'Resource successfully created via POST.'],
            ['204 No Content', 'Success', 'Action completed successfully with no response body (e.g. DELETE).'],
            ['400 Bad Request', 'Client Error', 'Malformed request payload, missing fields, or invalid syntax.'],
            ['401 Unauthorized', 'Client Error', 'Authentication credentials are missing or invalid.'],
            ['403 Forbidden', 'Client Error', 'Authenticated user lacks permission to access this resource.'],
            ['404 Not Found', 'Client Error', 'The requested resource URI does not exist.'],
            ['500 Internal Server Error', 'Server Error', 'Unexpected server crash or unhandled runtime exception.']
          ]
        }
      }
    ],
    keyPoints: [
      'Name REST resources using plural nouns (/api/users, not /api/getUsers).',
      'Use HTTP methods correctly to communicate intent (GET, POST, PUT, PATCH, DELETE).',
      'Return semantic HTTP status codes (200, 201, 400, 401, 403, 404, 500).'
    ],
    relatedTopicIds: ['express-basics-server', 'express-middleware', 'express-security'],
    prevTopicId: 'express-middleware',
    nextTopicId: 'express-security'
  },
  {
    id: 'express-security',
    slug: 'security',
    technology: 'express',
    techName: 'Express.js',
    category: 'Security',
    title: 'Backend Security & Architecture',
    shortDescription: 'CORS, environment variables, SQL/NoSQL injection prevention, input validation, and layered controllers.',
    estimatedMinutes: 12,
    breadcrumbs: ['Express.js', 'Security', 'Backend Security & Architecture'],
    sections: [
      {
        id: 'production-security-practices',
        heading: 'Essential Backend Security Standards',
        paragraphs: [
          'Security is not an afterthought; it must be architected from day one. Web servers are continuously exposed to malicious probes, unauthorized scraping, and malformed payloads.'
        ],
        bulletPoints: [
          'Environment Variables: Never commit secrets, database passwords, or JWT signing keys to source control. Use process.env and .env.example templates.',
          'CORS (Cross-Origin Resource Sharing): Restrict which client domains can invoke your API endpoints using the cors package.',
          'Input Validation: Validate and sanitize every request body, query parameter, and header using validation libraries before passing data to databases.',
          'Helmet: Use helmet middleware to set secure HTTP response headers (X-Frame-Options, Content-Security-Policy).'
        ]
      },
      {
        id: 'layered-backend-architecture',
        heading: 'Layered Enterprise Architecture',
        paragraphs: [
          'Avoid dumping database queries and business logic directly into route definitions. Separate concerns cleanly into layers:'
        ],
        table: {
          headers: ['Layer', 'Directory', 'Responsibility'],
          rows: [
            ['Routes', 'src/routes/', 'Defines HTTP endpoints, methods, and applies route middleware.'],
            ['Controllers', 'src/controllers/', 'Extracts req data, validates inputs, coordinates services, sends res.'],
            ['Services', 'src/services/', 'Core business logic, algorithms, calculations, external API calls.'],
            ['Data Access (Models)', 'src/models/ or src/db/', 'Database queries, ORM schema definitions, and migrations.']
          ]
        }
      }
    ],
    keyPoints: [
      'Store all secrets strictly in environment variables; never hardcode credentials.',
      'Always validate and sanitize incoming client input at the controller boundary.',
      'Separate routes, controllers, and database services to ensure maintainability.'
    ],
    relatedTopicIds: ['express-rest-apis', 'fullstack-architecture', 'express-basics-server'],
    prevTopicId: 'express-rest-apis'
  }
];
