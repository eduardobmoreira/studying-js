## Summary
This collection of files demonstrates core JavaScript concepts through concise examples. It ranges from basic variable declarations and operators to advanced topics like symbols and object meta-programming. Below is a structured overview of each thematic area and the key files that illustrate them.

## 1. Object-Oriented Programming
- animals.js
Defines a base Animal class and subclasses Lion, Parrot, and Snake, each overriding makeSound(). Demonstrates class syntax, constructor, super(), and method overriding.
- methods.js
Shows object methods using both regular functions and arrow functions. Highlights how this behaves differently, illustrating why arrow methods don’t bind to the object.
- symbol-type.js
Introduces Symbol as unique, non-enumerable property keys. Covers global symbol registry, well-known symbols like Symbol.iterator, and custom iterators in a Range class.

## 2. Functions and Scope
- functions.js
Compares function declarations (function getInfoStudent()) versus missing return statements in division(). Highlights that a missing return yields undefined.
- expression-functions.js
Demonstrates function expressions and hoisting issues when calling a function before its definition.
- arrow-functions.js
Shows arrow function syntax for simple returns and conditional logic in studentFailed().
- this.js
Contrasts this in regular and arrow functions. Uses setTimeout within object methods to reveal lexical this in arrows.
- scope.js
Explains var, let, and const scope rules. Illustrates block scoping with let and global leakage with var.

## 3. Data Types and Operators
- variables.js
Covers primitive types (string, number, boolean, null, undefined, NaN) and type quirks in arithmetic and concatenation.
- number-types.js
Highlights conversion of strings to numbers, NaN detection with Number.isNaN vs isNaN, numeric literals in hexadecimal, binary, and octal, and fixed-point formatting with toFixed().
- boolean-type.js
Shows boolean checks both with explicit comparison and implicit truthiness.
- comparison-operators.js
Explains == vs ===, the ternary operator, nullish coalescing(??), and optional chaining(?.).
- logic-operators.js
Demonstrates &&, ||, ! for control flow, default/fallback values, short-circuiting, and truthy/falsy lists.
- coersion.js
Provides numerous examples of Number(), parseInt(), parseFloat(), unary plus/minus, String(), and common string methods (includes, trim, slice, replace, repeat, split, etc.).
- string-type.js
Uses template literals, single/double quotes, Unicode escapes, and loops to transform a string character by character.

## 4. Collections and Iteration
- arrays.js
Covers array creation, push, pop, length property on sparse arrays, slicing, splicing, concatenation, nested arrays, and loops: for, for…of, and reversed loops with steps and conditions.
- map.js
Transforms arrays with .map(), adjusting grade values and upper-casing names.
- filter.js & filter-student.js
Uses .filter() to select students by grade threshold and to filter based on missing address properties in a JSON list.
- find-student.js
Retrieves the first matching student using .find() given a key and value.
- for-each.js
Aggregates sums using .forEach() with callback functions in both regular and arrow styles.
- reduce.js
Computes averages across multiple “classrooms” of grades via .reduce().
- sort-students.js
Sorts a list of student objects alphabetically by a specified property.
- set.js
Removes duplicates from an array of names by converting to a Set and back.

## 5. Objects and JSON
- objects.js
Defines a person object, dynamic property access, deletion with delete, and Object.defineProperty to create non-configurable properties.
- object-methods.js
Explores Object.keys(), Object.values(), Object.entries(), Object.assign() for shallow merges, and property enumerability via defineProperty.
- data-values.js
Manages nested objects and arrays within a person, adds new addresses, uses Date objects, and explains zero-based month indexing.
- json-import.js
Shows require() for JSON, JSON.stringify()/JSON.parse() for deep cloning, and demonstrates that primitive cloning breaks reference links while object reference copy does not.
- estudantes.json & student.json
Provide sample student datasets—one an array of multiple students with nested phone and address fields, the other a single student object.

## 6. Utilities and Scripts
- summary.js
Reads all files in a directory, concatenates their contents, and writes them into summary.txt. Demonstrates use of fs and path modules, synchronous and asynchronous file operations.

Further Exploration
- Asynchronous JavaScript with Promises, async/await, and error handling patterns.
- Module systems (ESM import/export vs CommonJS require) in Node.js and browsers.
- Testing frameworks like Jest or Mocha to write unit tests for functions and classes.
- Modern build tools (Webpack, Rollup) and transpilation/linters (Babel, ESLint) for production-grade code.

ESM (import/export) vs. CommonJS (require): Which Is Better?
JavaScript’s two dominant module systems—ECMAScript Modules (ESM) and CommonJS—each offer strengths and trade-offs. Below is a detailed comparison to help you decide which fits your project.

