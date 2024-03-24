<template>
  <div class="bg-gray-800 px-4 md:px-10 lg:px-20 xl:px-40 py-10 md:py-16">
    <div class="relative mb-5" v-for="(item, index) in items" :key="index">
      <button :class="item.open ? 'rounded-t' : 'rounded'"
        class="relative flex items-center text-md font-semibold w-full px-2 md:px-10 py-7  text-left text-sm md:text-xl transition-all ease-in cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500 bg-white"
        @click="toggleCollapse(item)">
        <span class="w-5/6 md:w-full">{{ item.title }}</span>
        <span class="absolute right-2 md:right-10 transition-all duration-500 ease-in-out delay-500 text-xl"
          v-if="!item.open"><img src="/assets/plus.svg" alt=""></span>
        <span class="absolute right-2 md:right-10 transition-all duration-500 ease-in-out delay-500 text-xl" v-else><img
            src="/assets/minus.svg" alt=""></span>
      </button>
      <div :data-collapse="item.id"
        :class="['h-0 rounded-b  overflow-hidden bg-white', { 'h-auto px-2 md:px-10 pb-10': item.open }]">
        <div class="mt-2 leading-normal bg-gray-200 rounded py-3 px-4 font-light" v-for="(content, idx) in item.contents"
          :key="idx">
          <p>{{ content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { reactive } from 'vue';

const items = reactive([
  {
    id: 'collapse-1',
    title: 'Module 1: Course Introduction',
    contents: [
      "1. Welcome To The Course",
      "2. Course Outline & Projects",
      "3. Premium Docs",
      "4. What Is JavaScript?",
      "5. Tools & Setup",
      "6. Running JavaScript In The Browser",
      "7. Course Links",
    ],
    open: false,
  },
  {
    id: 'collapse-2',
    title: 'How to use Material Tailwind?',
    contents: [
      "1. Section Intro",
      "2. The Sandbox Files",
      "3. Using The Console",
      "4. Comments & Shortcuts",
      "5. Variables & Constants",
      "6. Data Types",
      "7. Primitive vs Reference Types",
      "8. Type Conversion",
      "9. Operators",
      "10. Type Coercion",
      "11. Working With Strings",
      "12. Capitalize Challenge",
      "13. Working With Numbers",
      "14. The Math Object",
      "15. Number Challenge",
      "16. Dates & Times",
      "17. Date Methods & DateTimeFormat API",
    ],
    open: false,
  },
  {
    id: 'collapse-3',
    title: 'What can I do with Material Tailwind?',
    contents: [
      "1. Section Intro",
      "2. Creating Arrays",
      "3. Basic Array Methods",
      "4. Nesting, Concat & The Spread Operator",
      "5. Array Challenges",
      "6. Object Literals",
      "7. Object Spread Operator & Methods",
      "8. Destructuring & Naming",
      "9. JSON Intro",
      "10. Object Challenges",
    ],
    open: false,
  },
  {
    id: 'collapse-4',
    title: 'Module 4: Functions, Scope & Execution Context',
    contents: [
      " 1. Section Intro",
      "2. Creating A Function",
      "3. More on Arguments & Parameters",
      "4. Global & Function Scope",
      "5. Block Scope",
      "6. Nested Scope",
      "7. Declaration vs Expression",
      "8. Arrow Functions",
      "9. Immediately Invoked Function Expressions (IIFE)",
      "10. Function Challenges",
      "11. Execution Context",
      "12. Execution Context In Action",
      "13. The Call Stack",
    ],
    open: false,
  },
  {
    id: 'collapse-5',
    title: 'Module 5: Logic & Control Flow',
    contents: [
      "1. Section Intro",
      "2. If Statements",
      "3. Else-If & Nesting",
      "4. Switches ",
      " 5. Calculator Challenge",
      "6. Truthy & Falsy",
      "7. Logical Operators",
      "8. Logical Assignment",
      " 9. Ternary Operator ",
    ],
    open: false
  },
  {
    id: 'collapse-6',
    title: 'Module 6: Loops, Iteration & High Order Array Methods',
    contents: [
      " 1. Section Intro ",
      " 2. For Loop",
      " 3. Break & Continue",
      " 4. While & Do While ",
      " 5. FizzBuzz Challenge",
      " 6. For...of Loop",
      "7. For...in Loop",
      " 8. Array.forEach Method",
      " 9. Array.filter Method",
      "10. Array.map Method",
      "  11. Array.reduce Method",
      " 12. Array Method Challenges"
    ],
    open: false,
  },
  {
    id: 'collapse-7',
    title: 'Module 7: DOM Manipulation',
    contents: [
      " 1. Section Intro",
      " 2. Intro To The DOM",
      "  3. Document Element Properties",
      " 4. DOM Selectors - Single Elements",
      " 5. DOM Selectors - Multiple Elements",
      " 6. Traversing The DOM - Elements",
      " 7. Traversing The DOM - All Nodes",
      " 8. Create & Append Elements",
      " 9. InnerHTML vs createElement()",
      " 10. Refactor To Multiple Functions",
      " 11. Insert Elements, Text & HTML",
      " 12. Custom insertAfter() Challenge",
      " 13. Replace Elements",
      " 14. Remove Elements",
      "15. Manipulating Styles & Classes",
    ],
    open: false,
  },
  {
    id: 'collapse-8',
    title: 'Module 8: Events',
    contents: [
      " 1. Section Intro",
      " 2. Event Listeners",
      "  3. Mouse Events",
      " 4. The Event Object",
      " 5. Keyboard Events & Key Properties",
      " 6. KeyCode Mini-Project",
      "  7. Input Events",
      " 8. Form Submission & FormData Object",
      " 9. Event Bubbling",
      " 10. Event Delegation & Multiple Events",
      " 11. Page Loading & Window Events",
    ],
    open: false,
  },
  {
    id: 'collapse-9',
    title: 'Module 9: Shopping List Project',
    contents: [
      "1. Section Intro",
      " 2. Add Items To List (DOM Only)",
      " 3. Setting Up Git & Github (Optional)",
      " 4. Remove & Clear Items",
      "  5. Clear UI State",
      " 6. Filter Items",
      "  7. Local Storage Crash Course",
      " 8. Add Items To Local Storage",
      " 9. Display Items From Local Storage",
      " 10. Remove Items From Local Storage",
      " 11. Set Item To Edit",
      " 12. Update Item & Reset State",
      " 13. Prevent Duplicate Items",
      " 14. Deploy To Netlify",
    ],
    open: false,

  },
  {
    id: 'collapse-10',
    title: 'Module 10: Asynchronous JavaScript',
    contents: [
      "  1. Section Intro",
      "  2. Under The Hood: Thread Of Execution",
      "  3. Under The Hood: How Async JS Works",
      "  4. setTimeout & clearTimeout Functions",
      "  5. setInterval & clearInterval Functions",
      "  6. Callbacks",
      "  7. Crash Course On HTTP Requests",
      "  8. DevTools Network Tab",
      "  9. AJAX & XHR Object",
      " 10. Joke Generator Project Challenge",
      " 11. Callback Hell",
      " 12. Promises",
      " 13. Callback To Promise Refactor",
      " 14. Promise Chaining",
      " 15. Promises vs Callback Hell",
      " 16. Handling Multiple Promises with promise.all()",
    ],
    open: false,
  },
  {
    id: 'collapse-11',
    title: 'Module 11: Fetch API & Async Await',
    contents: [
      " 1. Section Intro",
      " 2. Fetch Basics",
      " 3. Random User Mini-Project",
      " 4. Fetch Options - Method, Body Headers",
      " 5. Typicode Todos Mini-Project - Part 1",
      "  6. Typicode Todos Mini-Project - Part 2",
      "  7. Fetch API Error Handling",
      "  8. Async & Await",
      "  9. Try...Catch Statements",
      " 10. Error Handling With Async & Await",
      " 11. Multiple Promises With Async & Await",
    ],
    open: false,
  },
  {
    id: 'collapse-12',
    title: 'Module 12: Flixx Movie App Project',
    contents: [
      "   1. Section Intro",
      "  2. Theme Overview & Prep",
      "  3. API Overview & API Key",
      "  4. Page Router & Active Link",
      "  5. Display Popular Movies",
      "   6. Spinner & Popular TV Shows",
      "  7. Movie Details Page",
      "  8. Details Page Backdrop",
      "  9. TV Show Details Page",
      " 10. Swiper Slider",
      " 11. Search Functionality",
      " 12. Display Search Results",
      " 13. Add Pagination For Search",
    ],
    open: false,
  },
  {
    id: 'collapse-13',
    title: 'Module 13: Web Browser APIs',
    contents: [
      " 1. Section Intro",
      " 2. GeoLocation API",
      " 3. Show Location on a Map",
      "  4. Canvas Element & API",
      "  5. requestAnimationFrame() Method",
      "  6. Animated Clock - Part 1",
      "  7. Animated Clock - Part 2",
      "  8. Web Audio API",
      "  9. Music Player Project",
      "  10. Drum Machine Project",
      "  11. Video API",
      "   12. Video Player Project",
      "   13. Web Animations API - Ball Project",
      "  14. Speech Recognition API - Color Say Project",
      "  15. Speech Synthesis API - Text To Speech",
    ],
    open: false,
  },
  {
    id: 'collapse-14',
    title: ' Module 14: OOP - Constructors & Prototypes',
    contents: [
      "  1. Section Intro",
      "   2. What Is OOP?",
      "  3. Basic Principles of OOP",
      "  4. More on Object Literals & this Keyword",
      "  5. Constructor Functions",
      "   6. Literals vs Built-in Constructors",
      "   7. Working With Object Properties",
      "  8. Prototypes & The Prototype Chain",
      "  9. Adding Methods to the Prototype",
      "  10. Using Object.create()",
      "  11. Prototypical Inheritance & call()",
      "  12. OOP Game Challenge",
    ],
    open: false,

  },
  {
    id: 'collapse-15',
    title: 'Module 15: OOP - Classes, Getters, Setters & Private Properties',
    contents: [

      "  1. Classes",
      "   2. Class Inheritance",
      "   3. Static Methods",
      "   4. bind() & Defining this",
      "   5. Getters & Setters with Classes",
      "   6. Getters & Setters with defineProperty()",
      "   7. Private Property Underscore Convention",
      "   8. ES2022 Private Class Fields",
      "   9. Property Flags & Descriptors",
      "   10. Sealing & Freezing Objects",
    ],
    open: false,

  },

  {
    id: 'collapse-16',
    title: ' Module 16: Tracalorie App (OOP Project)',
    contents: [

      "  1. Project Intro",
      "  2. UI Theme Setup",
      "  3. Project Planning & Diagram",
      "  4. Base Tracker, Meal & Workout Class",
      "  5. Display Tracker Stats",
      "  6. Progress Bar & Calorie Alert",
      "  7. App Class, New Meal & Workout",
      "  8. Refactor to Single _newItem Method",
      "  9. Display New Meal & Workout",
      " 10. Remove Meal & Workout",
      "  11. Filter & Reset",
      "  12. Set Calorie Limit",
      " 13. Storage Class & Calorie Limit Persist",
      " 14. Persist Total Calories To Local Storage",
      "  15. Save Meals To Local Storage",
      " 16. Save Workouts To Local Storage",
      "  17. Remove Meals & Workouts From LocalStorage",
      "  18. Clear Storage Items",
    ],
    open: false,

  },
  {
    id: 'collapse-17',
    title: 'Module 17: Modules & Tooling',
    contents: [

      "  1. Project Intro",
      "  2. What Are Modules?",
      "   3. Installing & Using Node.js",
      " 4. CommonJS Modules",
      "   5. NPM Packages/Modules",
      "   6. ES Modules",
      "  7. Module Bundlers",
      "  8. Webpack Basic Setup",
      "  9. CSS & Style Loaders",
      " 10. HTML Webpack Plugin",
      "  11. Webpack DevServer Plugin",
      "  12. Babel Setup",
      "  13. CSS Minify Extract Plugin",
      "  14. Tracalorie Refactor To Use Webpack",
      "  15. Deploy Tracalorie To Netlify",
    ],
    open: false,

  },
  {
    id: 'collapse-18',
    title: ' Module 18: Iterators, Generators & Data Structures',
    contents: [

      "  1. Section Intro",
      "  2. Symbols",
      " 3. Iterators",
      " 4. Generators",
      " 5. Profile Scroller Project",
      "  6. Sets",
      "  7. Maps",
      "  8. Poll Project",
      "  9. Stacks",
      "  10. Queues",
      "  11. Linked Lists",
    ],
    open: false,

  },
  {
    id: 'collapse-19',
    title: 'Module 19: Unit Testing Algorithms',
    contents: [
      " 1. Intro & What Are Algorithms?",
      " 2. What is Unit Testing?",
      " 3. Getting Started with Jest",
      " 4. Grouping Tests Toge",
      " 5. Reverse String Algorithm",
      " 6. Palindrome Algorithm",
      " 7. Array Chunking",
      "  8. Anagram Algorithm",
      " 9. Get Elements By Tag - jsdom",
      " 10. Has Duplicate IDs - jsdom",
    ],
    open: false,

  },
  {
    id: 'collapse-20',
    title: 'Module 20: Node.js Modules (Bonus Module)',
    contents: [

      " 1. Section Intro", ",",
      " 2. fs (filesystem) Module", ",",
      " 3. path Module", ",",
      " 4. os Module", ",",
      " 5. url & querystring Modules", ",",
      " 6. http Module", ",",
    ],
    open: false,
  },
  {
    id: 'collapse-21',
    title: 'Module 21: RandomIdeas Project - Backend REST API (Bonus Project)',
    contents: [

      " 1. Section Intro",
      "2. Express Setup & Basic API",
      " 3. Nodemon & Route Clean Up",
      " 4. Handle POST Requests - Add Idea",
      " 5. PUT & DELETE Requests - Update & Remove Ideas",
      " 6. What Is MongoDB?",
      " 7. MongoDB Atlas Setup",
      " 8. Mongoose Connect & Dotenv",
      " 9. Mongoose Schema & Model",
      " 10. Database Queries",
    ],
    open: false,
  },
  {
    id: 'collapse-22',
    title: ' Module 22: RandomIdeas Project - Webpack Frontend (Bonus Project)',
    contents: [
      " 1. Fullstack Workflow",
      " 2. Client Folder Setup",
      " 3. Modal Component",
      " 4. IdeaForm Component",
      " 5. IdeaList Component",
      " 6. API Service - Fetch Ideas",
      " 7. Create Idea via Form",
      " 8. Save Username to Local Storage",
      " 9. Add Username Validation To Server",
      " 10. Delete Ideas",
      " 11. Deploying A Fullstack App",
    ],
    open: false,
  },
]);

const toggleCollapse = (item) => {
  item.open = !item.open;
};
</script>
  
<style scoped></style>
  