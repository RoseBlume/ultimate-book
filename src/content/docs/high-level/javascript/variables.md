---
title: Variables
description: A guide in my new Starlight docs site.
---
Variables in JavaScript allow you to store and manipulate data. They are like containers that hold values, which can be of different types such as numbers, strings, booleans, or objects.

To declare a variable in JavaScript, you can use the `var`, `let`, or `const` keyword. For example:

```javascript
var age = 25;
let name = "John";
const PI = 3.14;
```

The `var` keyword is used for declaring variables with function scope, while `let` and `const` are used for block scope. The difference between `let` and `const` is that `let` allows reassignment of values, whereas `const` creates a variable that cannot be reassigned.

You can also initialize a variable without assigning a value to it. In this case, the variable will have the value `undefined`. For example:

```javascript
let x;
console.log(x); // Output: undefined
```

To assign a value to a variable, you can use the assignment operator (`=`). For example:

```javascript
let message = "Hello, world!";
```

Variables can be used in expressions and can be combined with operators to perform calculations or manipulate data. For example:

```javascript
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log(sum); // Output: 15
```

Remember to use meaningful names for your variables to make your code more readable and maintainable. It's also a good practice to declare variables at the top of their scope to avoid unexpected behavior.
