# Module 01 – Introduction & Variables

> **Status:** ✅ Completed

---

# Learning Objectives

After completing this module, you should be able to:

* Understand what JavaScript is.
* Explain the roles of HTML, CSS, and JavaScript.
* Understand what a JavaScript Engine does.
* Print output using `console.log()`.
* Create variables using `let`, `const`, and `var`.
* Know when to use `let` and `const`.

---

# What is JavaScript?

JavaScript is a programming language that adds **logic, behavior, and interactivity** to applications.

### Example

Without JavaScript:

* A button appears.
* A form is displayed.

With JavaScript:

* Button clicks work.
* Forms are validated.
* Data is sent to the server.
* Messages are displayed.
* Animations become interactive.

---

# HTML vs CSS vs JavaScript

| Technology | Purpose               |
| ---------- | --------------------- |
| HTML       | Structure             |
| CSS        | Styling               |
| JavaScript | Logic & Interactivity |

Think of it like a human body:

* **HTML** → Skeleton
* **CSS** → Clothes
* **JavaScript** → Brain

---

# JavaScript Engine

Computers cannot understand JavaScript directly.

A JavaScript Engine converts JavaScript into instructions that the computer can execute.

Examples:

* Chrome → V8
* Edge → V8
* Firefox → SpiderMonkey
* Safari → JavaScriptCore
* Node.js → V8

---

# console.log()

Used to print information to the console.

### Syntax

```javascript
console.log("Hello World");
```

Example:

```javascript
console.log("Hello Saran");
console.log("Future React Developer");
```

Output:

```
Hello Saran
Future React Developer
```

---

# Variables

A variable is a **named reference to a value stored in memory**.

Instead of writing the same value repeatedly, store it in a variable.

Example:

```javascript
let age = 21;

console.log(age);
```

---

# let

Use `let` when the value **can change**.

Example:

```javascript
let score = 50;

score = 75;
```

Reassignment is allowed.

---

# const

Use `const` when the value **should not be reassigned**.

Example:

```javascript
const country = "Japan";
```

This is **not allowed**:

```javascript
country = "India";
```

---

# var

Older way of declaring variables.

Characteristics:

* Function scoped
* Can be reassigned
* Can cause confusing bugs

Modern JavaScript rarely uses `var`.

---

# Best Practices

✅ Use `const` by default.

✅ Use `let` only when the value needs to change.

❌ Avoid `var` in new code.

---

# Memory Visualization

```text
Memory

┌──────────────┐
│ age  │ 21    │
└──────────────┘
```

When you write:

```javascript
age = 22;
```

The variable now refers to the updated value.

```text
Memory

┌──────────────┐
│ age  │ 22    │
└──────────────┘
```

---

# React Connection

React code commonly uses `const`.

Example:

```javascript
const App = () => {

};
```

and

```javascript
const [count, setCount] = useState(0);
```

Understanding `const` now will make React easier later.

---

# Interview Questions

### 1. What is JavaScript?

A programming language that adds logic and interactivity to web applications.

---

### 2. What is a JavaScript Engine?

Software that executes JavaScript code by converting it into instructions the computer can run.

---

### 3. Difference between `let`, `const`, and `var`

| let               | const                | var               |
| ----------------- | -------------------- | ----------------- |
| Block scoped      | Block scoped         | Function scoped   |
| Can be reassigned | Cannot be reassigned | Can be reassigned |
| Modern            | Modern               | Legacy            |

---

### 4. Why is `const` preferred?

Because it prevents accidental reassignment and makes code easier to understand and maintain.

---

# Common Mistakes

❌ Using `let` for every variable.

❌ Using `var` in modern projects.

❌ Thinking `const` means "the value can never change." (We'll revisit this when we study objects and arrays.)

---

# Key Takeaways

* JavaScript adds behavior to applications.
* HTML creates structure.
* CSS provides styling.
* JavaScript engines execute JavaScript code.
* `console.log()` prints values to the console.
* Variables store values using meaningful names.
* Prefer `const` by default.
* Use `let` only when reassignment is required.
* Avoid `var` in modern JavaScript.

---

# Progress

* ✅ Introduction to JavaScript
* ✅ JavaScript Engine
* ✅ console.log()
* ✅ Variables
* ✅ let
* ✅ const
* ✅ var

**Next Topic:** Data Types
