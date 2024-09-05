---
title: Loops
description: A guide in my new Starlight docs site.
---
Loops are an essential part of JavaScript programming. They allow you to repeat a block of code multiple times, making it easier to perform repetitive tasks or iterate over collections of data.

There are several types of loops in JavaScript, including the `for` loop, `while` loop, and `do-while` loop.

The `for` loop is commonly used when you know the number of iterations in advance. It consists of three parts: initialization, condition, and increment/decrement. Here's an example:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

In this example, the loop will execute the code block as long as the condition `i < 5` is true. The variable `i` is incremented by 1 after each iteration.

The `while` loop is used when you don't know the number of iterations in advance but have a condition that needs to be met. Here's an example:

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

In this example, the loop will continue executing the code block as long as the condition `i < 5` is true. The variable `i` is incremented by 1 within the loop.

The `do-while` loop is similar to the `while` loop, but it guarantees that the code block is executed at least once before checking the condition. Here's an example:

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

In this example, the code block is executed first, and then the condition `i < 5` is checked. If the condition is true, the loop continues executing.

These are the basic loop structures in JavaScript. They provide powerful ways to iterate over data and perform repetitive tasks. Experiment with different loop types to become more comfortable with them.
