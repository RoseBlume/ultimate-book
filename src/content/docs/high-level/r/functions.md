---
title: Functions
description: A guide in my new Starlight docs site.
sidebar:
  order: -2
---

## Standard Functions

In R, standard functions are built-in functions that perform common operations. These functions are readily available and can be used without any additional setup or installation.

Here are a few examples of standard functions in R:

```R
# Example 1: Print a message
print("Hello, World!")

# Example 2: Calculate the square root
sqrt(25)

# Example 3: Generate a sequence of numbers
seq(1, 10, by = 2)
```

## Nested Functions

In R, you can define functions within other functions. These are called nested functions. Nested functions can access variables from their parent functions, allowing for more complex and modular code structures.

Here's an example of a nested function in R:

```R
# Define a parent function
parent_function <- function() {
  x <- 10
  
  # Define a nested function
  nested_function <- function() {
    y <- 5
    result <- x + y
    return(result)
  }
  
  # Call the nested function
  nested_function()
}

# Call the parent function
parent_function()
```

## Recursion

Recursion is a programming technique where a function calls itself to solve a problem. In R, you can use recursion to solve problems that can be broken down into smaller subproblems.

Here's an example of a recursive function in R that calculates the factorial of a number:

```R
# Define a recursive function to calculate factorial
factorial <- function(n) {
  if (n == 0) {
    return(1)
  } else {
    return(n * factorial(n - 1))
  }
}

# Calculate the factorial of 5
factorial(5)
```

## Global Variables

In R, global variables are variables that can be accessed from any part of the code, including inside functions. However, it is generally recommended to avoid using global variables as they can make code harder to understand and maintain.

Here's an example of using a global variable in R:

```R
# Define a global variable
global_var <- 10

# Define a function that uses the global variable
use_global_var <- function() {
  result <- global_var + 5
  return(result)
}

# Call the function
use_global_var()
```

Remember to use global variables sparingly and consider alternative approaches, such as passing variables as function arguments, to improve code readability and maintainability.
