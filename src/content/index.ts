import { TopicItem, TechNavigation } from '../types/curriculum';
import { ENVIRONMENT_TOPICS } from './environmentTopics';
import { HTML_TOPICS } from './htmlTopics';
import { CSS_TOPICS } from './cssTopics';
import { JS_TOPICS } from './jsTopics';
import { REACT_TOPICS } from './reactTopics';
import { EXPRESS_TOPICS } from './expressTopics';
import { FULLSTACK_TOPICS } from './fullstackTopics';
import { REFERENCE_TOPICS } from './referenceTopics';

export const ALL_TOPICS: TopicItem[] = [
  ...ENVIRONMENT_TOPICS,
  ...HTML_TOPICS,
  ...CSS_TOPICS,
  ...JS_TOPICS,
  ...REACT_TOPICS,
  ...EXPRESS_TOPICS,
  ...FULLSTACK_TOPICS,
  ...REFERENCE_TOPICS
];

export const TOPIC_MAP = new Map<string, TopicItem>(
  ALL_TOPICS.map(topic => [topic.id, topic])
);

export function getTopicById(id: string): TopicItem | undefined {
  return TOPIC_MAP.get(id);
}

export const TECH_NAVIGATION_CONFIG: TechNavigation[] = [
  {
    id: 'environment',
    name: 'Dev Environment',
    iconName: 'Terminal',
    description: 'Editor, Terminal, Node, Git & DevTools',
    groups: [
      {
        id: 'env-setup-group',
        title: 'Setup & Tooling',
        children: [
          { id: 'env-getting-started', title: 'Toolchain Overview', topicId: 'env-getting-started' },
          { id: 'env-vscode-setup', title: 'VS Code Setup', topicId: 'env-vscode-setup' },
          { id: 'env-terminal-cli', title: 'Terminal & CLI Essentials', topicId: 'env-terminal-cli' },
          { id: 'env-nodejs-npm', title: 'Node.js & npm Setup', topicId: 'env-nodejs-npm' },
          { id: 'env-browser-devtools', title: 'Browser DevTools', topicId: 'env-browser-devtools' },
          { id: 'env-git-github', title: 'Git & GitHub Setup', topicId: 'env-git-github' },
          { id: 'env-vite-project-scaffolding', title: 'Project Scaffolding (Vite)', topicId: 'env-vite-project-scaffolding' },
          { id: 'env-react-express-local-setup', title: 'Connecting React & Express', topicId: 'env-react-express-local-setup' }
        ]
      }
    ]
  },
  {
    id: 'html',
    name: 'HTML',
    iconName: 'Code2',
    description: 'Document structure & semantic elements',
    groups: [
      {
        id: 'html-basics',
        title: 'Basics',
        children: [
          { id: 'html-what-is-html', title: 'What is HTML?', topicId: 'html-what-is-html' },
          { id: 'html-document-structure', title: 'Document Structure', topicId: 'html-document-structure' },
          { id: 'html-elements', title: 'Elements', topicId: 'html-elements' },
          { id: 'html-attributes', title: 'Attributes', topicId: 'html-attributes' },
          { id: 'html-text', title: 'Text', topicId: 'html-text' },
          { id: 'html-links', title: 'Links', topicId: 'html-links' },
          { id: 'html-images', title: 'Images', topicId: 'html-images' },
          { id: 'html-lists', title: 'Lists', topicId: 'html-lists' },
          { id: 'html-tables', title: 'Tables', topicId: 'html-tables' },
          { id: 'html-forms', title: 'Forms', topicId: 'html-forms' },
          { id: 'html-semantic-html', title: 'Semantic HTML', topicId: 'html-semantic-html' }
        ]
      }
    ]
  },
  {
    id: 'css',
    name: 'CSS',
    iconName: 'Palette',
    description: 'Styling, layout systems & responsiveness',
    groups: [
      {
        id: 'css-basics',
        title: 'Basics',
        children: [
          { id: 'css-what-is-css', title: 'What is CSS?', topicId: 'css-what-is-css' },
          { id: 'css-syntax', title: 'Syntax', topicId: 'css-syntax' },
          { id: 'css-selectors', title: 'Selectors', topicId: 'css-selectors' },
          { id: 'css-properties', title: 'Properties & Values', topicId: 'css-properties' },
          { id: 'css-colors', title: 'Colors', topicId: 'css-colors' },
          { id: 'css-units', title: 'Units', topicId: 'css-units' }
        ]
      },
      {
        id: 'css-box-model',
        title: 'Box Model',
        children: [
          { id: 'css-box-model-content', title: 'Content & Padding', topicId: 'css-box-model-content' }
        ]
      },
      {
        id: 'css-layout',
        title: 'Layout',
        children: [
          { id: 'css-layout-display', title: 'Display Property', topicId: 'css-layout-display' },
          { id: 'css-layout-flexbox', title: 'Flexbox', topicId: 'css-layout-flexbox' },
          { id: 'css-layout-grid', title: 'CSS Grid', topicId: 'css-layout-grid' },
          { id: 'css-responsive-design', title: 'Responsive Design', topicId: 'css-responsive-design' }
        ]
      }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    iconName: 'Braces',
    description: 'Programming logic, async, & DOM APIs',
    groups: [
      {
        id: 'js-fundamentals',
        title: 'Fundamentals',
        children: [
          { id: 'js-what-is-javascript', title: 'What is JavaScript?', topicId: 'js-what-is-javascript' },
          { id: 'js-variables', title: 'Variables (let, const, var)', topicId: 'js-variables' }
        ]
      },
      {
        id: 'js-data-types',
        title: 'Data Types',
        children: [
          {
            id: 'js-data-types-primitive',
            title: 'Primitive Types',
            children: [
              { id: 'js-primitive-string', title: 'String', topicId: 'js-primitive-string' },
              { id: 'js-primitive-number', title: 'Number & BigInt', topicId: 'js-primitive-number' },
              { id: 'js-primitive-boolean', title: 'Boolean & Null & Undefined', topicId: 'js-primitive-boolean' }
            ]
          },
          {
            id: 'js-data-types-non-primitive',
            title: 'Non-Primitive',
            children: [
              { id: 'js-objects-group', title: 'Object', topicId: 'js-objects' }
            ]
          }
        ]
      },
      {
        id: 'js-operators-group',
        title: 'Operators',
        children: [
          { id: 'js-operators', title: 'Operators & Expressions', topicId: 'js-operators' }
        ]
      },
      {
        id: 'js-control-flow-group',
        title: 'Control Flow',
        children: [
          { id: 'js-control-flow', title: 'Conditionals (if, switch)', topicId: 'js-control-flow' }
        ]
      },
      {
        id: 'js-loops-group',
        title: 'Loops',
        children: [
          { id: 'js-loops', title: 'Loops (for, while, for...of)', topicId: 'js-loops' }
        ]
      },
      {
        id: 'js-functions-group',
        title: 'Functions',
        children: [
          { id: 'js-functions', title: 'Functions & Scope', topicId: 'js-functions' }
        ]
      },
      {
        id: 'js-arrays-group',
        title: 'Arrays',
        children: [
          { id: 'js-arrays', title: 'Arrays & Functional Methods', topicId: 'js-arrays' }
        ]
      },
      {
        id: 'js-objects-group-sec',
        title: 'Objects',
        children: [
          { id: 'js-objects-destructuring', title: 'Objects & Destructuring', topicId: 'js-objects' }
        ]
      },
      {
        id: 'js-dom-group',
        title: 'DOM',
        children: [
          { id: 'js-dom', title: 'DOM Manipulation & Events', topicId: 'js-dom' }
        ]
      },
      {
        id: 'js-async-group',
        title: 'Asynchronous JavaScript',
        children: [
          { id: 'js-async', title: 'Promises, Async/Await & Fetch', topicId: 'js-async' }
        ]
      }
    ]
  },
  {
    id: 'react',
    name: 'React',
    iconName: 'Atom',
    description: 'Component architecture, Hooks & UI state',
    groups: [
      {
        id: 'react-intro',
        title: 'Introduction',
        children: [
          { id: 'react-what-is-react', title: 'What is React?', topicId: 'react-what-is-react' },
          { id: 'react-environment-setup', title: 'React Environment Setup', topicId: 'react-environment-setup' }
        ]
      },
      {
        id: 'react-components-group',
        title: 'Components',
        children: [
          { id: 'react-components', title: 'Components & Architecture', topicId: 'react-components' }
        ]
      },
      {
        id: 'react-jsx-group',
        title: 'JSX',
        children: [
          { id: 'react-jsx', title: 'JSX Syntax & Expressions', topicId: 'react-jsx' }
        ]
      },
      {
        id: 'react-props-group',
        title: 'Props',
        children: [
          { id: 'react-props', title: 'Props: Passing Data', topicId: 'react-props' }
        ]
      },
      {
        id: 'react-state-group',
        title: 'State',
        children: [
          { id: 'react-state', title: 'State & useState Hook', topicId: 'react-state' }
        ]
      },
      {
        id: 'react-events-group',
        title: 'Events',
        children: [
          { id: 'react-events', title: 'Events & Forms', topicId: 'react-events' }
        ]
      },
      {
        id: 'react-lists-group',
        title: 'Lists',
        children: [
          { id: 'react-lists', title: 'Rendering Lists & Keys', topicId: 'react-lists' }
        ]
      },
      {
        id: 'react-hooks-group',
        title: 'Hooks',
        children: [
          { id: 'react-hooks-useeffect', title: 'useEffect & Hooks Rules', topicId: 'react-hooks-useeffect' }
        ]
      },
      {
        id: 'react-api-group',
        title: 'API Integration',
        children: [
          { id: 'react-api-integration', title: 'API Integration & Loading States', topicId: 'react-api-integration' }
        ]
      }
    ]
  },
  {
    id: 'express',
    name: 'Express.js',
    iconName: 'Server',
    description: 'Backend routing, middleware & REST APIs',
    groups: [
      {
        id: 'express-intro',
        title: 'Introduction',
        children: [
          { id: 'express-what-is-node', title: 'What is Node & Express?', topicId: 'express-what-is-node' },
          { id: 'express-environment-setup', title: 'Express Environment Setup', topicId: 'express-environment-setup' }
        ]
      },
      {
        id: 'express-basics',
        title: 'Express Basics',
        children: [
          { id: 'express-basics-server', title: 'Creating a Server & Routing', topicId: 'express-basics-server' }
        ]
      },
      {
        id: 'express-middleware-group',
        title: 'Middleware',
        children: [
          { id: 'express-middleware', title: 'Middleware & Error Handling', topicId: 'express-middleware' }
        ]
      },
      {
        id: 'express-rest-group',
        title: 'REST APIs',
        children: [
          { id: 'express-rest-apis', title: 'REST APIs & Status Codes', topicId: 'express-rest-apis' }
        ]
      },
      {
        id: 'express-security-group',
        title: 'Security & Architecture',
        children: [
          { id: 'express-security', title: 'Backend Security & Layers', topicId: 'express-security' }
        ]
      }
    ]
  },
  {
    id: 'fullstack',
    name: 'Full-Stack',
    iconName: 'Layers',
    description: 'End-to-end integration, databases & auth',
    groups: [
      {
        id: 'fullstack-core',
        title: 'Integration',
        children: [
          { id: 'fullstack-architecture', title: 'Full-Stack Architecture', topicId: 'fullstack-architecture' },
          { id: 'fullstack-api-communication', title: 'API Communication & CORS', topicId: 'fullstack-api-communication' },
          { id: 'fullstack-databases', title: 'Databases (SQL vs NoSQL)', topicId: 'fullstack-databases' },
          { id: 'fullstack-auth', title: 'Authentication & Authorization', topicId: 'fullstack-auth' }
        ]
      }
    ]
  },
  {
    id: 'reference',
    name: 'Reference',
    iconName: 'BookMarked',
    description: 'Quick lookup cheat sheets & syntax tables',
    groups: [
      {
        id: 'reference-sheets',
        title: 'Cheatsheets',
        children: [
          { id: 'ref-html', title: 'HTML Reference', topicId: 'ref-html' },
          { id: 'ref-css', title: 'CSS Reference', topicId: 'ref-css' },
          { id: 'ref-javascript', title: 'JavaScript Reference', topicId: 'ref-javascript' },
          { id: 'ref-react', title: 'React Reference', topicId: 'ref-react' },
          { id: 'ref-express', title: 'Express Reference', topicId: 'ref-express' }
        ]
      }
    ]
  }
];

// Helper to search topics by keyword across titles, content, categories
export function searchTopics(query: string, techFilter?: string): TopicItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return ALL_TOPICS.filter(topic => {
    if (techFilter && techFilter !== 'all' && topic.technology !== techFilter) {
      return false;
    }

    const titleMatch = topic.title.toLowerCase().includes(normalized);
    const descMatch = topic.shortDescription.toLowerCase().includes(normalized);
    const categoryMatch = topic.category.toLowerCase().includes(normalized);
    const breadcrumbMatch = topic.breadcrumbs.some(b => b.toLowerCase().includes(normalized));

    // Also search in section headings and paragraphs
    const sectionMatch = topic.sections.some(s =>
      s.heading.toLowerCase().includes(normalized) ||
      (s.paragraphs && s.paragraphs.some(p => p.toLowerCase().includes(normalized)))
    );

    return titleMatch || descMatch || categoryMatch || breadcrumbMatch || sectionMatch;
  });
}
