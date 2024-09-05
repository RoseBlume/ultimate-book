---
title: Numbers
description: A guide in my new Starlight docs site.
---
Numbers in JavaScript are a fundamental data type used to represent numeric values. JavaScript supports both integers and floating-point numbers.

To declare a number variable in JavaScript, you can use the `let` or `const` keyword followed by the variable name and an assignment operator. For example:

```javascript
let age = 25;
const pi = 3.14;
```

JavaScript provides various arithmetic operators that can be used with numbers, such as addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), and modulus (`%`). Here's an example:

```javascript
let x = 10;
let y = 5;

let sum = x + y; // 15
let difference = x - y; // 5
let product = x * y; // 50
let quotient = x / y; // 2
let remainder = x % y; // 0
```

JavaScript also supports mathematical functions that can be used with numbers, such as `Math.sqrt()` for calculating the square root, `Math.pow()` for exponentiation, and `Math.random()` for generating random numbers.

```javascript
let squareRoot = Math.sqrt(16); // 4
let power = Math.pow(2, 3); // 8
let random = Math.random(); // generates a random number between 0 and 1
```

In JavaScript, numbers can be converted to strings using the `toString()` method, and strings can be converted to numbers using the `parseInt()` or `parseFloat()` functions.

```javascript
let number = 42;
let numberAsString = number.toString(); // "42"

let string = "3.14";
let stringAsNumber = parseFloat(string); // 3.14
```

Remember to use appropriate data types and handle edge cases when working with numbers in JavaScript.
