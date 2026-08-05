# JavaScript Hoisting

## What is Hoisting?

Hoisting is JavaScript's behavior of **moving variable and function declarations to the top of their scope** during the compilation phase, before the code is executed. This means you can use a variable or call a function **before** it appears in the code.

> Note: Only the **declaration** is hoisted, not the **initialization/assignment**.

## How It Works

| Declaration | Hoisted? | Value before assignment | Behavior |
|-------------|----------|------------------------|----------|
| `var` | Yes | `undefined` | Hoisted and initialized with `undefined` |
| `let` / `const` | Yes (in TDZ) | `ReferenceError` | Hoisted but NOT initialized — access throws error |
| `function` declaration | Yes | Full function | Can be called before definition |
| `function` expression | No | `TypeError` | Only the variable is hoisted, not the function |

## Examples

### 1. `var` hoisting
```js
console.log(name); // undefined (no error)
var name = "John";
```
Internally becomes:
```js
var name;        // declaration hoisted
console.log(name); // undefined
name = "John";   // assignment stays in place
```

### 2. `let` / `const` hoisting (Temporal Dead Zone - TDZ)
```js
console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;
```
The variable is hoisted but sits in the **TDZ** (the time between entering the scope and the declaration) — accessing it throws an error.

### 3. Function declaration hoisting
```js
greet(); // "Hello!"
function greet() {
  console.log("Hello!");
}
```
The whole function is hoisted, so it can be called before its definition.

### 4. Function expression is NOT hoisted
```js
greet(); // TypeError: greet is not a function
var greet = function () {
  console.log("Hello!");
};
```
Only `var greet` is hoisted (as `undefined`), not the assignment.

## How to Explain It in an Interview

### Short answer (30 seconds):
> "Hoisting is JavaScript's behavior where declarations are moved to the top of their scope at compile time. `var` variables and function declarations get hoisted, so you can use them before they're written. But `let` and `const` are also hoisted into a temporal dead zone, so accessing them before the declaration throws a `ReferenceError`. Only the declaration is hoisted — not the initialization."

### Detailed answer (2 minutes) — with example:
> "When JavaScript compiles a scope, it first scans for all declarations and creates them in memory before running any code. For example, `console.log(name); var name = 'John';` doesn't throw an error — it prints `undefined`, because the `var name` declaration is hoisted and initialized to `undefined`, while the assignment stays in place.
>
> Function declarations are hoisted entirely, so you can call them before they're defined. However, function expressions and arrow functions assigned to variables are not — calling them early gives a `TypeError`.
>
> With `let` and `const`, the declaration is still hoisted, but the variable is placed in the **temporal dead zone** from the start of the scope until the declaration line runs. Accessing it there throws a `ReferenceError`. That's why the best practice is to always declare variables at the top of their scope, and prefer `const`/`let` over `var`."

### Key points to hit:
- Declarations are hoisted, **initializations are not**
- `var` → `undefined`; `let`/`const` → TDZ (`ReferenceError`); function declarations → fully usable
- Applies per-scope (function scope / block scope)
- Good practice: declare at the top to avoid confusion

## Best Practices

- Always declare variables at the top of their scope
- Prefer `let` and `const` over `var`
- Use function declarations when you need hoisting, or be consistent with function expressions
- Enable ESLint rules like `no-use-before-define` to catch accidental hoisting issues
