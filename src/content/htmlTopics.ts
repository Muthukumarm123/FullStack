import { TopicItem } from '../types/curriculum';

export const HTML_TOPICS: TopicItem[] = [
  {
    id: 'html-what-is-html',
    slug: 'what-is-html',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'What is HTML?',
    shortDescription: 'The foundational markup language that defines the structure and meaning of web content.',
    estimatedMinutes: 8,
    breadcrumbs: ['HTML', 'Basics', 'What is HTML?'],
    sections: [
      {
        id: 'introduction',
        heading: 'Introduction to HyperText Markup Language',
        paragraphs: [
          'HTML stands for HyperText Markup Language. It is not a programming language; it is a declarative markup language that tells web browsers how to structure and present content on a screen.',
          'Every website on the internet, from simple blogs to complex applications like GitHub or Google Docs, delivers HTML to the browser. While CSS handles styling and JavaScript powers behavior, HTML provides the raw skeleton and semantic meaning of the page.'
        ]
      },
      {
        id: 'hypertext-and-markup',
        heading: 'What Does HyperText and Markup Mean?',
        bulletPoints: [
          'HyperText refers to text containing links to other texts. It is the connective tissue of the World Wide Web, allowing users to jump from one document to another with a single click.',
          'Markup refers to the special tags used to annotate plain text. When you wrap text in tags, you describe its purpose—for example, declaring that a sentence is a primary heading, a paragraph, or an item in a list.',
          'Language refers to the standardized set of syntax rules defined by the W3C and WHATWG consortia, ensuring every browser renders pages consistently.'
        ],
        callout: {
          type: 'note',
          title: 'HTML is Declarative',
          text: 'Unlike JavaScript, where you write step-by-step algorithms, HTML is declarative. You specify what content should be, and the browser handles rendering the elements on the viewport.'
        }
      },
      {
        id: 'how-browsers-read-html',
        heading: 'How Browsers Process HTML',
        paragraphs: [
          'When you enter a URL in your browser, the server returns an HTML document as a stream of raw bytes. The browser processes these bytes through several deterministic phases:',
          'First, it converts bytes into characters based on the document encoding (typically UTF-8). Next, it tokenizes characters into discrete start and end tags. Finally, it parses tokens into nodes and constructs the Document Object Model (DOM) tree in memory.'
        ],
        diagram: {
          type: 'dom_tree',
          title: 'From HTML Stream to Document Object Model (DOM)',
          description: 'Network Bytes → Characters → HTML Tokens → DOM Nodes → Render Tree'
        }
      },
      {
        id: 'simple-example',
        heading: 'A Minimal HTML Snippet',
        paragraphs: [
          'Here is the simplest valid representation of how HTML tags annotate content:'
        ],
        codeExample: {
          language: 'html',
          code: `<h1>Welcome to Modern Web Development</h1>
<p>HTML provides the structure that search engines and assistive technologies rely upon.</p>`,
          explanationPoints: [
            '<h1> represents a top-level heading. Search engines treat this as the primary topic of the page.',
            '<p> represents a paragraph of body text. Browsers automatically apply default top and bottom margins to separate paragraphs visually.'
          ],
          commonMistakes: [
            'Using multiple <h1> tags per page instead of maintaining a strict <h1> through <h6> hierarchy.',
            'Using heading tags purely to make text visually larger instead of using CSS.'
          ]
        }
      }
    ],
    importantDifferences: [
      {
        title: 'HTML vs Programming Languages',
        itemA: {
          label: 'HTML (Markup Language)',
          explanation: 'Declarative. Describes static document structure, content hierarchy, and semantic roles. Cannot perform mathematical calculations or handle loops.'
        },
        itemB: {
          label: 'JavaScript (Programming Language)',
          explanation: 'Imperative and functional. Manipulates data, handles logic, executes loops, listens to user events, and modifies the DOM dynamically.'
        },
        keyTakeaway: 'HTML defines the skeleton; JavaScript drives the behavior.'
      }
    ],
    keyPoints: [
      'HTML stands for HyperText Markup Language and serves as the structural foundation of the web.',
      'HTML uses tags (like <h1> and <p>) to annotate plain text with semantic meaning.',
      'Browsers parse HTML into the Document Object Model (DOM), a hierarchical tree in memory.',
      'Always prioritize semantic tags to ensure accessibility for screen readers and search engines.'
    ],
    relatedTopicIds: ['html-document-structure', 'html-elements', 'html-semantic-html', 'env-getting-started'],
    prevTopicId: 'env-vite-project-scaffolding',
    nextTopicId: 'html-document-structure'
  },
  {
    id: 'html-document-structure',
    slug: 'document-structure',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'Document Structure',
    shortDescription: 'The essential boilerplate required for every standards-compliant HTML5 document.',
    estimatedMinutes: 10,
    breadcrumbs: ['HTML', 'Basics', 'Document Structure'],
    sections: [
      {
        id: 'anatomy-of-a-page',
        heading: 'The Anatomy of an HTML5 Document',
        paragraphs: [
          'Every complete webpage starts with a standardized skeleton. Omitting required tags causes browsers to enter quirks mode, which leads to inconsistent rendering across different engines (Chromium, Gecko, WebKit).',
          'A modern HTML5 document consists of three primary components: the doctype declaration, the <head> element containing non-visual metadata, and the <body> element containing visible page content.'
        ]
      },
      {
        id: 'standard-boilerplate',
        heading: 'Complete HTML5 Document Template',
        codeExample: {
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Web Application</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header>
      <h1>Application Dashboard</h1>
    </header>
    <main>
      <p>Welcome to your learning platform.</p>
    </main>
  </body>
</html>`,
          explanationPoints: [
            '<!DOCTYPE html> instructs the browser to render the page in standard HTML5 mode.',
            '<html lang="en"> is the root container and specifies English as the primary language for screen readers.',
            '<meta charset="UTF-8"> ensures international characters, accents, and symbols render without corruption.',
            '<meta name="viewport" content="width=device-width, initial-scale=1.0"> enables mobile responsiveness by matching viewport width to screen width.',
            '<title> defines the text shown in browser tabs, bookmarks, and search engine results.',
            '<body> wraps all elements visible to the end user.'
          ],
          commonMistakes: [
            'Forgetting the viewport meta tag, causing mobile devices to scale down desktop layouts to tiny, unreadable sizes.',
            'Placing visible content such as <h1> or <p> inside the <head> section.',
            'Omitting the lang attribute, which prevents screen readers from pronouncing words with the correct dialect.'
          ]
        }
      },
      {
        id: 'head-vs-body',
        heading: 'Head vs. Body Responsibilities',
        table: {
          headers: ['Section', 'Primary Role', 'Typical Children Elements'],
          rows: [
            ['<head>', 'Metadata, browser instructions, SEO, styles, scripts', '<meta>, <title>, <link>, <style>, <script>'],
            ['<body>', 'Visible content rendered directly on the viewport canvas', '<header>, <nav>, <main>, <section>, <footer>, <script>']
          ]
        }
      }
    ],
    keyPoints: [
      'The <!DOCTYPE html> declaration is case-insensitive and required at the very top of line 1.',
      'The <head> section manages configurations and metadata invisible on the screen.',
      'The <body> section encapsulates all rendered UI components.',
      'Always configure charset UTF-8 and the viewport meta tag for internationalization and responsive mobile rendering.'
    ],
    relatedTopicIds: ['html-what-is-html', 'html-elements', 'html-semantic-html'],
    prevTopicId: 'html-what-is-html',
    nextTopicId: 'html-elements'
  },
  {
    id: 'html-elements',
    slug: 'elements',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'Elements',
    shortDescription: 'Understanding opening tags, content, closing tags, and self-closing elements.',
    estimatedMinutes: 9,
    breadcrumbs: ['HTML', 'Basics', 'Elements'],
    sections: [
      {
        id: 'what-is-an-element',
        heading: 'What is an HTML Element?',
        paragraphs: [
          'An HTML element is the complete unit composed of an opening tag, the enclosed content, and a matching closing tag. Tags are written with angle brackets (< and >).',
          'Elements can be nested inside other elements to create rich hierarchical structures, forming the parent-child relationships of the DOM tree.'
        ]
      },
      {
        id: 'element-syntax',
        heading: 'Element Anatomy',
        codeExample: {
          language: 'html',
          code: `<!-- Standard Element with Content and Closing Tag -->
<p class="summary-text">Web developers build interfaces for billions of users.</p>

<!-- Self-Closing / Void Element (no closing tag needed) -->
<img src="diagram.svg" alt="Architecture flow chart">
<input type="text" placeholder="Enter your email">
<br>`,
          explanationPoints: [
            '<p> is the opening tag with an attribute (class="summary-text").',
            'Web developers build interfaces for billions of users. is the element content.',
            '</p> is the closing tag featuring a forward slash.',
            '<img> and <input> are void elements. They cannot contain text or child nodes, so closing tags (</img>) are invalid.'
          ],
          commonMistakes: [
            'Attempting to close void elements with </input> or </img>.',
            'Improper tag nesting (e.g. <b><i>text</b></i> instead of <b><i>text</i></b>).'
          ]
        }
      },
      {
        id: 'block-vs-inline',
        heading: 'Block-level vs. Inline Elements',
        paragraphs: [
          'Historically in HTML specifications, elements fell into two display categories by default:'
        ],
        bulletPoints: [
          'Block elements (<div>, <p>, <h1>-<h6>, <section>): Start on a new line and stretch across the entire available horizontal width of their parent container.',
          'Inline elements (<span>, <a>, <strong>, <em>): Sit inline with adjacent text and only occupy the width necessary to wrap their immediate content.'
        ]
      }
    ],
    keyPoints: [
      'An element comprises the opening tag, attributes, text/children, and closing tag.',
      'Void elements (e.g. <img>, <input>, <hr>, <br>, <meta>) have no closing tag and cannot contain children.',
      'Always close nested tags in reverse order of how they were opened.'
    ],
    relatedTopicIds: ['html-attributes', 'html-text', 'html-semantic-html'],
    prevTopicId: 'html-document-structure',
    nextTopicId: 'html-attributes'
  },
  {
    id: 'html-attributes',
    slug: 'attributes',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'Attributes',
    shortDescription: 'Providing additional configuration, metadata, and identifiers to HTML elements.',
    estimatedMinutes: 9,
    breadcrumbs: ['HTML', 'Basics', 'Attributes'],
    sections: [
      {
        id: 'what-are-attributes',
        heading: 'Understanding HTML Attributes',
        paragraphs: [
          'Attributes provide additional values or behaviors to an HTML element. They are always declared inside the opening tag and usually appear as name-value pairs written as name="value".',
          'Certain attributes are universal and can be placed on almost any tag (such as id, class, title, and data-*), while others are specific to particular elements (such as href on <a> or src on <img>).'
        ]
      },
      {
        id: 'attribute-examples',
        heading: 'Common Attribute Types',
        codeExample: {
          language: 'html',
          code: `<!-- id: Unique document-wide identifier -->
<main id="main-content">

  <!-- class: Reusable CSS styling and JavaScript selector hook -->
  <article class="card featured-card">
    
    <!-- href: Link destination URL -->
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      Visit External Resource
    </a>

    <!-- Boolean attributes: Presence implies true -->
    <button disabled>Processing Transaction</button>
  </article>
</main>`,
          explanationPoints: [
            'id="main-content" must be strictly unique within the entire HTML document.',
            'class="card featured-card" allows space-separated names to apply multiple CSS classes.',
            'target="_blank" opens links in new browser tabs. Always pair with rel="noopener noreferrer" for security.',
            'disabled is a boolean attribute. Writing disabled or disabled="" sets it to true; omitting it sets it to false.'
          ],
          commonMistakes: [
            'Reusing the same id value across multiple elements in one document.',
            'Forgetting quotes around attribute values with spaces, which breaks browser parsing.'
          ]
        }
      }
    ],
    keyPoints: [
      'Attributes are always placed within the opening tag, never the closing tag.',
      'Values should always be enclosed in double quotes for standards compliance.',
      'The id attribute must be unique per document, whereas class can be shared across many elements.',
      'Boolean attributes like disabled, required, and checked do not require a value.'
    ],
    relatedTopicIds: ['html-elements', 'html-forms', 'html-links'],
    prevTopicId: 'html-elements',
    nextTopicId: 'html-text'
  },
  {
    id: 'html-text',
    slug: 'text',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'Text',
    shortDescription: 'Headings, paragraphs, spans, strong emphasis, blockquotes, and typographic hierarchy.',
    estimatedMinutes: 10,
    breadcrumbs: ['HTML', 'Basics', 'Text'],
    sections: [
      {
        id: 'typography-overview',
        heading: 'Semantic Text Formatting',
        paragraphs: [
          'Text is the primary medium of the web. HTML provides specialized tags to communicate tone, hierarchy, and emphasis to both sighted users and screen readers.',
          'Never pick a tag based solely on how it looks by default. Always choose the tag that best conveys the semantic purpose of the text.'
        ]
      },
      {
        id: 'heading-hierarchy',
        heading: 'Headings and Outline Structure',
        paragraphs: [
          'HTML offers six levels of section headings from <h1> through <h6>. Think of headings like the table of contents in a textbook:'
        ],
        bulletPoints: [
          '<h1>: The document title. There should be only one primary <h1> per page.',
          '<h2>: Major topic sections.',
          '<h3>: Subsections under an <h2>.',
          '<h4> to <h6>: Further levels of detail.'
        ],
        callout: {
          type: 'warning',
          title: 'Never Skip Heading Levels',
          text: 'Do not jump directly from an <h1> to an <h3> just to get smaller text. Screen reader users navigate pages by jumping between headings; skipped levels create confusion.'
        }
      },
      {
        id: 'inline-text-elements',
        heading: 'Inline Text Styling Elements',
        codeExample: {
          language: 'html',
          code: `<p>
  Learn <strong>JavaScript</strong> to add behavior, and use 
  <em>semantic tags</em> for accessibility.
</p>
<p>
  The server returned HTTP status <code>404 Not Found</code>.
</p>
<blockquote cite="https://w3.org">
  "The power of the Web is in its universality."
</blockquote>`,
          explanationPoints: [
            '<strong> represents strong importance or seriousness (typically bolded).',
            '<em> represents stress emphasis that alters sentence meaning (typically italicized).',
            '<code> represents inline computer code, variable names, or commands.',
            '<blockquote> represents an extended excerpt quoted from an external source.'
          ],
          commonMistakes: [
            'Using <b> and <i> purely for visual styling instead of semantic <strong> and <em>.',
            'Using <br> tags repeatedly to create vertical spacing instead of using CSS margins.'
          ]
        }
      }
    ],
    keyPoints: [
      'Maintain a continuous heading hierarchy from <h1> to <h6> without skipping levels.',
      'Use <strong> for strong semantic importance and <em> for semantic stress.',
      'Use <p> for paragraphs of text rather than stacking line break <br> tags.',
      'Wrap inline code fragments in <code> to improve developer readability.'
    ],
    relatedTopicIds: ['html-elements', 'html-semantic-html', 'html-links'],
    prevTopicId: 'html-attributes',
    nextTopicId: 'html-links'
  },
  {
    id: 'html-links',
    slug: 'links',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'Links',
    shortDescription: 'Anchor tags, internal page bookmarks, external destinations, and target behaviors.',
    estimatedMinutes: 9,
    breadcrumbs: ['HTML', 'Basics', 'Links'],
    sections: [
      {
        id: 'the-anchor-element',
        heading: 'The Anchor (<a>) Element',
        paragraphs: [
          'The anchor tag (<a>) creates hyperlinks. Links allow users to jump to other webpages, download files, open mail clients, or jump to specific sections within the current document.',
          'The destination URL is defined using the href attribute (Hypertext REFerence). Without an href attribute, an anchor tag is merely a placeholder.'
        ]
      },
      {
        id: 'link-types',
        heading: 'Types of Hyperlinks',
        codeExample: {
          language: 'html',
          code: `<!-- 1. Absolute URL (external website) -->
<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
  MDN Web Docs
</a>

<!-- 2. Relative URL (internal site navigation) -->
<a href="/about-us">About Our Team</a>

<!-- 3. In-page fragment identifier (bookmark link) -->
<a href="#frequently-asked-questions">Jump to FAQ</a>

<!-- 4. Protocol links (Email and Phone) -->
<a href="mailto:support@example.com">Email Support</a>
<a href="tel:+15551234567">Call Us</a>`,
          explanationPoints: [
            'Absolute URLs include the protocol (https://) and domain name.',
            'Relative URLs navigate within the current domain, facilitating local testing.',
            'Fragment identifiers (#faq) scroll directly to any element with a matching id="faq".',
            'mailto: and tel: trigger native OS mail clients and phone dialers.'
          ],
          commonMistakes: [
            'Opening external links with target="_blank" without adding rel="noopener noreferrer", introducing a tab-napping security vulnerability.',
            'Using generic anchor text such as "Click here" or "Read more", which harms screen reader navigation and SEO.'
          ]
        }
      }
    ],
    keyPoints: [
      'The href attribute specifies the destination URL.',
      'Use descriptive anchor text that makes sense out of context.',
      'Always add rel="noopener noreferrer" whenever using target="_blank".',
      'In-page anchors point to corresponding element id values using the # symbol.'
    ],
    relatedTopicIds: ['html-text', 'html-images', 'html-semantic-html'],
    prevTopicId: 'html-text',
    nextTopicId: 'html-images'
  },
  {
    id: 'html-images',
    slug: 'images',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'Images',
    shortDescription: 'Embedding graphics with img tags, alt text for accessibility, and modern responsive formats.',
    estimatedMinutes: 10,
    breadcrumbs: ['HTML', 'Basics', 'Images'],
    sections: [
      {
        id: 'the-image-element',
        heading: 'Embedding Images with <img>',
        paragraphs: [
          'Images bring websites to life. In HTML, the <img> tag embeds visual media into a document. It is an inline void element, meaning it requires no closing tag.',
          'Two attributes are strictly essential: src (source path) and alt (alternative text description).'
        ]
      },
      {
        id: 'image-example',
        heading: 'Production Image Markup',
        codeExample: {
          language: 'html',
          code: `<img 
  src="/assets/developer-workspace.webp" 
  alt="Software engineer coding at a clean multi-monitor desk setup"
  width="800"
  height="600"
  loading="lazy"
>`,
          explanationPoints: [
            'src provides the relative or absolute path to the image file.',
            'alt provides alternative text read aloud by screen readers and displayed if the image fails to load.',
            'width and height reserve aspect ratio space before the image downloads, preventing Cumulative Layout Shift (CLS).',
            'loading="lazy" defers off-screen image loading until the user scrolls near them, speeding up initial page render.'
          ],
          commonMistakes: [
            'Leaving the alt attribute empty on meaningful images, rendering the image invisible to visually impaired users.',
            'Writing redundant alt text like alt="Image of a cat" (screen readers already announce that the item is an image).'
          ]
        }
      },
      {
        id: 'modern-formats',
        heading: 'Modern Image Formats Comparison',
        table: {
          headers: ['Format', 'Best For', 'Key Characteristics'],
          rows: [
            ['WebP', 'Photographs & general web graphics', '25-35% smaller than JPEG with identical visual quality.'],
            ['AVIF', 'High-compression photography', 'Next-generation compression with excellent HDR and detail retention.'],
            ['SVG', 'Icons, logos, and UI illustrations', 'Vector-based XML format that scales infinitely without pixelation.'],
            ['PNG', 'Screenshots with sharp text, transparency', 'Lossless compression preserving crisp borders and opacity.']
          ]
        }
      }
    ],
    keyPoints: [
      'The <img> tag is a void element requiring no closing tag.',
      'The alt attribute is mandatory for web accessibility and search engine indexing.',
      'Always specify width and height attributes to prevent layout shift during page load.',
      'Use loading="lazy" for images below the fold to conserve network bandwidth.'
    ],
    relatedTopicIds: ['html-elements', 'html-attributes', 'html-lists'],
    prevTopicId: 'html-links',
    nextTopicId: 'html-lists'
  },
  {
    id: 'html-lists',
    slug: 'lists',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'Lists',
    shortDescription: 'Unordered bulleted lists, ordered sequential lists, and description lists.',
    estimatedMinutes: 8,
    breadcrumbs: ['HTML', 'Basics', 'Lists'],
    sections: [
      {
        id: 'list-types',
        heading: 'Structured Content with Lists',
        paragraphs: [
          'Lists group related items together. HTML provides three distinct list formats depending on whether order matters, does not matter, or pairs terms with definitions.'
        ]
      },
      {
        id: 'list-examples',
        heading: 'Unordered and Ordered Lists',
        codeExample: {
          language: 'html',
          code: `<!-- 1. Unordered List (order does not matter) -->
<ul>
  <li>Semantic HTML structure</li>
  <li>CSS Grid and Flexbox</li>
  <li>Modern JavaScript ES6+</li>
</ul>

<!-- 2. Ordered List (numbered chronological steps) -->
<ol>
  <li>Initialize repository with git init</li>
  <li>Install dependencies using npm install</li>
  <li>Start the local development server</li>
</ol>`,
          explanationPoints: [
            '<ul> wraps items with default bullet points.',
            '<ol> wraps items with automatic numbering (1, 2, 3...).',
            '<li> (List Item) must be the immediate child inside <ul> or <ol>.'
          ],
          commonMistakes: [
            'Placing <div> or <p> tags directly as children of <ul> without wrapping them inside an <li> element.',
            'Using an ordered list when the order of items has no logical sequence.'
          ]
        }
      }
    ],
    keyPoints: [
      'Use <ul> when the sequence of items is arbitrary.',
      'Use <ol> when sequence or ranking is significant (recipes, instructions, leaderboards).',
      'The only valid direct children of <ul> and <ol> are <li> elements.'
    ],
    relatedTopicIds: ['html-text', 'html-tables', 'html-semantic-html'],
    prevTopicId: 'html-images',
    nextTopicId: 'html-tables'
  },
  {
    id: 'html-tables',
    slug: 'tables',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'Tables',
    shortDescription: 'Presenting multi-dimensional tabular data with headers, rows, columns, and captions.',
    estimatedMinutes: 10,
    breadcrumbs: ['HTML', 'Basics', 'Tables'],
    sections: [
      {
        id: 'when-to-use-tables',
        heading: 'Tabular Data Representation',
        paragraphs: [
          'HTML tables exist strictly to display structured, two-dimensional tabular data—such as financial ledgers, flight schedules, pricing plans, and data grids.',
          'Never use HTML tables to build page layouts. Layouts must always be constructed using modern CSS (Flexbox and Grid).'
        ]
      },
      {
        id: 'table-structure',
        heading: 'Complete Accessible Table Example',
        codeExample: {
          language: 'html',
          code: `<table>
  <caption>Quarterly API Request Metrics</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Requests</th>
      <th scope="col">Latency (ms)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>1,240,000</td>
      <td>42ms</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>1,890,000</td>
      <td>38ms</td>
    </tr>
  </tbody>
</table>`,
          explanationPoints: [
            '<caption> provides a screen-readable title summarizing the purpose of the table.',
            '<thead> wraps header rows, separating column names from data rows.',
            '<tbody> wraps the actual data rows.',
            '<tr> defines a table row.',
            '<th> defines header cells, enriched with scope="col" or scope="row" for assistive tech.',
            '<td> defines regular data cells.'
          ],
          commonMistakes: [
            'Omitting <th> elements and building tables entirely out of generic <td> cells.',
            'Using tables to position layout columns instead of modern CSS.'
          ]
        }
      }
    ],
    keyPoints: [
      'Tables should exclusively be used for tabular datasets, never layout grids.',
      'Always segment tables with <thead>, <tbody>, and optional <tfoot>.',
      'Include scope attributes on <th> cells to help screen readers announce headers correctly.'
    ],
    relatedTopicIds: ['html-lists', 'html-forms', 'html-semantic-html'],
    prevTopicId: 'html-lists',
    nextTopicId: 'html-forms'
  },
  {
    id: 'html-forms',
    slug: 'forms',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'Forms',
    shortDescription: 'Collecting user input with form tags, text inputs, selects, buttons, and native validation.',
    estimatedMinutes: 12,
    breadcrumbs: ['HTML', 'Basics', 'Forms'],
    sections: [
      {
        id: 'forms-overview',
        heading: 'Collecting User Input',
        paragraphs: [
          'Forms allow web applications to gather data from users—from simple login screens and search bars to multi-step checkout flows.',
          'A form wraps controls such as inputs, dropdowns, checkboxes, and buttons. When submitted, the browser packages input values into key-value pairs based on their name attributes.'
        ]
      },
      {
        id: 'accessible-form-markup',
        heading: 'Standard Accessible Form Markup',
        codeExample: {
          language: 'html',
          code: `<form action="/api/register" method="POST">
  <div class="form-group">
    <label for="user-email">Email Address</label>
    <input 
      type="email" 
      id="user-email" 
      name="email" 
      required 
      placeholder="you@domain.com"
      autocomplete="email"
    >
  </div>

  <div class="form-group">
    <label for="user-role">Primary Role</label>
    <select id="user-role" name="role" required>
      <option value="">Select your role...</option>
      <option value="frontend">Frontend Developer</option>
      <option value="backend">Backend Developer</option>
      <option value="fullstack">Full-Stack Engineer</option>
    </select>
  </div>

  <button type="submit">Create Account</button>
</form>`,
          explanationPoints: [
            '<form action="..." method="..."> specifies where and how the payload is sent.',
            '<label for="id"> binds the text label directly to the input with matching id. Clicking the label focuses the input!',
            'type="email" automatically triggers browser-level format validation and mobile email keyboards.',
            'name="email" provides the identifier key sent in the HTTP request payload.',
            'required is a boolean validation attribute preventing submission if empty.'
          ],
          commonMistakes: [
            'Using placeholder text instead of an explicit <label> element. Placeholders disappear once typed and fail accessibility standards.',
            'Omitting the name attribute on inputs, meaning their values will not be included in the form payload.'
          ]
        }
      }
    ],
    keyPoints: [
      'Every input control should have a matching <label> linked via the for and id attributes.',
      'The name attribute is required to transmit field values to the backend server.',
      'HTML5 input types (email, number, tel, date) provide built-in mobile keyboards and validation.'
    ],
    relatedTopicIds: ['html-attributes', 'html-semantic-html', 'express-request-response'],
    prevTopicId: 'html-tables',
    nextTopicId: 'html-semantic-html'
  },
  {
    id: 'html-semantic-html',
    slug: 'semantic-html',
    technology: 'html',
    techName: 'HTML',
    category: 'Basics',
    title: 'Semantic HTML',
    shortDescription: 'Using header, nav, main, article, section, aside, and footer for accessibility and SEO.',
    estimatedMinutes: 11,
    breadcrumbs: ['HTML', 'Basics', 'Semantic HTML'],
    sections: [
      {
        id: 'what-is-semantics',
        heading: 'What is Semantic Markup?',
        paragraphs: [
          'Semantic HTML means using HTML tags according to their meaning, rather than just their visual presentation.',
          'A <div> or <span> has zero semantic meaning; it is merely an arbitrary wrapper. In contrast, tags like <header>, <nav>, <main>, <article>, and <footer> explicitly tell browsers, search engines, and screen readers what purpose that content serves.'
        ]
      },
      {
        id: 'semantic-layout',
        heading: 'Standard Semantic Page Architecture',
        codeExample: {
          language: 'html',
          code: `<body>
  <!-- Top site header with branding and navigation -->
  <header>
    <a href="/" class="brand">WebDev Academy</a>
    <nav aria-label="Main Navigation">
      <ul>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/roadmap">Roadmap</a></li>
      </ul>
    </nav>
  </header>

  <!-- The singular central content of the document -->
  <main>
    <article>
      <header>
        <h1>Mastering Responsive CSS</h1>
        <p>Published on March 15, 2026</p>
      </header>
      <section>
        <h2>The Fluid Grid Principle</h2>
        <p>Responsive design begins with relative proportions.</p>
      </section>
    </article>

    <!-- Content related tangentially to main subject -->
    <aside>
      <h3>Recommended Reading</h3>
      <p>Explore our deep dive on CSS Flexbox alignment.</p>
    </aside>
  </main>

  <!-- Page footer with copyright and legal links -->
  <footer>
    <p>&copy; 2026 WebDev Academy. All rights reserved.</p>
  </footer>
</body>`,
          explanationPoints: [
            '<header> contains introductory content or site-wide navigation.',
            '<nav> identifies a primary block of navigational links.',
            '<main> represents the dominant, unique content of the page. Only one visible <main> tag may exist per page.',
            '<article> encapsulates self-contained content that could stand alone in syndication (like a blog post or news story).',
            '<section> groups thematically related content with its own heading.',
            '<aside> represents tangential content such as sidebars, callouts, or related links.',
            '<footer> contains author info, copyright, and legal disclaimers.'
          ],
          commonMistakes: [
            'Creating "div soup"—building the entire application out of nested <div> elements with zero semantic tags.',
            'Having multiple <main> elements without hiding inactive ones.'
          ]
        }
      }
    ],
    keyPoints: [
      'Semantic tags convey meaning to accessibility software, web crawlers, and future developers.',
      'Use exactly one prominent <main> tag per page to house the primary content.',
      'Reserve <div> tags exclusively for styling hooks when no semantic tag applies.',
      'Semantic HTML directly boosts search engine rankings and screen reader usability.'
    ],
    relatedTopicIds: ['html-what-is-html', 'html-document-structure', 'css-what-is-css'],
    prevTopicId: 'html-forms'
  }
];
