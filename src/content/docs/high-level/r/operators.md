---
title: Operators
description: A guide in my new Starlight docs site.
sidebar:
  order: -5
---

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations in R. Here are the commonly used arithmetic operators:

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Exponentiation: `^`
- Modulo: `%%`

Example:

```R
# Addition
x <- 5 + 3
# x is now 8

# Subtraction
y <- 10 - 2
# y is now 8

# Multiplication
z <- 4 * 2
# z is now 8

# Division
a <- 16 / 2
# a is now 8

# Exponentiation
b <- 2 ^ 3
# b is now 8

# Modulo
c <- 17 %% 9
# c is now 8
```

## Assignment Operators

Assignment operators are used to assign values to variables in R. Here are the commonly used assignment operators:

- Assignment: `<-` or `=`
- Compound assignment: `+=`, `-=`, `*=`, `/=`

Example:

```R
# Assignment
x <- 5
# x is now 5

# Compound assignment
x += 3
# x is now 8

y -= 2
# y is now 6

z *= 2
# z is now 16

a /= 2
# a is now 8
```

## Comparison Operators

Comparison operators are used to compare values in R. Here are the commonly used comparison operators:

- Equal to: `==`
- Not equal to: `!=`
- Greater than: `>`
- Less than: `<`
- Greater than or equal to: `>=`
- Less than or equal to: `<=`

Example:

```R
# Equal to
x <- 5
y <- 3
x == y
# Returns FALSE

# Not equal to
x != y
# Returns TRUE

# Greater than
x > y
# Returns TRUE

# Less than
x < y
# Returns FALSE

# Greater than or equal to
x >= y
# Returns TRUE

# Less than or equal to
x <= y
# Returns FALSE
```

## Logical Operators

Logical operators are used to combine or negate logical values in R. Here are the commonly used logical operators:

- AND: `&`
- OR: `|`
- NOT: `!`

Example:

```R
# AND
x <- TRUE
y <- FALSE
x & y
# Returns FALSE

# OR
x | y
# Returns TRUE

# NOT
!x
# Returns FALSE
```

## Misc Operators

There are other miscellaneous operators in R that are used for specific purposes. Some of them include:

- `%in%`: Checks if a value is present in a vector.
- `%*%`: Performs matrix multiplication.
- `%/%`: Performs integer division.

Example:

```R
# %in%
x <- c(1, 2, 3, 4, 5)
2 %in% x
# Returns TRUE

# %*%
a <- matrix(c(1, 2, 3, 4), nrow = 2, ncol = 2)
b <- matrix(c(5, 6, 7, 8), nrow = 2, ncol = 2)
a %*% b
# Returns a matrix resulting from matrix multiplication

# %/%
x <- 17
y <- 3
x %/% y
# Returns 5
```