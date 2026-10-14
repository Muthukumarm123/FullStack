import { TopicItem } from '../types/curriculum';

export const CSS_TOPICS: TopicItem[] = [
  {
    id: 'css-what-is-css',
    slug: 'what-is-css',
    technology: 'css',
    techName: 'CSS',
    category: 'Basics',
    title: 'What is CSS?',
    shortDescription: 'Cascading Style Sheets: the presentation engine controlling layout, colors, typography, and responsive aesthetics.',
    estimatedMinutes: 8,
    breadcrumbs: ['CSS', 'Basics', 'What is CSS?'],
    sections: [
      {
        id: 'intro-to-css',
        heading: 'The Role of CSS in Modern Web Development',
        paragraphs: [
          'CSS stands for Cascading Style Sheets. While HTML builds the content structure, CSS controls how that content looks, scales, and adapts across devices.',
          'CSS decouples presentation from structure. This separation allows you to redesign an entire website across thousands of pages simply by modifying a single stylesheet, without altering a single line of HTML markup.'
        ]
      },
      {
        id: 'the-cascade',
        heading: 'What Does "Cascading" Mean?',
        paragraphs: [
          'The "Cascade" is the algorithmic rule set browsers use to resolve conflicts when multiple styles target the same element. It calculates precedence based on three core factors:'
        ],
        bulletPoints: [
          'Origin and Importance: Browser defaults (user agent stylesheet) < User styles < Author stylesheets (your CSS) < !important overrides.',
          'Specificity: An exact selector weighting metric calculating how specific a rule is (Inline style > ID > Class/Attribute/Pseudo-class > Element).',
          'Source Order: When two conflicting rules share identical specificity, the rule declared latest in the stylesheet wins.'
        ]
      },
      {
        id: 'linking-css',
        heading: 'How to Attach CSS to HTML',
        codeExample: {
          language: 'html',
          code: `<!-- 1. External Stylesheet (Standard Best Practice) -->
<link rel="stylesheet" href="theme.css">

<!-- 2. Internal Stylesheet (Within <head>) -->
<style>
  body {
    font-family: system-ui, sans-serif;
    color: #1e293b;
  }
</style>

<!-- 3. Inline Style (Specific Element Attribute - Discouraged) -->
<h1 style="color: #4f46e5; margin-bottom: 1rem;">Directly Styled</h1>`,
          explanationPoints: [
            '<link rel="stylesheet"> caches stylesheets across page visits, yielding the fastest performance.',
            '<style> blocks apply only to the specific HTML document.',
            'Inline style attributes bypass the cascade and make maintainability difficult.'
          ],
          commonMistakes: [
            'Overusing inline style attributes, making styles impossible to reuse or override globally.',
            'Not understanding the cascade, resorting to !important to force overrides.'
          ]
        }
      }
    ],
    keyPoints: [
      'CSS controls visual presentation, typography, colors, and layout.',
      'The cascade resolves conflicts via Importance, Specificity, and Source Order.',
      'Always prefer external stylesheets linked via the <link> tag in <head>.'
    ],
    relatedTopicIds: ['css-syntax', 'css-selectors', 'html-semantic-html'],
    nextTopicId: 'css-syntax'
  },
  {
    id: 'css-syntax',
    slug: 'syntax',
    technology: 'css',
    techName: 'CSS',
    category: 'Basics',
    title: 'CSS Syntax',
    shortDescription: 'Selectors, property declarations, values, semicolons, and curly braces.',
    estimatedMinutes: 8,
    breadcrumbs: ['CSS', 'Basics', 'Syntax'],
    sections: [
      {
        id: 'rule-anatomy',
        heading: 'Anatomy of a CSS Rule',
        paragraphs: [
          'A CSS stylesheet is made up of rule-sets. A rule-set begins with a selector to target elements, followed by a declaration block enclosed in curly braces { }.'
        ],
        codeExample: {
          language: 'css',
          code: `/* Selector targets elements matching this pattern */
.btn-primary {
  /* Property : Value ; */
  background-color: #2563eb;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
}`,
          explanationPoints: [
            '.btn-primary is the selector targeting all elements with class="btn-primary".',
            'background-color is the CSS property describing which style attribute to adjust.',
            '#2563eb is the value assigned to that property.',
            'The colon (:) separates property and value.',
            'The semicolon (;) terminates each individual declaration statement.'
          ],
          commonMistakes: [
            'Missing a trailing semicolon, which causes the browser to discard subsequent declarations.',
            'Misspelling property names (e.g. colour instead of color).'
          ]
        }
      }
    ],
    keyPoints: [
      'A rule consists of a selector and a declaration block enclosed in { } braces.',
      'Declarations are composed of property: value; pairs.',
      'Every property declaration must end with a semicolon.'
    ],
    relatedTopicIds: ['css-what-is-css', 'css-selectors', 'css-properties'],
    prevTopicId: 'css-what-is-css',
    nextTopicId: 'css-selectors'
  },
  {
    id: 'css-selectors',
    slug: 'selectors',
    technology: 'css',
    techName: 'CSS',
    category: 'Basics',
    title: 'CSS Selectors',
    shortDescription: 'Targeting elements with tag names, classes, IDs, attribute queries, and pseudo-classes.',
    estimatedMinutes: 11,
    breadcrumbs: ['CSS', 'Basics', 'Selectors'],
    sections: [
      {
        id: 'selectors-overview',
        heading: 'Pattern Matching in CSS',
        paragraphs: [
          'Selectors define which HTML elements are affected by CSS styles. Mastering selectors allows you to style elements precisely without adding redundant classes everywhere.'
        ]
      },
      {
        id: 'selector-types',
        heading: 'Core Selector Categories',
        codeExample: {
          language: 'css',
          code: `/* 1. Element Selector: Targets all <h1> tags */
h1 { font-size: 2rem; }

/* 2. Class Selector: Targets class="card" */
.card { padding: 1.5rem; }

/* 3. ID Selector: Targets id="navbar" (Highest specificity) */
#navbar { position: sticky; top: 0; }

/* 4. Descendant Selector: Any <a> inside .nav */
.nav a { color: #475569; }

/* 5. Direct Child Selector: <li> directly inside .menu */
.menu > li { list-style: none; }

/* 6. Pseudo-Class: Dynamic user interaction state */
button:hover { background-color: #1d4ed8; }
input:focus { outline: 2px solid #3b82f6; }

/* 7. Structural Pseudo-Class: Alternating rows */
tr:nth-child(even) { background-color: #f8fafc; }`,
          explanationPoints: [
            'Element selectors apply broadly to all matching tags.',
            'Class selectors (.) are modular and should be the workhorse of your stylesheet.',
            'ID selectors (#) have very high specificity and should be used sparingly.',
            ':hover and :focus enhance interactive UI feedback for mouse and keyboard users.'
          ],
          commonMistakes: [
            'Relying on ID selectors for styling, creating specificity wars that cannot be cleanly overridden.',
            'Neglecting :focus-visible states, which breaks keyboard accessibility.'
          ]
        }
      },
      {
        id: 'specificity-hierarchy',
        heading: 'Specificity Hierarchy Table',
        table: {
          headers: ['Selector Category', 'Specificity Weight', 'Example'],
          rows: [
            ['Inline Style', '(1, 0, 0, 0)', 'style="color: red;"'],
            ['ID Selector', '(0, 1, 0, 0)', '#header-banner'],
            ['Class / Attribute / Pseudo-class', '(0, 0, 1, 0)', '.card, [type="text"], :hover'],
            ['Element / Pseudo-element', '(0, 0, 0, 1)', 'p, div, ::before, ::after'],
            ['Universal Selector', '(0, 0, 0, 0)', '*']
          ]
        }
      }
    ],
    keyPoints: [
      'Class selectors (.) provide the most maintainable and reusable styling hooks.',
      'Specificity resolves conflicting styles mathematically (Inline > ID > Class > Element).',
      'Always design visible :focus and :hover styles for accessibility.'
    ],
    relatedTopicIds: ['css-syntax', 'css-properties', 'css-box-model-content'],
    prevTopicId: 'css-syntax',
    nextTopicId: 'css-properties'
  },
  {
    id: 'css-properties',
    slug: 'properties',
    technology: 'css',
    techName: 'CSS',
    category: 'Basics',
    title: 'Properties & Values',
    shortDescription: 'Understanding the keys and values that define colors, typography, dimensions, and backgrounds.',
    estimatedMinutes: 9,
    breadcrumbs: ['CSS', 'Basics', 'Properties'],
    sections: [
      {
        id: 'properties-values',
        heading: 'How Properties Define Visual Traits',
        paragraphs: [
          'CSS properties represent the visual parameters you want to adjust—such as font-size, line-height, width, background-color, or border.',
          'Each property accepts a defined grammar of valid values. Assigning an invalid value causes the browser parser to ignore only that declaration.'
        ]
      },
      {
        id: 'common-properties-breakdown',
        heading: 'Essential CSS Properties',
        table: {
          headers: ['Property', 'Purpose', 'Sample Valid Values'],
          rows: [
            ['color', 'Foreground text color', '#0f172a, rgb(15, 23, 42), currentColor'],
            ['font-size', 'Size of typographic glyphs', '1rem, 16px, clamp(1rem, 2vw, 2.5rem)'],
            ['line-height', 'Vertical distance between text baselines', '1.5, 1.625, 24px'],
            ['background-color', 'Surface fill behind content', '#ffffff, transparent'],
            ['border', 'Shorthand for width, style, and color', '1px solid #e2e8f0']
          ]
        }
      }
    ],
    keyPoints: [
      'Properties are standardized keywords defined by W3C specifications.',
      'Use shorthand properties (like border and margin) to write concise CSS.',
      'Always test for property fallbacks when utilizing cutting-edge CSS features.'
    ],
    relatedTopicIds: ['css-colors', 'css-units', 'css-box-model-content'],
    prevTopicId: 'css-selectors',
    nextTopicId: 'css-colors'
  },
  {
    id: 'css-colors',
    slug: 'colors',
    technology: 'css',
    techName: 'CSS',
    category: 'Basics',
    title: 'Colors',
    shortDescription: 'Hex codes, RGB, RGBA, HSL, modern color-mix, and contrast accessibility.',
    estimatedMinutes: 9,
    breadcrumbs: ['CSS', 'Basics', 'Colors'],
    sections: [
      {
        id: 'color-notations',
        heading: 'Color Formats in Modern CSS',
        paragraphs: [
          'CSS supports multiple color spaces and notations. Choosing the right notation helps with theme design, translucency, and accessibility.'
        ],
        codeExample: {
          language: 'css',
          code: `/* Hexadecimal Notation (6 or 8 digits with alpha) */
.hex-example { color: #4f46e5; }
.hex-alpha   { color: #4f46e580; } /* 50% opacity */

/* RGB / RGBA: Red, Green, Blue (0-255) */
.rgb-example { background-color: rgb(79, 70, 229); }
.rgba-alpha  { background-color: rgba(79, 70, 229, 0.15); }

/* HSL: Hue (0-360 deg), Saturation (%), Lightness (%) */
/* Ideal for generating accessible palettes and tint scales */
.hsl-primary { background-color: hsl(243, 75%, 59%); }
.hsl-light   { background-color: hsl(243, 75%, 95%); }`,
          explanationPoints: [
            'Hex is compact and ubiquitous in web design files.',
            'RGB represents computer display channels directly.',
            'HSL makes programmatic color tweaks intuitive: adjust Lightness to create hover or active shades without changing hue!'
          ],
          commonMistakes: [
            'Insufficient contrast between text color and background, violating WCAG AA minimum contrast ratio (4.5:1 for body text).'
          ]
        }
      }
    ],
    keyPoints: [
      'Use HSL when designing dynamic color systems and state variations.',
      'Ensure a minimum 4.5:1 contrast ratio for standard text and 3:1 for large headers.',
      'Alpha transparency can be expressed as a 4th parameter in rgba or via 8-digit hex.'
    ],
    relatedTopicIds: ['css-units', 'css-box-model-content'],
    prevTopicId: 'css-properties',
    nextTopicId: 'css-units'
  },
  {
    id: 'css-units',
    slug: 'units',
    technology: 'css',
    techName: 'CSS',
    category: 'Basics',
    title: 'Units',
    shortDescription: 'Pixels, rem, em, percentages, viewport units (vh, vw), and responsive scaling.',
    estimatedMinutes: 10,
    breadcrumbs: ['CSS', 'Basics', 'Units'],
    sections: [
      {
        id: 'absolute-vs-relative',
        heading: 'Absolute vs. Relative Units',
        paragraphs: [
          'CSS units determine the size of elements, margins, padding, and font sizes. They are split into two categories:'
        ],
        bulletPoints: [
          'Absolute Units (px, pt, cm): Fixed physical measurements that do not scale relative to user preferences or container dimensions.',
          'Relative Units (rem, em, %, vh, vw): Scale dynamically relative to the root font size, parent element, or browser viewport dimensions.'
        ]
      },
      {
        id: 'unit-breakdown-table',
        heading: 'Unit Reference Table',
        table: {
          headers: ['Unit', 'Relative To', 'Primary Recommended Use Case'],
          rows: [
            ['rem', 'Root <html> font-size (typically 16px)', 'Typography, paddings, margins, component spacing'],
            ['em', 'Current element font-size', 'Spacing tightly tied to text size (like button padding or icons)'],
            ['%', 'Direct parent dimension', 'Responsive widths, progress bars, split columns'],
            ['vh / vw', '1% of viewport height / width', 'Hero sections, full-screen backdrops, modal overlays'],
            ['px', 'Physical device screen pixel', 'Hairline borders (1px solid), fine shadows']
          ]
        },
        callout: {
          type: 'best_practice',
          title: 'Prefer rem for Typography and Layout',
          text: 'Using rem ensures that if a visually impaired user increases their browser default font size from 16px to 24px, your entire website scales proportionally without breaking!'
        }
      }
    ],
    keyPoints: [
      'Use rem as your default unit for font sizes and spacing to preserve user accessibility preferences.',
      'Use px primarily for 1px borders and decorative hairline details.',
      'Use percentages (%) for flexible container widths.'
    ],
    relatedTopicIds: ['css-box-model-content', 'css-box-sizing', 'css-responsive-design'],
    prevTopicId: 'css-colors',
    nextTopicId: 'css-box-model-content'
  },
  {
    id: 'css-box-model-content',
    slug: 'box-model',
    technology: 'css',
    techName: 'CSS',
    category: 'Box Model',
    title: 'The CSS Box Model',
    shortDescription: 'The fundamental layout geometry governing Content, Padding, Border, and Margin on every web element.',
    estimatedMinutes: 12,
    breadcrumbs: ['CSS', 'Box Model', 'Box Model'],
    sections: [
      {
        id: 'what-is-the-box-model',
        heading: 'Every Element is a Box',
        paragraphs: [
          'In CSS, every single element rendered on a page is treated as a rectangular box. Even circular avatars or curved buttons are rectangular boxes under the hood.',
          'The Box Model describes the four concentric geometric layers that dictate how much space an element occupies and how it interacts with neighboring elements.'
        ],
        diagram: {
          type: 'box_model',
          title: 'The Concentric Layers of the Box Model',
          description: 'Margin (outer spacing) → Border (boundary stroke) → Padding (inner clearance) → Content (actual text/media)'
        }
      },
      {
        id: 'four-layers-explained',
        heading: 'The Four Concentric Layers',
        bulletPoints: [
          'Content: The innermost area where text, images, or child elements render. Sized via width and height.',
          'Padding: The transparent clearance space between the content and the border. Background colors and images paint through the padding.',
          'Border: The perimeter line wrapping the padding and content. Has width, style, and color.',
          'Margin: The transparent whitespace surrounding the outside of the border, pushing adjacent elements away.'
        ]
      },
      {
        id: 'box-sizing-comparison',
        heading: 'The box-sizing Revolution',
        paragraphs: [
          'By default, browsers calculate an element’s total width as: width + padding-left + padding-right + border-left + border-right. This causes elements to overflow their containers when you add padding!'
        ],
        codeExample: {
          language: 'css',
          code: `/* Standard Modern CSS Reset for Box Sizing */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Now, width represents the entire visible boundary! */
.container {
  width: 400px;
  padding: 24px;
  border: 2px solid #cbd5e1;
  /* Total rendered width remains exactly 400px! */
}`,
          explanationPoints: [
            'box-sizing: border-box forces padding and borders to be absorbed within the declared width.',
            'Without border-box, the container above would have expanded to 400 + 48 + 4 = 452px wide, frequently breaking responsive grids.'
          ],
          commonMistakes: [
            'Forgetting the border-box reset on new projects, causing unexpected layout wrapping and horizontal scrollbars.'
          ]
        }
      }
    ],
    keyPoints: [
      'Every HTML element is a box composed of Content, Padding, Border, and Margin.',
      'Padding is internal space; Margin is external space between neighbors.',
      'Always apply box-sizing: border-box globally across all elements via a universal reset.'
    ],
    relatedTopicIds: ['css-units', 'css-layout-display', 'css-layout-flexbox'],
    prevTopicId: 'css-units',
    nextTopicId: 'css-layout-display'
  },
  {
    id: 'css-layout-display',
    slug: 'display',
    technology: 'css',
    techName: 'CSS',
    category: 'Layout',
    title: 'Display Property',
    shortDescription: 'Block, inline, inline-block, none, flex, and grid rendering behaviors.',
    estimatedMinutes: 10,
    breadcrumbs: ['CSS', 'Layout', 'Display'],
    sections: [
      {
        id: 'display-overview',
        heading: 'Controlling Flow with Display',
        paragraphs: [
          'The display property is the single most fundamental layout setting in CSS. It determines how an element participates in the document flow and how its children are laid out.'
        ],
        table: {
          headers: ['Value', 'Flow Behavior', 'Dimensions & Spacing Support'],
          rows: [
            ['block', 'Starts on a new line, expands to 100% container width', 'Respects width, height, padding, margin'],
            ['inline', 'Sits inline within running text without breaking lines', 'Ignores width and height; vertical padding/margin do not push neighbors'],
            ['inline-block', 'Sits inline with text flow like a word', 'Fully respects width, height, and all padding/margins'],
            ['flex', 'Initiates a 1-dimensional Flexbox layout context for children', 'Children become flexible items aligned along main/cross axes'],
            ['grid', 'Initiates a 2-dimensional Grid layout context for children', 'Children align to declared rows and columns'],
            ['none', 'Removes element completely from document flow and accessibility tree', 'Element is completely invisible and occupies 0px']
          ]
        }
      }
    ],
    keyPoints: [
      'block takes up full width; inline sits alongside text.',
      'inline-block provides inline flow while supporting width and height.',
      'display: none removes the element from the layout and screen readers entirely.'
    ],
    relatedTopicIds: ['css-box-model-content', 'css-layout-flexbox', 'css-layout-grid'],
    prevTopicId: 'css-box-model-content',
    nextTopicId: 'css-layout-flexbox'
  },
  {
    id: 'css-layout-flexbox',
    slug: 'flexbox',
    technology: 'css',
    techName: 'CSS',
    category: 'Layout',
    title: 'Flexbox',
    shortDescription: '1D flexible layout system: main axis, cross axis, justify-content, align-items, and gap.',
    estimatedMinutes: 14,
    breadcrumbs: ['CSS', 'Layout', 'Flexbox'],
    sections: [
      {
        id: 'flexbox-intro',
        heading: 'Mastering One-Dimensional Layouts',
        paragraphs: [
          'Flexbox (Flexible Box Layout) was created to distribute space and align items along a single dimension—either horizontally as a row or vertically as a column.',
          'Before Flexbox, aligning elements vertically or distributing space evenly required cumbersome floats or table display hacks. Flexbox makes alignment predictable and fluid.'
        ],
        diagram: {
          type: 'flexbox_axes',
          title: 'The Two Axes of Flexbox',
          description: 'Main Axis (controlled by justify-content) & Cross Axis (controlled by align-items)'
        }
      },
      {
        id: 'flexbox-properties-code',
        heading: 'Flex Container & Flex Item Properties',
        codeExample: {
          language: 'css',
          code: `/* Flex Container Rules */
.nav-bar {
  display: flex;
  flex-direction: row;        /* main axis is horizontal */
  justify-content: space-between; /* distribute items to opposite edges */
  align-items: center;        /* vertical alignment along cross axis */
  gap: 1.5rem;                /* clean spacing between items */
}

/* Flex Item Rules */
.nav-search {
  flex-grow: 1;               /* expands to occupy remaining free space */
}

.nav-avatar {
  flex-shrink: 0;             /* prevents image from shrinking */
}`,
          explanationPoints: [
            'display: flex transforms the parent into a flex container.',
            'justify-content aligns items along the Main Axis (flex-start, center, flex-end, space-between, space-around, space-evenly).',
            'align-items aligns items along the Cross Axis (stretch, center, flex-start, flex-end).',
            'gap provides consistent gutter spacing between children without hacky margins.',
            'flex-grow tells an item whether it can expand to fill leftover space.'
          ],
          commonMistakes: [
            'Confusing justify-content (main axis) with align-items (cross axis).',
            'Applying justify-content or align-items to the child item instead of the flex parent container.'
          ]
        }
      }
    ],
    keyPoints: [
      'Flexbox manages items along one primary axis at a time (row or column).',
      'justify-content controls main axis distribution; align-items controls cross axis alignment.',
      'Always use gap on the flex container for child spacing instead of margin offsets.'
    ],
    relatedTopicIds: ['css-layout-display', 'css-layout-grid', 'css-responsive-design'],
    prevTopicId: 'css-layout-display',
    nextTopicId: 'css-layout-grid'
  },
  {
    id: 'css-layout-grid',
    slug: 'grid',
    technology: 'css',
    techName: 'CSS',
    category: 'Layout',
    title: 'CSS Grid',
    shortDescription: '2D grid layout system: grid-template-columns, fr fractional units, gap, and grid areas.',
    estimatedMinutes: 14,
    breadcrumbs: ['CSS', 'Layout', 'Grid'],
    sections: [
      {
        id: 'grid-intro',
        heading: 'Two-Dimensional Layout Mastery',
        paragraphs: [
          'While Flexbox excels at 1D rows or columns, CSS Grid is designed for 2D layouts where you need to orchestrate rows and columns simultaneously.',
          'With CSS Grid, you define the grid framework on the container, and child elements naturally snap into the designated cells or span across multiple tracks.'
        ]
      },
      {
        id: 'grid-code-example',
        heading: 'Responsive Grid with fr Units and repeat()',
        codeExample: {
          language: 'css',
          code: `.card-grid {
  display: grid;
  /* Auto-fill columns that are at least 280px, expanding evenly */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Specific item spanning across columns */
.featured-card {
  grid-column: span 2;
}`,
          explanationPoints: [
            'display: grid establishes the 2D layout context.',
            'repeat(auto-fit, minmax(280px, 1fr)) creates an intrinsically responsive grid without needing media queries!',
            '1fr stands for one fractional unit of free available grid space.',
            'grid-column: span 2 allows an item to stretch across two column tracks.'
          ],
          commonMistakes: [
            'Using CSS Grid for simple 1D navbars where Flexbox is lighter and more suitable.',
            'Fixed pixel widths on grid tracks that cause horizontal overflow on mobile screens.'
          ]
        }
      }
    ],
    importantDifferences: [
      {
        title: 'Flexbox vs CSS Grid',
        itemA: {
          label: 'Flexbox (1-Dimensional)',
          explanation: 'Arranges items along a single axis (either row OR column). Content-first design where items define their own dimensions.'
        },
        itemB: {
          label: 'CSS Grid (2-Dimensional)',
          explanation: 'Coordinates items across rows AND columns simultaneously. Layout-first design where container tracks dictate child placement.'
        },
        keyTakeaway: 'Use Flexbox for component alignment (navbars, tags); use Grid for macro page layouts and card grids.'
      }
    ],
    keyPoints: [
      'CSS Grid manages rows and columns simultaneously in 2 dimensions.',
      'The fr unit represents a fraction of available space.',
      'Combine repeat(), auto-fit, and minmax() for fluid, responsive layouts without media queries.'
    ],
    relatedTopicIds: ['css-layout-flexbox', 'css-responsive-design'],
    prevTopicId: 'css-layout-flexbox',
    nextTopicId: 'css-responsive-design'
  },
  {
    id: 'css-responsive-design',
    slug: 'responsive-design',
    technology: 'css',
    techName: 'CSS',
    category: 'Layout',
    title: 'Responsive Design & Media Queries',
    shortDescription: 'Mobile-first methodology, viewport breakpoints, fluid typography, and media query syntax.',
    estimatedMinutes: 12,
    breadcrumbs: ['CSS', 'Layout', 'Responsive Design'],
    sections: [
      {
        id: 'mobile-first-concept',
        heading: 'The Mobile-First Philosophy',
        paragraphs: [
          'Responsive Web Design (RWD) ensures web interfaces render cleanly and functionally across every screen resolution—from a 375px mobile phone to a 2560px ultra-wide monitor.',
          'In modern development, we write CSS "Mobile-First": base styles target small screens without media queries, and min-width media queries progressively layer on desktop enhancements as screen real estate increases.'
        ]
      },
      {
        id: 'media-query-syntax',
        heading: 'Media Query Implementation',
        codeExample: {
          language: 'css',
          code: `/* 1. Base Styles (Mobile First: applies to all screens) */
.content-wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

/* 2. Tablet Breakpoint (768px and up) */
@media (min-width: 768px) {
  .content-wrapper {
    padding: 2rem;
    flex-direction: row;
  }
}

/* 3. Desktop Breakpoint (1024px and up) */
@media (min-width: 1024px) {
  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem;
  }
}`,
          explanationPoints: [
            '@media (min-width: 768px) activates only when the viewport width is 768px or wider.',
            'Mobile-first using min-width avoids style overwrites and minimizes CSS cascade complexity.',
            'max-width: 1200px and margin: 0 auto neatly centers desktop containers without edge stretching.'
          ],
          commonMistakes: [
            'Writing desktop-first using max-width queries, which leads to heavy desktop overrides on mobile devices.',
            'Using arbitrary breakpoint values instead of standard device tiers (e.g. 640px, 768px, 1024px, 1280px).'
          ]
        }
      }
    ],
    keyPoints: [
      'Always start with mobile base styles, then layer desktop features using min-width.',
      'Standard breakpoints: Mobile (<640px), Tablet (768px), Desktop (1024px+).',
      'Test responsiveness directly in browser developer tools device mode.'
    ],
    relatedTopicIds: ['css-layout-grid', 'css-layout-flexbox', 'html-document-structure'],
    prevTopicId: 'css-layout-grid'
  }
];
