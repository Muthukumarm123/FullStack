import { TopicItem } from '../types/curriculum';

export const FULLSTACK_TOPICS: TopicItem[] = [
  {
    id: 'fullstack-architecture',
    slug: 'fullstack-architecture',
    technology: 'fullstack',
    techName: 'Full-Stack',
    category: 'Architecture',
    title: 'Full-Stack Architecture & Integration',
    shortDescription: 'The end-to-end client-server model, decoupling SPAs from REST APIs, and production deployment boundaries.',
    estimatedMinutes: 14,
    breadcrumbs: ['Full-Stack', 'Architecture', 'Full-Stack Architecture'],
    sections: [
      {
        id: 'the-full-picture',
        heading: 'Connecting the Complete Web Stack',
        paragraphs: [
          'Full-Stack web development refers to developing both client-side interfaces (Frontend: HTML, CSS, React) and server-side systems (Backend: Node.js, Express, Databases).',
          'Modern web applications decouple the frontend client from the backend server. The client is compiled into static assets (HTML/JS/CSS bundles) deployed to Global CDNs, while the Express backend operates as an API server talking to databases and external services.'
        ],
        diagram: {
          type: 'custom',
          title: 'Decoupled Client-Server Production Topology',
          description: 'Client Browser (React SPA) ← [HTTPS / JSON] → Cloud API Server (Express.js) ← [TCP / Connection Pool] → Database (PostgreSQL / MongoDB)'
        }
      },
      {
        id: 'full-stack-flow',
        heading: 'A Complete User Action Walkthrough',
        paragraphs: [
          'Consider what happens when a user clicks "Save Profile":'
        ],
        numberedList: [
          '1. React captures user input from controlled state and dispatches a fetch() POST request.',
          '2. The browser serializes the JavaScript object into a JSON string and attaches an Authorization Bearer JWT header.',
          '3. Express receives the HTTP packets, parses the JSON payload with express.json(), and checks token authenticity in an auth middleware.',
          '4. The Express controller validates the data schema, runs business logic in a service layer, and issues a database UPDATE query.',
          '5. The database persists the record and returns the updated row to Express.',
          '6. Express responds with HTTP 200 OK and the updated JSON record.',
          '7. React receives the HTTP response, updates its local state via useState(), and renders an updated profile badge without reloading the page.'
        ]
      }
    ],
    keyPoints: [
      'Full-stack architecture separates presentation (React), business logic (Express), and persistence (Database).',
      'Communication occurs over HTTP through structured JSON payloads.',
      'Decoupled architectures allow mobile apps and web apps to share the exact same backend API.'
    ],
    relatedTopicIds: ['fullstack-api-communication', 'fullstack-databases', 'fullstack-auth'],
    nextTopicId: 'fullstack-api-communication'
  },
  {
    id: 'fullstack-api-communication',
    slug: 'api-communication',
    technology: 'fullstack',
    techName: 'Full-Stack',
    category: 'Integration',
    title: 'API Communication, CORS, & Payloads',
    shortDescription: 'Configuring Cross-Origin Resource Sharing, handling preflight OPTIONS requests, and JSON payload serialization.',
    estimatedMinutes: 12,
    breadcrumbs: ['Full-Stack', 'Integration', 'API Communication'],
    sections: [
      {
        id: 'cors-explained',
        heading: 'Understanding CORS in Modern Web Apps',
        paragraphs: [
          'By default, web browsers enforce the Same-Origin Policy (SOP) for security. If your React app runs on https://myfrontend.com, the browser blocks it from reading responses from https://api.mybackend.com unless the backend explicitly provides CORS headers.',
          'Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins other than its own from which a browser should permit loading resources.'
        ],
        codeExample: {
          language: 'javascript',
          code: `// Express server configured with CORS
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));`,
          explanationPoints: [
            'cors() automatically responds to browser preflight OPTIONS requests with Access-Control-Allow-Origin headers.',
            'Never leave origin: "*" in production if your endpoints accept authentication cookies or credentials.'
          ],
          commonMistakes: [
            'Trying to solve CORS issues by modifying client-side React code. CORS is enforced by the browser and must be configured on the server!'
          ]
        }
      }
    ],
    keyPoints: [
      'CORS is a browser security protocol, not a network firewall.',
      'CORS headers must be returned by the backend server.',
      'Preflight OPTIONS requests verify permissions before sending POST/PUT/DELETE calls.'
    ],
    relatedTopicIds: ['fullstack-architecture', 'fullstack-auth', 'express-security'],
    prevTopicId: 'fullstack-architecture',
    nextTopicId: 'fullstack-databases'
  },
  {
    id: 'fullstack-databases',
    slug: 'databases',
    technology: 'fullstack',
    techName: 'Full-Stack',
    category: 'Persistence',
    title: 'Databases: Relational vs. Document Stores',
    shortDescription: 'SQL (PostgreSQL, MySQL) vs NoSQL (MongoDB), schema migrations, and connection pooling.',
    estimatedMinutes: 13,
    breadcrumbs: ['Full-Stack', 'Persistence', 'Databases'],
    sections: [
      {
        id: 'sql-vs-nosql',
        heading: 'Choosing the Right Database',
        paragraphs: [
          'Full-stack applications require durable persistence to retain data between server restarts. Databases are broadly divided into two major paradigms:'
        ],
        table: {
          headers: ['Category', 'Examples', 'Data Model', 'Best Suited For'],
          rows: [
            ['Relational (SQL)', 'PostgreSQL, MySQL, SQLite', 'Structured tables with rows, columns, and foreign key relationships', 'E-commerce, financial systems, relational business domains with strict data integrity.'],
            ['Document (NoSQL)', 'MongoDB, Firestore', 'Flexible, nested JSON-like documents without rigid schemas', 'Rapid prototyping, polymorphic catalogs, hierarchical real-time data.']
          ]
        }
      }
    ],
    keyPoints: [
      'Relational databases (SQL) enforce strict relational consistency with schemas and foreign keys.',
      'Document databases (NoSQL) store semi-structured JSON objects.',
      'Always utilize connection pools and parameterized queries to prevent SQL injection vulnerabilities.'
    ],
    relatedTopicIds: ['fullstack-architecture', 'fullstack-auth'],
    prevTopicId: 'fullstack-api-communication',
    nextTopicId: 'fullstack-auth'
  },
  {
    id: 'fullstack-auth',
    slug: 'authentication',
    technology: 'fullstack',
    techName: 'Full-Stack',
    category: 'Security',
    title: 'Authentication & Authorization',
    shortDescription: 'JSON Web Tokens (JWT), session cookies, password hashing with bcrypt, and protected routes.',
    estimatedMinutes: 14,
    breadcrumbs: ['Full-Stack', 'Security', 'Authentication & Auth'],
    sections: [
      {
        id: 'authn-vs-authz',
        heading: 'Authentication vs. Authorization',
        paragraphs: [
          'Although frequently used interchangeably, Authentication and Authorization represent two distinct security questions:'
        ],
        bulletPoints: [
          'Authentication (AuthN): "Who are you?" Verifying user identity through credentials (email + hashed password, OAuth, passkeys).',
          'Authorization (AuthZ): "What are you allowed to do?" Verifying permissions and roles (e.g. Can this user delete this project?).'
        ],
        callout: {
          type: 'warning',
          title: 'Never Store Plaintext Passwords',
          text: 'Always hash passwords before storing them in your database using one-way adaptive cryptographic hashing functions like bcrypt or argon2.'
        }
      }
    ],
    keyPoints: [
      'Authentication proves identity; Authorization checks access rights.',
      'Passwords must always be hashed with bcrypt or argon2 before saving.',
      'Store auth tokens in secure, HTTP-only, SameSite cookies to protect against XSS token theft.'
    ],
    relatedTopicIds: ['express-security', 'fullstack-architecture'],
    prevTopicId: 'fullstack-databases'
  }
];
