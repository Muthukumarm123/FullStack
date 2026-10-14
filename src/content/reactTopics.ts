import { TopicItem } from '../types/curriculum';

export const REACT_TOPICS: TopicItem[] = [
  {
    id: 'react-what-is-react',
    slug: 'what-is-react',
    technology: 'react',
    techName: 'React',
    category: 'Introduction',
    title: 'What is React?',
    shortDescription: 'The declarative, component-driven frontend library for building modern user interfaces.',
    estimatedMinutes: 9,
    breadcrumbs: ['React', 'Introduction', 'What is React?'],
    sections: [
      {
        id: 'react-overview',
        heading: 'Declarative Component-Based Engineering',
        paragraphs: [
          'React is an open-source JavaScript library developed by Meta for building user interfaces. Instead of manually querying and updating DOM elements imperatively with document.querySelector and appendChild, React allows you to design declarative views for each state of your application.',
          'React handles DOM updates efficiently by reconciling differences between a virtual tree representation and the real browser DOM, re-rendering only the nodes that genuinely changed.'
        ]
      },
      {
        id: 'imperative-vs-declarative',
        heading: 'Imperative vs. Declarative Paradigm',
        table: {
          headers: ['Paradigm', 'Approach', 'Example Mental Model'],
          rows: [
            ['Imperative (Traditional DOM)', 'Step-by-step instructions on HOW to change the DOM', '"Find button with ID x, change background to red, set text to Loading"'],
            ['Declarative (React)', 'Declare WHAT the UI should look like for a given state', '"If isLoading is true, show <Spinner />, otherwise show <Button />"']
          ]
        }
      }
    ],
    importantDifferences: [
      {
        title: 'React vs Traditional Vanilla JavaScript',
        itemA: {
          label: 'Vanilla DOM Mutation',
          explanation: 'Requires manual state synchronization, direct element lookups, and manual event cleanup. Code quickly becomes tangled as apps scale.',
          code: 'button.innerText = count;\nbutton.classList.toggle("active");'
        },
        itemB: {
          label: 'React State-Driven UI',
          explanation: 'UI is a pure function of state: UI = f(state). Change the state, and React automatically updates the interface accurately.',
          code: '<button className={isActive ? "active" : ""}>{count}</button>'
        },
        keyTakeaway: 'React eliminates manual DOM synchronization by recalculating UI from state updates.'
      }
    ],
    keyPoints: [
      'React is a declarative library where UI = f(state).',
      'Components are reusable, self-contained building blocks.',
      'React manages DOM mutations efficiently through its reconciliation algorithm.'
    ],
    relatedTopicIds: ['react-environment-setup', 'react-components', 'react-jsx', 'react-props'],
    nextTopicId: 'react-environment-setup'
  },
  {
    id: 'react-environment-setup',
    slug: 'react-environment-setup',
    technology: 'react',
    techName: 'React',
    category: 'Introduction',
    title: 'Setting Up a React Environment: Where & How to Write React',
    shortDescription: 'Where React code lives, creating a project with Vite, understanding the folder structure, running the local dev server, and seeing live updates.',
    estimatedMinutes: 12,
    breadcrumbs: ['React', 'Introduction', 'React Environment Setup'],
    sections: [
      {
        id: 'where-is-react-written',
        heading: 'Where Do You Actually Write and Run React?',
        paragraphs: [
          'A very common question for beginners is: "Where do I write React? Is there a special app or do I write it in an HTML file?"',
          'In modern web development, you write React inside .jsx or .tsx (TypeScript) files within a project directory on your computer, using a code editor such as Visual Studio Code.',
          'Crucially, web browsers do not natively understand JSX markup (<MyComponent />). Therefore, you run a local build tool (such as Vite) powered by Node.js in your terminal. Vite automatically compiles your JSX into standard JavaScript and serves your application locally on your computer at http://localhost:5173.'
        ],
        callout: {
          type: 'note',
          title: 'React Runs in the Browser, Built by Node.js',
          text: 'Node.js is used on your computer to run the compiler and local development server, but the compiled React JavaScript code runs directly inside the end user\'s web browser (Client-Side Rendering).'
        }
      },
      {
        id: 'step-by-step-react-setup',
        heading: 'Step-by-Step: Creating a React Project with Vite',
        paragraphs: [
          'Follow these exact steps in your terminal to set up a brand new React environment from scratch:'
        ],
        codeExample: {
          language: 'bash',
          code: `# Step 1: Scaffold a new React application with Vite
npm create vite@latest my-react-app -- --template react-ts

# Step 2: Navigate inside your new project folder
cd my-react-app

# Step 3: Install all dependencies listed in package.json
npm install

# Step 4: Launch the fast local development server
npm run dev

# Step 5: Open your project in Visual Studio Code
code .`,
          explanationPoints: [
            'npm create vite@latest creates the project template with pre-configured build scripts.',
            '--template react-ts chooses React with TypeScript (or use react for standard JavaScript).',
            'cd my-react-app enters the newly created directory.',
            'npm install downloads the React library and Vite build engine into the node_modules/ folder.',
            'npm run dev starts the local server. The terminal will display a local URL: http://localhost:5173.',
            'Opening http://localhost:5173 in Google Chrome or Firefox displays your live React application!'
          ],
          commonMistakes: [
            'Trying to open index.html by double-clicking it in your computer\'s file manager (file:/// protocol). You must access it via http://localhost:5173 through the running dev server!',
            'Running npm run dev before running npm install, which produces a "vite: command not found" error.'
          ]
        }
      },
      {
        id: 'where-code-lives-anatomy',
        heading: 'Where Does Your Code Go? Project Anatomy',
        paragraphs: [
          'When you open the project in VS Code, you will see a clean directory structure. Here is exactly where each piece of code belongs:'
        ],
        table: {
          headers: ['File / Folder Path', 'What It Is', 'How You Use It'],
          rows: [
            ['index.html', 'The HTML Shell', 'Contains the root container: <div id="root"></div>. You rarely edit this, except to change the page <title> or add web fonts.'],
            ['src/main.tsx', 'The Mount Bridge', 'The JavaScript entry point that imports ReactDOM and renders your top-level component into the root DOM element.'],
            ['src/App.tsx', 'Your Primary Component', 'The central starting place where you write your UI markup, declare state, and import other components.'],
            ['src/components/', 'Reusable Components', 'A folder you create to hold individual component files (e.g. Navbar.tsx, Button.tsx, Card.tsx).'],
            ['src/index.css', 'Global Styles', 'Where you define global CSS rules, typography, and Tailwind CSS imports.'],
            ['package.json', 'Project Manifest', 'Lists your installed dependencies (react, react-dom) and scripts (dev, build, preview).']
          ]
        }
      },
      {
        id: 'the-editing-experience',
        heading: 'The Live Editing Experience (Hot Module Replacement)',
        paragraphs: [
          'With your terminal running npm run dev and your browser open at http://localhost:5173, open src/App.tsx in VS Code.',
          'Change the text inside an <h1> tag and press Save (Ctrl+S / Cmd+S). Because Vite features Hot Module Replacement (HMR), the browser updates instantaneously without losing your application state and without requiring a full manual page refresh!'
        ]
      }
    ],
    keyPoints: [
      'You author React code in .jsx or .tsx files inside VS Code.',
      'Scaffold new React projects in seconds using npm create vite@latest.',
      'Always install dependencies with npm install and launch the local server with npm run dev.',
      'View and test your application in your browser at http://localhost:5173, not via file://.',
      'Write your primary UI starting inside src/App.tsx and modularize components into src/components/.'
    ],
    relatedTopicIds: ['react-what-is-react', 'react-components', 'react-jsx', 'env-nodejs-npm'],
    prevTopicId: 'react-what-is-react',
    nextTopicId: 'react-components'
  },
  {
    id: 'react-components',
    slug: 'components',
    technology: 'react',
    techName: 'React',
    category: 'Components',
    title: 'Components & Architecture',
    shortDescription: 'Functional components, props interfaces, component composition, and building reusable design systems.',
    estimatedMinutes: 11,
    breadcrumbs: ['React', 'Components', 'Components'],
    sections: [
      {
        id: 'what-is-a-component',
        heading: 'The Building Blocks of React',
        paragraphs: [
          'A React component is an independent, reusable piece of user interface. Conceptually, components are like JavaScript functions: they accept arbitrary inputs (called props) and return React elements describing what should appear on screen.'
        ],
        codeExample: {
          language: 'jsx',
          code: `// A clean reusable Button component
function Button({ variant = "primary", children, onClick }) {
  const baseClasses = "px-4 py-2 font-medium rounded-lg transition-colors";
  const variantClasses = variant === "primary"
    ? "bg-indigo-600 text-white hover:bg-indigo-700"
    : "bg-slate-100 text-slate-700 hover:bg-slate-200";

  return (
    <button className={\`\${baseClasses} \${variantClasses}\`} onClick={onClick}>
      {children}
    </button>
  );
}`,
          explanationPoints: [
            'Component names MUST always start with a capital letter (Button, not button) so React can distinguish them from native HTML elements.',
            'Props are received as the first argument, frequently destructured ({ variant, children, onClick }).',
            'children is a special built-in prop representing whatever content sits between opening and closing tags (<Button>Save</Button>).'
          ],
          commonMistakes: [
            'Naming a component with a lowercase letter (e.g. function button()), causing React to treat it as a native HTML tag.',
            'Declaring components inside another component function, which causes state resets and unnecessary component re-mounts.'
          ]
        }
      }
    ],
    keyPoints: [
      'Always capitalize component names.',
      'Deconstruct complex screens into small, focused, single-responsibility components.',
      'Use composition (children prop) to create flexible layouts.'
    ],
    relatedTopicIds: ['react-what-is-react', 'react-jsx', 'react-props'],
    prevTopicId: 'react-what-is-react',
    nextTopicId: 'react-jsx'
  },
  {
    id: 'react-jsx',
    slug: 'jsx',
    technology: 'react',
    techName: 'React',
    category: 'JSX',
    title: 'JSX Syntax & Expressions',
    shortDescription: 'JavaScript XML syntax extension, embedding expressions with curly braces, and conditional rendering.',
    estimatedMinutes: 10,
    breadcrumbs: ['React', 'JSX', 'JSX'],
    sections: [
      {
        id: 'what-is-jsx',
        heading: 'JavaScript XML Syntax Extension',
        paragraphs: [
          'JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like markup directly inside JavaScript files alongside your component logic.',
          'Under the hood, build tools (like Vite or Babel) compile JSX into standard React.createElement() or jsx() function calls.'
        ],
        codeExample: {
          language: 'jsx',
          code: `function UserCard({ user }) {
  const formattedJoinDate = new Date(user.joinedAt).toLocaleDateString();

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Member since: {formattedJoinDate}</p>

      {/* Conditional rendering using ternary or logical AND */}
      {user.isVerified ? (
        <span className="badge-verified">Verified Account</span>
      ) : (
        <span className="badge-pending">Pending Verification</span>
      )}
    </div>
  );
}`,
          explanationPoints: [
            'Curly braces { } allow you to evaluate any valid JavaScript expression (variables, functions, ternary logic).',
            'Use className instead of class, and htmlFor instead of for, because class and for are reserved keywords in JavaScript.',
            'All tags must be explicitly closed, including void elements (<img />, <input />).'
          ],
          commonMistakes: [
            'Returning multiple adjacent root elements without wrapping them in a single parent tag or a React Fragment (<>...</>).',
            'Using if statements directly inside JSX curly braces (use ternary operator or extract to variables instead).'
          ]
        }
      }
    ],
    keyPoints: [
      'JSX combines the markup of HTML with the full power of JavaScript.',
      'Use curly braces { } to interpolate dynamic expressions.',
      'Always close every tag and use className instead of class.'
    ],
    relatedTopicIds: ['react-components', 'react-props', 'react-state'],
    prevTopicId: 'react-components',
    nextTopicId: 'react-props'
  },
  {
    id: 'react-props',
    slug: 'props',
    technology: 'react',
    techName: 'React',
    category: 'Props',
    title: 'Props: Passing Data to Components',
    shortDescription: 'Unidirectional data flow, prop destructuring, default props, and passing callbacks.',
    estimatedMinutes: 11,
    breadcrumbs: ['React', 'Props', 'Props'],
    sections: [
      {
        id: 'what-are-props',
        heading: 'Component Inputs and Data Flow',
        paragraphs: [
          'Props (short for properties) are the inputs passed from a parent component down to a child component. In React, data flows strictly unidirectionally from top to bottom.',
          'Crucially, props are read-only and immutable from the child’s perspective. A child component must never attempt to mutate the props it receives.'
        ],
        codeExample: {
          language: 'jsx',
          code: `// Parent Component passing props
function Dashboard() {
  const handleItemSelect = (id) => console.log("Selected:", id);

  return (
    <main>
      <CourseItem 
        title="Full-Stack Node.js Architecture" 
        lessonsCount={24} 
        isPopular={true} 
        onSelect={handleItemSelect}
      />
    </main>
  );
}

// Child Component receiving props
function CourseItem({ title, lessonsCount, isPopular = false, onSelect }) {
  return (
    <div className="course-card" onClick={() => onSelect(title)}>
      <h4>{title}</h4>
      <p>{lessonsCount} lessons</p>
      {isPopular && <span>Popular Course</span>}
    </div>
  );
}`,
          explanationPoints: [
            'Props can be strings, numbers, booleans, objects, arrays, or functions (callbacks).',
            'Default values can be assigned directly during destructuring (isPopular = false).',
            'Passing functions as props enables child components to communicate events back up to their parents.'
          ],
          commonMistakes: [
            'Trying to reassign props inside the child component (e.g. props.title = "New Title"), which violates React’s pure function rules.'
          ]
        }
      }
    ],
    keyPoints: [
      'Props flow strictly downwards from parent to child (unidirectional data flow).',
      'Props are read-only; never mutate them.',
      'Pass callback functions via props to allow children to notify parents of events.'
    ],
    relatedTopicIds: ['react-components', 'react-state', 'react-jsx'],
    prevTopicId: 'react-jsx',
    nextTopicId: 'react-state'
  },
  {
    id: 'react-state',
    slug: 'state',
    technology: 'react',
    techName: 'React',
    category: 'State',
    title: 'State & the useState Hook',
    shortDescription: 'Component memory, triggering re-renders, asynchronous state updates, and updater functions.',
    estimatedMinutes: 14,
    breadcrumbs: ['React', 'State', 'State & useState'],
    sections: [
      {
        id: 'what-is-state',
        heading: 'Component Memory and Re-Rendering',
        paragraphs: [
          'While props are passed into a component from outside, state is internal to a component—its private memory. When state values change, React automatically schedules a re-render of the component and its children to update the DOM.',
          'State is declared using the useState Hook. Calling useState returns an array with exactly two elements: the current state value, and a dispatch setter function to update that value.'
        ],
        diagram: {
          type: 'react_state_flow',
          title: 'The React State Update Cycle',
          description: 'User Action → setState(newValue) → Re-render Scheduled → Virtual DOM Diffing → Real DOM Patched'
        }
      },
      {
        id: 'usestate-usage',
        heading: 'Declaring and Updating State',
        codeExample: {
          language: 'jsx',
          code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Updater function syntax when new state depends on previous state!
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="counter-box">
      <p>Current count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}`,
          explanationPoints: [
            'const [count, setCount] = useState(0) uses array destructuring to declare state and its setter.',
            'Never mutate state directly (e.g., count = count + 1); always call the setter function (setCount).',
            'When new state calculations depend on the previous state, pass an updater function (prevCount => prevCount + 1) to guarantee accuracy during batching.'
          ],
          commonMistakes: [
            'Mutating arrays or objects in state directly (e.g. items.push(newItem)) instead of creating copies with spread ([...items, newItem]).',
            'Expecting state to update immediately on the next line of code (state updates are scheduled asynchronously).'
          ]
        }
      }
    ],
    importantDifferences: [
      {
        title: 'Props vs State',
        itemA: {
          label: 'Props (External Input)',
          explanation: 'Passed down by parent component. Read-only and immutable within the child.',
          code: '<UserBadge name="Alex" role="Admin" />'
        },
        itemB: {
          label: 'State (Internal Memory)',
          explanation: 'Created and managed privately inside the component. Can change over time via its setter function.',
          code: 'const [isOpen, setIsOpen] = useState(false);'
        },
        keyTakeaway: 'Props are configured by the parent; State is owned and controlled by the component itself.'
      }
    ],
    keyPoints: [
      'State represents data that changes over time and triggers re-renders.',
      'Use the useState Hook to declare state variables.',
      'Treat state as immutable: create copies when updating objects and arrays.',
      'Use updater functions (prev => prev + 1) when new state depends on previous state.'
    ],
    relatedTopicIds: ['react-props', 'react-hooks-useeffect', 'react-events'],
    prevTopicId: 'react-props',
    nextTopicId: 'react-events'
  },
  {
    id: 'react-events',
    slug: 'events',
    technology: 'react',
    techName: 'React',
    category: 'Events',
    title: 'Events & Controlled Forms',
    shortDescription: 'Synthetic events, event handling, input binding, and preventing default form submission.',
    estimatedMinutes: 12,
    breadcrumbs: ['React', 'Events', 'Events & Forms'],
    sections: [
      {
        id: 'synthetic-events',
        heading: 'React Synthetic Event Wrapper',
        paragraphs: [
          'React normalizes browser events by wrapping them in a SyntheticEvent object. This guarantees that event handlers behave identically across Chrome, Safari, Firefox, and Edge.',
          'Event handlers are named using camelCase (onClick, onChange, onSubmit) and accept functions rather than strings.'
        ],
        codeExample: {
          language: 'jsx',
          code: `import { useState } from 'react';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents standard full-page browser refresh
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={query} // Controlled component: input value reflects state
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search web dev topics..."
      />
      <button type="submit">Search</button>
    </form>
  );
}`,
          explanationPoints: [
            'Controlled components have their value attribute bound to state, and an onChange listener to update that state.',
            'event.preventDefault() stops the native HTML form submit action, allowing client-side JavaScript to handle the submission.'
          ],
          commonMistakes: [
            'Calling the function immediately inside JSX: onClick={handleClick()} instead of passing the reference: onClick={handleClick}.'
          ]
        }
      }
    ],
    keyPoints: [
      'Event names in React use camelCase (onClick, onSubmit).',
      'Pass function references to event handlers, not function invocation calls.',
      'Use controlled components for inputs to keep React state as the single source of truth.'
    ],
    relatedTopicIds: ['react-state', 'react-lists', 'html-forms'],
    prevTopicId: 'react-state',
    nextTopicId: 'react-lists'
  },
  {
    id: 'react-lists',
    slug: 'lists',
    technology: 'react',
    techName: 'React',
    category: 'Lists',
    title: 'Rendering Lists & Keys',
    shortDescription: 'Iterating with Array.map, the necessity of unique key props, and avoiding array index keys.',
    estimatedMinutes: 11,
    breadcrumbs: ['React', 'Lists', 'Rendering Lists'],
    sections: [
      {
        id: 'rendering-lists-intro',
        heading: 'Transforming Arrays into React Elements',
        paragraphs: [
          'In React, you render collections of data by mapping over arrays using JavaScript’s native Array.prototype.map() method. Each mapped item returns a JSX element.'
        ],
        codeExample: {
          language: 'jsx',
          code: `const topics = [
  { id: "t1", title: "HTML Basics", completed: true },
  { id: "t2", title: "CSS Flexbox", completed: true },
  { id: "t3", title: "React State", completed: false }
];

function TopicList() {
  return (
    <ul className="topic-list">
      {topics.map(topic => (
        <li key={topic.id} className={topic.completed ? "done" : "todo"}>
          <span>{topic.title}</span>
        </li>
      ))}
    </ul>
  );
}`,
          explanationPoints: [
            'Every mapped item MUST have a unique, stable key prop (such as a database ID).',
            'React uses the key prop during reconciliation to identify which items were added, removed, or reordered.',
            'Without stable keys, reordering list items can produce severe visual bugs and state desynchronization.'
          ],
          commonMistakes: [
            'Using the array index as the key (e.g. key={index}) on dynamic lists that can be sorted, filtered, or deleted.',
            'Generating random numbers for keys (e.g. key={Math.random()}), which forces React to destroy and recreate the DOM node on every render!'
          ]
        }
      }
    ],
    keyPoints: [
      'Use Array.prototype.map() to project data arrays into JSX list items.',
      'Always supply a unique, stable key prop from your data model.',
      'Never use random values or array indices as keys for dynamic lists.'
    ],
    relatedTopicIds: ['react-jsx', 'js-arrays', 'react-hooks-useeffect'],
    prevTopicId: 'react-events',
    nextTopicId: 'react-hooks-useeffect'
  },
  {
    id: 'react-hooks-useeffect',
    slug: 'hooks',
    technology: 'react',
    techName: 'React',
    category: 'Hooks',
    title: 'React Hooks: useEffect & useRef',
    shortDescription: 'Side effects, dependency arrays, cleanup functions, DOM references, and custom hooks.',
    estimatedMinutes: 15,
    breadcrumbs: ['React', 'Hooks', 'Hooks & useEffect'],
    sections: [
      {
        id: 'what-are-hooks',
        heading: 'What are React Hooks?',
        paragraphs: [
          'Introduced in React 16.8, Hooks are special functions starting with "use" that allow functional components to "hook into" React state and lifecycle features.',
          'Rules of Hooks: 1. Only call Hooks at the top level of your component (never inside loops, conditions, or nested functions). 2. Only call Hooks from React function components or custom Hooks.'
        ]
      },
      {
        id: 'useeffect-lifecycle',
        heading: 'Managing Side Effects with useEffect',
        paragraphs: [
          'Side effects include data fetching, timers, manual DOM subscriptions, and logging. useEffect lets you synchronize your component with external systems.'
        ],
        codeExample: {
          language: 'jsx',
          code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true; // Prevents state updates on unmounted component
    setLoading(true);

    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        if (isSubscribed) {
          setUser(data);
          setLoading(false);
        }
      });

    // Cleanup function: runs before effect re-runs or when component unmounts!
    return () => {
      isSubscribed = false;
    };
  }, [userId]); // Dependency array: only re-runs when userId changes!

  if (loading) return <p>Loading profile...</p>;
  return <div><h3>{user.name}</h3></div>;
}`,
          explanationPoints: [
            'The dependency array [userId] tells React when to re-execute the effect.',
            'An empty dependency array [] runs the effect exactly once after the initial mount.',
            'Omitting the dependency array causes the effect to run after EVERY single re-render (often causing infinite loops!).',
            'The returned cleanup function unsubscribes listeners or cancels timers when the component unmounts.'
          ],
          commonMistakes: [
            'Omitting dependencies that are referenced inside the effect from the dependency array.',
            'Setting state inside useEffect without a dependency array, triggering an infinite render loop.'
          ]
        }
      }
    ],
    keyPoints: [
      'Only call hooks at the top level of components.',
      'useEffect handles asynchronous side effects and subscriptions.',
      'Always include all reactive values used inside the effect in its dependency array.',
      'Return a cleanup function to clear intervals, timeouts, or active listeners.'
    ],
    relatedTopicIds: ['react-state', 'react-api-integration', 'js-async'],
    prevTopicId: 'react-lists',
    nextTopicId: 'react-api-integration'
  },
  {
    id: 'react-api-integration',
    slug: 'api-integration',
    technology: 'react',
    techName: 'React',
    category: 'API Integration',
    title: 'API Integration & Remote Data',
    shortDescription: 'Fetching remote endpoints, managing idle/loading/success/error states, and optimistic UI.',
    estimatedMinutes: 13,
    breadcrumbs: ['React', 'API Integration', 'Data Fetching'],
    sections: [
      {
        id: 'the-four-states-of-data',
        heading: 'The 4 Essential States of Data Fetching',
        paragraphs: [
          'Robust frontend applications never assume network requests succeed instantly. Every asynchronous API call must account for four discrete states in the UI lifecycle:'
        ],
        bulletPoints: [
          'Idle: Initial state before the request has been triggered.',
          'Loading: Request in transit; display a spinner or skeleton placeholder.',
          'Success: Request succeeded; render the received payload.',
          'Error: Network timeout or 4xx/5xx HTTP failure; display a friendly retry message.'
        ]
      },
      {
        id: 'complete-fetch-pattern',
        heading: 'Production Fetch Hook Pattern',
        codeExample: {
          language: 'jsx',
          code: `import { useState, useEffect } from 'react';

function ArticleReader({ articleId }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchArticle() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(\`/api/articles/\${articleId}\`, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(\`Failed to fetch article (Status: \${response.status})\`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticle();
    return () => controller.abort(); // Cancel request if articleId changes quickly
  }, [articleId]);

  if (isLoading) return <div className="skeleton">Loading article...</div>;
  if (error) return <div className="error-box">Error: {error}</div>;
  if (!data) return null;

  return <article><h2>{data.title}</h2><p>{data.body}</p></article>;
}`,
          explanationPoints: [
            'AbortController cancels stale in-flight HTTP requests if the user navigates away before completion.',
            'Explicitly handling error and loading states guarantees the UI never remains in a frozen or broken state.'
          ],
          commonMistakes: [
            'Failing to handle HTTP status errors (like 404 or 500), leaving the component stuck on an indefinite loading spinner.'
          ]
        }
      }
    ],
    keyPoints: [
      'Always design distinct UI for Loading, Error, and Success states.',
      'Use AbortController to cancel superseded network requests.',
      'Check response.ok to catch 4xx/5xx status codes that fetch() does not reject natively.'
    ],
    relatedTopicIds: ['react-hooks-useeffect', 'js-async', 'express-rest-apis'],
    prevTopicId: 'react-hooks-useeffect'
  }
];
