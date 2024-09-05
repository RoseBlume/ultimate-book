---
title: Lambda
sidebar:
  order: 25
---

# Lambda Expressions in Java

Lambda expressions are a powerful feature introduced in Java 8. They allow you to write more concise and expressive code by representing anonymous functions.

## Syntax

The syntax for a lambda expression in Java is as follows:

```java
(parameters) -> { body }
```

Here, `parameters` represent the input parameters of the function, and `body` represents the code that gets executed when the lambda expression is called.

## Examples

### Example 1: Simple Lambda Expression

```java
// Lambda expression with no parameters
() -> {
    System.out.println("Hello, World!");
}
```

### Example 2: Lambda Expression with Parameters

```java
// Lambda expression with parameters
(int a, int b) -> {
    return a + b;
}
```

### Example 3: Lambda Expression with Single Parameter

```java
// Lambda expression with single parameter
name -> {
    System.out.println("Hello, " + name + "!");
}
```

Lambda expressions can be used in various contexts, such as functional interfaces, streams, and more. They provide a concise way to write code and enhance the readability of your Java programs.

For more information on lambda expressions in Java, refer to the [official documentation](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html).
