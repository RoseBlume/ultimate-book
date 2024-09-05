---
title: Booleans
sidebar:
  order: -6
---
```R
# Booleans in R

In R, booleans are a data type that can have one of two values: `TRUE` or `FALSE`. They are often used in conditional statements and logical operations.

## Creating Booleans

Booleans can be created using logical operators or by comparing values. Here are some examples:

```R
x <- TRUE
y <- FALSE
```

## Logical Operators

R provides several logical operators that can be used with booleans. Here are some commonly used ones:

- `!` (negation): Returns the opposite of a boolean value.
- `&` (and): Returns `TRUE` if both boolean values are `TRUE`.
- `|` (or): Returns `TRUE` if at least one of the boolean values is `TRUE`.
- `xor` (exclusive or): Returns `TRUE` if exactly one of the boolean values is `TRUE`.

```R
a <- TRUE
b <- FALSE

# Negation
!a  # FALSE

# And
a & b  # FALSE

# Or
a | b  # TRUE

# Exclusive Or
xor(a, b)  # TRUE
```

## Comparison Operators

Booleans can also be created by comparing values using comparison operators. Here are some examples:

- `==` (equal to): Returns `TRUE` if the values are equal.
- `!=` (not equal to): Returns `TRUE` if the values are not equal.
- `<` (less than): Returns `TRUE` if the left value is less than the right value.
- `>` (greater than): Returns `TRUE` if the left value is greater than the right value.
- `<=` (less than or equal to): Returns `TRUE` if the left value is less than or equal to the right value.
- `>=` (greater than or equal to): Returns `TRUE` if the left value is greater than or equal to the right value.

```R
x <- 5
y <- 10

# Equal to
x == y  # FALSE

# Not equal to
x != y  # TRUE

# Less than
x < y  # TRUE

# Greater than
x > y  # FALSE

# Less than or equal to
x <= y  # TRUE

# Greater than or equal to
x >= y  # FALSE
```

These are the basics of working with booleans in R. They are an essential part of writing conditional statements and performing logical operations.
```