---
title: Type Conversion
description: A guide in my new Starlight docs site.
---
Type conversion in JavaScript refers to the process of converting one data type to another. JavaScript provides several built-in functions and operators for performing type conversion.

Here are some common type conversion methods in JavaScript:

1. **String Conversion**: You can convert a value to a string using the `String()` function or by concatenating an empty string (`''`) with the value.

```javascript
let num = 42;
let str = String(num);
console.log(typeof str); // Output: string
```

2. **Number Conversion**: To convert a value to a number, you can use the `Number()` function or the unary plus operator (`+`).

```javascript
let str = '42';
let num = Number(str);
console.log(typeof num); // Output: number
```

3. **Boolean Conversion**: JavaScript has a built-in `Boolean()` function that converts a value to a boolean. The following values are considered falsy and will be converted to `false`: `0`, `NaN`, `null`, `undefined`, `false`, and an empty string (`''`). All other values are considered truthy and will be converted to `true`.

```javascript
let num = 0;
let bool = Boolean(num);
console.log(bool); // Output: false
```

4. **Implicit Type Conversion**: JavaScript also performs implicit type conversion in certain situations. For example, when you use the `+` operator with a string and a number, JavaScript will convert the number to a string and concatenate them.

```javascript
let num = 42;
let str = 'The answer is ' + num;
console.log(str); // Output: The answer is 42
```

These are just a few examples of type conversion in JavaScript. Understanding how type conversion works is important for writing robust and error-free code.
