# Temporal Dead Zone (TDZ) in JavaScript

## What is TDZ?

The **Temporal Dead Zone (TDZ)** is the period of time between **entering a scope** and the **actual declaration** of a `let`/`const` variable. During this window, the variable exists but **cannot be accessed** — any attempt to read or use it throws a `ReferenceError`.

The word "temporal" means **time-based**, not position-based — it's about *when* the code runs, not *where* the variable is written in the file.

## How It Works

When JavaScript enters a scope (like a block `{}` or a function), it:
1. **Scans** the scope for all `let`/`const` declarations
2. **Hoists** them into memory (they exist, but are uninitialized)
3. **Enters the TDZ** — accessing the variable throws `ReferenceError`
4. **Ends the TDZ** — when the declaration line executes, the variable is initialized and usable

| Declaration | Hoisted? | Before declaration | After declaration |
|-------------|----------|--------------------|-------------------|
| `var` | Yes | `undefined` (no TDZ) | Normal |
| `let` | Yes | `ReferenceError` (TDZ) | Normal |
| `const` | Yes | `ReferenceError` (TDZ) | Normal, must be initialized |
| `class` | Yes | `ReferenceError` (TDZ) | Normal |

## Examples

### 1. Accessing before declaration — ReferenceError
```js
console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = "John";
```

### 2. TDZ only applies to the current scope
```js
let x = 10; // outer x

{
  console.log(x); // ReferenceError — this x is in TDZ, NOT the outer x!
  let x = 20;
}
```
The inner `let x` shadows the outer one, so the whole block is its TDZ — even though an outer `x` exists.

### 3. `typeof` also throws in the TDZ
```js
typeof x; // ReferenceError
let x;
```
Note: `typeof` on an *undeclared* variable returns `"undefined"` safely, but on a TDZ variable it **throws**.

### 4. `const` must be initialized in the declaration
```js
const y; // SyntaxError: Missing initializer in const declaration
```
`const` has no "hoisted as undefined" phase — it's never initialized to `undefined` like `var` is.

### 5. TDZ ends when the declaration executes
```js
let z = 5;
console.log(z); // 5 — TDZ over, declaration already ran
```

## How to Explain It in an Interview

### Short answer (30 seconds):
> "The Temporal Dead Zone is the time window between entering a scope and the declaration of a `let` or `const` variable. During that window the variable is hoisted but uninitialized, so accessing it throws a `ReferenceError` — not `undefined` like `var`. The TDZ exists to catch bugs where you use a variable before it's ready, and it ends the moment the declaration line runs."

### Detailed answer (2 minutes) — with example:
> "When JavaScript compiles a scope, it hoists all declarations. `var` gets initialized to `undefined`, but `let` and `const` are hoisted in an **uninitialized state** and placed in the TDZ — the period from the start of the scope until the declaration statement executes. Any access during the TDZ, even `typeof`, throws a `ReferenceError`.
>
> For example, `console.log(x); let x = 10;` throws, because `x` is in its TDZ at the `console.log` line. A subtle case is shadowing: if an inner block declares `let x`, then reading `x` anywhere in that block before the declaration throws — it does NOT fall back to the outer `x`.
>
> The TDZ prevents real bugs, like reading a variable before its initializer has run. `const` is stricter still — it must be initialized at declaration, otherwise you get a `SyntaxError`. Understanding the TDZ is also the key difference between `var` (hoisted to `undefined`) and `let`/`const` (hoisted but in TDZ)."

### Key points to hit:
- TDZ = time between **scope entry** and **declaration execution**
- It's temporal (time-based), not positional (line-based)
- Access during TDZ → `ReferenceError`, not `undefined`
- Applies to `let`, `const`, and `class` — not `var`
- Even `typeof` throws in the TDZ
- Shadowing: inner declaration creates a TDZ for the whole block
- `const` also requires initialization at declaration (SyntaxError otherwise)

## Best Practices

- Always declare variables at the top of their scope, before use
- Prefer `let`/`const` over `var` — TDZ errors are better than silent `undefined`
- Be careful with shadowing — an inner `let` hides outer variables for the entire block
- Use ESLint's `no-use-before-define` to catch TDZ issues early