## Syntax & Loading
- ESM
- Uses import/export syntax.
- Must declare imports at the top level (static) or use dynamic import() for on-demand loading.
- In Node.js, files end with .mjs or require "type": "module" in package.json.
- CommonJS
- Uses require() and module.exports (or exports.foo).
- Supports conditional or dynamic require() anywhere in code.
- Files are .js by default in Node.js, making adoption seamless for existing codebases.

## Performance & Tooling
| Feature                                           | ESM                                          | CommonJS                        | 
| Loading                                           | Asynchronous (import() returns Promise)      | Synchronous (require() blocks)  | 
| Static Analysis/Tree-Shaking                      | Yes — bundlers remove unused exports         | No — whole module is imported   | 
| Native Browser Support                            | Built-in                                     | Requires bundler (Webpack/Rollup) | 
| Node.js Stability                                 | Stable since v12+, default in v15+           | Mature, battle-tested           | 


- Tree-shaking in ESM can lead to smaller client bundles and faster startup in browsers.
- CommonJS’s synchronous loading is negligible overhead on server side, but impedes tree-shaking and static analysis.

## Ecosystem & Interoperability
- Ecosystem:
- Most modern libraries ship both CJS and ESM builds.
- Front-end frameworks and bundlers optimize for ESM.
- Interoperability:
- ESM→CJS: Default and named exports from CommonJS are exposed as the default export in ESM (dynamic import only).
- CJS→ESM: Use createRequire() or dynamic import() in CJS to load ESM modules.
- Mixed repos may use .cjs for CJS, .mjs for ESM, or "type": "module" to manage defaults.

## When to Choose Which
- Use ESM if
- You target both browser and Node.js and need tree-shaking.
- You want alignment with the JavaScript standard and future-proof code.
- Your build pipeline and dependencies fully support ESM.
- Stick with CommonJS if
- You maintain a large Node.js-only codebase with legacy toolchains.
- You rely on many CJS-only libraries or require dynamic module loading.
- Simplicity and minimal configuration outweigh modern features.

## Recommendation
For new projects, favor ESM:
- Add "type": "module" to your package.json.
- Use import/export throughout.
- Leverage static analysis tools, tree-shaking, and top-level await.
If you’re incrementally migrating an existing CommonJS codebase, you can:
- Rename new files to .mjs.
- Gradually introduce import() and createRequire() for interoperability.
- Use tools like Babel or TypeScript to unify module syntax during build.
Ultimately, ESM aligns with the ECMAScript standard, offers better frontend compatibility, and prepares your code for the future. CommonJS remains excellent for purely server-side, legacy environments where dynamic loading is crucial.


## Truthy vs. Falsy in JavaScript
In JavaScript, every value is either truthy or falsy when evaluated in a boolean context (like an if statement). Understanding which values coerce to true or false helps avoid logic bugs and write clearer code.

# Falsy Values
These values always evaluate to false:
- false
- 0 and -0
- "" (empty string)
- null
- undefined
- NaN
Example:
if (false)       console.log('won’t run');
if (0)           console.log('won’t run');
if ("")          console.log('won’t run');
if (null)        console.log('won’t run');
if (undefined)   console.log('won’t run');
if (NaN)         console.log('won’t run');



# Truthy Values
All other values evaluate to true, including:
- Non-zero numbers (1, -42, 3.14)
- Non-empty strings ("0", "false", " " )
- Objects and arrays ({}, [] )
- Functions
- Dates, regexes, symbols, etc.
Example:
if (1)           console.log('runs');
if ("hello")     console.log('runs');
if ([])          console.log('runs');
if ({})          console.log('runs');
if (function(){})console.log('runs');
if (new Date())  console.log('runs');



## Quick Coercion Techniques
- Double NOT (!!): Forces a value to boolean
console.log(!!"");     // false
console.log(!!"text"); // true
- Boolean() constructor: Converts any value
console.log(Boolean(0));       // false
console.log(Boolean([1,2,3])); // true



## Pitfalls & Tips
- An empty array ([]) and empty object ({}) are truthy, even though they’re “empty.”
- Watch out when checking user input: "" vs. " " behave differently.
- Use explicit comparisons for clarity when dealing with numbers or strings.
- Short-circuit operators (&&/||) rely on truthiness to return values, not just booleans.

## More You Might Want to Know
- How truthy/falsy affects logical operators (&&, ||) and default parameters.
- Customizing truthiness by defining a valueOf() or toString() method on your objects.
- Common gotchas in form validations and data sanitization that stem from falsy values.
