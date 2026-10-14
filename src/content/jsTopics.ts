import { TopicItem } from '../types/curriculum';

export const JS_TOPICS: TopicItem[] = [
  {
    id: 'js-what-is-javascript',
    slug: 'what-is-javascript',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Fundamentals',
    title: 'What is JavaScript?',
    shortDescription: 'The programming language of the web that brings dynamic logic, interaction, and asynchronous computation to applications.',
    estimatedMinutes: 9,
    breadcrumbs: ['JavaScript', 'Fundamentals', 'What is JavaScript?'],
    sections: [
      {
        id: 'intro-to-js',
        heading: 'The Engine of Web Interactivity',
        paragraphs: [
          'JavaScript (often abbreviated as JS) is a lightweight, interpreted or just-in-time compiled, prototype-based, multi-paradigm programming language with first-class functions.',
          'While HTML defines document structure and CSS governs visual appearance, JavaScript provides interactive logic—listening to user inputs, calculating state, updating the DOM dynamically, and exchanging data with backend servers asynchronously.'
        ]
      },
      {
        id: 'where-js-runs',
        heading: 'Where Does JavaScript Run?',
        bulletPoints: [
          'Client-Side (The Browser): Every modern web browser (Chrome, Firefox, Safari, Edge) embeds a JavaScript engine (such as Google’s V8, Mozilla’s SpiderMonkey, or Apple’s JavaScriptCore) that executes script instructions in real-time.',
          'Server-Side (Node.js & Runtimes): In 2009, Ryan Dahl extracted Google’s V8 engine and combined it with an event-driven C++ I/O library to create Node.js, allowing JavaScript to run directly on server hardware, terminal CLIs, and cloud backends.'
        ]
      },
      {
        id: 'execution-model',
        heading: 'Single-Threaded and Non-Blocking',
        paragraphs: [
          'JavaScript runs on a single main thread, meaning it can only execute one line of code at any given microsecond. However, it handles high concurrency and async network calls through its asynchronous Event Loop and browser Web APIs (timers, network requests, DOM events).'
        ]
      }
    ],
    keyPoints: [
      'JavaScript is the only native programming language supported in all web browsers.',
      'It is single-threaded but non-blocking thanks to the event loop and asynchronous APIs.',
      'It powers both frontend client applications and backend servers via Node.js.'
    ],
    relatedTopicIds: ['js-variables', 'js-primitive-string', 'html-what-is-html'],
    nextTopicId: 'js-variables'
  },
  {
    id: 'js-variables',
    slug: 'variables',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Fundamentals',
    title: 'Variables: let, const, and var',
    shortDescription: 'Declaring memory identifiers, block scope, reassignment rules, and the Temporal Dead Zone.',
    estimatedMinutes: 12,
    breadcrumbs: ['JavaScript', 'Fundamentals', 'Variables'],
    sections: [
      {
        id: 'what-are-variables',
        heading: 'What is a Variable?',
        paragraphs: [
          'A variable is a named storage container in computer memory where your program holds values that can be read, evaluated, or updated throughout execution.',
          'Modern JavaScript provides three keywords for declaring variables: const, let, and the legacy keyword var. Understanding the differences between them is essential to avoiding critical bugs.'
        ]
      },
      {
        id: 'modern-variable-declarations',
        heading: 'Declaring with const and let',
        codeExample: {
          language: 'javascript',
          code: `// 1. const: Block-scoped constant (Cannot be reassigned)
const maxUploadLimitMb = 50;

// 2. let: Block-scoped variable (Can be reassigned)
let currentProgress = 0;
currentProgress = 25; // Valid update!

// 3. var: Function-scoped legacy declaration (Avoid in modern code)
var legacyScore = 100;`,
          explanationPoints: [
            'const creates an immutable variable binding. Always use const by default unless you explicitly intend to reassign the value.',
            'let creates a mutable variable binding scoped to its enclosing block { }.',
            'var is function-scoped (or globally scoped) and is hoisted to the top of its scope as undefined, which frequently causes subtle scope leaks.'
          ],
          commonMistakes: [
            'Using let when the value is never reassigned (prefer const for intent and safety).',
            'Assuming const makes objects or arrays immutable (const only freezes the variable binding; properties inside an object can still be mutated!).'
          ]
        }
      },
      {
        id: 'variable-comparison-table',
        heading: 'Declaration Comparison Table',
        table: {
          headers: ['Feature', 'const', 'let', 'var (Legacy)'],
          rows: [
            ['Scope', 'Block { }', 'Block { }', 'Function'],
            ['Reassignable?', 'No (TypeError)', 'Yes', 'Yes'],
            ['Re-declarable?', 'No (SyntaxError)', 'No (SyntaxError)', 'Yes (Dangerous)'],
            ['Hoisting Behavior', 'Temporal Dead Zone (ReferenceError)', 'Temporal Dead Zone (ReferenceError)', 'Hoisted as undefined'],
            ['Recommendation', 'Primary Default', 'When reassignment is required', 'Avoid in modern JS']
          ]
        }
      }
    ],
    keyPoints: [
      'Default to const for all variable declarations.',
      'Use let only when you know the variable needs to be reassigned (e.g. loop counters).',
      'Never use var in modern code because of its confusing function scoping and hoisting bugs.'
    ],
    relatedTopicIds: ['js-what-is-javascript', 'js-primitive-string', 'js-operators'],
    prevTopicId: 'js-what-is-javascript',
    nextTopicId: 'js-primitive-string'
  },
  {
    id: 'js-primitive-string',
    slug: 'string',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Data Types',
    subcategory: 'Primitive',
    title: 'Primitive Data Types: String',
    shortDescription: 'Comprehensive guide to JavaScript strings, literal syntax, properties, immutability, and essential string manipulation methods.',
    estimatedMinutes: 16,
    breadcrumbs: ['JavaScript', 'Data Types', 'Primitive', 'String'],
    sections: [
      {
        id: 'what-is-a-string',
        heading: 'What is a String?',
        paragraphs: [
          'A String in JavaScript is a sequence of characters used to represent textual data. Each character in a string occupies a position indexed from 0 to length - 1.',
          'Strings are primitive values. One crucial characteristic of primitives is that they are immutable: once created, a string value cannot be modified in place. Any string method that manipulates a string always returns a brand new string rather than changing the original.'
        ]
      },
      {
        id: 'creating-strings',
        heading: 'Creating Strings',
        paragraphs: [
          'In JavaScript, strings can be declared using three distinct types of quotes:'
        ],
        codeExample: {
          language: 'javascript',
          code: `// 1. Double Quotes
const firstName = "Alex";

// 2. Single Quotes
const role = 'Software Engineer';

// 3. Template Literals (Backticks) - Supports interpolation & multiline
const company = "Acme Corp";
const profileSummary = \`Hello, my name is \${firstName}.
I work as a \${role} at \${company}.\`;`,
          explanationPoints: [
            'Double quotes ("...") and single quotes (\'...\') behave identically in JavaScript. Choose one style consistently across your team.',
            'Template literals (\`...\`) use backticks. They permit string interpolation via the \${expression} syntax and can span multiple lines without concatenation.'
          ],
          commonMistakes: [
            'Attempting to use \${} variable interpolation inside regular single or double quotes (it only works inside backticks!).',
            'Breaking a single or double-quoted string across multiple lines without a backslash escape.'
          ]
        }
      },
      {
        id: 'string-characteristics',
        heading: 'String Characteristics',
        bulletPoints: [
          'Strings represent text: Used for names, messages, URLs, JSON payloads, and user input.',
          'Strings can contain spaces: A space character " " is a valid character and occupies an index.',
          'Strings can contain numbers as characters: The character "9" is a text character, not a numeric value for arithmetic.',
          'Empty strings are valid: const empty = ""; has a length of 0 and evaluates to false in boolean contexts.'
        ]
      },
      {
        id: 'string-properties',
        heading: 'String Properties: length',
        paragraphs: [
          'Strings expose a read-only .length property that returns the number of UTF-16 code units in the string.'
        ],
        codeExample: {
          language: 'javascript',
          code: `const username = "alex_dev";
console.log(username.length); // Outputs: 8

const empty = "";
console.log(empty.length); // Outputs: 0`,
          explanationPoints: [
            'username.length accesses the numeric count of characters.',
            'Because strings are zero-indexed, the last character is always at index username.length - 1.'
          ],
          commonMistakes: [
            'Trying to call .length as a function like username.length() (length is a property, not a method!).'
          ]
        }
      },
      {
        id: 'string-methods-section',
        heading: 'Essential String Methods',
        paragraphs: [
          'JavaScript provides built-in methods to inspect, extract, and transform strings. Because strings are immutable, none of these methods modify the original variable.'
        ]
      }
    ],
    methods: [
      {
        name: 'toUpperCase()',
        syntax: 'str.toUpperCase()',
        description: 'Returns a new string with all alphabetical characters converted to uppercase.',
        example: `const status = "pending";
const upper = status.toUpperCase();
console.log(upper); // "PENDING"
console.log(status); // "pending" (original remains unchanged)`,
        exampleLanguage: 'javascript',
        explanation: 'toUpperCase() inspects each character in the string and converts lowercase letters to uppercase. Non-alphabetical characters (numbers, punctuation) remain untouched.',
        commonMistake: 'Forgetting that strings are immutable and writing status.toUpperCase() expecting status to change itself.'
      },
      {
        name: 'toLowerCase()',
        syntax: 'str.toLowerCase()',
        description: 'Returns a new string with all alphabetical characters converted to lowercase. Highly useful for case-insensitive searches.',
        example: `const emailInput = "User@Example.COM";
const normalizedEmail = emailInput.toLowerCase();
console.log(normalizedEmail); // "user@example.com"`,
        exampleLanguage: 'javascript',
        explanation: 'toLowerCase() transforms capital characters into lowercase, creating a standard format for email or username lookups.',
        commonMistake: 'Comparing user input directly against a database string without normalizing both to lowercase first.'
      },
      {
        name: 'includes()',
        syntax: 'str.includes(searchString, position?)',
        description: 'Performs a case-sensitive search to determine whether one string can be found inside another, returning true or false.',
        example: `const sentence = "The quick brown fox jumps";
console.log(sentence.includes("fox")); // true
console.log(sentence.includes("dog")); // false
console.log(sentence.includes("Fox")); // false (case-sensitive!)`,
        exampleLanguage: 'javascript',
        explanation: 'includes() checks if the substring exists anywhere within the target string, eliminating the need for legacy indexOf() === -1 checks.',
        commonMistake: 'Expecting includes() to be case-insensitive. Always combine with toLowerCase() if case should be ignored.'
      },
      {
        name: 'startsWith()',
        syntax: 'str.startsWith(searchString, position?)',
        description: 'Determines whether a string begins with the characters of a specified string, returning true or false.',
        example: `const url = "https://api.example.com/v1";
if (url.startsWith("https://")) {
  console.log("Connection is secure via TLS");
}`,
        exampleLanguage: 'javascript',
        explanation: 'startsWith() verifies that index 0 matches the prefix string without needing to slice or parse regular expressions.',
        commonMistake: 'Passing a regular expression into startsWith() (it only accepts a string argument, otherwise throws a TypeError).'
      },
      {
        name: 'endsWith()',
        syntax: 'str.endsWith(searchString, endPosition?)',
        description: 'Determines whether a string ends with the characters of a specified string, returning true or false.',
        example: `const fileName = "report_2026.pdf";
const isPdf = fileName.endsWith(".pdf");
console.log(isPdf); // true`,
        exampleLanguage: 'javascript',
        explanation: 'endsWith() checks file extensions or terminal characters accurately from the end of the string.',
        commonMistake: 'Assuming endsWith() checks multiple extensions at once. To check multiple extensions, evaluate them individually or use regex.'
      },
      {
        name: 'slice()',
        syntax: 'str.slice(startIndex, endIndex?)',
        description: 'Extracts a section of a string and returns it as a new string, without modifying the original string.',
        example: `const phoneNumber = "555-0199";
const areaCode = phoneNumber.slice(0, 3);
console.log(areaCode); // "555"

// Negative indices count backwards from the end:
const lastFour = phoneNumber.slice(-4);
console.log(lastFour); // "0199"`,
        exampleLanguage: 'javascript',
        explanation: 'slice(start, end) copies characters starting at startIndex up to, but not including, endIndex. Negative indices count backward from the end.',
        commonMistake: 'Confusing slice() with the deprecated substr() or thinking endIndex is inclusive.'
      },
      {
        name: 'trim()',
        syntax: 'str.trim()',
        description: 'Removes whitespace from both ends of a string and returns a new string. Whitespace includes spaces, tabs, and newline characters.',
        example: `const rawSearchQuery = "   react hooks tutorial   \\n";
const cleanQuery = rawSearchQuery.trim();
console.log(cleanQuery); // "react hooks tutorial"`,
        exampleLanguage: 'javascript',
        explanation: 'trim() cleans up leading and trailing whitespace from form fields before validation or submitting data to an API.',
        commonMistake: 'Believing trim() removes spaces between words inside the string. It only strips whitespace from the outer boundaries.'
      }
    ],
    importantDifferences: [
      {
        title: 'Number vs String: 123 vs "123"',
        itemA: {
          label: '123 (Number Primitive)',
          explanation: 'Represents a mathematical numerical value. Can participate in arithmetic operations (addition, subtraction, division).',
          code: '123 + 10 // Evaluates to: 133'
        },
        itemB: {
          label: '"123" (String Primitive)',
          explanation: 'Represents text characters. Participating in the + operator triggers string concatenation rather than addition.',
          code: '"123" + 10 // Evaluates to: "12310"'
        },
        keyTakeaway: 'Always parse form input strings into real numbers using Number() or parseInt() before performing mathematical calculations.'
      }
    ],
    keyPoints: [
      'Strings represent text and are immutable primitive values.',
      'Declare strings using double quotes, single quotes, or template literals (backticks).',
      'Template literals allow expression interpolation via ${} and multiline strings.',
      'The .length property returns the number of characters in the string.',
      'Methods like toUpperCase, toLowerCase, slice, and trim return brand new strings without altering the original.',
      'Be cautious of type coercion: 123 + 10 = 133, but "123" + 10 = "12310".'
    ],
    relatedTopicIds: ['js-primitive-number', 'js-primitive-boolean', 'js-variables', 'js-arrays', 'js-objects'],
    prevTopicId: 'js-variables',
    nextTopicId: 'js-primitive-number'
  },
  {
    id: 'js-primitive-number',
    slug: 'number',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Data Types',
    subcategory: 'Primitive',
    title: 'Primitive Data Types: Number & BigInt',
    shortDescription: 'Double-precision 64-bit floating point numbers, special values (NaN, Infinity), and arbitrary-precision BigInt.',
    estimatedMinutes: 11,
    breadcrumbs: ['JavaScript', 'Data Types', 'Primitive', 'Number'],
    sections: [
      {
        id: 'the-number-type',
        heading: 'How Numbers Work in JavaScript',
        paragraphs: [
          'In JavaScript, all numbers are 64-bit double-precision binary floating-point numbers following the IEEE 754 standard. Unlike languages like C or Java, JavaScript does not have separate types for integers and decimals.',
          'Because of IEEE 754 binary representation, decimal math can sometimes exhibit floating point inaccuracies (e.g., 0.1 + 0.2 === 0.30000000000000004).'
        ],
        codeExample: {
          language: 'javascript',
          code: `const count = 42;
const price = 19.99;
const negative = -15;

// Special Number values:
console.log(1 / 0);          // Infinity
console.log("hello" * 5);    // NaN (Not-a-Number)
console.log(Number.isNaN(NaN)); // true`,
          explanationPoints: [
            'Both integers and decimals share the Number type.',
            'NaN represents an invalid mathematical operation result.',
            'BigInt (e.g. 9007199254740991n) handles arbitrarily large integers beyond Number.MAX_SAFE_INTEGER.'
          ],
          commonMistakes: [
            'Comparing NaN using strict equality (NaN === NaN is false; use Number.isNaN() instead!).'
          ]
        }
      }
    ],
    keyPoints: [
      'JavaScript uses 64-bit floating point representation for all numbers.',
      'NaN is produced when a mathematical operation fails to yield a valid number.',
      'Use BigInt when integers exceed 2^53 - 1 (Number.MAX_SAFE_INTEGER).'
    ],
    relatedTopicIds: ['js-primitive-string', 'js-primitive-boolean', 'js-operators'],
    prevTopicId: 'js-primitive-string',
    nextTopicId: 'js-primitive-boolean'
  },
  {
    id: 'js-primitive-boolean',
    slug: 'boolean',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Data Types',
    subcategory: 'Primitive',
    title: 'Primitive Data Types: Boolean, Null, & Undefined',
    shortDescription: 'Truth values, truthy vs falsy coercion, and the difference between undefined and null.',
    estimatedMinutes: 11,
    breadcrumbs: ['JavaScript', 'Data Types', 'Primitive', 'Boolean'],
    sections: [
      {
        id: 'booleans-and-truthiness',
        heading: 'Boolean Values and Falsy Rules',
        paragraphs: [
          'The Boolean type represents logical entities and has only two values: true and false.',
          'In JavaScript, any value can be evaluated in a boolean context (such as an if statement). JavaScript automatically coerces values to either truthy or falsy.'
        ],
        table: {
          headers: ['Falsy Value', 'Explanation'],
          rows: [
            ['false', 'The boolean literal false'],
            ['0, -0, 0n', 'The number zero (including negative and BigInt zero)'],
            ['""', 'An empty string with zero length'],
            ['null', 'Intentional absence of any object value'],
            ['undefined', 'Uninitialized variable or missing property'],
            ['NaN', 'Not-a-Number invalid arithmetic result']
          ]
        }
      }
    ],
    importantDifferences: [
      {
        title: 'null vs undefined',
        itemA: {
          label: 'undefined',
          explanation: 'The system default. A variable that has been declared but not assigned any value, or an unpassed function argument.',
          code: 'let user; // user is undefined'
        },
        itemB: {
          label: 'null',
          explanation: 'An intentional assignment by a programmer indicating "empty" or "no value exists on purpose".',
          code: 'let selectedItem = null;'
        },
        keyTakeaway: 'undefined means uninitialized by the runtime; null means intentionally cleared by the developer.'
      }
    ],
    keyPoints: [
      'There are exactly eight falsy values in JavaScript; everything else is truthy (including empty arrays [] and objects {}!).',
      'Always use strict equality (===) to prevent unexpected type coercions.'
    ],
    relatedTopicIds: ['js-primitive-string', 'js-primitive-number', 'js-operators'],
    prevTopicId: 'js-primitive-number',
    nextTopicId: 'js-operators'
  },
  {
    id: 'js-operators',
    slug: 'operators',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Operators',
    title: 'Operators & Expressions',
    shortDescription: 'Arithmetic, assignment, strict comparison (=== vs ==), logical operators, ternary, and nullish coalescing (??).',
    estimatedMinutes: 12,
    breadcrumbs: ['JavaScript', 'Operators', 'Operators'],
    sections: [
      {
        id: 'operator-categories',
        heading: 'Core Operator Families',
        paragraphs: [
          'Operators allow you to perform calculations, compare values, assign variables, and control logic paths in expressions.'
        ],
        codeExample: {
          language: 'javascript',
          code: `// 1. Strict vs Loose Equality
console.log(5 === "5"); // false (strict: checks value and type)
console.log(5 == "5");  // true (loose: coerces string to number - avoid!)

// 2. Logical Operators
const isAuthenticated = true;
const hasPermission = false;
const canAccess = isAuthenticated && hasPermission; // false

// 3. Nullish Coalescing (??) vs Logical OR (||)
const count = 0;
const displayA = count || 10; // 10 (because 0 is falsy!)
const displayB = count ?? 10; // 0 (only triggers on null or undefined!)

// 4. Ternary Operator
const accessLabel = isAuthenticated ? "Granted" : "Denied";`,
          explanationPoints: [
            'Always use === (strict equality) instead of == (loose equality) to prevent unintended type coercion bugs.',
            '&& (Logical AND) short-circuits on the first falsy operand.',
            '|| (Logical OR) returns the first truthy operand.',
            '?? (Nullish Coalescing) provides defaults specifically when a value is null or undefined, preserving 0 and false.'
          ],
          commonMistakes: [
            'Using || for default values when 0 or false are legitimate user inputs.'
          ]
        }
      }
    ],
    keyPoints: [
      'Always prefer strict equality (===) and strict inequality (!==).',
      'Use the ternary operator condition ? exprIfTrue : exprIfFalse for inline conditions.',
      'Use the nullish coalescing operator ?? for default values when 0 or false should be preserved.'
    ],
    relatedTopicIds: ['js-primitive-boolean', 'js-control-flow', 'js-functions'],
    prevTopicId: 'js-primitive-boolean',
    nextTopicId: 'js-control-flow'
  },
  {
    id: 'js-control-flow',
    slug: 'control-flow',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Control Flow',
    title: 'Control Flow & Conditionals',
    shortDescription: 'Branching execution paths with if, else if, else, and switch statements.',
    estimatedMinutes: 10,
    breadcrumbs: ['JavaScript', 'Control Flow', 'Conditionals'],
    sections: [
      {
        id: 'branching-logic',
        heading: 'Making Decisions in Code',
        paragraphs: [
          'Control flow refers to the order in which statements are executed. Conditional statements allow code to follow different execution branches depending on whether an expression evaluates to true or false.'
        ],
        codeExample: {
          language: 'javascript',
          code: `const httpStatus = 404;

// 1. if / else if / else chain
if (httpStatus >= 200 && httpStatus < 300) {
  console.log("Success");
} else if (httpStatus === 404) {
  console.log("Resource Not Found");
} else {
  console.log("Server Error");
}

// 2. switch statement for discrete matching
switch (httpStatus) {
  case 200:
    console.log("OK");
    break;
  case 404:
    console.log("Not Found");
    break;
  default:
    console.log("Unhandled Status Code");
}`,
          explanationPoints: [
            'if checks evaluate conditions sequentially from top to bottom.',
            'switch evaluates an expression against multiple case clauses using strict equality (===).',
            'Always include break; statements inside switch cases to prevent unintended fall-through.'
          ],
          commonMistakes: [
            'Omitting break inside a switch case, causing subsequent cases to execute unexpectedly.'
          ]
        }
      }
    ],
    keyPoints: [
      'Use if / else if for range checks or compound boolean conditions.',
      'Use switch for matching discrete known values against a single expression.',
      'Remember that switch comparisons use strict equality (===).'
    ],
    relatedTopicIds: ['js-operators', 'js-loops', 'js-functions'],
    prevTopicId: 'js-operators',
    nextTopicId: 'js-loops'
  },
  {
    id: 'js-loops',
    slug: 'loops',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Loops',
    title: 'Loops: for, while, and for...of',
    shortDescription: 'Repetitive execution structures, iteration protocols, and avoiding infinite loops.',
    estimatedMinutes: 11,
    breadcrumbs: ['JavaScript', 'Loops', 'Loops'],
    sections: [
      {
        id: 'loops-overview',
        heading: 'Iterating Over Data',
        paragraphs: [
          'Loops allow you to run a block of code multiple times until a specified termination condition is met.'
        ],
        codeExample: {
          language: 'javascript',
          code: `// 1. Classic for loop (Index-based)
for (let i = 0; i < 5; i++) {
  console.log("Index:", i);
}

// 2. for...of loop (Modern iterable traversal for Arrays, Strings, Sets)
const techStack = ["React", "Express", "TypeScript"];
for (const tech of techStack) {
  console.log("Tech:", tech);
}

// 3. while loop (runs as long as condition is true)
let remainingRetries = 3;
while (remainingRetries > 0) {
  console.log("Attempting reconnect...");
  remainingRetries--;
}`,
          explanationPoints: [
            'for...of is the cleanest syntax for iterating over array values directly.',
            'Always ensure the termination condition in a while loop will eventually be met, or the browser thread will freeze in an infinite loop.'
          ],
          commonMistakes: [
            'Using for...in to iterate arrays (for...in iterates object keys/properties as strings, not array values!).'
          ]
        }
      }
    ],
    keyPoints: [
      'Prefer for...of for iterating over arrays and iterables.',
      'Use classic for loops when you need access to the numeric index or need custom step increments.',
      'Use break to exit a loop early and continue to skip to the next iteration.'
    ],
    relatedTopicIds: ['js-control-flow', 'js-arrays', 'js-functions'],
    prevTopicId: 'js-control-flow',
    nextTopicId: 'js-functions'
  },
  {
    id: 'js-functions',
    slug: 'functions',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Functions',
    title: 'Functions & Scope',
    shortDescription: 'Function declarations, expressions, arrow functions, parameters, arguments, and lexical scope.',
    estimatedMinutes: 13,
    breadcrumbs: ['JavaScript', 'Functions', 'Functions'],
    sections: [
      {
        id: 'what-are-functions',
        heading: 'Reusable Blocks of Logic',
        paragraphs: [
          'Functions are the building blocks of JavaScript programs. They encapsulate reusable blocks of code that accept inputs (parameters), perform operations, and return an output value.'
        ]
      },
      {
        id: 'function-syntax-varieties',
        heading: 'Function Declarations vs. Arrow Functions',
        codeExample: {
          language: 'javascript',
          code: `// 1. Function Declaration (Hoisted to top of scope)
function calculateTax(subtotal, rate = 0.08) {
  return subtotal * rate;
}

// 2. Function Expression (Not hoisted)
const formatPrice = function(amount) {
  return "$" + amount.toFixed(2);
};

// 3. Arrow Function (ES6 Concise Syntax, Lexical 'this')
const calculateTotal = (subtotal, tax) => subtotal + tax;

// Calling functions:
const tax = calculateTax(100);
const total = calculateTotal(100, tax);
console.log(formatPrice(total)); // "$108.00"`,
          explanationPoints: [
            'Function declarations are hoisted, allowing them to be invoked before their line of definition.',
            'Arrow functions provide a concise syntax and inherit this lexically from their surrounding enclosing context.',
            'Default parameters (rate = 0.08) prevent NaN when callers omit optional arguments.'
          ],
          commonMistakes: [
            'Confusing parameters (the variable names defined in the function signature) with arguments (the actual values passed in when invoked).',
            'Using arrow functions as object methods when access to the object via this is required.'
          ]
        }
      }
    ],
    keyPoints: [
      'Functions encapsulate logic and return a result via the return keyword.',
      'Arrow functions have concise syntax and lexically bind this.',
      'Always specify default parameters to avoid undefined errors.'
    ],
    relatedTopicIds: ['js-arrays', 'js-objects', 'js-async'],
    prevTopicId: 'js-loops',
    nextTopicId: 'js-arrays'
  },
  {
    id: 'js-arrays',
    slug: 'arrays',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Arrays',
    title: 'Arrays & Functional Methods',
    shortDescription: 'Ordered lists, array manipulation, and mastering map(), filter(), reduce(), and find().',
    estimatedMinutes: 15,
    breadcrumbs: ['JavaScript', 'Arrays', 'Arrays'],
    sections: [
      {
        id: 'what-is-an-array',
        heading: 'Ordered Collections',
        paragraphs: [
          'An Array in JavaScript is an ordered list of values indexed by numbers starting at 0. Arrays can store any data type, including strings, numbers, objects, and even other arrays.'
        ]
      },
      {
        id: 'essential-functional-methods',
        heading: 'Mastering map(), filter(), and reduce()',
        codeExample: {
          language: 'javascript',
          code: `const products = [
  { id: 1, name: "Mechanical Keyboard", price: 120, inStock: true },
  { id: 2, name: "Wireless Mouse", price: 45, inStock: false },
  { id: 3, name: "USB-C Hub", price: 35, inStock: true }
];

// 1. filter(): Keep only matching items
const availableProducts = products.filter(item => item.inStock);

// 2. map(): Transform each item into a new shape
const productNames = products.map(item => item.name);

// 3. find(): Retrieve the first matching item or undefined
const mouse = products.find(item => item.id === 2);

// 4. reduce(): Aggregate items into a single final value
const totalInventoryValue = products.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);

console.log("Total:", totalInventoryValue); // 200`,
          explanationPoints: [
            'map() returns a new array of identical length with transformed values.',
            'filter() returns a new array containing only elements where the callback returned true.',
            'find() returns the first matching element and stops searching immediately.',
            'reduce() walks the array and accumulates values into a single accumulator starting at the initial value (0).'
          ],
          commonMistakes: [
            'Using forEach() to mutate external arrays when map() or filter() is the cleaner functional approach.',
            'Forgetting to return a value inside the map() or reduce() callback function.'
          ]
        }
      }
    ],
    keyPoints: [
      'Arrays are zero-indexed ordered collections.',
      'map, filter, and reduce are pure functional methods that do not mutate the original array.',
      'Use find() to look up a single element and some()/every() for boolean condition checks.'
    ],
    relatedTopicIds: ['js-objects', 'js-functions', 'react-lists'],
    prevTopicId: 'js-functions',
    nextTopicId: 'js-objects'
  },
  {
    id: 'js-objects',
    slug: 'objects',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Objects',
    title: 'Objects & Destructuring',
    shortDescription: 'Key-value data structures, dot and bracket notation, object destructuring, and spread operator.',
    estimatedMinutes: 13,
    breadcrumbs: ['JavaScript', 'Objects', 'Objects'],
    sections: [
      {
        id: 'what-is-an-object',
        heading: 'Key-Value Dictionaries',
        paragraphs: [
          'An Object in JavaScript is a collection of key-value pairs (properties). Keys are strings or symbols, and values can be any valid JavaScript type, including functions (methods) and nested objects.'
        ],
        codeExample: {
          language: 'javascript',
          code: `const developer = {
  name: "Sarah Chen",
  title: "Frontend Architect",
  experienceYears: 7,
  skills: ["React", "TypeScript", "Tailwind"],
  contact: {
    email: "sarah@example.com",
    city: "San Francisco"
  }
};

// 1. Destructuring: Extract properties into local variables
const { name, title, contact: { city } } = developer;
console.log(name, "lives in", city);

// 2. Object Spread: Shallow clone and merge
const updatedDeveloper = {
  ...developer,
  experienceYears: 8,
  role: "Lead Architect"
};`,
          explanationPoints: [
            'Dot notation (developer.name) accesses known properties.',
            'Bracket notation (developer["name"]) permits dynamic keys.',
            'Destructuring syntax ({ name, title }) pulls properties directly into local variables cleanly.',
            'Spread syntax (...developer) creates a shallow copy with optional property overrides.'
          ],
          commonMistakes: [
            'Assuming object spread performs a deep clone (nested objects inside ... are copied by reference!).'
          ]
        }
      }
    ],
    keyPoints: [
      'Objects store data in key-value pairs.',
      'Destructuring provides clean syntax for extracting object properties.',
      'Use the spread operator (...obj) to create shallow copies without mutating original objects.'
    ],
    relatedTopicIds: ['js-arrays', 'js-primitive-string', 'react-props'],
    prevTopicId: 'js-arrays',
    nextTopicId: 'js-dom'
  },
  {
    id: 'js-dom',
    slug: 'dom',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'DOM',
    title: 'DOM Manipulation & Events',
    shortDescription: 'Selecting nodes with querySelector, modifying styles, event listeners, bubbling, and form handling.',
    estimatedMinutes: 14,
    breadcrumbs: ['JavaScript', 'DOM', 'DOM'],
    sections: [
      {
        id: 'what-is-the-dom',
        heading: 'The Document Object Model Tree',
        paragraphs: [
          'The Document Object Model (DOM) is an object-oriented programming interface for web documents. It represents the HTML structure as a tree of nodes that JavaScript can inspect, add to, modify, or remove.'
        ],
        codeExample: {
          language: 'javascript',
          code: `// 1. Selecting Elements
const submitBtn = document.querySelector("#submit-button");
const heading = document.querySelector("h1");

// 2. Modifying Content and Styles
heading.textContent = "Application Ready";
submitBtn.classList.add("btn-active");

// 3. Attaching Event Listeners
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Stop default form submit behavior
  console.log("Button clicked at coordinates:", event.clientX, event.clientY);
});`,
          explanationPoints: [
            'document.querySelector uses standard CSS selector strings to find the first matching element.',
            'textContent sets plain text safely without opening cross-site scripting (XSS) vulnerabilities (avoid innerHTML for user inputs!).',
            'addEventListener listens for interactions (click, submit, keydown, input) and provides an Event object.'
          ],
          commonMistakes: [
            'Using innerHTML with untrusted user input, exposing the application to XSS attacks.',
            'Querying DOM elements before the HTML document has finished loading.'
          ]
        }
      }
    ],
    keyPoints: [
      'The DOM represents the HTML structure as interactive JavaScript objects.',
      'Use querySelector and querySelectorAll to query elements with CSS selector syntax.',
      'Always prefer textContent over innerHTML for security when injecting text.',
      'Use addEventListener to handle user actions and event.preventDefault() to suppress default browser actions.'
    ],
    relatedTopicIds: ['html-elements', 'js-events', 'react-events'],
    prevTopicId: 'js-objects',
    nextTopicId: 'js-async'
  },
  {
    id: 'js-async',
    slug: 'async',
    technology: 'javascript',
    techName: 'JavaScript',
    category: 'Asynchronous JavaScript',
    title: 'Asynchronous JavaScript: Promises & Fetch',
    shortDescription: 'The event loop, callback hell, Promises, async/await syntax, and fetching data from REST APIs.',
    estimatedMinutes: 15,
    breadcrumbs: ['JavaScript', 'Asynchronous JavaScript', 'Async & Fetch'],
    sections: [
      {
        id: 'sync-vs-async',
        heading: 'Synchronous vs. Asynchronous Execution',
        paragraphs: [
          'Because JavaScript is single-threaded, if a network request took 2 seconds to complete synchronously, the entire browser tab would completely freeze during those 2 seconds! Users would not even be able to scroll or click buttons.',
          'Asynchronous operations offload long-running tasks (network fetches, file reads, timers) to browser background threads, executing a callback or resolving a Promise once the task finishes.'
        ]
      },
      {
        id: 'promises-and-async-await',
        heading: 'Modern async/await with the Fetch API',
        codeExample: {
          language: 'javascript',
          code: `// Modern async/await pattern with try/catch error handling
async function loadUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);

    // Check if the HTTP status code is successful (200-299)
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const userData = await response.json();
    console.log("User retrieved:", userData.name);
    return userData;
  } catch (error) {
    console.error("Network or parsing failed:", error.message);
  }
}`,
          explanationPoints: [
            'async marks a function as returning a Promise.',
            'await pauses execution within the async function until the Promise settles, making async code read like synchronous code.',
            'fetch() returns a Response stream that must be parsed using await response.json().',
            'Always wrap await calls in a try / catch block to gracefully catch network timeouts and HTTP errors.'
          ],
          commonMistakes: [
            'Forgetting that fetch() does not reject on 404 or 500 errors! You must check response.ok.',
            'Using await outside of an async function without top-level await support.'
          ]
        }
      }
    ],
    keyPoints: [
      'Async code prevents blocking the single main execution thread.',
      'Promises represent eventual completion or failure of an async operation.',
      'async/await provides clean, readable syntax over Promise chains.',
      'Always inspect response.ok and wrap async operations in try/catch.'
    ],
    relatedTopicIds: ['js-functions', 'react-api-integration', 'express-rest-apis'],
    prevTopicId: 'js-dom'
  }
];
