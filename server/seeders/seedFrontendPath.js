const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Path = require('../models/Path');
const Module = require('../models/Module');
const Lesson = require('../models/Lesson');

dotenv.config();

const frontendData = {
  path: {
    title: 'Frontend Development',
    slug: 'frontend-development',
    description: 'Master HTML, CSS, JavaScript, Git, React, APIs, and Deployment to become a job-ready frontend engineer.',
    icon: 'Code',
    total_lessons: 67,
    estimated_hours: 35,
    is_published: true
  },
  modules: [
    {
      title: '1. HTML Foundations',
      slug: 'html-foundations',
      description: 'Learn the structure of the web, semantic elements, forms, and accessibility basics.',
      order: 1,
      total_lessons: 8,
      estimated_minutes: 160,
      icon: 'FileCode',
      lessons: [
        {
          title: '1.1 What is HTML? Introduction & Setup',
          slug: 'what-is-html',
          order: 1,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 18,
          description: 'Introduction to HTML, web development concepts, and setting up VS Code.',
          key_takeaways: [
            'HTML stands for HyperText Markup Language and provides the structure of web pages.',
            'Elements consist of opening tag, content, and closing tag.',
            'VS Code is the industry-standard code editor with built-in Emmet shortcuts.'
          ],
          practice_task: {
            title: 'Create your first HTML file',
            description: 'Create an index.html file with a title tag and a heading saying "Hello World".',
            hint: 'Use the Emmet shortcut ! in VS Code to generate basic HTML boilerplate.'
          },
          resources: [
            { title: 'MDN: Introduction to HTML', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML' }
          ]
        },
        {
          title: '1.2 HTML Document Structure',
          slug: 'html-document-structure',
          order: 2,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 20,
          description: 'Understanding doctype, html, head, body, meta tags, and document hierarchy.',
          key_takeaways: [
            '<!DOCTYPE html> tells the browser to parse as HTML5.',
            '<head> contains metadata, title, and external stylesheets.',
            '<body> contains visible page content.'
          ],
          practice_task: {
            title: 'Build a standard boilerplate',
            description: 'Set up head with charset UTF-8 and viewport meta tags.',
            hint: '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
          },
          resources: [
            { title: 'MDN: Document and Element Metadata', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head' }
          ]
        },
        {
          title: '1.3 Text Elements (Headings, Paragraphs, Lists)',
          slug: 'text-elements',
          order: 3,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 22,
          description: 'Master h1-h6 headings, paragraphs, strong/em tags, ordered & unordered lists.',
          key_takeaways: [
            'Use only one h1 per page for optimal SEO and heading hierarchy.',
            '<ol> is for ordered lists, <ul> is for bulleted lists.',
            'Use <strong> for semantic importance and <em> for emphasis.'
          ],
          practice_task: {
            title: 'Create a recipe page structure',
            description: 'Use h1 for recipe title, h2 for ingredients, and ol for step-by-step instructions.',
            hint: 'Nest <li> inside <ol> for sequential steps.'
          },
          resources: [
            { title: 'MDN: HTML Text Fundamentals', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals' }
          ]
        },
        {
          title: '1.4 Links and Navigation',
          slug: 'links-and-navigation',
          order: 4,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 18,
          description: 'Learn anchor tags, absolute vs relative paths, target attribute, and internal page links.',
          key_takeaways: [
            'href attribute defines the link destination.',
            'target="_blank" opens links in a new tab; always pair with rel="noopener noreferrer".',
            'Internal page anchors use id attributes (e.g. href="#section-1").'
          ],
          practice_task: {
            title: 'Build a simple navigation menu',
            description: 'Create a nav element containing unordered list of links to Home, About, and Contact.',
            hint: '<a href="/about">About</a>'
          },
          resources: [
            { title: 'MDN: Creating Hyperlinks', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks' }
          ]
        },
        {
          title: '1.5 Images and Media',
          slug: 'images-and-media',
          order: 5,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 20,
          description: 'Working with img, figure, figcaption, video, and audio tags with accessibility alt text.',
          key_takeaways: [
            'Always provide descriptive alt text for screen readers and SEO.',
            'Use responsive loading attributes like loading="lazy".',
            '<figure> and <figcaption> associate captions semantically with media.'
          ],
          practice_task: {
            title: 'Add a captioned photo gallery',
            description: 'Add 2 images wrapped in figure tags with alt text and figcaptions.',
            hint: '<figure><img src="..." alt="..."><figcaption>...</figcaption></figure>'
          },
          resources: [
            { title: 'MDN: Images in HTML', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML' }
          ]
        },
        {
          title: '1.6 Forms and Input Elements',
          slug: 'forms-and-input-elements',
          order: 6,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 25,
          description: 'Create interactive forms with text inputs, email, password, radio buttons, checkboxes, labels, and submit buttons.',
          key_takeaways: [
            'Every input should have an associated <label> using the for/id pattern.',
            'Use input types like email, tel, and number for mobile browser optimizations.',
            'Required attribute enables native HTML form validation.'
          ],
          practice_task: {
            title: 'Build a user registration form',
            description: 'Include inputs for Full Name, Email, Password, Terms checkbox, and a Submit button.',
            hint: '<label for="email">Email</label><input type="email" id="email" required>'
          },
          resources: [
            { title: 'MDN: Your first HTML form', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form' }
          ]
        },
        {
          title: '1.7 Semantic HTML',
          slug: 'semantic-html',
          order: 7,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 20,
          description: 'Ditch div soup! Learn semantic elements: header, nav, main, section, article, aside, and footer.',
          key_takeaways: [
            'Semantic HTML improves screen reader accessibility, SEO ranking, and code readability.',
            '<main> represents the dominant content of the body.',
            '<article> is for self-contained reusable compositions.'
          ],
          practice_task: {
            title: 'Refactor div layout to semantic HTML',
            description: 'Replace generic <div> containers with header, nav, main, article, and footer.',
            hint: 'Use <article> for blog post content.'
          },
          resources: [
            { title: 'MDN: HTML Structural Elements', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure' }
          ]
        },
        {
          title: '1.8 HTML Best Practices & Accessibility Basics',
          slug: 'html-accessibility-basics',
          order: 8,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 15,
          description: 'ARIA attributes, keyboard navigation, color contrast, and HTML validator checks.',
          key_takeaways: [
            'First rule of ARIA: Don\'t use ARIA if a native HTML element exists.',
            'Ensure all interactive elements are reachable via Tab key.',
            'Validate your HTML using W3C Markup Validation Service.'
          ],
          practice_task: {
            title: 'Accessibility Audit',
            description: 'Check a page for missing alt text, unlabelled inputs, and proper heading order.',
            hint: 'Install Chrome Lighthouse extension for quick automated audit.'
          },
          resources: [
            { title: 'W3C Web Accessibility Initiative', url: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/' }
          ]
        }
      ]
    },
    {
      title: '2. CSS Fundamentals',
      slug: 'css-fundamentals',
      description: 'Master CSS styling, Box Model, Flexbox, Grid, Responsive Design, and Modern CSS.',
      order: 2,
      total_lessons: 10,
      estimated_minutes: 230,
      icon: 'Palette',
      lessons: [
        {
          title: '2.1 Introduction to CSS & How Styling Works',
          slug: 'intro-to-css',
          order: 1,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 18,
          description: 'Understanding inline, internal, and external CSS, cascade rules, and syntax.',
          key_takeaways: [
            'External stylesheets (<link rel="stylesheet" href="...">) are standard best practice.',
            'CSS selector { property: value; } syntax rule.',
            'Styles cascade down from parent to children unless overridden.'
          ],
          practice_task: {
            title: 'Link an external CSS file',
            description: 'Create styles.css and style the body background color and main font family.',
            hint: 'body { background-color: #fafafa; font-family: sans-serif; }'
          },
          resources: [{ title: 'MDN: What is CSS?', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS' }]
        },
        {
          title: '2.2 Selectors & Specificity',
          slug: 'selectors-and-specificity',
          order: 2,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 22,
          description: 'Element, class, ID selectors, pseudo-classes, combinators, and calculating specificity scores.',
          key_takeaways: [
            'Specificity hierarchy: Inline (1000) > ID (100) > Class/Attribute (10) > Element (1).',
            'Avoid using !important whenever possible.',
            ':hover, :focus, :nth-child() are powerful pseudo-classes.'
          ],
          practice_task: {
            title: 'Style a button with hover state',
            description: 'Create a .btn class with padding, background color, and a smooth :hover color shift.',
            hint: '.btn:hover { background-color: #4f46e5; }'
          },
          resources: [{ title: 'MDN: Specificity', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity' }]
        },
        {
          title: '2.3 Box Model (Margin, Padding, Border)',
          slug: 'box-model',
          order: 3,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 20,
          description: 'Deep dive into content, padding, border, margin, and box-sizing: border-box.',
          key_takeaways: [
            'Every element in CSS is a rectangular box.',
            'box-sizing: border-box includes padding and border within total element width.',
            'Margin collapsing occurs between adjacent vertical margins.'
          ],
          practice_task: {
            title: 'Set up global box-sizing reset',
            description: 'Apply box-sizing: border-box to all elements using the universal selector (*).',
            hint: '*, *::before, *::after { box-sizing: border-box; }'
          },
          resources: [{ title: 'MDN: The Box Model', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model' }]
        },
        {
          title: '2.4 Display & Positioning',
          slug: 'display-and-positioning',
          order: 4,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 25,
          description: 'Block vs inline vs inline-block, static, relative, absolute, fixed, and sticky positioning.',
          key_takeaways: [
            'position: absolute positions relative to the nearest positioned ancestor.',
            'position: fixed sticks to the browser viewport.',
            'position: sticky toggles between relative and fixed depending on scroll position.'
          ],
          practice_task: {
            title: 'Build a sticky navbar',
            description: 'Make a header stay at top of screen during scroll using position: sticky.',
            hint: 'header { position: sticky; top: 0; z-index: 100; }'
          },
          resources: [{ title: 'MDN: Positioning', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning' }]
        },
        {
          title: '2.5 Flexbox Layout',
          slug: 'flexbox-layout',
          order: 5,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 30,
          description: 'Master modern 1D layout: flex-direction, justify-content, align-items, flex-wrap, and gap.',
          key_takeaways: [
            'display: flex turns container into a flex container.',
            'justify-content aligns items along the main axis.',
            'align-items aligns items along the cross axis.',
            'gap property simplifies spacing between flex items without negative margins.'
          ],
          practice_task: {
            title: 'Build a centered hero layout with Flexbox',
            description: 'Center title, subtitle, and CTA button horizontally and vertically using Flexbox.',
            hint: 'display: flex; flex-direction: column; align-items: center; justify-content: center;'
          },
          resources: [{ title: 'CSS-Tricks: Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' }]
        },
        {
          title: '2.6 CSS Grid Layout',
          slug: 'css-grid-layout',
          order: 6,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 25,
          description: 'Master 2D layouts: grid-template-columns, fr units, repeat(), auto-fit, minmax(), and grid areas.',
          key_takeaways: [
            'Grid handles rows and columns simultaneously.',
            'repeat(auto-fit, minmax(250px, 1fr)) creates instant responsive card layouts without media queries.',
            'fr unit represents a fraction of remaining free space.'
          ],
          practice_task: {
            title: 'Create a responsive 3-column feature grid',
            description: 'Build a card grid that wraps automatically on mobile.',
            hint: 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;'
          },
          resources: [{ title: 'CSS-Tricks: Complete Guide to Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' }]
        },
        {
          title: '2.7 Responsive Design & Media Queries',
          slug: 'responsive-design',
          order: 7,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 28,
          description: 'Mobile-first approach, min-width media queries, fluid typography, and viewport units.',
          key_takeaways: [
            'Mobile-first design writes base styles for small screens then expands with min-width queries.',
            'Standard breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl).',
            'Never hide critical navigation without providing an accessible mobile toggle.'
          ],
          practice_task: {
            title: 'Add tablet and desktop media queries',
            description: 'Change mobile single column layout to 2 columns at 768px and 3 columns at 1024px.',
            hint: '@media (min-width: 768px) { ... }'
          },
          resources: [{ title: 'MDN: Responsive Web Design', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design' }]
        },
        {
          title: '2.8 Typography & Colors',
          slug: 'typography-and-colors',
          order: 8,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 20,
          description: 'Google Fonts integration, font-weight, line-height, HSL color space, and opacity.',
          key_takeaways: [
            'Line-height of 1.5 to 1.6 is ideal for body text readability.',
            'HSL (Hue, Saturation, Lightness) makes creating color palettes intuitive.',
            'Contrast ratio between text and background must be at least 4.5:1 for WCAG AA.'
          ],
          practice_task: {
            title: 'Import Inter font from Google Fonts',
            description: 'Import Inter font family and set up a typography hierarchy with line-heights.',
            hint: '@import url(\'https://fonts.googleapis.com/css2?family=Inter...\');'
          },
          resources: [{ title: 'Google Fonts', url: 'https://fonts.google.com' }]
        },
        {
          title: '2.9 Transitions & Animations',
          slug: 'transitions-and-animations',
          order: 9,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 20,
          description: 'CSS transition property, transform (scale, translate, rotate), keyframe animations.',
          key_takeaways: [
            'Only animate opacity and transform for 60fps GPU-accelerated performance.',
            'transition: transform 0.2s ease, opacity 0.2s ease.',
            'Respect prefers-reduced-motion media query for motion-sensitive users.'
          ],
          practice_task: {
            title: 'Animate card hover state',
            description: 'Add a subtle lift effect (translateY(-4px)) and enhanced shadow on card hover.',
            hint: '.card { transition: transform 0.2s ease, box-shadow 0.2s ease; } .card:hover { transform: translateY(-4px); }'
          },
          resources: [{ title: 'MDN: Using CSS Transitions', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions' }]
        },
        {
          title: '2.10 CSS Variables & Modern CSS',
          slug: 'css-variables-and-modern-css',
          order: 10,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 18,
          description: 'CSS custom properties (--var), dark mode toggles with data-theme, container queries.',
          key_takeaways: [
            'CSS variables are declared with --name and consumed with var(--name).',
            'Scope variables to :root for global design tokens.',
            'Easily switch themes by swapping variable values on body or root element.'
          ],
          practice_task: {
            title: 'Build a light/dark color token system',
            description: 'Define --bg-primary and --text-primary variables and toggle them using a class.',
            hint: ':root { --bg-primary: #ffffff; } [data-theme="dark"] { --bg-primary: #09090b; }'
          },
          resources: [{ title: 'MDN: Using CSS Custom Properties', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties' }]
        }
      ]
    },
    {
      title: '3. JavaScript Essentials',
      slug: 'javascript-essentials',
      description: 'Master JavaScript logic, DOM manipulation, ES6+ features, Async/Await, and API interaction.',
      order: 3,
      total_lessons: 15,
      estimated_minutes: 360,
      icon: 'Code2',
      lessons: [
        {
          title: '3.1 Introduction to JavaScript',
          slug: 'intro-to-javascript',
          order: 1,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 20,
          description: 'Role of JS in web apps, running JS in browser console and script tags, developer tools.',
          key_takeaways: [
            'JavaScript adds interactivity and logic to static HTML/CSS.',
            'Always load scripts with defer attribute at the end of head or body.',
            'console.log() is your primary quick debugging tool.'
          ],
          practice_task: {
            title: 'Run your first JS script',
            description: 'Create main.js, link it with <script src="main.js" defer></script>, and log a welcome message.',
            hint: 'console.log("Welcome to PathForge JavaScript");'
          },
          resources: [{ title: 'MDN: JavaScript Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics' }]
        },
        {
          title: '3.2 Variables, Data Types & Operators',
          slug: 'variables-data-types-operators',
          order: 2,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 25,
          description: 'let vs const vs var, primitives (string, number, boolean, null, undefined), strict equality (===).',
          key_takeaways: [
            'Always default to const; use let only when variable values will be reassigned.',
            'Never use var in modern JavaScript.',
            'Always use strict equality === instead of loose equality ==.'
          ],
          practice_task: {
            title: 'Build a simple tip calculator logic',
            description: 'Define const billAmount = 100 and const tipPercentage = 15; compute total.',
            hint: 'const total = billAmount + (billAmount * (tipPercentage / 100));'
          },
          resources: [{ title: 'MDN: Grammar and Types', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types' }]
        },
        {
          title: '3.3 Strings & String Methods',
          slug: 'strings-and-methods',
          order: 3,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 22,
          description: 'Template literals (`${}`), includes, slice, split, trim, replace, and case conversion.',
          key_takeaways: [
            'Template literals using backticks allow multi-line strings and string interpolation.',
            'string.includes() checks if substring exists.',
            'string.trim() removes leading/trailing whitespace.'
          ],
          practice_task: {
            title: 'Format a user greeting',
            description: 'Take a raw input string like "  shubham ", trim it, capitalize first letter, and format greeting using template literals.',
            hint: '`Hello ${cleanName}!`'
          },
          resources: [{ title: 'MDN: String', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' }]
        },
        {
          title: '3.4 Arrays & Array Methods',
          slug: 'arrays-and-methods',
          order: 4,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 30,
          description: 'Push, pop, shift, unshift, map, filter, reduce, find, and includes.',
          key_takeaways: [
            'map() creates a new array by applying a function to every item.',
            'filter() returns a new array with items that pass a test condition.',
            'reduce() accumulates values into a single result.'
          ],
          practice_task: {
            title: 'Filter completed lessons',
            description: 'Given an array of lesson objects with completed: boolean, use .filter() to return only completed lessons.',
            hint: 'lessons.filter(lesson => lesson.completed === true)'
          },
          resources: [{ title: 'MDN: Array Methods', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' }]
        },
        {
          title: '3.5 Objects & Object Methods',
          slug: 'objects-and-methods',
          order: 5,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 25,
          description: 'Object literals, dot vs bracket notation, Object.keys(), Object.values(), Object.entries().',
          key_takeaways: [
            'Objects store key-value pairs representing entity properties.',
            'Use bracket notation when property names are dynamic variables.',
            'Object.keys(obj) returns an array of property names.'
          ],
          practice_task: {
            title: 'Create a User profile object',
            description: 'Define a user object with name, progress percentage, and a getSummary() method.',
            hint: 'getSummary() { return `${this.name} is ${this.progress}% complete`; }'
          },
          resources: [{ title: 'MDN: Working with Objects', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects' }]
        },
        {
          title: '3.6 Control Flow (if/else, switch)',
          slug: 'control-flow',
          order: 6,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 20,
          description: 'Conditional branching, truthy vs falsy values, ternary operator (condition ? a : b).',
          key_takeaways: [
            'Falsy values in JS: false, 0, "", null, undefined, NaN.',
            'Ternary operator is ideal for inline conditional assignments.',
            'Logical AND (&&) short-circuits execution if first operand is falsy.'
          ],
          practice_task: {
            title: 'Determine lesson badge status',
            description: 'Write a function that returns "Completed", "In Progress", or "Locked" based on lesson flags.',
            hint: 'isCompleted ? "Completed" : isUnlocked ? "In Progress" : "Locked"'
          },
          resources: [{ title: 'MDN: Control flow and error handling', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling' }]
        },
        {
          title: '3.7 Loops (for, while, forEach)',
          slug: 'loops-and-iteration',
          order: 7,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 20,
          description: 'Iterating over data with for loops, for...of, for...in, and array.forEach().',
          key_takeaways: [
            'for...of iterates over array values.',
            'for...in iterates over object keys.',
            'Avoid modifying arrays while iterating over them.'
          ],
          practice_task: {
            title: 'Calculate total duration of a module',
            description: 'Loop over an array of lesson durations and sum them up.',
            hint: 'let total = 0; for (const mins of durations) { total += mins; }'
          },
          resources: [{ title: 'MDN: Loops and iteration', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration' }]
        },
        {
          title: '3.8 Functions & Scope',
          slug: 'functions-and-scope',
          order: 8,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 25,
          description: 'Function declarations vs expressions, parameters & default values, return values, block scope.',
          key_takeaways: [
            'Function declarations are hoisted; expressions are not.',
            'Block scope (let/const) keeps variables isolated within {} blocks.',
            'Functions should do one thing well (Single Responsibility Principle).'
          ],
          practice_task: {
            title: 'Build a progress percentage helper',
            description: 'Create a function calculateProgress(completed, total = 67) that returns rounded percentage.',
            hint: 'return Math.round((completed / total) * 100);'
          },
          resources: [{ title: 'MDN: Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' }]
        },
        {
          title: '3.9 Arrow Functions & Higher-Order Functions',
          slug: 'arrow-functions',
          order: 9,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 22,
          description: 'Implicit returns, arrow function syntax, lexical `this` binding, passing functions as callbacks.',
          key_takeaways: [
            'Arrow syntax: const add = (a, b) => a + b;',
            'Arrow functions inherit `this` from parent scope.',
            'Higher-order functions take or return other functions.'
          ],
          practice_task: {
            title: 'Refactor array methods to arrow functions',
            description: 'Convert traditional function callbacks in .map() to concise inline arrow functions.',
            hint: 'lessons.map(l => l.title)'
          },
          resources: [{ title: 'MDN: Arrow function expressions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' }]
        },
        {
          title: '3.10 DOM Manipulation',
          slug: 'dom-manipulation',
          order: 10,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 30,
          description: 'querySelector, querySelectorAll, textContent, innerHTML, classList (add, remove, toggle), appendChild.',
          key_takeaways: [
            'document.querySelector() selects single element via CSS selector string.',
            'Use textContent instead of innerHTML to prevent XSS vulnerability attacks.',
            'element.classList.toggle("active") toggles UI states easily.'
          ],
          practice_task: {
            title: 'Build a dynamic lesson completion toggle UI',
            description: 'Select a button on click, toggle class .completed, and change text to "Completed!".',
            hint: 'btn.classList.toggle("completed"); btn.textContent = "Completed!";'
          },
          resources: [{ title: 'MDN: Introduction to the DOM', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' }]
        },
        {
          title: '3.11 Events & Event Handling',
          slug: 'events-and-event-handling',
          order: 11,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 25,
          description: 'addEventListener, event object (e), e.preventDefault(), event delegation.',
          key_takeaways: [
            'e.preventDefault() prevents default browser form submission refresh.',
            'Event delegation listens on parent element to handle events on dynamic child items.',
            'Always clean up event listeners when components unmount.'
          ],
          practice_task: {
            title: 'Handle form submit with event object',
            description: 'Attach submit listener to form, prevent default, and log input values.',
            hint: 'form.addEventListener("submit", (e) => { e.preventDefault(); ... });'
          },
          resources: [{ title: 'MDN: Introduction to events', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events' }]
        },
        {
          title: '3.12 ES6+ Features (Destructuring, Spread, Rest)',
          slug: 'es6-features',
          order: 12,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 25,
          description: 'Object & array destructuring, spread operator (...), rest parameters, optional chaining (?.), nullish coalescing (??).',
          key_takeaways: [
            'Destructuring unpacks values from arrays or objects into distinct variables.',
            'Spread operator (...) shallow copies arrays or merges objects without mutating original.',
            'Optional chaining user?.profile?.avatar prevents "Cannot read property of undefined" crashes.'
          ],
          practice_task: {
            title: 'Safely read user preferences with optional chaining',
            description: 'Access nested properties on a user object safely using ?. and ?? defaults.',
            hint: 'const theme = user?.settings?.theme ?? "light";'
          },
          resources: [{ title: 'MDN: Destructuring assignment', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment' }]
        },
        {
          title: '3.13 Promises & Async/Await',
          slug: 'promises-and-async-await',
          order: 13,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 30,
          description: 'Asynchronous JS, Promises (pending, fulfilled, rejected), async functions, await keyword.',
          key_takeaways: [
            'Async functions return a Promise implicitly.',
            'await pauses execution until promise resolves.',
            'Always wrap await calls in try...catch blocks for graceful error handling.'
          ],
          practice_task: {
            title: 'Write an async function',
            description: 'Create an async function fetchLessonData() that simulates network delay with setTimeout.',
            hint: 'async function getData() { const res = await fetch(...); }'
          },
          resources: [{ title: 'MDN: How to use Promises', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises' }]
        },
        {
          title: '3.14 Error Handling',
          slug: 'error-handling',
          order: 14,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 20,
          description: 'try...catch...finally, throwing custom Error objects, API error response checks.',
          key_takeaways: [
            'Use try...catch to intercept runtime exceptions without crashing the app.',
            'throw new Error("Custom message") creates descriptive exceptions.',
            'finally block runs regardless of success or error.'
          ],
          practice_task: {
            title: 'Wrap network request in try-catch',
            description: 'Catch network errors and show a toast or fallback error UI.',
            hint: 'try { ... } catch (err) { console.error(err.message); }'
          },
          resources: [{ title: 'MDN: try...catch', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch' }]
        },
        {
          title: '3.15 JavaScript Mini Project: Quiz App',
          slug: 'js-mini-project',
          order: 15,
          youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
          youtube_id: 'W6NZfCO5SIk',
          duration_minutes: 35,
          description: 'Combine DOM manipulation, event handling, data structures, and state management into a complete app.',
          key_takeaways: [
            'Keep application state separated from DOM render functions.',
            'Re-render UI whenever state changes.',
            'Test edge cases like final question submission.'
          ],
          practice_task: {
            title: 'Build a 3-question JavaScript quiz',
            description: 'Render questions from an array of objects, track score state, and display score at end.',
            hint: 'const state = { currentQuestion: 0, score: 0 };'
          },
          resources: [{ title: 'MDN: Building a JS App', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript' }]
        }
      ]
    },
    {
      title: '4. Git & GitHub',
      slug: 'git-and-github',
      description: 'Master version control, branches, commits, pushing to GitHub, and pull requests.',
      order: 4,
      total_lessons: 6,
      estimated_minutes: 110,
      icon: 'GitBranch',
      lessons: [
        {
          title: '4.1 What is Version Control?',
          slug: 'what-is-version-control',
          order: 1,
          youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE',
          youtube_id: 'RGOj5yH7evE',
          duration_minutes: 15,
          description: 'Why software developers use Git, history tracking, collaboration, and snapshots.',
          key_takeaways: [
            'Git tracks changes in your codebase over time using snapshots called commits.',
            'Git works locally on your machine without needing internet.',
            'GitHub is a cloud platform for hosting Git repositories.'
          ],
          practice_task: {
            title: 'Install Git and configure user details',
            description: 'Run git config --global user.name and user.email in your terminal.',
            hint: 'git config --global user.name "Your Name"'
          },
          resources: [{ title: 'Git Official Documentation', url: 'https://git-scm.com/doc' }]
        },
        {
          title: '4.2 Git Basics (init, add, commit, status)',
          slug: 'git-basics',
          order: 2,
          youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE',
          youtube_id: 'RGOj5yH7evE',
          duration_minutes: 20,
          description: 'Initializing repos, staging area, commit messages, git status, git log.',
          key_takeaways: [
            'git init initializes a new repository.',
            'git add filename stages changes for commit.',
            'Write meaningful commit messages in present imperative tense (e.g. "Add navbar component").'
          ],
          practice_task: {
            title: 'Make your first commit',
            description: 'Initialize a repo, stage index.html, and commit with message "Initial commit".',
            hint: 'git init && git add . && git commit -m "Initial commit"'
          },
          resources: [{ title: 'GitHub Git Cheat Sheet', url: 'https://education.github.com/git-cheat-sheet-education.pdf' }]
        },
        {
          title: '4.3 Branching & Merging',
          slug: 'branching-and-merging',
          order: 3,
          youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE',
          youtube_id: 'RGOj5yH7evE',
          duration_minutes: 20,
          description: 'Creating feature branches, switching branches (git checkout / switch), merging, and handling merge conflicts.',
          key_takeaways: [
            'Keep main branch clean and build features in dedicated feature branches.',
            'git checkout -b feature/login creates and switches to new branch.',
            'Merge conflicts happen when Git cannot automatically resolve overlapping changes.'
          ],
          practice_task: {
            title: 'Create and merge a feature branch',
            description: 'Create branch feature/footer, add footer code, commit, switch back to main, and merge.',
            hint: 'git checkout -b feature/footer && git merge feature/footer'
          },
          resources: [{ title: 'Atlassian Git Branching Tutorial', url: 'https://www.atlassian.com/git/tutorials/using-branches' }]
        },
        {
          title: '4.4 GitHub Fundamentals (Push, Pull, Clone)',
          slug: 'github-fundamentals',
          order: 4,
          youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE',
          youtube_id: 'RGOj5yH7evE',
          duration_minutes: 20,
          description: 'Connecting local repo to GitHub, git remote add origin, git push -u origin main, git pull.',
          key_takeaways: [
            'git remote connects local repo to remote cloud repository.',
            'git push uploads local commits to GitHub.',
            'git pull fetches and merges remote updates into local branch.'
          ],
          practice_task: {
            title: 'Publish a project to GitHub',
            description: 'Create a new repository on GitHub and push your local code.',
            hint: 'git push -u origin main'
          },
          resources: [{ title: 'GitHub Quickstart Guide', url: 'https://docs.github.com/en/get-started/quickstart' }]
        },
        {
          title: '4.5 Pull Requests & Collaboration',
          slug: 'pull-requests',
          order: 5,
          youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE',
          youtube_id: 'RGOj5yH7evE',
          duration_minutes: 20,
          description: 'Creating Pull Requests, code reviews, inline feedback, and merging PRs on GitHub.',
          key_takeaways: [
            'Pull Requests allow team members to review code before merging into production.',
            'Include descriptions of what changed and visual screenshots in PRs.',
            'Squash and merge combines multiple feature commits into one clean main commit.'
          ],
          practice_task: {
            title: 'Open a Pull Request on GitHub',
            description: 'Push a feature branch to GitHub and open a Pull Request against main.',
            hint: 'Click "Compare & pull request" button on GitHub repo page.'
          },
          resources: [{ title: 'GitHub Docs: About Pull Requests', url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests' }]
        },
        {
          title: '4.6 Git Workflow Best Practices & .gitignore',
          slug: 'git-best-practices',
          order: 6,
          youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE',
          youtube_id: 'RGOj5yH7evE',
          duration_minutes: 15,
          description: 'Creating .gitignore files to exclude node_modules, .env files, build output, and secret keys.',
          key_takeaways: [
            'NEVER commit secret API keys or .env files to Git.',
            '.gitignore specifies untracked files that Git should ignore.',
            'Commit small, atomic changes frequently.'
          ],
          practice_task: {
            title: 'Create a standard .gitignore',
            description: 'Add node_modules/, .env, and dist/ to your project\'s .gitignore file.',
            hint: 'Add node_modules and .env on separate lines in .gitignore'
          },
          resources: [{ title: 'gitignore.io Generator', url: 'https://www.toptal.com/developers/gitignore' }]
        }
      ]
    },
    {
      title: '5. React',
      slug: 'react',
      description: 'Build modern component-driven user interfaces with React, Hooks, JSX, and React Router.',
      order: 5,
      total_lessons: 12,
      estimated_minutes: 300,
      icon: 'Atom',
      lessons: [
        {
          title: '5.1 What is React? Why React?',
          slug: 'what-is-react',
          order: 1,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 20,
          description: 'Virtual DOM, component-driven architecture, declarative UI vs imperative DOM manipulation.',
          key_takeaways: [
            'React builds UI out of reusable, isolated components.',
            'Virtual DOM compares changes efficiently in memory before updating real DOM.',
            'React handles state updates declaratively — you change state, React updates UI.'
          ],
          practice_task: {
            title: 'Explore React Ecosystem',
            description: 'Understand the difference between React, React DOM, and Vite bundler.',
            hint: 'React DOM handles rendering React components to browser HTML.'
          },
          resources: [{ title: 'React Official Docs: Learn React', url: 'https://react.dev/learn' }]
        },
        {
          title: '5.2 Setting Up a React Project with Vite',
          slug: 'setup-react-vite',
          order: 2,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 20,
          description: 'Creating app with npm create vite@latest, folder structure, main.jsx, App.jsx.',
          key_takeaways: [
            'Vite provides instantaneous dev server start and instant Hot Module Replacement (HMR).',
            'main.jsx mounts <App /> to document.getElementById("root").',
            'Component files use .jsx extension for JSX syntax.'
          ],
          practice_task: {
            title: 'Create a Vite React app',
            description: 'Run npm create vite@latest my-app -- --template react, install dependencies, and start dev server.',
            hint: 'cd my-app && npm install && npm run dev'
          },
          resources: [{ title: 'Vite Guide', url: 'https://vitejs.dev/guide/' }],
          command: {
            code: 'npm create vite@latest my-react-app -- --template react',
            description: 'This command creates a new React project using Vite.',
            usage: 'Run this command inside the directory where you want your project folder created.',
            steps: [
              'Open your terminal.',
              'Navigate to the folder where you want to create the project.',
              'Run the command.',
              'Select React when prompted.',
              'Select JavaScript or TypeScript.',
              'Move into the project folder.'
            ]
          }
        },
        {
          title: '5.3 JSX & Components',
          slug: 'jsx-and-components',
          order: 3,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 25,
          description: 'JSX rules, returning single root element (Fragments <> </>), embedding JS expressions with {}.',
          key_takeaways: [
            'JSX is a syntax extension that looks like HTML inside JS files.',
            'Use className instead of class, htmlFor instead of for.',
            'Every component function name must start with a Capital letter.'
          ],
          practice_task: {
            title: 'Build a Card Component',
            description: 'Create a Card component that returns a styled container with title and description.',
            hint: 'export default function Card() { return <div className="card">...</div>; }'
          },
          resources: [{ title: 'React Docs: Writing Markup with JSX', url: 'https://react.dev/learn/writing-markup-with-jsx' }]
        },
        {
          title: '5.4 Props & Component Communication',
          slug: 'props-and-communication',
          order: 4,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 25,
          description: 'Passing data down via props, destructuring props, children prop, default props.',
          key_takeaways: [
            'Props are read-only inputs passed from parent to child components.',
            'Props flow unidirectionally down the component tree.',
            'children prop allows passing arbitrary JSX content inside component tags.'
          ],
          practice_task: {
            title: 'Make Card Component reusable with props',
            description: 'Pass title, duration, and badge text as props to <Card title="CSS" duration={20} />.',
            hint: 'function Card({ title, duration }) { return <h3>{title} ({duration}m)</h3>; }'
          },
          resources: [{ title: 'React Docs: Passing Props to a Component', url: 'https://react.dev/learn/passing-props-to-a-component' }]
        },
        {
          title: '5.5 State & useState Hook',
          slug: 'state-and-usestate',
          order: 5,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 30,
          description: 'Managing component state with const [state, setState] = useState(initial), immutable updates.',
          key_takeaways: [
            'State stores memory across component re-renders.',
            'Never mutate state directly — always call setState function.',
            'Updating state triggers automatic UI re-render.'
          ],
          practice_task: {
            title: 'Build a counter component',
            description: 'Create a button that increments a count state on click.',
            hint: 'const [count, setCount] = useState(0);'
          },
          resources: [{ title: 'React Docs: State a Component\'s Memory', url: 'https://react.dev/learn/state-a-components-memory' }]
        },
        {
          title: '5.6 Event Handling in React',
          slug: 'event-handling-in-react',
          order: 6,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 20,
          description: 'onClick, onChange, onSubmit synthetic events, passing handler functions to props.',
          key_takeaways: [
            'Pass event handler functions directly without invoking them: onClick={handleClick}.',
            'React wraps browser events in synthetic event objects.',
            'Pass callback props to lift state up from child to parent.'
          ],
          practice_task: {
            title: 'Toggle lesson complete button state',
            description: 'Toggle isCompleted state boolean when button is clicked.',
            hint: 'onClick={() => setIsCompleted(!isCompleted)}'
          },
          resources: [{ title: 'React Docs: Responding to Events', url: 'https://react.dev/learn/responding-to-events' }]
        },
        {
          title: '5.7 useEffect & Side Effects',
          slug: 'useeffect-and-side-effects',
          order: 7,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 30,
          description: 'Fetching data, dependency arrays [], cleanup functions, avoiding infinite render loops.',
          key_takeaways: [
            'useEffect runs side effects after component renders.',
            'Empty dependency array [] runs effect once on mount.',
            'Return a cleanup function to unsubscribe listeners or clear timers.'
          ],
          practice_task: {
            title: 'Fetch API data inside useEffect',
            description: 'Fetch lesson list from backend API when page component mounts.',
            hint: 'useEffect(() => { fetchLessons(); }, []);'
          },
          resources: [{ title: 'React Docs: Synchronizing with Effects', url: 'https://react.dev/learn/synchronizing-with-effects' }]
        },
        {
          title: '5.8 Conditional Rendering & Lists',
          slug: 'conditional-rendering-and-lists',
          order: 8,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 25,
          description: 'Rendering lists with .map(), key prop requirement, ternary rendering, logical && guard.',
          key_takeaways: [
            'Always provide a unique key prop when rendering list items with .map().',
            'Use key={item._id} rather than index whenever possible.',
            'Logical && condition: {isLoggedIn && <Dashboard />}'
          ],
          practice_task: {
            title: 'Render a list of lesson items',
            description: 'Map over an array of lesson objects and render a list of styled cards with key props.',
            hint: 'lessons.map(lesson => <LessonCard key={lesson._id} lesson={lesson} />)'
          },
          resources: [{ title: 'React Docs: Rendering Lists', url: 'https://react.dev/learn/rendering-lists' }]
        },
        {
          title: '5.9 Forms & Controlled Components',
          slug: 'forms-and-controlled-components',
          order: 9,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 25,
          description: 'Controlled input values bound to React state, multi-input forms, submission handling.',
          key_takeaways: [
            'Controlled component: React state is the single source of truth for input value.',
            '<input value={email} onChange={(e) => setEmail(e.target.value)} />',
            'Handle form submit with e.preventDefault().'
          ],
          practice_task: {
            title: 'Build a controlled Login Form',
            description: 'Create email and password state variables and bind them to form inputs.',
            hint: 'const [formData, setFormData] = useState({ email: "", password: "" });'
          },
          resources: [{ title: 'React Docs: Sharing State Between Components', url: 'https://react.dev/learn/sharing-state-between-components' }]
        },
        {
          title: '5.10 React Router (Navigation & Dynamic Routes)',
          slug: 'react-router',
          order: 10,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 28,
          description: 'BrowserRouter, Routes, Route, Link, useNavigate, useParams for dynamic URLs like /lesson/:id.',
          key_takeaways: [
            '<Link to="..."> performs client-side page navigation without full browser refresh.',
            'useParams() retrieves URL parameters like /lesson/:id.',
            'useNavigate() allows programmatic navigation after actions.'
          ],
          practice_task: {
            title: 'Set up application routes',
            description: 'Define routes for /, /dashboard, /roadmap, and /lesson/:id using React Router 6.',
            hint: '<Route path="/lesson/:id" element={<LessonPage />} />'
          },
          resources: [{ title: 'React Router Tutorial', url: 'https://reactrouter.com/en/main/start/tutorial' }]
        },
        {
          title: '5.11 State Management Patterns & Context API',
          slug: 'context-api',
          order: 11,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 25,
          description: 'Prop drilling problem, createContext, useContext hook, AuthContext for global user session.',
          key_takeaways: [
            'Context API shares state across entire component tree without prop drilling.',
            'Ideal for auth session, user preferences, and theme state.',
            'Wrap App with Provider component: <AuthProvider><App /></AuthProvider>'
          ],
          practice_task: {
            title: 'Create AuthContext for user login state',
            description: 'Build AuthContext providing user state, login(), and logout() methods.',
            hint: 'const AuthContext = createContext();'
          },
          resources: [{ title: 'React Docs: Passing Data Deeply with Context', url: 'https://react.dev/learn/passing-data-deeply-with-context' }]
        },
        {
          title: '5.12 Building a Complete React Feature',
          slug: 'complete-react-feature',
          order: 12,
          youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          youtube_id: 'bMknfKXIFA8',
          duration_minutes: 30,
          description: 'Combine components, state, hooks, router, and context into a complete working feature.',
          key_takeaways: [
            'Structure components by feature domain or common UI building blocks.',
            'Keep pages lean by delegating sub-layout to modular components.',
            'Validate prop types or use TypeScript for type safety.'
          ],
          practice_task: {
            title: 'Build Module Progress Overview Component',
            description: 'Create a component that computes total lessons, completed status, and renders progress bar.',
            hint: 'Pass lessons array as prop and compute completed count dynamically.'
          },
          resources: [{ title: 'React Docs: Thinking in React', url: 'https://react.dev/learn/thinking-in-react' }]
        }
      ]
    },
    {
      title: '6. Working with APIs',
      slug: 'working-with-apis',
      description: 'Master REST API principles, Fetch, Axios, HTTP headers, authentication, and error handling.',
      order: 6,
      total_lessons: 8,
      estimated_minutes: 180,
      icon: 'Network',
      lessons: [
        {
          title: '6.1 What are APIs? REST Basics',
          slug: 'what-are-apis',
          order: 1,
          youtube_url: 'https://www.youtube.com/watch?v=lsMQRaeHwkY',
          youtube_id: 'lsMQRaeHwkY',
          duration_minutes: 20,
          description: 'Client-server architecture, HTTP request/response cycle, REST principles, endpoints.',
          key_takeaways: [
            'API (Application Programming Interface) enables frontend to talk to backend databases.',
            'REST uses standard HTTP methods: GET, POST, PUT, DELETE.',
            'JSON is the standard format for data exchange.'
          ],
          practice_task: {
            title: 'Inspect API requests in Chrome DevTools Network Tab',
            description: 'Open Network tab in browser DevTools and examine request headers and JSON responses.',
            hint: 'Filter by Fetch/XHR to isolate API traffic.'
          },
          resources: [{ title: 'MDN: What is a web API?', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction' }]
        },
        {
          title: '6.2 Fetch API & HTTP Methods',
          slug: 'fetch-api',
          order: 2,
          youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0',
          youtube_id: 'cuEtnrL9-H0',
          duration_minutes: 25,
          description: 'Making GET and POST requests using native fetch(), res.json(), headers object.',
          key_takeaways: [
            'fetch() returns a promise that resolves to Response object.',
            'Must call res.json() to parse response body.',
            'fetch() only rejects on network failures, not on HTTP 404/500 errors.'
          ],
          practice_task: {
            title: 'Fetch random advice from public API',
            description: 'Make a GET request to https://api.adviceslip.com/advice and log advice text.',
            hint: 'const res = await fetch("https://api.adviceslip.com/advice"); const data = await res.json();'
          },
          resources: [{ title: 'MDN: Using the Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' }]
        },
        {
          title: '6.3 Axios & Interceptors',
          slug: 'axios-and-interceptors',
          order: 3,
          youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0',
          youtube_id: 'cuEtnrL9-H0',
          duration_minutes: 25,
          description: 'Why Axios? Automatic JSON transformation, default base URLs, request/response interceptors for Auth headers.',
          key_takeaways: [
            'Axios automatically serializes and deserializes JSON.',
            'Axios throws errors for non-2xx status codes automatically.',
            'Use interceptors to automatically attach JWT Bearer tokens to outgoing API calls.'
          ],
          practice_task: {
            title: 'Configure Axios instance with Base URL',
            description: 'Create api.js exporting an axios instance pre-configured with http://localhost:5000/api.',
            hint: 'const api = axios.create({ baseURL: "http://localhost:5000/api" });'
          },
          resources: [{ title: 'Axios Docs', url: 'https://axios-http.com/docs/intro' }]
        },
        {
          title: '6.4 API Error Handling & Loading States',
          slug: 'api-error-handling',
          order: 4,
          youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0',
          youtube_id: 'cuEtnrL9-H0',
          duration_minutes: 20,
          description: 'UI loading spinners, error banners, retry buttons, and handling status 401/404/500.',
          key_takeaways: [
            'Always manage loading state: const [loading, setLoading] = useState(true);',
            'Display clear error message toasts on API failures.',
            'Handle 401 Unauthorized by clearing invalid tokens and redirecting to login.'
          ],
          practice_task: {
            title: 'Build a resilient API fetch hook',
            description: 'Create a state pattern with data, loading, and error states.',
            hint: 'setLoading(true); try { setData(...); } catch (err) { setError(err); } finally { setLoading(false); }'
          },
          resources: [{ title: 'MDN: Response status codes', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status' }]
        },
        {
          title: '6.5 Building a Project with a Public API',
          slug: 'public-api-project',
          order: 5,
          youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0',
          youtube_id: 'cuEtnrL9-H0',
          duration_minutes: 30,
          description: 'Search, filter, and pagination using a public REST API (e.g. GitHub Users or OpenWeather).',
          key_takeaways: [
            'Debounce user search inputs to avoid hitting API rate limits.',
            'Store query params in React state.',
            'Render loading skeleton state while waiting for API responses.'
          ],
          practice_task: {
            title: 'Build GitHub user search app',
            description: 'Search GitHub profiles via https://api.github.com/users/{username} and display bio and repo count.',
            hint: 'Use input value in API endpoint URL.'
          },
          resources: [{ title: 'Public APIs List', url: 'https://github.com/public-apis/public-apis' }]
        },
        {
          title: '6.6 Authentication Basics (JWT & OAuth)',
          slug: 'authentication-basics',
          order: 6,
          youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0',
          youtube_id: 'cuEtnrL9-H0',
          duration_minutes: 25,
          description: 'Understanding JWT structure (header, payload, signature), storing tokens in localStorage vs httpOnly cookies, OAuth flow.',
          key_takeaways: [
            'JWT is a compact, self-contained method for securely transmitting information as JSON.',
            'Attach JWT as Authorization: Bearer <token> header.',
            'Never store sensitive passwords or unhashed secrets in frontend code.'
          ],
          practice_task: {
            title: 'Decode JWT payload',
            description: 'Understand how claims like user ID and expiration timestamp are encoded in JWTs.',
            hint: 'JWTs are base64url encoded strings separated by dots.'
          },
          resources: [{ title: 'jwt.io Debugger', url: 'https://jwt.io' }]
        },
        {
          title: '6.7 Environment Variables & API Keys',
          slug: 'env-variables-and-api-keys',
          order: 7,
          youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0',
          youtube_id: 'cuEtnrL9-H0',
          duration_minutes: 18,
          description: 'Creating .env files, VITE_ prefixed env variables in Vite, keeping secrets out of client builds.',
          key_takeaways: [
            'Vite exposes env variables prefixed with VITE_ via import.meta.env.VITE_VAR.',
            'Client-side env variables are bundled into production JS code — they are NOT secret!',
            'Keep secret backend API keys on your Express server only.'
          ],
          practice_task: {
            title: 'Configure VITE_API_URL in client .env',
            description: 'Set up .env file in client directory with VITE_API_URL=http://localhost:5000/api.',
            hint: 'import.meta.env.VITE_API_URL'
          },
          resources: [{ title: 'Vite Env Variables Guide', url: 'https://vitejs.dev/guide/env-and-mode.html' }]
        },
        {
          title: '6.8 API Best Practices & Optimization',
          slug: 'api-best-practices',
          order: 8,
          youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0',
          youtube_id: 'cuEtnrL9-H0',
          duration_minutes: 17,
          description: 'Caching API responses, optimizing payload size, avoiding N+1 requests with aggregated endpoints.',
          key_takeaways: [
            'Use aggregated dashboard endpoints to fetch all home screen data in 1 request.',
            'Cache static roadmap data in local storage or state to minimize unnecessary requests.',
            'Cancel pending requests when components unmount using AbortController.'
          ],
          practice_task: {
            title: 'Implement simple API data caching',
            description: 'Store roadmap response in memory so navigating back doesn\'t trigger duplicate network calls.',
            hint: 'Check if data exists in state before calling fetch.'
          },
          resources: [{ title: 'MDN: AbortController', url: 'https://developer.mozilla.org/en-US/docs/Web/API/AbortController' }]
        }
      ]
    },
    {
      title: '7. Deployment & Dev Tools',
      slug: 'deployment-and-dev-tools',
      description: 'Master DevTools, production builds, Vercel frontend deployment, and Railway backend hosting.',
      order: 7,
      total_lessons: 8,
      estimated_minutes: 150,
      icon: 'Rocket',
      lessons: [
        {
          title: '7.1 Browser DevTools Mastery',
          slug: 'devtools-mastery',
          order: 1,
          youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0',
          youtube_id: '23uM9y4v5m0',
          duration_minutes: 20,
          description: 'Elements inspector, console debugging, network throttle, device emulator, and Lighthouse audits.',
          key_takeaways: [
            'Simulate mobile viewports and 3G network conditions in DevTools.',
            'Use breakpoints in Sources tab to pause JS execution and inspect variable state.',
            'Lighthouse measures performance, accessibility, best practices, and SEO.'
          ],
          practice_task: {
            title: 'Run a Lighthouse audit on your local app',
            description: 'Generate a Lighthouse report and achieve 90+ score in Accessibility.',
            hint: 'DevTools > Lighthouse tab > Analyze page load.'
          },
          resources: [{ title: 'Chrome DevTools Docs', url: 'https://developer.chrome.com/docs/devtools/' }]
        },
        {
          title: '7.2 Package Managers (npm & yarn)',
          slug: 'package-managers',
          order: 2,
          youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0',
          youtube_id: '23uM9y4v5m0',
          duration_minutes: 18,
          description: 'package.json, package-lock.json, semantic versioning (^1.0.0 vs ~1.0.0), devDependencies.',
          key_takeaways: [
            'package-lock.json locks exact dependency versions for reproducible builds across teams.',
            '--save-dev installs tools needed only during development (e.g. nodemon, vite).',
            'npm audit checks for known security vulnerabilities.'
          ],
          practice_task: {
            title: 'Audit dependencies for security',
            description: 'Run npm audit in your project terminal and understand security output.',
            hint: 'npm audit'
          },
          resources: [{ title: 'npm Documentation', url: 'https://docs.npmjs.com' }]
        },
        {
          title: '7.3 Production Build Optimization',
          slug: 'production-build',
          order: 3,
          youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0',
          youtube_id: '23uM9y4v5m0',
          duration_minutes: 20,
          description: 'Minification, tree-shaking, code splitting, dynamic imports, and testing production build locally.',
          key_takeaways: [
            'Vite build minifies CSS/JS and strips out dev warnings automatically.',
            'Use npx vite preview to test production build locally before deploying.',
            'Code splitting loads JavaScript bundles on demand per route.'
          ],
          practice_task: {
            title: 'Build and preview production bundle',
            description: 'Run npm run build followed by npx vite preview to verify production build.',
            hint: 'Inspect dist/ folder generated by build script.'
          },
          resources: [{ title: 'Vite Building for Production', url: 'https://vitejs.dev/guide/build.html' }],
          command: {
            code: 'npm run build && npx vite preview',
            description: 'Creates an optimized production bundle and starts a local server to preview it.',
            usage: 'Run this in the root of your project to test the production output before deploying.',
            steps: [
              'Open your terminal.',
              'Navigate to the project root folder.',
              'Run the command.',
              'Wait for the production build to compile into the dist/ directory.',
              'Open the localhost preview link in your browser to inspect the production app.'
            ]
          }
        },
        {
          title: '7.4 Deploying Frontend to Vercel',
          slug: 'deploy-to-vercel',
          order: 4,
          youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0',
          youtube_id: '23uM9y4v5m0',
          duration_minutes: 20,
          description: 'Connecting GitHub repo to Vercel, configuring environment variables, continuous deployment on git push.',
          key_takeaways: [
            'Vercel provides free, instant global CDN hosting for frontend React applications.',
            'Every git push to main automatically triggers a production deployment.',
            'Configure VITE_API_URL environment variable in Vercel project settings.'
          ],
          practice_task: {
            title: 'Deploy frontend app to Vercel',
            description: 'Import your GitHub repository into Vercel and deploy live.',
            hint: 'Set Build Command to npm run build and Output Directory to dist.'
          },
          resources: [{ title: 'Vercel Documentation', url: 'https://vercel.com/docs' }]
        },
        {
          title: '7.5 Deploying Backend to Railway / Render',
          slug: 'deploy-to-railway',
          order: 5,
          youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0',
          youtube_id: '23uM9y4v5m0',
          duration_minutes: 20,
          description: 'Deploying Node.js Express server, environment variables setup, CORS configuration for live domain.',
          key_takeaways: [
            'Railway/Render host running Node.js server processes.',
            'Set MONGODB_URI and JWT_SECRET in production platform dashboard.',
            'Update backend CORS config to allow requests from your live Vercel domain.'
          ],
          practice_task: {
            title: 'Configure production environment variables',
            description: 'Set PORT, MONGODB_URI, and JWT_SECRET on Railway dashboard.',
            hint: 'Ensure CORS allows your Vercel frontend URL.'
          },
          resources: [{ title: 'Railway Docs', url: 'https://docs.railway.app' }]
        },
        {
          title: '7.6 Custom Domains & DNS Setup',
          slug: 'custom-domains-dns',
          order: 6,
          youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0',
          youtube_id: '23uM9y4v5m0',
          duration_minutes: 15,
          description: 'A records, CNAME records, SSL certificates, configuring domain on Vercel.',
          key_takeaways: [
            'CNAME record points subdomain (e.g. app.pathforge.com) to Vercel deployment.',
            'Vercel provisions automatic free Let\'s Encrypt SSL certificates.',
            'DNS propagation can take up to 24-48 hours, though usually takes minutes.'
          ],
          practice_task: {
            title: 'Understand DNS records',
            description: 'Learn the difference between A, CNAME, TXT, and MX records.',
            hint: 'CNAME points one domain name to another domain name.'
          },
          resources: [{ title: 'Vercel Custom Domains Guide', url: 'https://vercel.com/docs/concepts/projects/domains' }]
        },
        {
          title: '7.7 Web Vitals & Performance Monitoring',
          slug: 'performance-basics',
          order: 7,
          youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0',
          youtube_id: '23uM9y4v5m0',
          duration_minutes: 17,
          description: 'LCP (Largest Contentful Paint), FID/INP, CLS (Cumulative Layout Shift), optimizing images.',
          key_takeaways: [
            'LCP measures loading performance (aim under 2.5s).',
            'CLS measures visual stability (avoid layout jumps by setting explicit image width/height).',
            'Use modern image formats like WebP or AVIF.'
          ],
          practice_task: {
            title: 'Fix Cumulative Layout Shift (CLS)',
            description: 'Set width and height or aspect-ratio on all images and video containers.',
            hint: 'aspect-ratio: 16 / 9 for video embeds.'
          },
          resources: [{ title: 'web.dev Core Web Vitals', url: 'https://web.dev/vitals/' }]
        },
        {
          title: '7.8 Portfolio & Job Preparation',
          slug: 'portfolio-and-next-steps',
          order: 8,
          youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0',
          youtube_id: '23uM9y4v5m0',
          duration_minutes: 20,
          description: 'Showcasing PathForge on your resume, writing great project READMEs, technical interview prep.',
          key_takeaways: [
            'Host live demos for every project on your GitHub portfolio.',
            'Include system architecture diagrams and clear setup instructions in README.',
            'Practice explaining technical trade-offs made during development.'
          ],
          practice_task: {
            title: 'Write a professional project README',
            description: 'Create a README.md with project description, tech stack badges, screenshots, live demo link, and local setup steps.',
            hint: 'Use markdown tables and shields.io badges.'
          },
          resources: [{ title: 'Roadmap.sh Frontend Guide', url: 'https://roadmap.sh/frontend' }]
        }
      ]
    }
  ]
};

const extraPaths = require('../data/extraCoursesData');

const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/pathforge';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing paths, modules, and lessons
    await Path.deleteMany({});
    await Module.deleteMany({});
    await Lesson.deleteMany({});

    console.log('Cleared existing data.');

    // Create Path
    const createdPath = await Path.create(frontendData.path);
    console.log(`Created Path: ${createdPath.title}`);

    let totalLessonsCount = 0;

    for (const modData of frontendData.modules) {
      const { lessons, ...moduleInfo } = modData;
      
      const createdModule = await Module.create({
        ...moduleInfo,
        path_id: createdPath._id
      });

      console.log(`  Module ${createdModule.order}: ${createdModule.title}`);

      for (const lessonData of lessons) {
        await Lesson.create({
          ...lessonData,
          module_id: createdModule._id
        });
        totalLessonsCount++;
      }
    }

    // Update Path total_lessons
    createdPath.total_lessons = totalLessonsCount;
    await createdPath.save();

    // Seed extra paths
    for (const extra of extraPaths) {
      const createdExtraPath = await Path.create(extra.path);
      console.log(`Created Path: ${createdExtraPath.title}`);

      let extraLessonsCount = 0;
      for (const modData of extra.modules) {
        const { lessons, ...moduleInfo } = modData;

        const createdModule = await Module.create({
          ...moduleInfo,
          path_id: createdExtraPath._id
        });
        console.log(`  Module ${createdModule.order}: ${createdModule.title}`);

        for (const lessonData of lessons) {
          await Lesson.create({
            ...lessonData,
            module_id: createdModule._id
          });
          extraLessonsCount++;
        }
      }
      createdExtraPath.total_lessons = extraLessonsCount;
      await createdExtraPath.save();
    }

    console.log(`\n🎉 Seeded successfully! Total lessons seeded.`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
