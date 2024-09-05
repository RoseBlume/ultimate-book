---
title: If and Else
description: A guide in my new Starlight docs site.
sidebar:
  order: -4
---

## Conditions

In R, conditions are used to control the flow of a program based on certain criteria. The `if` statement is one of the most fundamental ways to implement conditional logic in R.

## If

The `if` statement allows you to execute a block of code if a certain condition is true. Here's the basic syntax:

```R
if (condition) {
  # code to be executed if the condition is true
}
```

## Else If

In some cases, you may want to check multiple conditions and execute different blocks of code based on the outcome. This is where the `else if` statement comes in handy. Here's an example:

```R
if (condition1) {
  # code to be executed if condition1 is true
} else if (condition2) {
  # code to be executed if condition2 is true
} else {
  # code to be executed if none of the conditions are true
}
```

## Else

The `else` statement is used to specify a block of code that should be executed if none of the previous conditions are true. Here's an example:

```R
if (condition) {
  # code to be executed if the condition is true
} else {
  # code to be executed if the condition is false
}
```

## Nesting

You can also nest `if` statements within each other to create more complex conditional logic. Here's an example:

```R
if (condition1) {
  if (condition2) {
    # code to be executed if both condition1 and condition2 are true
  } else {
    # code to be executed if condition1 is true but condition2 is false
  }
} else {
  # code to be executed if condition1 is false
}
```

## And Or

In addition to using `if` statements, you can also use logical operators such as `&&` (and) and `||` (or) to combine multiple conditions. This allows you to create more flexible and powerful conditional logic.

That's it! You now have a basic understanding of how to use `if` and `else` statements in R. Happy coding!
