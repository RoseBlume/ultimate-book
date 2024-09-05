---
title: Objects
description: A guide in my new Starlight docs site.
---
Objects in JavaScript are a fundamental data type that allows you to store and manipulate collections of key-value pairs. They are versatile and widely used in JavaScript programming.

To create an object, you can use either the object literal syntax or the Object constructor. Here's an example using the object literal syntax:

```javascript
const person = {
    name: 'John',
    age: 30,
    profession: 'Developer'
};
```

In this example, `person` is an object with three properties: `name`, `age`, and `profession`. Each property has a corresponding value.

You can access the properties of an object using dot notation or bracket notation. For example:

```javascript
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30
```

You can also add or modify properties of an object dynamically. For instance:

```javascript
person.location = 'New York';
person.age = 31;
```

Objects can also have methods, which are functions stored as object properties. Here's an example:

```javascript
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
```

In this example, `calculator` is an object with two methods: `add` and `subtract`. These methods can be invoked using dot notation.

Objects in JavaScript are powerful and flexible, allowing you to represent complex data structures and behaviors. Understanding how to work with objects is essential for JavaScript developers.