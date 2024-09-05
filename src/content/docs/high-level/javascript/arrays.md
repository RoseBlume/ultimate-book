---
title: Arrays
description: A guide in my new Starlight docs site.
---
## Introduction to JavaScript Arrays

Arrays are an essential data structure in JavaScript that allow you to store and manipulate collections of values. In this guide, we will explore the basics of working with arrays in JavaScript.

### Creating an Array

To create an array in JavaScript, you can use the array literal syntax, which is represented by square brackets `[]`. For example:

```javascript
let fruits = ['apple', 'banana', 'orange'];
```

### Accessing Array Elements

You can access individual elements in an array using their index. The index starts from 0 for the first element and increments by 1 for each subsequent element. For example:

```javascript
let fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'orange'
```

### Modifying Array Elements

You can modify the value of an array element by assigning a new value to its corresponding index. For example:

```javascript
let fruits = ['apple', 'banana', 'orange'];

fruits[1] = 'grape';

console.log(fruits); // Output: ['apple', 'grape', 'orange']
```

### Array Methods

JavaScript provides a variety of built-in methods that you can use to manipulate arrays. Some commonly used array methods include:

- `push()`: Adds one or more elements to the end of an array.
- `pop()`: Removes the last element from an array.
- `shift()`: Removes the first element from an array.
- `unshift()`: Adds one or more elements to the beginning of an array.
- `splice()`: Adds or removes elements from an array at a specified index.

```javascript
let fruits = ['apple', 'banana', 'orange'];

fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange']

fruits.shift();
console.log(fruits); // Output: ['banana', 'orange']

fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'banana', 'orange']

fruits.splice(1, 1, 'mango');
console.log(fruits); // Output: ['kiwi', 'mango', 'orange']
```

### Conclusion

In this guide, we covered the basics of working with arrays in JavaScript. Arrays are powerful tools that allow you to store and manipulate collections of values. By understanding how to create, access, and modify array elements, as well as utilize array methods, you can leverage the full potential of arrays in your JavaScript programs.
