module.exports = {
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
          resources: [{ title: 'MDN: Introduction to HTML', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML' }]
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
          resources: [{ title: 'MDN: Document Metadata', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head' }]
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
            'Use only one h1 per page for optimal SEO.',
            '<ol> is for ordered lists, <ul> is for bulleted lists.',
            'Use <strong> for semantic importance.'
          ],
          practice_task: {
            title: 'Create a recipe page structure',
            description: 'Use h1 for recipe title, h2 for ingredients, and ol for step-by-step instructions.',
            hint: 'Nest <li> inside <ol> for sequential steps.'
          },
          resources: [{ title: 'MDN: HTML Text Fundamentals', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals' }]
        },
        {
          title: '1.4 Links and Navigation',
          slug: 'links-and-navigation',
          order: 4,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 18,
          description: 'Learn anchor tags, absolute vs relative paths, target attribute, and internal page links.',
          key_takeaways: ['href attribute defines destination.', 'target="_blank" opens in new tab.'],
          practice_task: { title: 'Build nav menu', description: 'Create links to Home, About, Contact.', hint: '<a href="/about">About</a>' },
          resources: [{ title: 'MDN: Creating Hyperlinks', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks' }]
        },
        {
          title: '1.5 Images and Media',
          slug: 'images-and-media',
          order: 5,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 20,
          description: 'Working with img, figure, figcaption, video, and audio tags.',
          key_takeaways: ['Always provide descriptive alt text for accessibility.', 'Use loading="lazy" for performance.'],
          practice_task: { title: 'Photo Gallery', description: 'Add 2 images wrapped in figure tags.', hint: '<figure><img src="..." alt="..."></figure>' },
          resources: [{ title: 'MDN: Images in HTML', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML' }]
        },
        {
          title: '1.6 Forms and Input Elements',
          slug: 'forms-and-input-elements',
          order: 6,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 25,
          description: 'Create interactive forms with text inputs, email, password, radio buttons, checkboxes.',
          key_takeaways: ['Pair inputs with <label for="...">.', 'Native HTML validation attributes.'],
          practice_task: { title: 'Registration Form', description: 'Build form with Name, Email, Password, and Submit.', hint: '<input type="email" required>' },
          resources: [{ title: 'MDN: Your first form', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form' }]
        },
        {
          title: '1.7 Semantic HTML',
          slug: 'semantic-html',
          order: 7,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 20,
          description: 'Ditch div soup! Learn header, nav, main, section, article, aside, and footer.',
          key_takeaways: ['Semantic elements improve SEO and screen reader navigation.', '<main> holds main content.'],
          practice_task: { title: 'Refactor layout', description: 'Replace generic divs with header, main, and article.', hint: 'Use <article> for blog post.' },
          resources: [{ title: 'MDN: Structural Elements', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure' }]
        },
        {
          title: '1.8 HTML Best Practices & Accessibility Basics',
          slug: 'html-accessibility-basics',
          order: 8,
          youtube_url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          youtube_id: 'kUMe1FH4CHE',
          duration_minutes: 15,
          description: 'ARIA attributes, keyboard navigation, color contrast, and HTML validator checks.',
          key_takeaways: ['First rule of ARIA: Use native semantic HTML first.', 'Ensure keyboard Tab key focus works.'],
          practice_task: { title: 'Accessibility Audit', description: 'Audit page for missing alt text.', hint: 'Run Lighthouse in Chrome DevTools.' },
          resources: [{ title: 'W3C WAI', url: 'https://www.w3.org/WAI/' }]
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
          title: '2.1 Introduction to CSS',
          slug: 'intro-to-css',
          order: 1,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 18,
          description: 'Understanding inline, internal, and external CSS, cascade rules, and syntax.',
          key_takeaways: ['External stylesheets are best practice.', 'selector { property: value; } syntax.'],
          practice_task: { title: 'Link external CSS', description: 'Create styles.css and style body.', hint: 'body { background-color: #fafafa; }' },
          resources: [{ title: 'MDN: What is CSS?', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS' }]
        },
        {
          title: '2.2 Selectors & Specificity',
          slug: 'selectors-and-specificity',
          order: 2,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 22,
          description: 'Element, class, ID selectors, pseudo-classes, combinators, and calculating specificity.',
          key_takeaways: ['Inline > ID > Class > Element.', 'Avoid !important whenever possible.'],
          practice_task: { title: 'Button hover state', description: 'Create .btn with hover background shift.', hint: '.btn:hover { background-color: #4f46e5; }' },
          resources: [{ title: 'MDN: Specificity', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity' }]
        },
        {
          title: '2.3 Box Model',
          slug: 'box-model',
          order: 3,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 20,
          description: 'Deep dive into content, padding, border, margin, and box-sizing: border-box.',
          key_takeaways: ['Every element is a box.', 'box-sizing: border-box includes padding in width.'],
          practice_task: { title: 'Box-sizing reset', description: 'Apply border-box to all elements (*).', hint: '*, *::before, *::after { box-sizing: border-box; }' },
          resources: [{ title: 'MDN: Box Model', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model' }]
        },
        {
          title: '2.4 Display & Positioning',
          slug: 'display-and-positioning',
          order: 4,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 25,
          description: 'Block, inline, relative, absolute, fixed, and sticky positioning.',
          key_takeaways: ['position: absolute relies on nearest positioned ancestor.', 'position: sticky for navbars.'],
          practice_task: { title: 'Sticky header', description: 'Make header stay at top on scroll.', hint: 'header { position: sticky; top: 0; }' },
          resources: [{ title: 'MDN: Positioning', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning' }]
        },
        {
          title: '2.5 Flexbox Layout',
          slug: 'flexbox-layout',
          order: 5,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 30,
          description: 'Master 1D layout: flex-direction, justify-content, align-items, flex-wrap, and gap.',
          key_takeaways: ['display: flex turns container into flexbox.', 'justify-content aligns on main axis.'],
          practice_task: { title: 'Flexbox hero layout', description: 'Center items vertically and horizontally with flexbox.', hint: 'display: flex; align-items: center; justify-content: center;' },
          resources: [{ title: 'CSS-Tricks Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' }]
        },
        {
          title: '2.6 CSS Grid Layout',
          slug: 'css-grid-layout',
          order: 6,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 25,
          description: 'Master 2D layouts: grid-template-columns, fr units, repeat(), auto-fit, minmax().',
          key_takeaways: ['Grid handles rows and columns.', 'repeat(auto-fit, minmax(280px, 1fr)) creates responsive grids.'],
          practice_task: { title: 'Responsive Card Grid', description: 'Build 3-column card grid that wraps on mobile.', hint: 'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));' },
          resources: [{ title: 'CSS-Tricks Grid Guide', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' }]
        },
        {
          title: '2.7 Responsive Design',
          slug: 'responsive-design',
          order: 7,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 28,
          description: 'Mobile-first approach, min-width media queries, fluid typography.',
          key_takeaways: ['Mobile-first design builds for mobile first, then adds min-width queries.', 'Standard breakpoints: 640px, 768px, 1024px.'],
          practice_task: { title: 'Add media query', description: 'Switch from 1 col on mobile to 2 col on tablet.', hint: '@media (min-width: 768px) { ... }' },
          resources: [{ title: 'MDN: Responsive Design', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design' }]
        },
        {
          title: '2.8 Typography & Colors',
          slug: 'typography-and-colors',
          order: 8,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 20,
          description: 'Google Fonts integration, font-weight, line-height, HSL color space.',
          key_takeaways: ['Line-height 1.5 is ideal for reading.', 'Ensure contrast ratio meets WCAG AA.'],
          practice_task: { title: 'Import Inter font', description: 'Import Google Font Inter and set body font.', hint: 'font-family: \'Inter\', sans-serif;' },
          resources: [{ title: 'Google Fonts', url: 'https://fonts.google.com' }]
        },
        {
          title: '2.9 Transitions & Animations',
          slug: 'transitions-and-animations',
          order: 9,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 20,
          description: 'CSS transition property, transform scale/translate, keyframe animations.',
          key_takeaways: ['Animate opacity and transform for 60fps GPU acceleration.', 'transition: all 0.2s ease;'],
          practice_task: { title: 'Animate card hover', description: 'Add translateY(-4px) on card hover.', hint: '.card { transition: transform 0.2s; } .card:hover { transform: translateY(-4px); }' },
          resources: [{ title: 'MDN: CSS Transitions', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions' }]
        },
        {
          title: '2.10 CSS Variables & Modern CSS',
          slug: 'css-variables',
          order: 10,
          youtube_url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          youtube_id: '1PnVor36_40',
          duration_minutes: 18,
          description: 'CSS custom properties (--var), dark mode toggles with data-theme.',
          key_takeaways: ['Declare variables with --name.', 'Scope to :root for global design tokens.'],
          practice_task: { title: 'Define color tokens', description: 'Define --bg-primary and --text-primary variables.', hint: ':root { --bg-primary: #ffffff; }' },
          resources: [{ title: 'MDN: Custom Properties', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties' }]
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
        { title: '3.1 Intro to JavaScript', slug: 'intro-to-js', order: 1, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 20, description: 'Role of JS in web apps, console.log, script tags.', key_takeaways: ['JS adds interactivity.', 'Use defer attribute on script tags.'], practice_task: { title: 'Log welcome message', description: 'Create script and log hello world.', hint: 'console.log("Hello JS");' }, resources: [{ title: 'MDN: JS Basics', url: 'https://developer.mozilla.org' }] },
        { title: '3.2 Variables & Data Types', slug: 'variables-data-types', order: 2, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 25, description: 'let vs const vs var, primitives, strict equality (===).', key_takeaways: ['Default to const.', 'Use strict equality ===.'], practice_task: { title: 'Calculate total bill', description: 'Calculate bill + tip.', hint: 'const total = bill * 1.15;' }, resources: [] },
        { title: '3.3 Strings & Methods', slug: 'strings-methods', order: 3, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 22, description: 'Template literals, includes, slice, split, trim.', key_takeaways: ['Template literals use backticks.', 'string.trim() cleans spaces.'], practice_task: { title: 'Format name', description: 'Trim whitespace and format string.', hint: '`Hello ${name.trim()}`' }, resources: [] },
        { title: '3.4 Arrays & Methods', slug: 'arrays-methods', order: 4, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 30, description: 'map, filter, reduce, find, push, pop.', key_takeaways: ['map returns transformed array.', 'filter returns matching items.'], practice_task: { title: 'Filter completed lessons', description: 'Filter lessons where completed === true.', hint: 'lessons.filter(l => l.completed)' }, resources: [] },
        { title: '3.5 Objects & Methods', slug: 'objects-methods', order: 5, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 25, description: 'Object literals, dot vs bracket notation, Object.keys().', key_takeaways: ['Objects store key-value pairs.', 'Object.keys returns key array.'], practice_task: { title: 'User object', description: 'Create user object with summary method.', hint: 'const user = { name: "Shubham" };' }, resources: [] },
        { title: '3.6 Control Flow', slug: 'control-flow', order: 6, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 20, description: 'If/else, ternary operator, truthy vs falsy.', key_takeaways: ['Falsy: 0, "", null, undefined, false, NaN.', 'Ternary: cond ? a : b.'], practice_task: { title: 'Lesson badge status', description: 'Return badge string based on flags.', hint: 'isDone ? "Complete" : "In Progress"' }, resources: [] },
        { title: '3.7 Loops & Iteration', slug: 'loops-iteration', order: 7, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 20, description: 'For loops, for...of, forEach.', key_takeaways: ['for...of iterates array values.', 'forEach runs callback per item.'], practice_task: { title: 'Sum lesson times', description: 'Loop array and sum duration.', hint: 'let total = 0; for (const d of durations) total += d;' }, resources: [] },
        { title: '3.8 Functions & Scope', slug: 'functions-scope', order: 8, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 25, description: 'Function declarations, parameters, default values, return.', key_takeaways: ['Block scope isolates let/const.', 'Functions should do one task.'], practice_task: { title: 'Calculate progress percentage', description: 'Write calcProgress(done, total).', hint: 'return Math.round((done/total)*100);' }, resources: [] },
        { title: '3.9 Arrow Functions', slug: 'arrow-functions', order: 9, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 22, description: 'Arrow function syntax, implicit return, callback passing.', key_takeaways: ['const add = (a,b) => a+b;', 'Arrow functions inherit outer this.'], practice_task: { title: 'Refactor callback', description: 'Convert callback to arrow function.', hint: 'arr.map(x => x * 2)' }, resources: [] },
        { title: '3.10 DOM Manipulation', slug: 'dom-manipulation', order: 10, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 30, description: 'querySelector, textContent, classList (add, remove, toggle).', key_takeaways: ['querySelector selects via CSS syntax.', 'textContent is safe against XSS.'], practice_task: { title: 'Toggle button class', description: 'Toggle class on click.', hint: 'el.classList.toggle("active");' }, resources: [] },
        { title: '3.11 Events & Event Handling', slug: 'events-handling', order: 11, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 25, description: 'addEventListener, e.preventDefault(), event delegation.', key_takeaways: ['preventDefault stops default form submit.', 'Listen on parent for delegation.'], practice_task: { title: 'Form submit listener', description: 'Prevent form default refresh.', hint: 'e.preventDefault();' }, resources: [] },
        { title: '3.12 ES6+ Features', slug: 'es6-features', order: 12, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 25, description: 'Destructuring, spread operator (...), optional chaining (?.).', key_takeaways: ['Destructuring unpacks values.', 'Optional chaining user?.name prevents crashes.'], practice_task: { title: 'Safe property access', description: 'Access nested setting with ?..', hint: 'user?.settings?.theme ?? "light"' }, resources: [] },
        { title: '3.13 Promises & Async/Await', slug: 'promises-async-await', order: 13, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 30, description: 'Async functions, await keyword, try...catch error handling.', key_takeaways: ['Async functions return promises.', 'Wrap await in try...catch.'], practice_task: { title: 'Async fetch data', description: 'Write async function to fetch data.', hint: 'const res = await fetch(url);' }, resources: [] },
        { title: '3.14 Error Handling', slug: 'error-handling', order: 14, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 20, description: 'try...catch...finally, custom Error objects.', key_takeaways: ['try...catch handles runtime exceptions.', 'finally always runs.'], practice_task: { title: 'Catch network error', description: 'Wrap fetch call in try/catch.', hint: 'try { ... } catch (err) { console.error(err); }' }, resources: [] },
        { title: '3.15 JS Mini Project: Quiz App', slug: 'js-quiz-app', order: 15, youtube_url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', youtube_id: 'W6NZfCO5SIk', duration_minutes: 35, description: 'Combine DOM, events, and logic into a working Quiz app.', key_takeaways: ['Separate state from render function.', 'Re-render on state update.'], practice_task: { title: 'Build Quiz app', description: 'Render questions and track score.', hint: 'const state = { score: 0 };' }, resources: [] }
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
        { title: '4.1 What is Version Control?', slug: 'what-is-vcs', order: 1, youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE', youtube_id: 'RGOj5yH7evE', duration_minutes: 15, description: 'Git snapshots, history tracking, collaboration.', key_takeaways: ['Git tracks changes locally using commits.', 'GitHub hosts Git repos online.'], practice_task: { title: 'Git config', description: 'Set git username and email.', hint: 'git config --global user.name "Name"' }, resources: [] },
        { title: '4.2 Git Basics (init, add, commit)', slug: 'git-basics', order: 2, youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE', youtube_id: 'RGOj5yH7evE', duration_minutes: 20, description: 'git init, staging area, commit messages.', key_takeaways: ['git init starts repo.', 'git add stages changes.'], practice_task: { title: 'First commit', description: 'Init repo and make first commit.', hint: 'git commit -m "Initial commit"' }, resources: [] },
        { title: '4.3 Branching & Merging', slug: 'branching-merging', order: 3, youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE', youtube_id: 'RGOj5yH7evE', duration_minutes: 20, description: 'Feature branches, checkout -b, merging, merge conflicts.', key_takeaways: ['Keep main clean; build on feature branches.', 'git merge combines branches.'], practice_task: { title: 'Feature branch', description: 'Create branch feature/footer, add code, merge.', hint: 'git checkout -b feature/footer' }, resources: [] },
        { title: '4.4 GitHub Push & Pull', slug: 'github-push-pull', order: 4, youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE', youtube_id: 'RGOj5yH7evE', duration_minutes: 20, description: 'git remote add origin, git push -u origin main, git pull.', key_takeaways: ['git push uploads commits to GitHub.', 'git pull downloads latest remote changes.'], practice_task: { title: 'Push to GitHub', description: 'Push local repo to GitHub.', hint: 'git push -u origin main' }, resources: [] },
        { title: '4.5 Pull Requests & Collaboration', slug: 'pull-requests', order: 5, youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE', youtube_id: 'RGOj5yH7evE', duration_minutes: 20, description: 'Creating Pull Requests, code reviews, merging PRs.', key_takeaways: ['PRs let team review code before merging.', 'Include clear description.'], practice_task: { title: 'Open PR', description: 'Push branch and open PR on GitHub.', hint: 'Click Compare & pull request on GitHub' }, resources: [] },
        { title: '4.6 Git Workflow & .gitignore', slug: 'gitignore-best-practices', order: 6, youtube_url: 'https://www.youtube.com/watch?v=RGOj5yH7evE', youtube_id: 'RGOj5yH7evE', duration_minutes: 15, description: 'Excluding node_modules, .env files, and secret keys with .gitignore.', key_takeaways: ['NEVER commit secrets or API keys.', '.gitignore lists untracked files.'], practice_task: { title: 'Create .gitignore', description: 'Add node_modules and .env to .gitignore.', hint: 'Add node_modules on a line in .gitignore' }, resources: [] }
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
        { title: '5.1 What is React?', slug: 'what-is-react', order: 1, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 20, description: 'Virtual DOM, component architecture, declarative UI.', key_takeaways: ['React builds UI with reusable components.', 'Declarative state updates.'], practice_task: { title: 'React overview', description: 'Understand React vs DOM.', hint: 'React DOM renders JSX to DOM.' }, resources: [] },
        { title: '5.2 Setting Up React with Vite', slug: 'setup-react-vite', order: 2, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 20, description: 'create vite@latest, folder structure, main.jsx.', key_takeaways: ['Vite provides fast dev server and HMR.', 'main.jsx mounts App.'], practice_task: { title: 'Create Vite app', description: 'Run npm create vite@latest.', hint: 'npm run dev starts dev server' }, resources: [], command: { code: 'npm create vite@latest my-react-app -- --template react', description: 'Creates a new React project using Vite in a folder named my-react-app.', usage: 'Run this in your terminal from the directory where you want your project folder created.', steps: ['Open your terminal.', 'Navigate to the parent folder for your project.', 'Execute the npm create command.', 'Follow the prompts to configure your packages.', 'Move into the new folder: cd my-react-app.', 'Install dependencies using npm install.'] } },
        { title: '5.3 JSX & Components', slug: 'jsx-components', order: 3, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 25, description: 'JSX rules, returning single root element, embedding JS with {}.', key_takeaways: ['JSX looks like HTML in JS.', 'Use className instead of class.'], practice_task: { title: 'Card Component', description: 'Create styled Card component.', hint: 'export default function Card() { ... }' }, resources: [] },
        { title: '5.4 Props & Communication', slug: 'props-communication', order: 4, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 25, description: 'Passing data down via props, destructuring, children prop.', key_takeaways: ['Props are read-only inputs.', 'Flows unidirectionally down.'], practice_task: { title: 'Reusable Card', description: 'Pass title and duration props.', hint: 'function Card({ title })' }, resources: [] },
        { title: '5.5 State & useState Hook', slug: 'state-usestate', order: 5, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 30, description: 'const [state, setState] = useState(initial), immutable updates.', key_takeaways: ['State holds memory across renders.', 'Calling setState triggers render.'], practice_task: { title: 'Counter component', description: 'Build count increment button.', hint: 'const [count, setCount] = useState(0);' }, resources: [] },
        { title: '5.6 Event Handling in React', slug: 'event-handling-react', order: 6, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 20, description: 'onClick, onChange, synthetic events, passing handler callbacks.', key_takeaways: ['Pass function references: onClick={handleClick}.', 'Lift state up to parent.'], practice_task: { title: 'Complete toggle', description: 'Toggle isCompleted state on click.', hint: 'onClick={() => setDone(!done)}' }, resources: [] },
        { title: '5.7 useEffect & Side Effects', slug: 'useeffect-side-effects', order: 7, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 30, description: 'Data fetching, dependency arrays [], cleanup functions.', key_takeaways: ['useEffect runs side effects.', '[] dependency array runs once on mount.'], practice_task: { title: 'Fetch API on mount', description: 'Fetch data in useEffect.', hint: 'useEffect(() => { fetchData(); }, []);' }, resources: [] },
        { title: '5.8 Conditional Rendering & Lists', slug: 'conditional-rendering-lists', order: 8, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 25, description: '.map() rendering, unique key prop requirement, ternary rendering.', key_takeaways: ['Always provide unique key prop.', 'Use key={item._id} instead of index.'], practice_task: { title: 'Render lesson list', description: 'Map over lessons array to render list.', hint: 'items.map(i => <Item key={i._id} />)' }, resources: [] },
        { title: '5.9 Forms & Controlled Components', slug: 'forms-controlled-components', order: 9, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 25, description: 'Controlled input values bound to React state, form submission.', key_takeaways: ['React state is single source of truth.', 'value={text} onChange={(e) => setText(e.target.value)}.'], practice_task: { title: 'Controlled Login form', description: 'Bind email and password input state.', hint: 'const [email, setEmail] = useState("");' }, resources: [] },
        { title: '5.10 React Router', slug: 'react-router', order: 10, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 28, description: 'BrowserRouter, Routes, Route, Link, useNavigate, useParams.', key_takeaways: ['<Link to="..."> navigates without reload.', 'useParams reads dynamic URL params.'], practice_task: { title: 'Define routes', description: 'Set up routes for /, /dashboard, and /lesson/:id.', hint: '<Route path="/lesson/:id" element={<LessonPage />} />' }, resources: [] },
        { title: '5.11 State Management & Context API', slug: 'context-api', order: 11, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 25, description: 'Prop drilling problem, createContext, useContext, AuthContext.', key_takeaways: ['Context API shares global state.', 'Ideal for user auth session and theme.'], practice_task: { title: 'AuthContext setup', description: 'Create AuthContext for user state.', hint: 'const AuthContext = createContext();' }, resources: [] },
        { title: '5.12 Complete React Feature', slug: 'complete-react-feature', order: 12, youtube_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', youtube_id: 'bMknfKXIFA8', duration_minutes: 30, description: 'Combine components, state, hooks, router, and context into complete feature.', key_takeaways: ['Keep pages lean by using modular components.', 'Validate data types.'], practice_task: { title: 'Module Progress Component', description: 'Build progress bar component.', hint: 'Pass lessons array as prop.' }, resources: [] }
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
        { title: '6.1 What are APIs? REST Basics', slug: 'what-are-apis', order: 1, youtube_url: 'https://www.youtube.com/watch?v=lsMQRaeHwkY', youtube_id: 'lsMQRaeHwkY', duration_minutes: 20, description: 'Client-server architecture, HTTP methods (GET, POST, PUT, DELETE), JSON.', key_takeaways: ['API enables frontend/backend communication.', 'REST uses standard HTTP methods.'], practice_task: { title: 'Inspect Network tab', description: 'Examine API calls in DevTools Network tab.', hint: 'Filter by Fetch/XHR' }, resources: [] },
        { title: '6.2 Fetch API', slug: 'fetch-api', order: 2, youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0', youtube_id: 'cuEtnrL9-H0', duration_minutes: 25, description: 'Making GET/POST requests with fetch(), res.json().', key_takeaways: ['fetch returns Response promise.', 'Must parse with res.json().'], practice_task: { title: 'Fetch advice API', description: 'Call public advice API.', hint: 'const res = await fetch("https://api.adviceslip.com/advice");' }, resources: [] },
        { title: '6.3 Axios & Interceptors', slug: 'axios-interceptors', order: 3, youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0', youtube_id: 'cuEtnrL9-H0', duration_minutes: 25, description: 'Axios instance, base URL, request interceptor for JWT token.', key_takeaways: ['Axios handles JSON auto-parsing.', 'Interceptors attach Bearer tokens automatically.'], practice_task: { title: 'Axios instance', description: 'Create api.js with baseURL.', hint: 'axios.create({ baseURL: "/api" })' }, resources: [] },
        { title: '6.4 API Error Handling & Loading', slug: 'api-error-handling', order: 4, youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0', youtube_id: 'cuEtnrL9-H0', duration_minutes: 20, description: 'Loading spinners, error toasts, handling 401/404/500.', key_takeaways: ['Track loading state.', 'Handle 401 by redirecting to login.'], practice_task: { title: 'Resilient fetch hook', description: 'Manage data, loading, and error states.', hint: 'try { setData(...) } catch (err) { setError(err) }' }, resources: [] },
        { title: '6.5 Public API Project', slug: 'public-api-project', order: 5, youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0', youtube_id: 'cuEtnrL9-H0', duration_minutes: 30, description: 'Build GitHub user search app with live public REST API.', key_takeaways: ['Debounce search input.', 'Display loading skeleton while fetching.'], practice_task: { title: 'GitHub profile search', description: 'Fetch profile from https://api.github.com/users/{username}.', hint: 'Use input value in endpoint' }, resources: [] },
        { title: '6.6 Authentication Basics (JWT)', slug: 'jwt-auth-basics', order: 6, youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0', youtube_id: 'cuEtnrL9-H0', duration_minutes: 25, description: 'JWT structure (header, payload, signature), Authorization headers.', key_takeaways: ['JWT stores compact signed claims.', 'Pass as Bearer token in headers.'], practice_task: { title: 'Decode JWT', description: 'Understand header/payload/signature format.', hint: 'Tokens are base64url encoded.' }, resources: [] },
        { title: '6.7 Environment Variables', slug: 'env-variables', order: 7, youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0', youtube_id: 'cuEtnrL9-H0', duration_minutes: 18, description: '.env files, VITE_ prefixes, keeping secrets out of git.', key_takeaways: ['Vite env variables start with VITE_.', 'Client env vars are bundled into production JS.'], practice_task: { title: 'Set VITE_API_URL', description: 'Add VITE_API_URL to client .env.', hint: 'import.meta.env.VITE_API_URL' }, resources: [] },
        { title: '6.8 API Best Practices', slug: 'api-best-practices', order: 8, youtube_url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0', youtube_id: 'cuEtnrL9-H0', duration_minutes: 17, description: 'Caching responses, optimizing payload size, avoiding N+1 requests.', key_takeaways: ['Use aggregated dashboard endpoints.', 'Cache roadmap static data in state.'], practice_task: { title: 'Data caching', description: 'Store roadmap in memory to prevent refetching.', hint: 'Check state before making request' }, resources: [] }
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
        { title: '7.1 Browser DevTools Mastery', slug: 'devtools-mastery', order: 1, youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0', youtube_id: '23uM9y4v5m0', duration_minutes: 20, description: 'Elements inspector, console debugging, network throttle, Lighthouse.', key_takeaways: ['Simulate 3G throttling.', 'Lighthouse measures performance and accessibility.'], practice_task: { title: 'Run Lighthouse audit', description: 'Generate report and score 90+ in Accessibility.', hint: 'DevTools > Lighthouse' }, resources: [] },
        { title: '7.2 Package Managers (npm)', slug: 'package-managers', order: 2, youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0', youtube_id: '23uM9y4v5m0', duration_minutes: 18, description: 'package.json, package-lock.json, devDependencies, npm audit.', key_takeaways: ['package-lock locks exact versions.', '--save-dev for dev tooling.'], practice_task: { title: 'Run npm audit', description: 'Check dependencies for vulnerabilities.', hint: 'npm audit' }, resources: [] },
        { title: '7.3 Production Build Optimization', slug: 'production-build', order: 3, youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0', youtube_id: '23uM9y4v5m0', duration_minutes: 20, description: 'Minification, tree-shaking, testing build with vite preview.', key_takeaways: ['Vite build minifies CSS/JS.', 'Preview build locally with npx vite preview.'], practice_task: { title: 'Build and preview', description: 'Run npm run build then npx vite preview.', hint: 'Check output dist/ folder' }, resources: [], command: { code: 'npm run build && npx vite preview', description: 'Creates an optimized production bundle and starts a local server to preview it.', usage: 'Run this in the root of your project to test the production output before deploying.', steps: ['Open your terminal.', 'Navigate to the project root folder.', 'Run the command.', 'Wait for the production build to compile into the dist/ directory.', 'Open the localhost preview link in your browser to inspect the production app.'] } },
        { title: '7.4 Deploying to Vercel', slug: 'deploy-to-vercel', order: 4, youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0', youtube_id: '23uM9y4v5m0', duration_minutes: 20, description: 'Import GitHub repo to Vercel, env variables, automatic deployment.', key_takeaways: ['Vercel provides free global CDN hosting.', 'Git push to main auto-deploys.'], practice_task: { title: 'Deploy frontend', description: 'Import repo into Vercel and deploy.', hint: 'Set output dir to dist' }, resources: [] },
        { title: '7.5 Deploying Backend to Railway', slug: 'deploy-to-railway', order: 5, youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0', youtube_id: '23uM9y4v5m0', duration_minutes: 20, description: 'Deploy Express Node.js server, set env variables and CORS.', key_takeaways: ['Railway hosts running Node.js server.', 'Configure CORS for Vercel domain.'], practice_task: { title: 'Set env vars', description: 'Configure MONGODB_URI and JWT_SECRET on Railway.', hint: 'Set PORT and secrets' }, resources: [] },
        { title: '7.6 Custom Domains & DNS', slug: 'custom-domains-dns', order: 6, youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0', youtube_id: '23uM9y4v5m0', duration_minutes: 15, description: 'CNAME records, free SSL certificates, domain setup on Vercel.', key_takeaways: ['CNAME points domain to Vercel.', 'Vercel provisions automatic free SSL.'], practice_task: { title: 'DNS records overview', description: 'Learn CNAME vs A records.', hint: 'CNAME points one domain to another' }, resources: [] },
        { title: '7.7 Web Vitals & Performance', slug: 'web-vitals-performance', order: 7, youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0', youtube_id: '23uM9y4v5m0', duration_minutes: 17, description: 'LCP, FID/INP, CLS (layout shift), image aspect ratio optimization.', key_takeaways: ['LCP measures load speed.', 'Prevent CLS by setting aspect ratio on video embeds.'], practice_task: { title: 'Fix layout shift', description: 'Set explicit aspect ratio 16/9 on video container.', hint: 'aspect-ratio: 16 / 9' }, resources: [] },
        { title: '7.8 Portfolio & Job Preparation', slug: 'portfolio-job-prep', order: 8, youtube_url: 'https://www.youtube.com/watch?v=23uM9y4v5m0', youtube_id: '23uM9y4v5m0', duration_minutes: 20, description: 'Showcasing PathForge on resume, writing project README, technical interviews.', key_takeaways: ['Include live demo links on portfolio.', 'Write clean README with architecture overview.'], practice_task: { title: 'Write README', description: 'Create README.md with badges, screenshots, setup steps.', hint: 'Use markdown tables' }, resources: [] }
      ]
    }
  ]
};
