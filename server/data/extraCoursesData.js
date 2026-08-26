// Realistic and comprehensive course data for: Advanced React Patterns, Neural Networks Intro, and Graph Algorithms.
// Centralized here to be shared by both seeders and in-memory mock store.
// Uses valid 24-character hex strings for BSON ObjectId compatibility.

const extraPathsData = [
  {
    path: {
      _id: '65c1f0010000000000000001',
      title: 'Advanced React Patterns',
      slug: 'advanced-react-patterns',
      description: 'Master concurrent mode, custom hooks, and state management at scale.',
      icon: 'Code',
      total_lessons: 18,
      estimated_hours: 12,
      is_published: true
    },
    modules: [
      {
        _id: '65c1f0020000000000000001',
        title: 'React Component Architecture',
        slug: 'react-component-architecture',
        description: 'Deep dive into props validation, composition vs inheritance, and presentational structures.',
        order: 1,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Atom',
        lessons: [
          {
            _id: '65c1f0050000000000000011',
            title: 'Component Composition',
            slug: 'component-composition',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'Component Composition is the pattern of building complex components by combining simpler, independent components together. Instead of relying on deep inheritance or massive configs, you pass components as props or nest children components.',
            key_takeaways: [
              'Composition prevents prop drilling by passing components down directly.',
              'It keeps components decoupled, modular, and highly testable.',
              'Using slots or child component inputs creates flexible APIs.'
            ],
            practice_task: {
              title: 'Build a Card with slots',
              description: 'Create a Card component that accepts a CardHeader and CardBody component as props.',
              hint: 'Props can be any valid React elements, not just strings or numbers.'
            },
            resources: [
              { title: 'React Docs: Composition vs Inheritance', url: 'https://react.dev/learn/composition-vs-inheritance' }
            ],
            command: {
              code: 'npm create vite@latest comp-composition-demo -- --template react',
              description: 'Initialize a new React project using Vite to test composition patterns.',
              usage: 'Run this inside your workspace directory, then select JavaScript/React settings.',
              steps: [
                'Open the terminal.',
                'Run the npm create command.',
                'CD into the directory: cd comp-composition-demo.',
                'Run npm install && npm run dev to start.'
              ]
            },
            build_challenge: {
              title: 'Build a Split Screen Layout',
              description: 'Design a reusable Layout component that splits the screen into a Left Pane and a Right Pane, receiving custom components as props.',
              difficulty: 'Beginner',
              estimated_time: '15 minutes',
              skills: ['React', 'Composition', 'Props'],
              requirements: [
                'Create a SplitScreen component.',
                'Accept leftPane and rightPane element props.',
                'Render them side-by-side using Flexbox layout.',
                'Pass different UI modules to each pane to verify reusable render behavior.'
              ],
              starter_code: 'export function SplitScreen({ left: Left, right: Right }) {\n  return (\n    <div className="flex w-full">\n      {/* Render panes here */}\n    </div>\n  );\n}',
              expected_behavior: 'The components are rendered side-by-side with a 50/50 split width on desktop screens.',
              hints: [
                'You can render props as component instances directly in the JSX.',
                'Use Tailwind w-1/2 class to distribute equal width.'
              ],
              solution_explanation: 'By accepting components or React elements as props, the layout container details are abstracted away, leaving content composition to the parent component.'
            }
          },
          {
            _id: '65c1f0050000000000000012',
            title: 'Reusable Components',
            slug: 'reusable-components',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'Reusable components are modular components that can be configured via clean prop structures. They encapsulate markup and styling while letting parents control contents and callbacks.',
            key_takeaways: [
              'Extract UI blocks early when repeating design elements.',
              'Use TypeScript or PropTypes to define clear interfaces.',
              'Keep reusable components dumb and focus on visual consistency.'
            ],
            practice_task: {
              title: 'Refactor standard HTML button',
              description: 'Refactor standard buttons into a CustomButton component accepting variant styling props.',
              hint: 'Map class assignments based on a variant prop like "primary" or "secondary".'
            },
            resources: [
              { title: 'Vite React configurations', url: 'https://vitejs.dev/guide/' }
            ],
            command: {
              code: 'npm i lucide-react',
              description: 'Install Lucide icons library to build beautiful, icon-supported reusable controls.',
              usage: 'Run in the root directory of your React app.',
              steps: [
                'Ensure terminal is at the project root.',
                'Execute npm install lucide-react.',
                'Import icons into your custom components.'
              ]
            },
            build_challenge: {
              title: 'Build a Custom Status Badge',
              description: 'Create a reusable Badge component to represent status indicators (success, warning, error, pending).',
              difficulty: 'Beginner',
              estimated_time: '10 minutes',
              skills: ['React', 'Reusable UI', 'Tailwind'],
              requirements: [
                'Create a StatusBadge component.',
                'Accept a "type" prop (success, warning, error, pending).',
                'Dynamically assign correct colors (green, amber, red, gray).',
                'Accept a text label or child elements to output inside the badge.'
              ],
              starter_code: 'export default function StatusBadge({ type, children }) {\n  // Assign styles conditionally\n  return <span className="..."> {children} </span>;\n}',
              expected_behavior: 'Badge displays corresponding border and background colors depending on string input.',
              hints: [
                'Create a styling map object matching each type string to Tailwind color strings.'
              ],
              solution_explanation: 'Mapping prop parameters directly to style dictionaries avoids messy if-else logic and keeps the badge reusable and maintainable.'
            }
          },
          {
            _id: '65c1f0050000000000000013',
            title: 'Compound Components',
            slug: 'compound-components-basics',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'Compound Components are groups of related components that work together to manage shared state implicitly. Classic examples include Accordions, Tabs, and Select dropdown menus.',
            key_takeaways: [
              'Allows parent component to control layout while managing inner state (e.g. active index).',
              'Requires React.Context to pass state variables implicitly between children.',
              'Gives developer fine-grained layout control inside JSX structure.'
            ],
            practice_task: {
              title: 'Map Context properties',
              description: 'Expose context state values to child structures inside compound component bounds.',
              hint: 'Define children as Accordion.Item or Tabs.Tab.'
            },
            resources: [
              { title: 'React Context API', url: 'https://react.dev/reference/react/createContext' }
            ],
            command: {
              code: 'npm run build',
              description: 'Compile and build the project to verify that compound structures pass asset tree compilation.',
              usage: 'Run in project directory containing package.json.',
              steps: [
                'Execute compilation command in terminal.',
                'Verify the build output matches expectations.'
              ]
            },
            build_challenge: {
              title: 'Build a Reusable Tabs Module',
              description: 'Implement a Tab control system using the Compound Components pattern.',
              difficulty: 'Intermediate',
              estimated_time: '25 minutes',
              skills: ['React', 'Context API', 'Compound Components'],
              requirements: [
                'Create a Tabs container component that maintains active tab state.',
                'Expose Tabs.List, Tabs.Trigger, and Tabs.Content components.',
                'Ensure clicking a Trigger dynamically switches active Content.',
                'Avoid passing active index callbacks directly to each sub-component.'
              ],
              starter_code: 'import React, { createContext, useContext, useState } from "react";\nconst TabsContext = createContext();\n// Expose Tabs compound structure here',
              expected_behavior: 'Clicking tab buttons changes the rendered contents without refreshing page or using global states.',
              hints: [
                'Store active index state in Tabs provider context.',
                'Children retrieve context values via custom useContext hooks.'
              ],
              solution_explanation: 'Sharing state implicitly via React Context allows the compound subcomponents to communicate without requiring cluttering props on every child node.'
            }
          }
        ]
      },
      {
        _id: '65c1f0020000000000000002',
        title: 'Advanced State Management',
        slug: 'advanced-state-management',
        description: 'Explore useReducer for complex structures, Context API at scale, and state co-location tactics.',
        order: 2,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Atom',
        lessons: [
          {
            _id: '65c1f0050000000000000021',
            title: 'useReducer Deep Dive',
            slug: 'usereducer-deep-dive',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'useReducer is a React hook designed for managing complex state objects and state transitions. It delegates logic to a pure reducer function, resolving state updates via dispatched actions.',
            key_takeaways: [
              'Ideal when state updates depend on previous state details.',
              'Keeps state transition updates separated from component rendering logic.',
              'Actions are plain objects containing type identifiers and optional payloads.'
            ],
            practice_task: {
              title: 'Convert a form into useReducer',
              description: 'Convert a form containing multiple inputs to resolve state using a single reducer.',
              hint: 'Dispatch input names as action payloads.'
            },
            resources: [
              { title: 'React Hooks: useReducer', url: 'https://react.dev/reference/react/useReducer' }
            ],
            build_challenge: {
              title: 'Build a Todo Reducer',
              description: 'Create a state manager for a Todo list utilizing the useReducer hook.',
              difficulty: 'Intermediate',
              estimated_time: '20 minutes',
              skills: ['React', 'Hooks', 'useReducer'],
              requirements: [
                'Implement reducer function returning states for ADD, TOGGLE, and REMOVE actions.',
                'Ensure todo objects contain id, text, and isCompleted properties.',
                'Render lists and wire up dispatch button triggers in components.'
              ],
              starter_code: 'const todoReducer = (state, action) => {\n  switch(action.type) {\n    case "ADD": return [...state, action.payload];\n    default: return state;\n  }\n};',
              expected_behavior: 'Todo items are added, toggled, and deleted cleanly. Input resets after dispatching ADD.',
              hints: [
                'State inside reducer is immutable. Return shallow copies of arrays instead of modifying in-place.'
              ],
              solution_explanation: 'Centralizing CRUD actions in a reducer prevents state mismatch bugs across child event triggers.'
            }
          },
          {
            _id: '65c1f0050000000000000022',
            title: 'Context API at Scale',
            slug: 'context-api-at-scale',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'The Context API passes data down the component tree without prop drilling. At scale, splits context providers to avoid redundant rendering cycles.',
            key_takeaways: [
              'Create dedicated custom hooks to resolve context values safely.',
              'Separate state values from update dispatch actions into individual contexts to save rendering cycles.',
              'Context is not a replacement for full state storage, but a channel to route data.'
            ],
            practice_task: {
              title: 'Add safety checks',
              description: 'Add a check inside custom hooks to throw errors if hooks are invoked outside matching context providers.',
              hint: 'Check if context value is undefined.'
            },
            resources: [
              { title: 'Avoiding Context re-render traps', url: 'https://react.dev/reference/react/createContext#caveats' }
            ],
            build_challenge: {
              title: 'Build a Global Theme Context',
              description: 'Build a context manager that toggles application themes (light vs dark mode) globally.',
              difficulty: 'Intermediate',
              estimated_time: '15 minutes',
              skills: ['React', 'Context API', 'State Management'],
              requirements: [
                'Expose ThemeProvider supplying theme state and toggleTheme callback.',
                'Write a custom useTheme hook containing safety checks.',
                'Inject theme toggle switches in secondary modules to test global styling changes.'
              ],
              starter_code: 'export const ThemeContext = React.createContext();\nexport function useTheme() {\n  // Throw error if undefined\n}',
              expected_behavior: 'Toggling theme in dashboard affects styles in header and footer panels immediately.',
              hints: [
                'Initialize state reading default preferences from window.matchMedia.'
              ],
              solution_explanation: 'Throwing explicit errors when context hook is used outside providers catches developer setup mistakes instantly during compilation.'
            }
          },
          {
            _id: '65c1f0050000000000000023',
            title: 'State Lifting & Co-location',
            slug: 'state-lifting-and-colocation',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'State lifting brings states up to common ancestor nodes. Co-location is the inverse: moving states down close to where they are actually used to optimize render trees.',
            key_takeaways: [
              'Do not keep state in global providers if only a small branch reads it.',
              'Derived state avoids synchronization problems between separate state fields.',
              'Co-locating state cuts down re-render cycles across unrelated elements.'
            ],
            practice_task: {
              title: 'Refactor search bar input',
              description: 'Move search query state from page layout container directly into search bar element.',
              hint: 'Pass submit triggers upwards instead of continuous change handlers if parent only evaluates on submit.'
            },
            resources: [
              { title: 'React Docs: Lifting State Up', url: 'https://react.dev/learn/sharing-state-between-components' }
            ],
            build_challenge: {
              title: 'Locate Component State',
              description: 'Refactor an application with a sluggish global modal by co-locating the open/close state down to the trigger element.',
              difficulty: 'Intermediate',
              estimated_time: '15 minutes',
              skills: ['React', 'Optimization', 'State Co-location'],
              requirements: [
                'Extract Modal state out of high-level page layouts.',
                'Co-locate states into individual ModalWrapper modules.',
                'Verify that typing in high-level layouts no longer triggers rendering loops inside modals.'
              ],
              starter_code: '// Refactor to keep modal state localized\nexport function ModalWrapper() {\n}',
              expected_behavior: 'Modal states operate cleanly, and input latency in page elements drops to zero.',
              hints: [
                'State should reside where it affects the UI, not higher.'
              ],
              solution_explanation: 'Keeping state close to the UI components that utilize it prevents high-level layout trees from re-rendering during small interactive states.'
            }
          }
        ]
      },
      {
        _id: '65c1f0020000000000000003',
        title: 'Advanced Hooks',
        slug: 'advanced-hooks',
        description: 'Master memoization hooks, reference APIs, and custom hooks design methodologies.',
        order: 3,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Atom',
        lessons: [
          {
            _id: '65c1f0050000000000000031',
            title: 'useMemo & useCallback',
            slug: 'usememo-usecallback-differences',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'useMemo caches results of expensive computations. useCallback caches function instances to prevent child components from re-rendering due to changed references.',
            key_takeaways: [
              'Only use when calculations are expensive or references trigger child updates.',
              'useMemo evaluates calculations; useCallback returns the exact function instance.',
              'Make sure dependency arrays include all references read in functions.'
            ],
            practice_task: {
              title: 'Optimize filter loop',
              description: 'Wrap list filtering operations in useMemo based on filter parameter inputs.',
              hint: 'Dependency array should contain [list, filter].'
            },
            resources: [
              { title: 'React reference: useMemo', url: 'https://react.dev/reference/react/useMemo' }
            ],
            build_challenge: {
              title: 'Optimize Dynamic List Calculations',
              description: 'Implement useMemo to cache statistical data calculated from a list of numbers.',
              difficulty: 'Intermediate',
              estimated_time: '15 minutes',
              skills: ['React', 'useMemo', 'Optimization'],
              requirements: [
                'Compute variance and average of array containing 10,000 floats.',
                'Wrap computation in useMemo.',
                'Add toggle inputs to test that changing layouts doesn\'t re-trigger statistics logic unless lists alter.'
              ],
              starter_code: 'export default function Stats({ numbers }) {\n  const calculations = useMemo(() => calculateStats(numbers), [numbers]);\n}',
              expected_behavior: 'Typing in input fields does not lag because recalculation is bypassed.',
              hints: [
                'Verify dependencies match array variables precisely.'
              ],
              solution_explanation: 'Caching computation limits processor work to moments when numerical values actually change.'
            }
          },
          {
            _id: '65c1f0050000000000000032',
            title: 'useRef for DOM Access',
            slug: 'useref-for-dom-access',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'useRef creates mutable references that persist across renders without triggering a re-render. It is commonly used for DOM node selection and storing timer IDs.',
            key_takeaways: [
              'Updating ref.current does not trigger component renders.',
              'Assign refs to elements in JSX to populate DOM node properties.',
              'Clean up timer references on component unmounting inside effects.'
            ],
            practice_task: {
              title: 'Auto-focus input',
              description: 'Create an input element that automatically focuses when page components finish mounting.',
              hint: 'Invoke inputRef.current.focus() inside useEffect.'
            },
            resources: [
              { title: 'React Docs: Referencing values with Refs', url: 'https://react.dev/learn/referencing-values-with-refs' }
            ],
            build_challenge: {
              title: 'Build a Stopwatch Component',
              description: 'Create a highly accurate stopwatch that utilizes useRef to store interval references.',
              difficulty: 'Intermediate',
              estimated_time: '15 minutes',
              skills: ['React', 'useRef', 'Stopwatch'],
              requirements: [
                'Create a timer counter updating every 100ms.',
                'Store active setInterval IDs inside a useRef value.',
                'Allow Start, Pause, and Reset triggers.',
                'Ensure pausing and starting does not create duplicate interval loops.'
              ],
              starter_code: 'export default function Stopwatch() {\n  const intervalRef = useRef(null);\n  const [time, setTime] = useState(0);\n}',
              expected_behavior: 'Stopwatch functions correctly. No memory leaks are detected when navigating away.',
              hints: [
                'Clear intervals inside unmount triggers in useEffect return blocks.'
              ],
              solution_explanation: 'Persisting interval IDs inside refs allows functions to access active handles across renders without triggering rendering cycles.'
            }
          },
          {
            _id: '65c1f0050000000000000033',
            title: 'Custom Hooks Design',
            slug: 'custom-hooks-design-rules',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'Custom hooks let you extract component logic into reusable functions. They start with the prefix "use" and can call other React hooks internally.',
            key_takeaways: [
              'Custom hooks share stateful logic, not state itself.',
              'Keep custom hooks focused on a single responsibility (e.g. useFetch, useKeyPress).',
              'Return arrays or objects for flexible consumption.'
            ],
            practice_task: {
              title: 'Write window size listener hook',
              description: 'Create a custom hook useWindowSize that returns the current window dimensions.',
              hint: 'Attach event resize listeners inside useEffect and update state.'
            },
            resources: [
              { title: 'Reusing logic with Custom Hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' }
            ],
            build_challenge: {
              title: 'Build a useLocalStorage Hook',
              description: 'Create a custom hook useLocalStorage that behaves like useState but persists values in local storage.',
              difficulty: 'Advanced',
              estimated_time: '25 minutes',
              skills: ['React', 'Custom Hooks', 'Web Storage'],
              requirements: [
                'Implement custom useLocalStorage(key, initialValue) hook.',
                'Read and parse values from localStorage on initialization.',
                'Provide update functions that sync changes to both local React state and storage arrays.',
                'Support updating state using function callbacks.'
              ],
              starter_code: 'export function useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    // Load from storage\n  });\n  return [value, setValue];\n}',
              expected_behavior: 'Reloading the browser page preserves user theme or preferences stored via the hook.',
              hints: [
                'Use try-catch blocks to handle potential JSON serialization errors safely.'
              ],
              solution_explanation: 'Custom hooks wrap synchronization details, offering an elegant useState-like interface to components.'
            }
          }
        ]
      },
      {
        _id: '65c1f0020000000000000004',
        title: 'React Performance',
        slug: 'react-performance-optimization',
        description: 'Understand the rendering cycle, identify slow rendering paths, and optimize UI grids.',
        order: 4,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Atom',
        lessons: [
          {
            _id: '65c1f0050000000000000041',
            title: 'React Rendering Cycle',
            slug: 'react-rendering-cycle-depth',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'The React rendering cycle has three phases: Trigger, Render, and Commit. Rendering is React calculating DOM updates; committing is the actual application of those updates to the physical screen.',
            key_takeaways: [
              'State changes trigger rendering cycles across all descendants recursively by default.',
              'Virtual DOM calculations are fast, but complex reconciliation processes cause lag.',
              'Batching groups multiple state updates inside event triggers into one single render.'
            ],
            practice_task: {
              title: 'Trace render triggers',
              description: 'Utilize console.log statements to trace how often a child component renders when typing in parent inputs.',
              hint: 'Place logs right inside component function bodies.'
            },
            resources: [
              { title: 'React Docs: Render and Commit', url: 'https://react.dev/learn/render-and-commit' }
            ],
            build_challenge: {
              title: 'Implement Render Visualizer',
              description: 'Create a component that counts and displays its own rendering cycles to trace optimization results.',
              difficulty: 'Intermediate',
              estimated_time: '15 minutes',
              skills: ['React', 'Ref Tracking', 'Performance'],
              requirements: [
                'Implement count refs incrementing on every render call.',
                'Output counts in corner badge elements.',
                'Use this indicator to compare how adding optimizations changes render behaviors.'
              ],
              starter_code: 'export default function RenderCounter() {\n  const renders = useRef(0);\n  renders.current++;\n}',
              expected_behavior: 'Renders badge increments cleanly whenever states change.',
              hints: [
                'Accessing refs directly in render works for profiling, but avoid modifying ref values during render in production code.'
              ],
              solution_explanation: 'Persistent rendering counts let developers identify redundant layout updates before launching to production.'
            }
          },
          {
            _id: '65c1f0050000000000000042',
            title: 'React.memo Performance',
            slug: 'react-memo-performance',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'React.memo is a higher-order component that optimizes performance by memoizing components. It shallowly compares props and skips renders if they have not changed.',
            key_takeaways: [
              'Wrap components in React.memo to isolate them from parent render cycles.',
              'Only shallow compares props by default; custom comparison functions can be passed as second parameters.',
              'Redundant if props are primitive or change on every single render.'
            ],
            practice_task: {
              title: 'Memoize a list row',
              description: 'Apply React.memo to a list item component to skip re-renders when other items change.',
              hint: 'Import React, { memo } from "react".'
            },
            resources: [
              { title: 'React API: memo', url: 'https://react.dev/reference/react/memo' }
            ],
            build_challenge: {
              title: 'Build a Memoized Grid Row',
              description: 'Implement memoization on grid cells inside a large spreadsheet list component.',
              difficulty: 'Advanced',
              estimated_time: '25 minutes',
              skills: ['React', 'React.memo', 'Optimization'],
              requirements: [
                'Create a Spreadsheet component with 100 row sub-components.',
                'Wrap row cells in React.memo.',
                'Confirm updating a single cell value only renders that row cell, keeping sibling rows untouched.'
              ],
              starter_code: 'import React, { memo } from "react";\nconst Cell = memo(({ value, onClick }) => {\n  return <div onClick={onClick}>{value}</div>;\n});',
              expected_behavior: 'Spreadsheet renders grid cells smoothly. Cell updates execute instantly.',
              hints: [
                'Ensure click handler functions are memoized with useCallback, otherwise memoization is bypassed.'
              ],
              solution_explanation: 'Combining React.memo with useCallback ensures references remain identical, allowing React to skip re-renders.'
            }
          },
          {
            _id: '65c1f0050000000000000043',
            title: 'Avoiding Unnecessary Renders',
            slug: 'avoiding-unnecessary-renders',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'Avoiding unnecessary renders requires splitting layouts and structuring components to pass elements as children rather than creating complex nested components.',
            key_takeaways: [
              'Move state down when only a portion of the component tree depends on it.',
              'Pass JSX elements as children to skip rendering loops.',
              'Keep components focused on a single task to make optimizations simple.'
            ],
            practice_task: {
              title: 'Optimize layout component',
              description: 'Refactor a layout component to accept children instead of nesting components internally.',
              hint: 'Wrap child sections in standard React children elements.'
            },
            resources: [
              { title: 'React Docs: Optimizing performance', url: 'https://react.dev/reference/react/useMemo#skipping-re-rendering-of-components' }
            ],
            build_challenge: {
              title: 'Refactor Nested Render Trees',
              description: 'Refactor a heavy dashboard page by passing static components as children to reduce render times.',
              difficulty: 'Advanced',
              estimated_time: '20 minutes',
              skills: ['React', 'Layout Design', 'Performance'],
              requirements: [
                'Analyze rendering triggers in a nested layout structure.',
                'Refactor parent container components to receive sidebar and content as children.',
                'Confirm typing in search fields does not trigger re-renders in sibling sidebar panels.'
              ],
              starter_code: 'export function DashboardLayout({ children, sidebar }) {\n  return (\n    <div className="flex">\n      {sidebar}\n      {children}\n    </div>\n  );\n}',
              expected_behavior: 'Render cycles are confined to components that actually changed state.',
              hints: [
                'Passing elements as children acts as an implicit memoization technique.'
              ],
              solution_explanation: 'Using composition via children allows React to reuse element references, preventing unnecessary rendering cycles.'
            }
          }
        ]
      },
      {
        _id: '65c1f0020000000000000005',
        title: 'Advanced Patterns',
        slug: 'advanced-design-patterns',
        description: 'Implement advanced design patterns like Higher Order Components, Render Props, and Error Boundaries.',
        order: 5,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Atom',
        lessons: [
          {
            _id: '65c1f0050000000000000051',
            title: 'Higher Order Components',
            slug: 'higher-order-components-pattern',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'A Higher-Order Component (HOC) is a function that takes a component and returns a new component, typically extending it with shared behaviors or props.',
            key_takeaways: [
              'Useful for sharing cross-cutting concerns (e.g. log props, inject styles).',
              'Prefix function names with `with` (e.g., withAuth, withLogging).',
              'Pass all props through to the wrapped component to maintain transparency.'
            ],
            practice_task: {
              title: 'Write a loading spinner HOC',
              description: 'Create a withLoading HOC that shows a loading indicator while a loading prop is true.',
              hint: 'Return a function component that checks props.isLoading.'
            },
            resources: [
              { title: 'Legacy React patterns: HOCs', url: 'https://react.dev/reference/react/legacy' }
            ],
            build_challenge: {
              title: 'Build a Logger HOC',
              description: 'Create a Higher-Order Component withLogger that logs prop modifications to the console on every update.',
              difficulty: 'Intermediate',
              estimated_time: '15 minutes',
              skills: ['React', 'HOCs', 'Profiling'],
              requirements: [
                'Implement withLogger(WrappedComponent) function.',
                'Log prop changes during lifecycle updates.',
                'Ensure components mount and compile cleanly.'
              ],
              starter_code: 'export function withLogger(WrappedComponent) {\n  return function Logger(props) {\n    // Log render props\n    return <WrappedComponent {...props} />;\n  };\n}',
              expected_behavior: 'Console prints the updated props whenever components receive new inputs.',
              hints: [
                'Use useEffect inside the wrapper component to watch prop modifications.'
              ],
              solution_explanation: 'HOCs encapsulate shared debugging or telemetry logic, avoiding copy-pasting code across components.'
            }
          },
          {
            _id: '65c1f0050000000000000052',
            title: 'Render Props Pattern',
            slug: 'render-props-pattern',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'The Render Props pattern is a technique for sharing stateful logic between components using a prop whose value is a render function.',
            key_takeaways: [
              'Allows components to share logic without hardcoding UI output.',
              'Commonly uses the children prop as a render function.',
              'Gives parent components control over rendering details while consuming helper states.'
            ],
            practice_task: {
              title: 'Implement mouse tracker',
              description: 'Create a MouseTracker component that calls a render prop with the mouse coordinates.',
              hint: 'Pass coordinates object to children prop as function: children({ x, y }).'
            },
            resources: [
              { title: 'React documentation: Render Props', url: 'https://react.dev/reference/react/legacy' }
            ],
            build_challenge: {
              title: 'Build a Fetch Wrapper Component',
              description: 'Build a DataFetcher component that loads resources from a URL and passes state to its children.',
              difficulty: 'Intermediate',
              estimated_time: '20 minutes',
              skills: ['React', 'Render Props', 'API Consumption'],
              requirements: [
                'Create a DataFetcher component accepting a url prop and a render function.',
                'Manage data, error, and loading states.',
                'Consume the state in the parent components to render custom list layouts.'
              ],
              starter_code: 'export default function DataFetcher({ url, render }) {\n  // Fetch and manage state\n  return render({ data, loading, error });\n}',
              expected_behavior: 'Lists display data from custom render templates once API requests finish loading.',
              hints: [
                'Trigger fetch requests inside useEffect, watching for changes to the url prop.'
              ],
              solution_explanation: 'Render props delegate layout design to the parent, focusing the container on API handling.'
            }
          },
          {
            _id: '65c1f0050000000000000053',
            title: 'Controlled vs Uncontrolled',
            slug: 'controlled-vs-uncontrolled-inputs',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'Controlled components have their value managed by React state. Uncontrolled components let the browser DOM manage value storage directly, using ref queries when reading inputs.',
            key_takeaways: [
              'Controlled components are ideal for real-time validation and input mapping.',
              'Uncontrolled components are faster for forms with many fields, avoiding re-renders.',
              'Uncontrolled components query input elements using defaultValue and refs.'
            ],
            practice_task: {
              title: 'Write uncontrolled form',
              description: 'Create a form that reads user inputs using refs on submit without state updates.',
              hint: 'Attach refs to input tags and query ref.current.value in submit handlers.'
            },
            resources: [
              { title: 'React controlled components guide', url: 'https://react.dev/reference/react-dom/components/input' }
            ],
            build_challenge: {
              title: 'Form Validation Optimization',
              description: 'Refactor a slow multi-field registration form to use uncontrolled inputs to prevent typing lag.',
              difficulty: 'Advanced',
              estimated_time: '20 minutes',
              skills: ['React', 'Performance', 'Forms'],
              requirements: [
                'Create a form containing 10 fields.',
                'Use refs instead of useState variables for values.',
                'Run validation checks only on form submission.',
                'Display error alerts if inputs are blank.'
              ],
              starter_code: 'export default function RegistrationForm() {\n  const nameRef = useRef();\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(nameRef.current.value);\n  };\n}',
              expected_behavior: 'Form inputs handle changes smoothly without re-rendering the parent page on every keypress.',
              hints: [
                'Use defaultValue to initialize form fields with starting values without controlling them.'
              ],
              solution_explanation: 'Uncontrolled inputs decouple input state from React render cycles, keeping the UI highly responsive.'
            }
          }
        ]
      },
      {
        _id: '65c1f0020000000000000006',
        title: 'Production React',
        slug: 'production-react',
        description: 'Implement robust API handling, global Error Boundaries, and resilient architectures.',
        order: 6,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Atom',
        lessons: [
          {
            _id: '65c1f0050000000000000061',
            title: 'Error Boundaries',
            slug: 'error-boundaries-setup',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app.',
            key_takeaways: [
              'Must be class components because function components do not support error lifecycle hooks.',
              'Use getDerivedStateFromError to render fallback UIs.',
              'Does not catch errors inside async handlers, effect closures, or server-side renders.'
            ],
            practice_task: {
              title: 'Create an Error Boundary wrapper',
              description: 'Write a basic class component that catches errors and displays an error message.',
              hint: 'Implement componentDidCatch and getDerivedStateFromError hooks.'
            },
            resources: [
              { title: 'React Docs: Error Boundaries', url: 'https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary' }
            ],
            build_challenge: {
              title: 'Build a Resilient Component Wrapper',
              description: 'Implement a reusable ErrorBoundary component to catch errors in buggy widget dashboards.',
              difficulty: 'Advanced',
              estimated_time: '20 minutes',
              skills: ['React', 'Class Components', 'Resilience'],
              requirements: [
                'Create an ErrorBoundary class component.',
                'Catch errors inside child components.',
                'Render fallback elements and log error trace lists.',
                'Provide clear buttons to reload only the crashed widget without reloading the page.'
              ],
              starter_code: 'import React from "react";\nexport default class ErrorBoundary extends React.Component {\n  state = { hasError: false };\n}',
              expected_behavior: 'Buggy widgets crash gracefully, rendering a fallback UI, while parent page elements remain functional.',
              hints: [
                'Reset error boundary state to allow widgets to attempt re-renders on recovery.'
              ],
              solution_explanation: 'Error Boundaries prevent local rendering crashes from taking down the entire application.'
            }
          },
          {
            _id: '65c1f0050000000000000062',
            title: 'API Integration & Cache',
            slug: 'api-integration-and-cache',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'Reliable API integrations handle loading indicators, API errors, and caching. Caching stores API responses locally to prevent redundant network requests.',
            key_takeaways: [
              'Store response data, loading flags, and error details inside state variables.',
              'Use abort controllers inside cleanup functions to cancel pending requests when components unmount.',
              'Cache API responses in memory or local storage to speed up navigation.'
            ],
            practice_task: {
              title: 'Abort fetch request',
              description: 'Implement an AbortController inside a fetch request to cancel pending network queries on component unmount.',
              hint: 'Pass signal parameter in fetch options: fetch(url, { signal }).'
            },
            resources: [
              { title: 'MDN Web APIs: AbortController', url: 'https://developer.mozilla.org/en-US/docs/Web/API/AbortController' }
            ],
            build_challenge: {
              title: 'Build a Cached Fetcher Hook',
              description: 'Create a custom hook useFetchCached that fetches API data and caches responses to prevent redundant requests.',
              difficulty: 'Advanced',
              estimated_time: '30 minutes',
              skills: ['React', 'Custom Hooks', 'Caching'],
              requirements: [
                'Implement custom hook cache storage.',
                'Serve cached responses instantly when requesting matching URLs.',
                'Manage active loading states and handle network errors gracefully.',
                'Add cache invalidation timeouts to keep data fresh.'
              ],
              starter_code: 'const cache = {};\nexport function useFetchCached(url) {\n  // Implement caching fetch hook\n}',
              expected_behavior: 'Navigating between dashboard panels displays data instantly without triggering network requests.',
              hints: [
                'Store fetch outcomes inside shared file scope cache objects.'
              ],
              solution_explanation: 'Caching API responses locally minimizes network overhead and improves page transitions.'
            }
          },
          {
            _id: '65c1f0050000000000000063',
            title: 'Production Component Design',
            slug: 'production-component-design',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/bMknfKXIFA8',
            youtube_id: 'bMknfKXIFA8',
            duration_minutes: 20,
            description: 'Production component design focuses on building clean, well-tested component folders containing style structures, tests, and stories.',
            key_takeaways: [
              'Bundle component markup, styles, and unit tests in a single directory.',
              'Define clear prop boundaries and validate input parameters.',
              'Mock API calls and side-effects during testing to isolate component logic.'
            ],
            practice_task: {
              title: 'Organize files in component folders',
              description: 'Move a Button component along with its styles and test files into a dedicated Button/ folder.',
              hint: 'Keep exports clean using index.js files.'
            },
            resources: [
              { title: 'React testing library setup', url: 'https://testing-library.com/docs/react-testing-library/intro/' }
            ],
            build_challenge: {
              title: 'Robust Form Input Component',
              description: 'Build a production-ready TextInput component folder complete with automated accessibility validations.',
              difficulty: 'Advanced',
              estimated_time: '25 minutes',
              skills: ['React', 'Accessibility', 'Testing'],
              requirements: [
                'Implement layout mapping label IDs dynamically to input fields.',
                'Render field-specific error messages dynamically.',
                'Configure aria-invalid and aria-describedby properties.',
                'Ensure components compile cleanly.'
              ],
              starter_code: 'export default function TextInput({ label, error, ...props }) {\n  const id = useId();\n}',
              expected_behavior: 'Inputs align labels to input focus actions cleanly, satisfying screen-reader checks.',
              hints: [
                'Use the useId hook to generate unique IDs for accessibility attributes.'
              ],
              solution_explanation: 'Pairing labels and inputs with accessible IDs ensures forms work correctly with assistive technologies.'
            }
          }
        ]
      }
    ]
  },
  {
    path: {
      _id: '65c1f0010000000000000002',
      title: 'Neural Networks Intro',
      slug: 'neural-networks-intro',
      description: 'Build your first predictive models using PyTorch and real-world datasets.',
      icon: 'Brain',
      total_lessons: 17,
      estimated_hours: 24,
      is_published: true
    },
    modules: [
      {
        _id: '65c1f0030000000000000001',
        title: 'Machine Learning Foundations',
        slug: 'machine-learning-foundations',
        description: 'Understand the core concepts of supervised vs unsupervised algorithms, datasets, and evaluating models.',
        order: 1,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Database',
        lessons: [
          {
            _id: '65c1f0060000000000000011',
            title: 'Supervised vs Unsupervised',
            slug: 'supervised-vs-unsupervised-learning',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Supervised learning trains models on labeled training data (inputs paired with correct outputs). Unsupervised learning analyzes unlabeled datasets to discover hidden structures and groupings (e.g. clustering).',
            key_takeaways: [
              'Supervised: inputs are paired with labels (e.g. email labeled as spam).',
              'Unsupervised: groups inputs by similarity without label guidance (e.g. customer segments).',
              'Regression (predicting values) and Classification (predicting classes) are supervised tasks.'
            ],
            practice_task: {
              title: 'Identify learning modes',
              description: 'Classify three scenarios: house price predictor, customer clustering, and image tagger.',
              hint: 'Verify if dataset training relies on pre-labeled target outputs.'
            },
            resources: [
              { title: 'Google Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course' }
            ],
            build_challenge: {
              title: 'K-Means Mock Classifier',
              description: 'Implement a simple clustering algorithm in plain JS to group 2D coordinate points.',
              difficulty: 'Intermediate',
              estimated_time: '20 minutes',
              skills: ['Machine Learning', 'Plain JS', 'Algorithms'],
              requirements: [
                'Write function grouping 2D points into two separate lists based on proximity.',
                'Calculate distances from two mock centroids.',
                'Return updated coordinate group arrays.'
              ],
              starter_code: 'export function clusterPoints(points, c1, c2) {\n  // Group points based on distance\n}',
              expected_behavior: 'Coordinates are correctly clustered into the closest centroid lists.',
              hints: [
                'Use the Euclidean distance formula: Math.sqrt(dx*dx + dy*dy).'
              ],
              solution_explanation: 'Clustering groups data based on feature similarity without relying on pre-labeled training data.'
            }
          },
          {
            _id: '65c1f0060000000000000012',
            title: 'Training vs Testing Data',
            slug: 'training-vs-testing-data',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'A model is trained on training data and evaluated on testing data to ensure it generalizes well to new, unseen inputs. Evaluating models on training data leads to overfitting.',
            key_takeaways: [
              'Training set trains weights; testing set verifies accuracy on new data.',
              'Common split ratios are 80/20 or 70/30.',
              'Data leaks occur when training sets contain testing data values.'
            ],
            practice_task: {
              title: 'Split a mock array',
              description: 'Write a utility function to split a data array into training and testing subsets.',
              hint: 'Slice arrays based on index percentage ratios.'
            },
            resources: [
              { title: 'Scikit-Learn: train_test_split', url: 'https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html' }
            ],
            build_challenge: {
              title: 'Build a Dataset Splitter',
              description: 'Implement a reusable data splitter that shuffles lists before slicing them into training and testing sets.',
              difficulty: 'Beginner',
              estimated_time: '10 minutes',
              skills: ['JS', 'Data Prep', 'Math'],
              requirements: [
                'Write splitDataset(data, trainRatio) function.',
                'Shuffle the array values randomly.',
                'Slice the array into training and testing arrays.',
                'Verify array lengths sum to original length.'
              ],
              starter_code: 'export function splitDataset(data, ratio = 0.8) {\n  // Shuffle and slice\n}',
              expected_behavior: 'Splits arrays correctly based on ratio floats (e.g. 0.8 splits 10 entries into 8 and 2).',
              hints: [
                'Use Math.random() in a sorting compare function to quickly shuffle arrays.'
              ],
              solution_explanation: 'Shuffling data before splitting prevents ordered dependencies from skewing model evaluation.'
            }
          },
          {
            _id: '65c1f0060000000000000013',
            title: 'Model Evaluation Metrics',
            slug: 'model-evaluation-metrics',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Evaluation metrics gauge model performance. Common metrics include accuracy (percentage of correct predictions), precision, recall, and F1-score.',
            key_takeaways: [
              'Accuracy can be misleading for imbalanced datasets.',
              'Precision = True Positives / (True Positives + False Positives).',
              'Recall = True Positives / (True Positives + False Negatives).'
            ],
            practice_task: {
              title: 'Calculate Accuracy metrics',
              description: 'Compute classification accuracy given predicted and actual value arrays.',
              hint: 'Compare elements at corresponding indices and calculate matching ratios.'
            },
            resources: [
              { title: 'Machine Learning metrics guide', url: 'https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall' }
            ],
            build_challenge: {
              title: 'Build a Confusion Matrix Tool',
              description: 'Write a helper function to calculate precision, recall, and accuracy metrics.',
              difficulty: 'Intermediate',
              estimated_time: '20 minutes',
              skills: ['ML Metrics', 'Logic', 'Evaluation'],
              requirements: [
                'Accept arrays of true labels and predicted labels (0 or 1).',
                'Calculate True Positives, False Positives, and False Negatives.',
                'Compute and return precision, recall, and F1-score.'
              ],
              starter_code: 'export function getMetrics(yTrue, yPred) {\n  let tp = 0, fp = 0, fn = 0, tn = 0;\n  return { precision, recall };\n}',
              expected_behavior: 'Computes metrics correctly (e.g., matching arrays returns precision: 1.0, recall: 1.0).',
              hints: [
                'Ensure division by zero errors are caught if predictions contain zero positives.'
              ],
              solution_explanation: 'Confusion matrices reveal if models are biased toward specific class groups.'
            }
          }
        ]
      },
      {
        _id: '65c1f0030000000000000002',
        title: 'Neural Network Fundamentals',
        slug: 'neural-network-fundamentals',
        description: 'Explore the internal components of artificial neurons, weights, biases, and activation functions.',
        order: 2,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Cpu',
        lessons: [
          {
            _id: '65c1f0060000000000000021',
            title: 'What is a Neuron?',
            slug: 'what-is-a-neuron-neuron-model',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'An artificial neuron (perceptron) is the basic unit of a neural network. It receives inputs, multiplies them by weights, adds a bias, and passes the sum through an activation function.',
            key_takeaways: [
              'Neurons model biological cells, mapping inputs to outputs.',
              'Outputs = Activation(Sum(Input * Weight) + Bias).',
              'A single neuron can only classify linearly separable patterns.'
            ],
            practice_task: {
              title: 'Model a single neuron',
              description: 'Calculate the output of a single neuron given three inputs, weights, and a bias.',
              hint: 'Multiply each input by its weight, add them up, and add the bias.'
            },
            resources: [
              { title: 'Neural Networks: McCulloch-Pitts Neuron', url: 'https://en.wikipedia.org/wiki/Artificial_neuron' }
            ],
            build_challenge: {
              title: 'Build a Plain JS Neuron',
              description: 'Implement a single neuron function that calculates output weights and biases.',
              difficulty: 'Beginner',
              estimated_time: '15 minutes',
              skills: ['Neural Networks', 'Math', 'Plain JS'],
              requirements: [
                'Create simpleNeuron(inputs, weights, bias) function.',
                'Multiply each input element by its corresponding weight.',
                'Add bias and run the sum through a step activation function (output 1 if sum >= 0, else 0).'
              ],
              starter_code: 'export function simpleNeuron(inputs, weights, bias) {\n  let sum = 0;\n  // Compute sum and activate\n}',
              expected_behavior: 'Returns correct step outputs (e.g. inputs [1,0], weights [0.5,0.5], bias -0.2 returns 1).',
              hints: [
                'Use loops or Array.prototype.reduce to calculate the dot product.'
              ],
              solution_explanation: 'Computing the weighted sum of inputs and applying a threshold is the core mathematical operation of neural networks.'
            }
          },
          {
            _id: '65c1f0060000000000000022',
            title: 'Weights and Biases',
            slug: 'weights-and-biases',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Weights define the strength of connections between neurons. Biases allow shifting activation functions left or right, letting models fit offsets.',
            key_takeaways: [
              'Weights represent the importance of features.',
              'Biases are input values independent of external feature inputs.',
              'Model training is the process of adjusting weights and biases.'
            ],
            practice_task: {
              title: 'Tune bias value manually',
              description: 'Determine the bias value needed for a neuron with input=1 and weight=2 to produce an output sum of 0.',
              hint: 'Solve for bias: (1 * 2) + bias = 0.'
            },
            resources: [
              { title: 'Deep Learning Book: Weights and Biases', url: 'https://www.deeplearningbook.org/' }
            ],
            build_challenge: {
              title: 'Implement Line Separator Classifier',
              description: 'Configure weights and a bias on a 2D neuron to separate points below and above the line y = x.',
              difficulty: 'Intermediate',
              estimated_time: '15 minutes',
              skills: ['Neural Networks', 'Linear Algebra', 'ML'],
              requirements: [
                'Set weight variables [w1, w2] and bias values.',
                'Ensure points (2, 3) return class 1, while points (3, 2) return class 0.',
                'Verify classifier output maps.'
              ],
              starter_code: 'const weights = [/* w1 */, /* w2 */];\nconst bias = 0;\n// Output class using step activation',
              expected_behavior: 'Classifies coordinate test arrays correctly according to line bounds.',
              hints: [
                'A line y = x can be represented as y - x = 0. Set weights to [1, -1] and bias to 0.'
              ],
              solution_explanation: 'Weights rotate the linear boundary, and the bias shifts it across the coordinate plane.'
            }
          },
          {
            _id: '65c1f0060000000000000023',
            title: 'Activation Functions',
            slug: 'activation-functions-relu-sigmoid',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Activation functions introduce non-linearity into neural networks. Without activation functions, a neural network is just a linear regression model, regardless of how many layers it has.',
            key_takeaways: [
              'Sigmoid squashes inputs to a range between 0 and 1, representing probabilities.',
              'ReLU (Rectified Linear Unit) outputs input directly if positive, else returns 0.',
              'ReLU prevents vanishing gradient problems during backpropagation.'
            ],
            practice_task: {
              title: 'Calculate ReLU output',
              description: 'Evaluate ReLU values for inputs -4.5 and 3.2.',
              hint: 'ReLU returns 0 for negative values, and the input value itself for positive inputs.'
            },
            resources: [
              { title: 'PyTorch Docs: Activation functions', url: 'https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-non-linearity' }
            ],
            build_challenge: {
              title: 'Build Sigmoid & ReLU Activation',
              description: 'Implement Sigmoid and ReLU activation functions in plain JavaScript.',
              difficulty: 'Beginner',
              estimated_time: '15 minutes',
              skills: ['JS', 'Activation Functions', 'Math'],
              requirements: [
                'Write relu(x) function.',
                'Write sigmoid(x) function.',
                'Return correct decimal outputs for diverse positive and negative inputs.'
              ],
              starter_code: 'export function relu(x) { /* return max(0,x) */ }\nexport function sigmoid(x) { /* return 1/(1+e^-x) */ }',
              expected_behavior: 'relu(-10) returns 0. sigmoid(0) returns 0.5.',
              hints: [
                'Use Math.exp(-x) to calculate Euler\'s constant exponents in the Sigmoid formula.'
              ],
              solution_explanation: 'Activation functions squash outputs to specific ranges, adding non-linearity to model layers.'
            }
          }
        ]
      },
      {
        _id: '65c1f0030000000000000003',
        title: 'Training Neural Networks',
        slug: 'training-neural-networks',
        description: 'Deep dive into loss metrics, gradient descent, backpropagation, and adjusting learning rates.',
        order: 3,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'TrendingUp',
        lessons: [
          {
            _id: '65c1f0060000000000000031',
            title: 'Loss Functions',
            slug: 'loss-functions-mse-cross-entropy',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Loss functions measure how far predictions are from target outputs. Models train by adjusting weights to minimize this loss.',
            key_takeaways: [
              'MSE (Mean Squared Error) is commonly used for regression tasks.',
              'Binary Cross-Entropy measures classification loss.',
              'Lower loss indicates better model fit.'
            ],
            practice_task: {
              title: 'Calculate Mean Squared Error',
              description: 'Calculate the MSE given actual values [2.0, 3.0] and predicted values [1.8, 3.2].',
              hint: 'Square the difference of each pair, sum them up, and divide by the number of elements.'
            },
            resources: [
              { title: 'Loss functions in deep learning', url: 'https://pytorch.org/docs/stable/nn.html#loss-functions' }
            ],
            build_challenge: {
              title: 'Build Mean Squared Error Calculator',
              description: 'Write a function to calculate Mean Squared Error given actual and predicted arrays.',
              difficulty: 'Beginner',
              estimated_time: '10 minutes',
              skills: ['JS', 'Math', 'Evaluation'],
              requirements: [
                'Accept arrays yTrue and yPred.',
                'Calculate squared differences for each index.',
                'Return the average of the squared errors.'
              ],
              starter_code: 'export function calculateMse(yTrue, yPred) {\n  // Implement Mean Squared Error\n}',
              expected_behavior: 'Given yTrue [1, 2] and yPred [1.5, 2.5], return 0.25.',
              hints: [
                'Ensure both input arrays have the same length before looping.'
              ],
              solution_explanation: 'Squaring the error penalizes larger deviations more heavily than minor errors.'
            }
          },
          {
            _id: '65c1f0060000000000000032',
            title: 'Gradient Descent',
            slug: 'gradient-descent-optimization',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Gradient descent is an optimization algorithm used to minimize loss by iteratively moving in the direction of steepest descent. Gradients tell us which way to adjust weights.',
            key_takeaways: [
              'Gradients indicate the direction of steepest increase in loss.',
              'Adjust weights opposite to the gradient to minimize loss.',
              'Stochastic Gradient Descent (SGD) calculates gradients on random samples.'
            ],
            practice_task: {
              title: 'Update a weight manually',
              description: 'Calculate updated weight given w=1.5, gradient=0.4, and learning rate=0.1.',
              hint: 'w_new = w - (learning_rate * gradient).'
            },
            resources: [
              { title: 'Visualizing Gradient Descent', url: 'https://distill.pub/2017/momentum/' }
            ],
            build_challenge: {
              title: 'Implement Weight Update Step',
              description: 'Write a function to perform weight updates given gradients and learning rates.',
              difficulty: 'Beginner',
              estimated_time: '10 minutes',
              skills: ['JS', 'Gradient Descent', 'Math'],
              requirements: [
                'Create updateWeights(weights, gradients, lr) function.',
                'Iterate through the weight array.',
                'Update weights using gradient values and learning rates.',
                'Return updated weight values.'
              ],
              starter_code: 'export function updateWeights(weights, gradients, lr) {\n  // Update values\n}',
              expected_behavior: 'Given weights [1.0, 2.0], gradients [0.5, -0.5], and lr 0.1, return [0.95, 2.05].',
              hints: [
                'Do not modify the original weight array in-place; return a new copy.'
              ],
              solution_explanation: 'Subtracting learning-rate-scaled gradients adjusts weights toward the loss minimum.'
            }
          },
          {
            _id: '65c1f0060000000000000033',
            title: 'Backpropagation',
            slug: 'backpropagation-gradients',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Backpropagation calculates gradients of the loss function with respect to weights using the chain rule. Gradients flow backward through layers from the output to the input.',
            key_takeaways: [
              'Uses chain rule derivative products to compute weight gradients.',
              'Backprop calculates gradients; gradient descent uses them to adjust weights.',
              'Allows deep architectures to train efficiently.'
            ],
            practice_task: {
              title: 'Trace chain rule values',
              description: 'Find df/dx given f = g(h(x)), g\'(h) = 2, and h\'(x) = 3.',
              hint: 'Multiply the derivatives: df/dx = g\'(h) * h\'(x).'
            },
            resources: [
              { title: 'Calculus on computational graphs', url: 'http://colah.github.io/posts/2015-08-Backprop/' }
            ],
            build_challenge: {
              title: 'Implement Basic Chain Rule Derivative',
              description: 'Calculate local gradients of a mathematical node graph in plain JS.',
              difficulty: 'Intermediate',
              estimated_time: '15 minutes',
              skills: ['JS', 'Backpropagation', 'Calculus'],
              requirements: [
                'Implement node derivative calculations.',
                'Compute and return final gradients.',
                'Ensure calculations are accurate.'
              ],
              starter_code: 'export function localGradient(incomingGradient, localDerivative) {\n  return incomingGradient * localDerivative;\n}',
              expected_behavior: 'Incoming gradient of 2.5 and local derivative of 4.0 returns 10.0.',
              hints: [
                'Local gradients accumulate by multiplication across connected nodes.'
              ],
              solution_explanation: 'The chain rule multiplies local derivatives along computation paths to calculate total gradients.'
            }
          }
        ]
      },
      {
        _id: '65c1f0030000000000000004',
        title: 'Building Neural Networks',
        slug: 'building-neural-networks',
        description: 'Set up Python, prepare datasets, use NumPy matrix operations, and build a model from scratch.',
        order: 4,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Terminal',
        lessons: [
          {
            _id: '65c1f0060000000000000041',
            title: 'Python Environment',
            slug: 'python-environment-setup',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'A clean Python development environment is crucial. We set up virtual environments and install standard packages (NumPy, SciPy, Jupyter) to build models.',
            key_takeaways: [
              'Virtual environments prevent dependency conflicts between projects.',
              'pip is the standard package manager for Python.',
              'Jupyter notebooks allow testing code snippets interactively.'
            ],
            practice_task: {
              title: 'Install virtualenv package',
              description: 'Create a Python virtual environment named "env" in your workspace folder.',
              hint: 'Use python -m venv env.'
            },
            resources: [
              { title: 'Python official guides: Virtual environments', url: 'https://docs.python.org/3/tutorial/venv.html' }
            ],
            command: {
              code: 'python -m venv venv && source venv/bin/activate',
              description: 'Create and activate a local Python virtual environment.',
              usage: 'Run this in your project terminal root to isolate dependencies.',
              steps: [
                'Ensure python is installed on your machine.',
                'Run python -m venv venv.',
                'Activate via source venv/bin/activate (on Linux/macOS) or venv\\Scripts\\activate (on Windows).'
              ]
            },
            build_challenge: {
              title: 'Create requirement list installer',
              description: 'Create a requirements.txt file specifying dependencies, and verify pip installation.',
              difficulty: 'Beginner',
              estimated_time: '10 minutes',
              skills: ['Python', 'Pip', 'Config'],
              requirements: [
                'Create a requirements.txt file.',
                'Specify numpy and matplotlib with versions.',
                'Write verification statement.'
              ],
              starter_code: 'numpy==1.24.3\nmatplotlib==3.7.1',
              expected_behavior: 'Dependencies install cleanly without version conflicts.',
              hints: [
                'Install dependencies in virtual environments using: pip install -r requirements.txt.'
              ],
              solution_explanation: 'requirements.txt locks dependency versions, ensuring identical environment setups across machines.'
            }
          },
          {
            _id: '65c1f0060000000000000042',
            title: 'NumPy Basics',
            slug: 'numpy-basics-matrix-operations',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'NumPy (Numerical Python) is the foundation of scientific computing in Python. It provides high-performance multi-dimensional array operations, which are essential for computing neural network layers.',
            key_takeaways: [
              'numpy.array objects execute vector operations much faster than standard Python lists.',
              'Matrix dot products calculate layer weights: np.dot(inputs, weights).',
              'Broadcasting allows applying mathematical operations on arrays of different dimensions.'
            ],
            practice_task: {
              title: 'Multiply two matrices',
              description: 'Write a python command to compute the dot product of a 1x3 vector and a 3x2 matrix.',
              hint: 'Use np.dot(v, m) or v @ m.'
            },
            resources: [
              { title: 'NumPy official Quickstart guide', url: 'https://numpy.org/doc/stable/user/quickstart.html' }
            ],
            command: {
              code: 'pip install numpy',
              description: 'Install the NumPy scientific computing library in your active virtual environment.',
              usage: 'Run inside your terminal with the virtual environment activated.',
              steps: [
                'Activate virtual environment.',
                'Run pip install numpy.',
                'Import numpy as np in scripts.'
              ]
            },
            build_challenge: {
              title: 'Matrix Dot Product Implementation',
              description: 'Implement a matrix multiplication function in plain JS to understand how NumPy performs dot products internally.',
              difficulty: 'Advanced',
              estimated_time: '25 minutes',
              skills: ['Math', 'Linear Algebra', 'Algorithms'],
              requirements: [
                'Accept two 2D matrices (A and B).',
                'Verify matrix dimension matching (columns of A must equal rows of B).',
                'Calculate and return the dot product matrix.',
                'Throw error if matrix dimensions do not match.'
              ],
              starter_code: 'export function matMul(A, B) {\n  // Implement matrix multiplication\n}',
              expected_behavior: 'Multiplying [[1,2],[3,4]] by [[2,0],[1,2]] returns [[4,4],[10,8]].',
              hints: [
                'Use nested loops over rows of A, columns of B, and rows of B.'
              ],
              solution_explanation: 'Matrix multiplication calculates the weighted sums of input feature vectors across layer neurons in parallel.'
            }
          },
          {
            _id: '65c1f0060000000000000043',
            title: 'Dataset Preparation',
            slug: 'dataset-preparation-normalization',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Dataset preparation shapes raw data for training. Feature scaling (normalization/standardization) squashes numeric ranges, speeding up gradient descent.',
            key_takeaways: [
              'Normalization scales values to a range between 0 and 1.',
              'Standardization centers features around a mean of 0 with a standard deviation of 1.',
              'Failing to scale features can cause model gradients to explode or vanish.'
            ],
            practice_task: {
              title: 'Normalize a numeric list',
              description: 'Normalize the values [10, 20, 30] to a range between 0 and 1.',
              hint: 'x_norm = (x - min) / (max - min).'
            },
            resources: [
              { title: 'Feature scaling methods', url: 'https://en.wikipedia.org/wiki/Feature_scaling' }
            ],
            build_challenge: {
              title: 'Build a Min-Max Normalizer',
              description: 'Write a normalizer function that scales numeric feature columns to a range between 0 and 1.',
              difficulty: 'Beginner',
              estimated_time: '15 minutes',
              skills: ['JS', 'Data Normalization', 'Preprocessing'],
              requirements: [
                'Accept a flat array of numbers.',
                'Find minimum and maximum values.',
                'Normalize each element using Min-Max scaling.',
                'Return normalized float array.'
              ],
              starter_code: 'export function normalize(arr) {\n  // Min-Max Normalization\n}',
              expected_behavior: 'Normalizing [0, 5, 10] returns [0.0, 0.5, 1.0].',
              hints: [
                'Ensure division by zero is handled if all array values are identical.'
              ],
              solution_explanation: 'Normalization balances feature scales, preventing larger magnitude columns from dominating gradient updates.'
            }
          }
        ]
      },
      {
        _id: '65c1f0030000000000000005',
        title: 'Deep Learning Basics',
        slug: 'deep-learning-basics',
        description: 'Introduction to PyTorch tensors, creating model layers, optimizers, and writing training loops.',
        order: 5,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Layers',
        lessons: [
          {
            _id: '65c1f0060000000000000051',
            title: 'PyTorch Introduction',
            slug: 'pytorch-introduction-tensors',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'PyTorch is an open-source machine learning framework. Tensors are its core data structure, similar to NumPy arrays but capable of running on GPUs and supporting auto-differentiation.',
            key_takeaways: [
              'Tensors store multi-dimensional numerical data arrays.',
              'PyTorch Autograd automatically calculates gradients of model parameters.',
              'Tensors can run on CUDA/GPUs to accelerate model execution.'
            ],
            practice_task: {
              title: 'Create a random PyTorch tensor',
              description: 'Write python commands to initialize a random 2x3 tensor.',
              hint: 'Import torch and run torch.rand(2, 3).'
            },
            resources: [
              { title: 'PyTorch official Tutorials', url: 'https://pytorch.org/tutorials/' }
            ],
            command: {
              code: 'pip install torch',
              description: 'Install PyTorch in your active Python environment.',
              usage: 'Run inside terminal with virtual environment activated.',
              steps: [
                'Ensure environment is active.',
                'Run pip install torch.',
                'Import torch in python script to verify installation.'
              ]
            },
            build_challenge: {
              title: 'PyTorch Model Layer Setup',
              description: 'Initialize linear layers and define their input-output dims in PyTorch.',
              difficulty: 'Beginner',
              estimated_time: '15 minutes',
              skills: ['PyTorch', 'Model setup', 'Linear Layers'],
              requirements: [
                'Create a neural network class inheriting from torch.nn.Module.',
                'Define a linear layer accepting 10 inputs and returning 5 outputs in the constructor.',
                'Verify target layer dims.'
              ],
              starter_code: 'import torch\nimport torch.nn as nn\nclass SimpleNet(nn.Module):\n    # Initialize layers here',
              expected_behavior: 'Instantiating SimpleNet configures input-output layer matrices correctly.',
              hints: [
                'Use nn.Linear(input_dim, output_dim) inside the constructor.'
              ],
              solution_explanation: 'nn.Linear sets up weight and bias parameters, mapping input values to outputs.'
            }
          },
          {
            _id: '65c1f0060000000000000052',
            title: 'Model Layers & Optimizers',
            slug: 'model-layers-optimizers',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Neural networks stack layers of neurons. Optimizers (e.g. SGD, Adam) update model parameters using calculated gradients to minimize loss.',
            key_takeaways: [
              'Linear layers apply matrix multiplications with weights and biases.',
              'Adam is an optimizer that dynamically adjusts learning rates for each parameter.',
              'zero_grad() resets accumulated gradients before each backward pass.'
            ],
            practice_task: {
              title: 'Reset gradients in training step',
              description: 'Identify the command used to reset gradients inside a training loop step.',
              hint: 'Call optimizer.zero_grad().'
            },
            resources: [
              { title: 'PyTorch Optimizers documentation', url: 'https://pytorch.org/docs/stable/optim.html' }
            ],
            build_challenge: {
              title: 'Assemble optimizer config',
              description: 'Create an Adam optimizer in PyTorch and configure the target model parameters and learning rate.',
              difficulty: 'Beginner',
              estimated_time: '10 minutes',
              skills: ['PyTorch', 'Optimizers', 'Training config'],
              requirements: [
                'Instantiate PyTorch model.',
                'Configure torch.optim.Adam.',
                'Set learning rate parameter to 0.001.'
              ],
              starter_code: 'import torch.optim as optim\n# Initialize model and Adam optimizer',
              expected_behavior: 'Optimizer initializes, linking to model weights and biases.',
              hints: [
                'Pass model.parameters() as the first input when instantiating the optimizer.'
              ],
              solution_explanation: 'Optimizers adjust model parameters using calculated gradients to minimize loss.'
            }
          },
          {
            _id: '65c1f0060000000000000053',
            title: 'Training Loops',
            slug: 'training-loops-pytorch',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'A training loop is the process of feeding datasets into models, calculating loss, backpropagating gradients, and updating parameters over multiple epochs.',
            key_takeaways: [
              'Forward pass: calculate model predictions from inputs.',
              'Backward pass: compute gradients of the loss function.',
              'Step: update parameters using the optimizer.'
            ],
            practice_task: {
              title: 'Identify training step order',
              description: 'List the four core steps inside a training loop in order.',
              hint: 'Reset gradients, forward pass, calculate loss, backward pass, optimizer step.'
            },
            resources: [
              { title: 'PyTorch Docs: Training a Classifier', url: 'https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html' }
            ],
            build_challenge: {
              title: 'Implement PyTorch Training Loop Step',
              description: 'Write a single training step function in PyTorch.',
              difficulty: 'Intermediate',
              estimated_time: '20 minutes',
              skills: ['PyTorch', 'Training Loops', 'Algorithms'],
              requirements: [
                'Reset optimizer gradients.',
                'Calculate model outputs from input features.',
                'Compute loss using target labels.',
                'Execute backward pass and update parameters.'
              ],
              starter_code: 'def train_step(model, optimizer, criterion, inputs, targets):\n    # Implement training step',
              expected_behavior: 'Executing training steps updates weights, reducing loss values.',
              hints: [
                'Order matters: call loss.backward() before optimizer.step().'
              ],
              solution_explanation: 'Resetting gradients prevents them from accumulating across training steps.'
            }
          }
        ]
      },
      {
        _id: '65c1f0030000000000000006',
        title: 'Mini Project',
        slug: 'nn-mini-project',
        description: 'Apply all concepts to prepare dataset, define model, and evaluate an image classification model.',
        order: 6,
        total_lessons: 2,
        estimated_minutes: 90,
        icon: 'Award',
        lessons: [
          {
            _id: '65c1f0060000000000000061',
            title: 'Image Dataset Loading',
            slug: 'image-dataset-loading-transforms',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 30,
            description: 'Image classification models process image pixels. We set up loaders to download datasets (FashionMNIST), apply transforms to normalize pixels, and prepare mini-batches.',
            key_takeaways: [
              'Transforms convert raw images to PyTorch tensors and normalize values.',
              'DataLoaders handle batching and dataset shuffling.',
              'MNIST datasets contain grayscale images of handwriting or clothing.'
            ],
            practice_task: {
              title: 'Define PyTorch image transforms',
              description: 'Create a transform pipeline that converts images to tensors and normalizes values.',
              hint: 'Use torchvision.transforms.Compose.'
            },
            resources: [
              { title: 'Torchvision Transforms guide', url: 'https://pytorch.org/vision/stable/transforms.html' }
            ],
            build_challenge: {
              title: 'Build PyTorch DataLoader',
              description: 'Instantiate a DataLoader in PyTorch to batch and shuffle datasets.',
              difficulty: 'Intermediate',
              estimated_time: '20 minutes',
              skills: ['PyTorch', 'DataLoader', 'Data Prep'],
              requirements: [
                'Create a dataset object (e.g. MNIST).',
                'Instantiate torch.utils.data.DataLoader.',
                'Configure batch size to 64 and enable shuffling.'
              ],
              starter_code: 'from torch.utils.data import DataLoader\n# Create data loader instance',
              expected_behavior: 'DataLoader generates batches of inputs and targets correctly.',
              hints: [
                'Set shuffle=True to prevent batch ordering bias.'
              ],
              solution_explanation: 'DataLoaders abstract batching and shuffling details, offering clean iterators for training loops.'
            }
          },
          {
            _id: '65c1f0060000000000000062',
            title: 'Image Model Training & Validation',
            slug: 'image-model-training-validation-loop',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 60,
            description: 'The final step is training the model on the image dataset, tracking training loss, and evaluating performance on the testing dataset.',
            key_takeaways: [
              'validation loops run in evaluation mode: model.eval().',
              'Disable gradient calculation during evaluation using torch.no_grad().',
              'Evaluate performance by calculating final accuracy percentage.'
            ],
            practice_task: {
              title: 'Write validation loop evaluation trigger',
              description: 'Identify the context block used to disable gradient updates in PyTorch.',
              hint: 'Wrap validation steps inside a "with torch.no_grad():" block.'
            },
            resources: [
              { title: 'PyTorch validation tutorials', url: 'https://pytorch.org/tutorials/beginner/introyt/trainingyt.html' }
            ],
            build_challenge: {
              title: 'Build Image Classification Model',
              description: 'Write the neural network architecture and training script to classify FashionMNIST images.',
              difficulty: 'Advanced',
              estimated_time: '45 minutes',
              skills: ['PyTorch', 'Deep Learning', 'Computer Vision'],
              requirements: [
                'Define a neural network class with input 784, hidden 128, output 10 dims.',
                'Implement training loop over 3 epochs.',
                'Calculate and print final testing accuracy.',
                'Verify accuracy exceeds 80%.'
              ],
              starter_code: 'import torch\nimport torch.nn as nn\n# Build and train classification model',
              expected_behavior: 'Model training runs, decreasing training loss and showing accurate validation performance.',
              hints: [
                'Flatten 28x28 images to 784-element vectors before passing them to linear layers.'
              ],
              solution_explanation: 'Evaluating models on unseen testing data confirms they generalize well instead of overfitting training sets.'
            }
          }
        ]
      }
    ]
  },
  {
    path: {
      _id: '65c1f0010000000000000003',
      title: 'Graph Algorithms',
      slug: 'graph-algorithms',
      description: 'Traversals, shortest paths, and network flows implemented in Python.',
      icon: 'Network',
      total_lessons: 17,
      estimated_hours: 18,
      is_published: true
    },
    modules: [
      {
        _id: '65c1f0040000000000000001',
        title: 'Graph Fundamentals',
        slug: 'graph-fundamentals',
        description: 'Understand vertices, edges, adjacencies, directed/undirected topologies, and weighted graph representations.',
        order: 1,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Network',
        lessons: [
          {
            _id: '65c1f0070000000000000011',
            title: 'What is a Graph?',
            slug: 'what-is-a-graph-vertices-edges',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'A graph is a non-linear data structure consisting of vertices (nodes) connected by edges (links). Graphs are used to model networks (e.g. social networks, flight paths, street maps).',
            key_takeaways: [
              'Vertices represent entities; edges represent connections.',
              'Directed: edges have a direction (e.g. X -> Y).',
              'Undirected: edges are bidirectional (e.g. X - Y).'
            ],
            practice_task: {
              title: 'Identify graph elements',
              description: 'For a graph with vertices {A, B, C} and edges {(A,B), (B,C)}, count the total vertices and edges.',
              hint: 'Count the items in each set.'
            },
            resources: [
              { title: 'Intro to Graphs - GeeksForGeeks', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' }
            ],
            build_challenge: {
              title: 'Build Adjacency Matrix',
              description: 'Implement a function in plain JS that creates an adjacency matrix representation of a graph.',
              difficulty: 'Beginner',
              estimated_time: '15 minutes',
              skills: ['Graphs', 'Matrix', 'Plain JS'],
              requirements: [
                'Create buildAdjacencyMatrix(numVertices, edges) function.',
                'Initialize a 2D grid of size V x V with zeros.',
                'For each edge (u, v), set grid[u][v] = 1 (and grid[v][u] = 1 if undirected).',
                'Return the 2D array.'
              ],
              starter_code: 'export function buildAdjacencyMatrix(vCount, edges, directed = false) {\n  // Create V x V grid\n}',
              expected_behavior: 'Correctly outputs matrix grids (e.g. 3 vertices and edge (0,1) returns [[0,1,0],[1,0,0],[0,0,0]]).',
              hints: [
                'Use Array.from() to initialize the 2D grid: Array.from({length: V}, () => Array(V).fill(0)).'
              ],
              solution_explanation: 'Adjacency matrices support fast edge checks, but require O(V^2) memory storage.'
            }
          },
          {
            _id: '65c1f0070000000000000012',
            title: 'Graph Representations',
            slug: 'graph-representations-matrix-list',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Graphs are represented as Adjacency Matrices (2D grids) or Adjacency Lists (arrays of edge lists). Adjacency lists are more space-efficient for sparse graphs.',
            key_takeaways: [
              'Adjacency Matrix uses O(V^2) space, which is inefficient for sparse graphs.',
              'Adjacency List uses O(V + E) space, making it ideal for sparse graphs.',
              'Lists make it fast to iterate through a vertex\'s neighbors.'
            ],
            practice_task: {
              title: 'Convert Matrix to List',
              description: 'Convert the matrix [[0,1],[1,0]] to an adjacency list.',
              hint: 'Find row indices containing 1s.'
            },
            resources: [
              { title: 'Graph Representations guide', url: 'https://www.geeksforgeeks.org/graph-and-its-representations/' }
            ],
            build_challenge: {
              title: 'Build Adjacency List',
              description: 'Implement a function that builds an adjacency list from a set of vertices and edges.',
              difficulty: 'Beginner',
              estimated_time: '15 minutes',
              skills: ['Graphs', 'Adjacency List', 'Plain JS'],
              requirements: [
                'Create buildAdjacencyList(numVertices, edges) function.',
                'Initialize an array or map containing vertex lists.',
                'Append neighbors to neighbor lists for each edge.',
                'Return the representation.'
              ],
              starter_code: 'export function buildAdjacencyList(vCount, edges, directed = false) {\n  // Build adj list\n}',
              expected_behavior: '3 vertices and edge (0, 1) returns {0: [1], 1: [0], 2: []}.',
              hints: [
                'Initialize list arrays for each vertex index using loops.'
              ],
              solution_explanation: 'Adjacency lists are space-efficient, especially for sparse real-world networks (e.g. road maps).'
            }
          },
          {
            _id: '65c1f0070000000000000013',
            title: 'Weighted Graphs',
            slug: 'weighted-graphs-weights',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Weighted graphs associate numerical values (weights) with edges. Weights can represent cost, distance, or time (e.g., flight ticket price or routing distance).',
            key_takeaways: [
              'Weighted edges are represented as (u, v, weight).',
              'Used in routing optimization algorithms (e.g., Dijkstra).',
              'Negative weights require algorithms like Bellman-Ford.'
            ],
            practice_task: {
              title: 'Calculate Path Weight',
              description: 'Given path A-B-C with weights A-B: 5 and B-C: 10, calculate the total weight.',
              hint: 'Sum the edge weights.'
            },
            resources: [
              { title: 'Weighted Graphs guide', url: 'https://en.wikipedia.org/wiki/Weighted_graph' }
            ],
            build_challenge: {
              title: 'Weighted Adjacency List Builder',
              description: 'Build an adjacency list that stores weights alongside neighbor indices.',
              difficulty: 'Intermediate',
              estimated_time: '20 minutes',
              skills: ['Graphs', 'Weighted Graph', 'Plain JS'],
              requirements: [
                'Accept weighted edges array: [[u, v, w], ...].',
                'Append objects containing { node, weight } properties to neighbor lists.',
                'Return the adjacency list.'
              ],
              starter_code: 'export function buildWeightedAdjacencyList(vCount, edges) {\n  // Build weighted list\n}',
              expected_behavior: 'Edge [0, 1, 15] returns adjacency map containing { 0: [{ node: 1, weight: 15 }] }.',
              hints: [
                'Store neighbors as objects: { node: neighbor, weight: edgeWeight }.'
              ],
              solution_explanation: 'Storing weights inside adjacency lists enables algorithms to query edge costs efficiently.'
            }
          }
        ]
      },
      {
        _id: '65c1f0040000000000000002',
        title: 'Graph Traversal',
        slug: 'graph-traversal',
        description: 'Explore fundamental search algorithms BFS and DFS, cycle detection, and connectivity patterns.',
        order: 2,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Compass',
        lessons: [
          {
            _id: '65c1f0070000000000000021',
            title: 'Breadth-First Search (BFS)',
            slug: 'breadth-first-search-bfs',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Breadth-First Search (BFS) is a graph traversal algorithm that visits all neighbor nodes at the current depth before moving to the next level. It uses a queue (FIFO) and is ideal for finding shortest paths in unweighted graphs.',
            key_takeaways: [
              'BFS uses a queue data structure to manage visited order.',
              'Tracks visited vertices to avoid infinite loops.',
              'Guarantees finding shortest paths in unweighted graphs.'
            ],
            practice_task: {
              title: 'Perform BFS traversal',
              description: 'Perform BFS starting from node A. Neighbors of A are {B, C}, neighbor of B is {D}. List the visited order.',
              hint: 'Process all neighbors of the current level first: A, B, C, D.'
            },
            resources: [
              { title: 'BFS visualization - VisuAlgo', url: 'https://visualgo.net/en/dfsbfs' }
            ],
            build_challenge: {
              title: 'Implement BFS Traversal',
              description: 'Write a BFS traversal function in plain JS returning the visited node list.',
              difficulty: 'Intermediate',
              estimated_time: '25 minutes',
              skills: ['Graphs', 'BFS', 'Algorithms'],
              requirements: [
                'Create bfs(adjList, startNode) function.',
                'Maintain visited set and FIFO queue.',
                'Traverse neighbor nodes level-by-level.',
                'Return array of visited nodes in order.'
              ],
              starter_code: 'export function bfs(adjList, start) {\n  const visited = new Set();\n  const queue = [start];\n  const result = [];\n  // Traverse\n}',
              expected_behavior: 'Returns level-ordered arrays (e.g. visiting graph with A-B, A-C returns A, B, C).',
              hints: [
                'Use shift() on array queues to pop items from the front (FIFO).'
              ],
              solution_explanation: 'Queues maintain the level-by-level order of node visits in BFS traversals.'
            }
          },
          {
            _id: '65c1f0070000000000000022',
            title: 'Depth-First Search (DFS)',
            slug: 'depth-first-search-dfs',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Depth-First Search (DFS) is a graph traversal algorithm that explores as deep as possible along each branch before backtracking. It uses recursion or a stack (LIFO) and is commonly used for topological sorting.',
            key_takeaways: [
              'DFS uses recursion (the call stack) or an explicit stack data structure.',
              'Explores deep branches before visiting sibling branches.',
              'Tracks visited nodes using sets to prevent infinite loops.'
            ],
            practice_task: {
              title: 'Perform DFS traversal',
              description: 'Perform DFS starting from node A. A links to B, B links to C. A also links to D.',
              hint: 'Explore as deep as possible before backtracking: A, B, C, D.'
            },
            resources: [
              { title: 'DFS on GeeksForGeeks', url: 'https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/' }
            ],
            build_challenge: {
              title: 'Implement Recursive DFS',
              description: 'Write a recursive DFS traversal function in plain JS returning the visited node list.',
              difficulty: 'Intermediate',
              estimated_time: '25 minutes',
              skills: ['Graphs', 'DFS', 'Algorithms'],
              requirements: [
                'Create dfs(adjList, startNode) function.',
                'Implement recursive helper function.',
                'Track visited nodes to prevent duplicate visits.',
                'Return array of visited nodes in order.'
              ],
              starter_code: 'export function dfs(adjList, start) {\n  const visited = new Set();\n  const result = [];\n  // Recursive function here\n}',
              expected_behavior: 'Returns visited nodes in depth-first order.',
              hints: [
                'Base case: if node is visited, return immediately.'
              ],
              solution_explanation: 'Recursion processes the deepest unvisited neighbor nodes first, backtracking automatically when reaching dead ends.'
            }
          },
          {
            _id: '65c1f0070000000000000023',
            title: 'Cycle Detection',
            slug: 'cycle-detection-graphs',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Cycle detection determines if a graph contains a closed loop (a path starting and ending at the same node). Cycles can cause infinite loops in algorithms.',
            key_takeaways: [
              'Undirected: check if we visit an already-visited node that is not the parent.',
              'Directed: check for back-edges using recursion stack states.',
              'Used in deadlocks detection in OS schedulers.'
            ],
            practice_task: {
              title: 'Check for cycle manually',
              description: 'Does a graph with edges A-B, B-C, C-A contain a cycle?',
              hint: 'Trace the path: A -> B -> C -> A returns to A.'
            },
            resources: [
              { title: 'Cycle detection algorithms', url: 'https://www.geeksforgeeks.org/detect-cycle-in-a-graph/' }
            ],
            build_challenge: {
              title: 'Detect Cycle in Undirected Graph',
              description: 'Write a function in plain JS to detect a cycle in an undirected graph.',
              difficulty: 'Advanced',
              estimated_time: '30 minutes',
              skills: ['Graphs', 'DFS', 'Cycle Detection'],
              requirements: [
                'Create hasCycle(adjList, numVertices) function.',
                'Use DFS to traverse the graph.',
                'Check if a visited neighbor is not the immediate parent.',
                'Return true if a cycle is found, else false.'
              ],
              starter_code: 'export function hasCycle(adjList, vCount) {\n  const visited = new Set();\n  // Run DFS checking parent nodes\n}',
              expected_behavior: 'Returns true for looped graphs, and false for trees.',
              hints: [
                'Pass the parent node index down through recursive parameters: dfsHelper(node, parent).'
              ],
              solution_explanation: 'Visiting a previously visited node that is not the parent indicates the presence of a loop/cycle.'
            }
          }
        ]
      },
      {
        _id: '65c1f0040000000000000003',
        title: 'Shortest Path Algorithms',
        slug: 'shortest-path-algorithms',
        description: 'Explore Dijkstra, Bellman-Ford, negative weights, and routing applications.',
        order: 3,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'MapPin',
        lessons: [
          {
            _id: '65c1f0070000000000000031',
            title: 'Dijkstra\'s Algorithm',
            slug: 'dijkstras-shortest-path-algorithm',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Dijkstra\'s algorithm finds the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights. It uses a greedy approach and a priority queue.',
            key_takeaways: [
              'Greedy algorithm: always selects the closest unvisited node.',
              'Uses priority queues to quickly select the node with the minimum distance.',
              'Fails on graphs with negative edge weights.'
            ],
            practice_task: {
              title: 'Perform Dijkstra step',
              description: 'Given source A, distance to B is 4, distance to C is 2. B links to D with weight 3, C links to D with weight 1. Find the shortest distance to D.',
              hint: 'A-B-D: 4+3=7. A-C-D: 2+1=3.'
            },
            resources: [
              { title: 'Dijkstra\'s Algorithm visualization', url: 'https://visualgo.net/en/sssp' }
            ],
            build_challenge: {
              title: 'Implement Dijkstra\'s Algorithm',
              description: 'Write a basic Dijkstra function in plain JS to find the shortest path distances from a source node.',
              difficulty: 'Advanced',
              estimated_time: '35 minutes',
              skills: ['Graphs', 'Dijkstra', 'Algorithms'],
              requirements: [
                'Create dijkstra(adjList, startNode) function.',
                'Initialize distances to all nodes as Infinity, and startNode as 0.',
                'Greedily select the unvisited node with the smallest distance.',
                'Update neighbor distances (relax edges).',
                'Return a distance map object.'
              ],
              starter_code: 'export function dijkstra(adjList, start) {\n  const distances = {};\n  const visited = new Set();\n  // Initialize and relax edges\n}',
              expected_behavior: 'Returns the correct shortest distance values from the source node.',
              hints: [
                'Loop through unvisited nodes to find the minimum distance node when not using an explicit priority queue.'
              ],
              solution_explanation: 'Dijkstra\'s algorithm greedily expands paths from the source, guaranteeing shortest distances in non-negative weighted graphs.'
            }
          },
          {
            _id: '65c1f0070000000000000032',
            title: 'Bellman-Ford Algorithm',
            slug: 'bellman-ford-algorithm',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'The Bellman-Ford algorithm finds the shortest path from a single source node to all other nodes in a weighted graph. Unlike Dijkstra, it supports negative edge weights and can detect negative cycles.',
            key_takeaways: [
              'Relaxes all edges V-1 times.',
              'Negative cycle detection: if a distance shrinks on the V-th pass, a negative cycle exists.',
              'Slower than Dijkstra, running in O(V * E) time.'
            ],
            practice_task: {
              title: 'Detect negative cycles',
              description: 'Explain why a negative cycle prevents finding the shortest path.',
              hint: 'You can loop through the negative cycle infinitely to decrease the path cost to -Infinity.'
            },
            resources: [
              { title: 'Bellman-Ford Algorithm - GeeksForGeeks', url: 'https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/' }
            ],
            build_challenge: {
              title: 'Implement Bellman-Ford',
              description: 'Write a Bellman-Ford function in plain JS that finds shortest paths and detects negative cycles.',
              difficulty: 'Advanced',
              estimated_time: '30 minutes',
              skills: ['Graphs', 'Bellman-Ford', 'Algorithms'],
              requirements: [
                'Create bellmanFord(vCount, edges, start) function.',
                'Relax edges V-1 times.',
                'Perform a final pass to check for negative cycles.',
                'Return distances or throw an error if a negative cycle is found.'
              ],
              starter_code: 'export function bellmanFord(vCount, edges, start) {\n  const dist = Array(vCount).fill(Infinity);\n  dist[start] = 0;\n  // Relax V-1 times\n}',
              expected_behavior: 'Calculates shortest paths correctly, and throws an error if negative cycles are present.',
              hints: [
                'Weighted edges are formatted as [u, v, weight] lists.'
              ],
              solution_explanation: 'Relaxing all edges V-1 times guarantees finding shortest paths, as a simple path can contain at most V-1 edges.'
            }
          },
          {
            _id: '65c1f0070000000000000033',
            title: 'Shortest Path Applications',
            slug: 'shortest-path-applications',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Shortest path algorithms are critical for real-world systems. They power GPS navigation systems, network routing protocols (like OSPF), and pathfinding in video games.',
            key_takeaways: [
              'Routing protocols route internet packets via shortest paths.',
              'GPS mapping uses Dijkstra variations (like A* search).',
              'Game AI calculates character movements using pathfinders.'
            ],
            practice_task: {
              title: 'Map routing costs',
              description: 'Explain how GPS routers use edge weights to avoid traffic jams.',
              hint: 'Traffic delays increase edge weights (travel time), forcing algorithms to route around them.'
            },
            resources: [
              { title: 'Routing Protocols overview', url: 'https://en.wikipedia.org/wiki/Routing_protocol' }
            ],
            build_challenge: {
              title: 'Network Packet Route Finder',
              description: 'Find the path with the minimum delay using Dijkstra\'s algorithm.',
              difficulty: 'Intermediate',
              estimated_time: '20 minutes',
              skills: ['Graphs', 'Dijkstra', 'Networking'],
              requirements: [
                'Model network routers as vertices and connections as weighted edges.',
                'Find the path with the minimum delay from source to destination.',
                'Return the sequence of router hops.'
              ],
              starter_code: 'export function findPacketRoute(adjList, src, dest) {\n  // Implement path reconstruction\n}',
              expected_behavior: 'Returns the list of nodes visited in order (e.g. [0, 2, 3]).',
              hints: [
                'Track the predecessor of each node during relaxation: parent[v] = u.'
              ],
              solution_explanation: 'Backtracking from the destination to the source using parent pointers reconstructs the shortest path.'
            }
          }
        ]
      },
      {
        _id: '65c1f0040000000000000004',
        title: 'Minimum Spanning Trees',
        slug: 'minimum-spanning-trees',
        description: 'Understand spanning trees, Prim\'s and Kruskal\'s algorithms, and Disjoint Set Union (DSU) structures.',
        order: 4,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Workflow',
        lessons: [
          {
            _id: '65c1f0070000000000000041',
            title: 'Minimum Spanning Trees Concept',
            slug: 'minimum-spanning-tree-concept',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'A Spanning Tree of a connected graph is a subgraph that contains all vertices connected by the minimum number of edges (V-1), without any cycles. A Minimum Spanning Tree (MST) is the spanning tree with the minimum total edge weight.',
            key_takeaways: [
              'An MST contains all V vertices connected by V-1 edges.',
              'Contains no cycles (is a tree).',
              'Used to design networks with minimum cabling cost.'
            ],
            practice_task: {
              title: 'Count edges in Spanning Tree',
              description: 'For a graph with 6 vertices, find the number of edges in its spanning tree.',
              hint: 'Edges = V - 1.'
            },
            resources: [
              { title: 'MST - VisuAlgo', url: 'https://visualgo.net/en/mst' }
            ],
            build_challenge: {
              title: 'Verify Spanning Tree Properties',
              description: 'Write a helper function to verify if a set of edges forms a valid spanning tree (connected and cycle-free).',
              difficulty: 'Intermediate',
              estimated_time: '20 minutes',
              skills: ['Graphs', 'Spanning Tree', 'Algorithms'],
              requirements: [
                'Accept vertices count and edges list.',
                'Check if edge count is V-1.',
                'Verify all vertices are connected using BFS/DFS.',
                'Return true if valid, else false.'
              ],
              starter_code: 'export function isValidSpanningTree(vCount, edges) {\n  // Check connectivity and V-1 edges\n}',
              expected_behavior: 'Returns true for valid trees, and false if disconnected or looped.',
              hints: [
                'If a graph has V vertices, V-1 edges, and is connected, it is guaranteed to be cycle-free.'
              ],
              solution_explanation: 'Spanning trees connect all nodes with the minimum number of edges.'
            }
          },
          {
            _id: '65c1f0070000000000000042',
            title: 'Prim\'s Algorithm',
            slug: 'prims-mst-algorithm',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Prim\'s algorithm is a greedy algorithm that builds a Minimum Spanning Tree (MST) from a starting vertex. It repeatedly adds the cheapest edge connecting an unvisited vertex to the growing MST.',
            key_takeaways: [
              'Starts from an arbitrary starting vertex.',
              'Greedily selects the cheapest edge connecting visited nodes to unvisited nodes.',
              'Ideal for dense graphs.'
            ],
            practice_task: {
              title: 'Trace Prim\'s algorithm steps',
              description: 'Start Prim\'s at node 0. Neighbors are 1 (weight 4) and 2 (weight 2). Select the next vertex to add.',
              hint: 'Select the cheapest edge connecting to an unvisited node: vertex 2 (weight 2).'
            },
            resources: [
              { title: 'Prim\'s Algorithm - GeeksForGeeks', url: 'https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/' }
            ],
            build_challenge: {
              title: 'Implement Prim\'s Algorithm',
              description: 'Write Prim\'s algorithm in plain JS to find the total weight of the MST.',
              difficulty: 'Advanced',
              estimated_time: '30 minutes',
              skills: ['Graphs', 'Prim\'s', 'MST'],
              requirements: [
                'Create primMst(vCount, adjList) function.',
                'Start from vertex 0.',
                'Repeatedly find the cheapest edge connecting visited nodes to unvisited nodes.',
                'Return the total weight of the MST.'
              ],
              starter_code: 'export function primMst(vCount, adjList) {\n  const visited = new Set();\n  let totalWeight = 0;\n  // Build MST\n}',
              expected_behavior: 'Returns the minimum weight sum (e.g. triangle graph weights 1, 2, 3 returns MST weight 3).',
              hints: [
                'Store active edges in an array list to find the minimum weight connector.'
              ],
              solution_explanation: 'Prim\'s algorithm grows the MST vertex-by-vertex, selecting the cheapest cut edge at each step.'
            }
          },
          {
            _id: '65c1f0070000000000000043',
            title: 'Kruskal\'s Algorithm & Union Find',
            slug: 'kruskals-algorithm-union-find',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Kruskal\'s algorithm is a greedy algorithm that builds a Minimum Spanning Tree (MST) by sorting all edges by weight and adding them one-by-one, skipping edges that create cycles. It uses the Disjoint Set Union (DSU) data structure.',
            key_takeaways: [
              'Sorts all edges in non-decreasing order of weight.',
              'DSU (Union-Find) is used to detect cycles in O(log V) time.',
              'Ideal for sparse graphs.'
            ],
            practice_task: {
              title: 'Trace Kruskal\'s step',
              description: 'Sort edges with weights: A-B (1), C-D (2), B-C (3), A-C (4). Which edges are added in order?',
              hint: 'Add A-B, then C-D, then B-C. Skip A-C as it creates cycle A-B-C-A.'
            },
            resources: [
              { title: 'Union-Find (DSU) guide', url: 'https://visualgo.net/en/ufds' }
            ],
            build_challenge: {
              title: 'Implement Union Find / DSU',
              description: 'Implement a Disjoint Set Union (DSU) data structure with path compression in plain JS.',
              difficulty: 'Advanced',
              estimated_time: '25 minutes',
              skills: ['DSU', 'Union-Find', 'Data Structures'],
              requirements: [
                'Create a DisjointSet class.',
                'Implement find(x) with path compression.',
                'Implement union(x, y) to merge sets.',
                'Verify cycle detection checks.'
              ],
              starter_code: 'export class DisjointSet {\n  constructor(n) {\n    this.parent = Array.from({length: n}, (_, i) => i);\n  }\n  // Implement find and union\n}',
              expected_behavior: 'Unioning (0,1) and then finding parent returns same root.',
              hints: [
                'Path compression: set parent[x] = find(parent[x]) inside find recursively.'
              ],
              solution_explanation: 'Path compression flattens the DSU tree structure, making union and find operations run in nearly O(1) time.'
            }
          }
        ]
      },
      {
        _id: '65c1f0040000000000000005',
        title: 'Advanced Graph Algorithms',
        slug: 'advanced-graph-algorithms',
        description: 'Explore topological sorting in DAGs, finding strongly connected components, and graph coloring.',
        order: 5,
        total_lessons: 3,
        estimated_minutes: 60,
        icon: 'Layers',
        lessons: [
          {
            _id: '65c1f0070000000000000051',
            title: 'Topological Sorting',
            slug: 'topological-sorting-kahn-algorithm',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'Topological sorting of a Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v. It is commonly used for task scheduling.',
            key_takeaways: [
              'Only possible for Directed Acyclic Graphs (DAGs).',
              'Kahn\'s algorithm uses in-degree arrays and queues (BFS).',
              'Used to resolve compiler file compilation dependencies.'
            ],
            practice_task: {
              title: 'Perform Topological sort',
              description: 'Sort dependency graph: A -> B, A -> C, B -> D, C -> D.',
              hint: 'Start with node of in-degree 0: A, B, C, D (or A, C, B, D).'
            },
            resources: [
              { title: 'Topological Sorting - Kahn\'s Algorithm', url: 'https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/' }
            ],
            build_challenge: {
              title: 'Implement Kahn\'s Algorithm',
              description: 'Write Kahn\'s algorithm in plain JS to perform topological sorting.',
              difficulty: 'Advanced',
              estimated_time: '30 minutes',
              skills: ['Graphs', 'BFS', 'Topological Sort'],
              requirements: [
                'Create topologicalSort(vCount, edges) function.',
                'Calculate in-degree array for all vertices.',
                'Enqueue vertices with in-degree 0.',
                'Repeatedly pop vertex, add to sort list, and decrement neighbor in-degrees.',
                'Throw error if graph contains cycles (cannot sort).'
              ],
              starter_code: 'export function topologicalSort(vCount, edges) {\n  const inDegree = Array(vCount).fill(0);\n  const queue = [];\n  // Compute in-degrees\n}',
              expected_behavior: 'Returns dependency order list, or throws error if cycle detected.',
              hints: [
                'If the topological sort list length is less than V, the graph contains a cycle.'
              ],
              solution_explanation: 'Decrementing neighbor in-degrees simulates removing the vertex and its outgoing edges from the graph.'
            }
          },
          {
            _id: '65c1f0070000000000000052',
            title: 'Strongly Connected Components',
            slug: 'strongly-connected-components-scc',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'A Strongly Connected Component (SCC) of a directed graph is a maximal subgraph where every vertex is reachable from every other vertex in the subgraph.',
            key_takeaways: [
              'reachable in both directions (u -> v and v -> u).',
              'Kosaraju\'s algorithm uses two passes of DFS and graph transposition.',
              'Tarjan\'s algorithm uses a single DFS pass with low-link values.'
            ],
            practice_task: {
              title: 'Find SCC elements',
              description: 'Identify the SCCs in graph: A -> B -> C -> A. C also links to D.',
              hint: 'A, B, C are mutually reachable (SCC 1); D is isolated (SCC 2).'
            },
            resources: [
              { title: 'Kosaraju\'s Algorithm', url: 'https://www.geeksforgeeks.org/strongly-connected-components/' }
            ],
            build_challenge: {
              title: 'Graph Transposer',
              description: 'Write a helper function to transpose a directed graph (reverse all edge directions).',
              difficulty: 'Beginner',
              estimated_time: '15 minutes',
              skills: ['Graphs', 'Transposition', 'Plain JS'],
              requirements: [
                'Accept an adjacency list representation.',
                'Reverse all edge directions (u -> v becomes v -> u).',
                'Return transposed adjacency list.'
              ],
              starter_code: 'export function transposeGraph(adjList) {\n  // Reverse edges\n}',
              expected_behavior: 'Graph { 0: [1] } transposes to { 1: [0] }.',
              hints: [
                'Initialize an empty adjacency list of size V before copying edges.'
              ],
              solution_explanation: 'Transposing graphs reverses reachability, which is a key step in Kosaraju\'s SCC algorithm.'
            }
          },
          {
            _id: '65c1f0070000000000000053',
            title: 'Bipartite Graphs & Coloring',
            slug: 'bipartite-graphs-coloring',
            order: 3,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 20,
            description: 'A Bipartite Graph is a graph whose vertices can be divided into two independent sets such that no two adjacent vertices belong to the same set (2-colorable).',
            key_takeaways: [
              'A graph is bipartite if and only if it contains no odd-length cycles.',
              'Can be verified using BFS or DFS coloring (alternating colors 0 and 1).',
              'Used to model matching problems (e.g., job candidates to job openings).'
            ],
            practice_task: {
              title: 'Check if bipartite',
              description: 'Is a triangle graph (A-B, B-C, C-A) bipartite?',
              hint: 'Odd length cycle (3) means it is not bipartite.'
            },
            resources: [
              { title: 'Bipartite Graph Coloring guide', url: 'https://www.geeksforgeeks.org/bipartite-graph/' }
            ],
            build_challenge: {
              title: 'Verify Bipartite Graph',
              description: 'Write a bipartite check function in plain JS using BFS coloring.',
              difficulty: 'Advanced',
              estimated_time: '25 minutes',
              skills: ['Graphs', 'BFS', 'Coloring'],
              requirements: [
                'Create isBipartite(adjList) function.',
                'Color nodes using 0 and 1 alternating colors.',
                'Verify that adjacent nodes do not share the same color.',
                'Return true if bipartite, else false.'
              ],
              starter_code: 'export function isBipartite(adjList) {\n  const colors = {};\n  // Color nodes using BFS\n}',
              expected_behavior: 'Returns true for square loops, and false for triangle loops.',
              hints: [
                'Handle disconnected graphs by checking colors of all uncolored vertices in a loop.'
              ],
              solution_explanation: 'Alternating colors during BFS traversal detects if adjacent nodes belong to the same set.'
            }
          }
        ]
      },
      {
        _id: '65c1f0040000000000000006',
        title: 'Mini Project',
        slug: 'graph-mini-project',
        description: 'Implement a route optimization engine using weighted graphs and Dijkstra shortest path solvers.',
        order: 6,
        total_lessons: 2,
        estimated_minutes: 90,
        icon: 'Award',
        lessons: [
          {
            _id: '65c1f0070000000000000061',
            title: 'Route Optimizer Setup',
            slug: 'route-optimizer-graph-creation',
            order: 1,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 30,
            description: 'This mini-project builds a Route Optimization engine. We model map intersections as vertices and streets as weighted edges (distances).',
            key_takeaways: [
              'Vertices represent intersections; edges represent streets.',
              'Weights represent distances or travel times.',
              'Supports adding nodes and querying connections.'
            ],
            practice_task: {
              title: 'Map a small town graph',
              description: 'Create a coordinate graph with 4 intersections and 4 connecting roads.',
              hint: 'Represent as list of vertices and weighted edges.'
            },
            resources: [
              { title: 'Road Routing Networks', url: 'https://en.wikipedia.org/wiki/Shortest_path_problem#Applications' }
            ],
            build_challenge: {
              title: 'Build Route Network Graph',
              description: 'Create a RouteNetwork class to manage weighted intersections.',
              difficulty: 'Intermediate',
              estimated_time: '20 minutes',
              skills: ['Graphs', 'Route Network', 'Plain JS'],
              requirements: [
                'Create a RouteNetwork class.',
                'Implement addIntersection(name) and addRoad(from, to, distance) methods.',
                'Ensure roads are added as undirected connections.',
                'Expose adjacency lists.'
              ],
              starter_code: 'export class RouteNetwork {\n  constructor() {\n    this.adjList = {};\n  }\n  // Implement methods\n}',
              expected_behavior: 'Correctly outputs maps with vertices and weighted edges.',
              hints: [
                'Initialize node arrays in the adjacency map inside addIntersection.'
              ],
              solution_explanation: 'Adjacency lists store intersection coordinates and road lengths, preparing the graph for shortest path queries.'
            }
          },
          {
            _id: '65c1f0070000000000000062',
            title: 'Route Solver Engine',
            slug: 'route-solver-dijkstra',
            order: 2,
            youtube_url: 'https://www.youtube.com/embed/1PnVor36_40',
            youtube_id: '1PnVor36_40',
            duration_minutes: 60,
            description: 'The final step is implementing the Dijkstra solver engine to find the shortest routing path between intersections and reconstruct the route sequence.',
            key_takeaways: [
              'Dijkstra\'s algorithm calculates the shortest route between intersections.',
              'Predecessor tracking reconstructs the exact sequence of intersections.',
              'Edge relaxation updates distances as we find shorter shortcuts.'
            ],
            practice_task: {
              title: 'Trace routing path',
              description: 'Track the predecessor list during relaxation to see how paths are reconstructed.',
              hint: 'Store parent relationships: parent[neighbor] = current.'
            },
            resources: [
              { title: 'Route solvers in action', url: 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm' }
            ],
            build_challenge: {
              title: 'Build Route Solver Engine',
              description: 'Write the route solver engine that finds the shortest path between intersections and returns the route sequence.',
              difficulty: 'Advanced',
              estimated_time: '45 minutes',
              skills: ['Graphs', 'Dijkstra', 'Routing'],
              requirements: [
                'Implement solveRoute(network, start, end) function.',
                'Calculate shortest distances using Dijkstra\'s algorithm.',
                'Reconstruct the path from end to start using parent nodes.',
                'Return object containing path list and total distance.'
              ],
              starter_code: 'export function solveRoute(network, start, end) {\n  // Implement Dijkstra solver with path reconstruction\n}',
              expected_behavior: 'Returns the shortest route sequence and total distance.',
              hints: [
                'Handle edge cases where the destination is unreachable from the start node.'
              ],
              solution_explanation: 'Reconstructing the route by backtracking using parent pointers maps the optimal route sequence.'
            }
          }
        ]
      }
    ]
  }
];

module.exports = extraPathsData;
