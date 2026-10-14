import { TopicItem } from '../types/curriculum';

export const REFERENCE_TOPICS: TopicItem[] = [
  {
    id: 'ref-html',
    slug: 'html-reference',
    technology: 'reference',
    techName: 'Reference',
    category: 'Cheatsheets',
    title: 'HTML5 Quick Reference',
    shortDescription: 'Comprehensive syntax reference for common HTML5 semantic tags, attributes, void elements, and document structure.',
    estimatedMinutes: 8,
    breadcrumbs: ['Reference', 'Cheatsheets', 'HTML Reference'],
    sections: [
      {
        id: 'semantic-tags-table',
        heading: 'Common HTML5 Semantic Elements',
        table: {
          headers: ['Element', 'Category', 'Description & Semantics'],
          rows: [
            ['<header>', 'Structure', 'Introductory banner, branding, or primary navigation wrapper.'],
            ['<nav>', 'Structure', 'Major section containing primary navigational links.'],
            ['<main>', 'Structure', 'The central, unique content of the document (only one per page).'],
            ['<article>', 'Content', 'Self-contained syndicated composition (blog post, news story).'],
            ['<section>', 'Content', 'Thematic grouping of content with its own heading.'],
            ['<aside>', 'Content', 'Tangentially related content (sidebar, callout, pull quote).'],
            ['<footer>', 'Structure', 'Footer for author info, copyright notice, and legal links.'],
            ['<figure>', 'Media', 'Self-contained media unit paired with optional <figcaption>.']
          ]
        }
      },
      {
        id: 'essential-attributes',
        heading: 'Global Attributes Reference',
        table: {
          headers: ['Attribute', 'Valid On', 'Purpose'],
          rows: [
            ['id', 'All elements', 'Unique document-wide identifier for CSS and DOM lookup.'],
            ['class', 'All elements', 'Space-separated list of styling classes.'],
            ['data-*', 'All elements', 'Custom data storage accessible via element.dataset in JS.'],
            ['aria-*', 'All elements', 'Accessible Rich Internet Applications accessibility role annotations.']
          ]
        }
      }
    ],
    keyPoints: [
      'Prefer semantic elements (<main>, <article>, <nav>) over generic <div> wrappers.',
      'Always include alt attributes on meaningful <img> elements for accessibility.',
      'Ensure form input elements are paired with explicit <label for="id"> tags.'
    ],
    relatedTopicIds: ['html-what-is-html', 'html-semantic-html', 'ref-css'],
    nextTopicId: 'ref-css'
  },
  {
    id: 'ref-css',
    slug: 'css-reference',
    technology: 'reference',
    techName: 'Reference',
    category: 'Cheatsheets',
    title: 'CSS3 Quick Reference',
    shortDescription: 'Fast lookup cheat sheet for Box Model, Flexbox properties, CSS Grid syntax, and responsive units.',
    estimatedMinutes: 9,
    breadcrumbs: ['Reference', 'Cheatsheets', 'CSS Reference'],
    sections: [
      {
        id: 'flexbox-cheat-sheet',
        heading: 'Flexbox Properties Cheat Sheet',
        table: {
          headers: ['Property', 'Applies To', 'Common Values'],
          rows: [
            ['display: flex', 'Container', 'flex, inline-flex'],
            ['flex-direction', 'Container', 'row, column, row-reverse, column-reverse'],
            ['justify-content', 'Container', 'flex-start, center, flex-end, space-between, space-around, space-evenly'],
            ['align-items', 'Container', 'stretch, center, flex-start, flex-end, baseline'],
            ['gap', 'Container', '0.5rem, 1rem, 24px (consistent child gutters)'],
            ['flex-grow', 'Item', '0 (default), 1 (expands to fill available space)'],
            ['flex-shrink', 'Item', '1 (default), 0 (prevents shrinking below content size)']
          ]
        }
      },
      {
        id: 'units-cheat-sheet',
        heading: 'CSS Units Comparison',
        table: {
          headers: ['Unit', 'Base Calculation', 'Best Practice Usage'],
          rows: [
            ['rem', 'Root font size (16px base)', 'Typography, paddings, margins, grid gaps.'],
            ['em', 'Local parent/element font size', 'Component-proportional padding (buttons, badges).'],
            ['%', 'Direct parent dimension', 'Fluid layout column widths, progress indicators.'],
            ['vh / vw', '1% of viewport height / width', 'Hero sections, full-height panels, modals.']
          ]
        }
      }
    ],
    keyPoints: [
      'Use box-sizing: border-box globally to simplify dimension math.',
      'Use Flexbox for 1D component layouts; use Grid for 2D macro layouts.',
      'Use rem units for scalable typography and layout spacing.'
    ],
    relatedTopicIds: ['css-layout-flexbox', 'css-layout-grid', 'ref-javascript'],
    prevTopicId: 'ref-html',
    nextTopicId: 'ref-javascript'
  },
  {
    id: 'ref-javascript',
    slug: 'javascript-reference',
    technology: 'reference',
    techName: 'Reference',
    category: 'Cheatsheets',
    title: 'JavaScript ES6+ Quick Reference',
    shortDescription: 'Array methods, string methods, object helpers, and Promise syntax reference.',
    estimatedMinutes: 10,
    breadcrumbs: ['Reference', 'Cheatsheets', 'JavaScript Reference'],
    sections: [
      {
        id: 'array-methods-ref',
        heading: 'High-Frequency Array Methods',
        table: {
          headers: ['Method', 'Returns', 'Mutates Original?', 'Purpose'],
          rows: [
            ['map(fn)', 'New Array', 'No', 'Transform every item into a new element.'],
            ['filter(fn)', 'New Array', 'No', 'Keep only items satisfying the boolean test.'],
            ['reduce(fn, init)', 'Accumulated Value', 'No', 'Roll entire array into a single accumulated value.'],
            ['find(fn)', 'Item or undefined', 'No', 'Retrieve the first item matching the predicate.'],
            ['some(fn)', 'Boolean', 'No', 'Check if at least one item satisfies condition.'],
            ['every(fn)', 'Boolean', 'No', 'Check if all items satisfy condition.'],
            ['slice(start, end)', 'New Array', 'No', 'Extract a shallow sub-slice of array.'],
            ['push(...items)', 'New length', 'Yes', 'Append items to end of array in place.']
          ]
        }
      },
      {
        id: 'string-methods-ref',
        heading: 'High-Frequency String Methods',
        table: {
          headers: ['Method', 'Returns', 'Description'],
          rows: [
            ['toUpperCase() / toLowerCase()', 'New String', 'Transform letter casing across all characters.'],
            ['includes(sub)', 'Boolean', 'Check if substring exists anywhere in string.'],
            ['startsWith(sub) / endsWith(sub)', 'Boolean', 'Check if string begins or terminates with substring.'],
            ['slice(start, end)', 'New String', 'Extract substring from index start to end (non-inclusive).'],
            ['trim()', 'New String', 'Remove leading and trailing whitespace.']
          ]
        }
      }
    ],
    keyPoints: [
      'All string methods return new strings (strings are immutable).',
      'Prefer pure array methods (map, filter) that do not mutate arrays in place.',
      'Always use strict equality (===) to avoid type coercion bugs.'
    ],
    relatedTopicIds: ['js-primitive-string', 'js-arrays', 'ref-react'],
    prevTopicId: 'ref-css',
    nextTopicId: 'ref-react'
  },
  {
    id: 'ref-react',
    slug: 'react-reference',
    technology: 'reference',
    techName: 'Reference',
    category: 'Cheatsheets',
    title: 'React Quick Reference',
    shortDescription: 'Hooks signatures, JSX syntax rules, component patterns, and lifecycle equivalents.',
    estimatedMinutes: 9,
    breadcrumbs: ['Reference', 'Cheatsheets', 'React Reference'],
    sections: [
      {
        id: 'react-hooks-ref',
        heading: 'Core React Hooks Cheat Sheet',
        table: {
          headers: ['Hook', 'Signature', 'Primary Purpose'],
          rows: [
            ['useState', 'const [state, setState] = useState(initial)', 'Declare reactive local component state.'],
            ['useEffect', 'useEffect(() => { ... return cleanup }, [deps])', 'Perform asynchronous side effects and subscriptions.'],
            ['useRef', 'const ref = useRef(initialValue)', 'Hold mutable values that do not trigger re-renders, or target DOM nodes.'],
            ['useMemo', 'const memoized = useMemo(() => compute(), [deps])', 'Cache expensive computation results between re-renders.'],
            ['useCallback', 'const fn = useCallback(() => handler(), [deps])', 'Memoize callback function references passed to optimized child components.']
          ]
        }
      }
    ],
    keyPoints: [
      'Rules of Hooks: Call hooks only at the top level of React functions.',
      'Never mutate state directly; always call setter functions or supply updater callbacks.',
      'Every list item in JSX requires a unique, stable key prop.'
    ],
    relatedTopicIds: ['react-state', 'react-hooks-useeffect', 'ref-express'],
    prevTopicId: 'ref-javascript',
    nextTopicId: 'ref-express'
  },
  {
    id: 'ref-express',
    slug: 'express-reference',
    technology: 'reference',
    techName: 'Reference',
    category: 'Cheatsheets',
    title: 'Express.js Quick Reference',
    shortDescription: 'Server bootstrapping, route handlers, req/res helpers, and middleware execution flow.',
    estimatedMinutes: 9,
    breadcrumbs: ['Reference', 'Cheatsheets', 'Express Reference'],
    sections: [
      {
        id: 'req-res-helpers',
        heading: 'Request and Response API Helpers',
        table: {
          headers: ['Object Property / Method', 'Type', 'Description'],
          rows: [
            ['req.params', 'Object', 'URL route parameters parsed from path tokens (e.g. /:id).'],
            ['req.query', 'Object', 'URL query string parameters parsed from search string (e.g. ?page=1).'],
            ['req.body', 'Object', 'Parsed JSON request payload (requires app.use(express.json())).'],
            ['req.headers', 'Object', 'Inbound HTTP request headers (authorization, user-agent).'],
            ['res.status(code)', 'Response', 'Set HTTP response status code (chains with json or send).'],
            ['res.json(data)', 'Response', 'Serialize JavaScript object to JSON and send with application/json header.'],
            ['res.sendStatus(code)', 'Response', 'Send HTTP status code with default status message body.']
          ]
        }
      }
    ],
    keyPoints: [
      'Always install express.json() middleware to enable req.body parsing.',
      'Middleware pipelines execute strictly in declaration order.',
      'Error handlers must have 4 parameters: (err, req, res, next).'
    ],
    relatedTopicIds: ['express-basics-server', 'express-middleware', 'ref-html'],
    prevTopicId: 'ref-react'
  }
];
