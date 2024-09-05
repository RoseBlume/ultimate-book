---
title: Lambda
sidebar:
  order: 17
---
## What is a Lambda Function?

A lambda function, also known as an anonymous function, is a small and concise way to define a function in Python. It is defined using the `lambda` keyword, followed by a list of arguments, a colon, and the expression to be evaluated.

Here's the general syntax of a lambda function:

```python
lambda arguments: expression
```

## Example Usage

Lambda functions are commonly used when a small function is needed for a short period of time, such as in functional programming or when passing a function as an argument to another function.

Here's an example that demonstrates the usage of a lambda function to calculate the square of a number:

```python
square = lambda x: x ** 2

print(square(5))  # Output: 25
```

In this example, we define a lambda function `square` that takes an argument `x` and returns the square of `x`. We then call the lambda function with the argument `5` and print the result.

Lambda functions can also take multiple arguments. Here's an example that demonstrates the usage of a lambda function with multiple arguments:

```python
add = lambda x, y: x + y

print(add(3, 4))  # Output: 7
```

In this example, we define a lambda function `add` that takes two arguments `x` and `y` and returns their sum. We then call the lambda function with the arguments `3` and `4` and print the result.

Lambda functions can be used in various scenarios where a small and concise function is required. They provide a convenient way to define functions on the fly without the need for a formal function definition.
