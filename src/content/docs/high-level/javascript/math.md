---
title: Math
description: A guide in my new Starlight docs site.
---
## Math in JavaScript

JavaScript provides a built-in `Math` object that allows you to perform various mathematical operations. Here are some commonly used methods:

- `Math.abs(x)`: Returns the absolute value of `x`.
- `Math.ceil(x)`: Returns the smallest integer greater than or equal to `x`.
- `Math.floor(x)`: Returns the largest integer less than or equal to `x`.
- `Math.round(x)`: Returns the value of `x` rounded to the nearest integer.
- `Math.max(x, y, z, ...)`: Returns the largest of the given numbers.
- `Math.min(x, y, z, ...)`: Returns the smallest of the given numbers.
- `Math.random()`: Returns a random number between 0 (inclusive) and 1 (exclusive).
- `Math.pow(x, y)`: Returns the value of `x` raised to the power of `y`.
- `Math.sqrt(x)`: Returns the square root of `x`.
- `Math.sin(x)`, `Math.cos(x)`, `Math.tan(x)`: Returns the sine, cosine, and tangent of `x` (in radians).
- `Math.PI`: Represents the mathematical constant π (pi).

Example usage:

```javascript
const x = -5;
console.log(Math.abs(x)); // Output: 5

const y = 3.7;
console.log(Math.ceil(y)); // Output: 4

const z = 9.2;
console.log(Math.floor(z)); // Output: 9

const a = 2.8;
console.log(Math.round(a)); // Output: 3

const numbers = [1, 5, 3, 9, 2];
console.log(Math.max(...numbers)); // Output: 9

console.log(Math.random()); // Output: a random number between 0 and 1

console.log(Math.pow(2, 3)); // Output: 8

console.log(Math.sqrt(16)); // Output: 4

console.log(Math.sin(Math.PI / 2)); // Output: 1

console.log(Math.cos(Math.PI)); // Output: -1

console.log(Math.tan(0)); // Output: 0

console.log(Math.PI); // Output: 3.141592653589793
```

These are just a few examples of what you can do with the `Math` object in JavaScript. Feel free to explore more methods and experiment with different mathematical calculations in your JavaScript code.
