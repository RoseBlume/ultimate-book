---
title: Functions
description: A guide in my new Starlight docs site.
---
Functions in JavaScript are an essential part of the language. They allow you to encapsulate reusable blocks of code and execute them whenever needed. Here's how you can use functions in JavaScript:

1. Function Declaration:
    ```javascript
    function functionName() {
         // code to be executed
    }
    ```
    You can declare a function using the `function` keyword, followed by the function name and a pair of parentheses. The code to be executed is enclosed within curly braces.

2. Function Invocation:
    ```javascript
    functionName();
    ```
    To execute a function, you simply need to invoke it by using its name followed by a pair of parentheses.

3. Function Parameters:
    ```javascript
    function addNumbers(num1, num2) {
         return num1 + num2;
    }
    ```
    Functions can accept parameters, which act as placeholders for values that will be passed when the function is invoked. Inside the function, you can use these parameters to perform operations.

4. Return Statement:
    ```javascript
    function multiplyNumbers(num1, num2) {
         return num1 * num2;
    }
    ```
    Functions can also return values using the `return` statement. This allows you to get the result of a computation or perform further operations with the returned value.

5. Function Expressions:
    ```javascript
    const multiply = function(num1, num2) {
         return num1 * num2;
    };
    ```
    Functions can also be assigned to variables, known as function expressions. This allows you to create anonymous functions or pass functions as arguments to other functions.

6. Arrow Functions (ES6):
    ```javascript
    const multiply = (num1, num2) => num1 * num2;
    ```
    Arrow functions provide a more concise syntax for writing functions. They are especially useful for one-liner functions.

Remember to call your functions with the correct arguments and handle the returned values appropriately. Functions are powerful tools in JavaScript that enable code reuse and modularization.