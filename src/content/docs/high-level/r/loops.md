---
title: Loops 
description: A guide in my new Starlight docs site.
sidebar:
  order: -3
---

## While Loops

A while loop in R allows you to repeatedly execute a block of code as long as a certain condition is true. The general syntax of a while loop is:

```R
while (condition) {
  # code to be executed
}
```

Here's an example of a while loop that prints numbers from 1 to 5:

```R
x <- 1
while (x <= 5) {
  print(x)
  x <- x + 1
}
```

## For Loops

A for loop in R allows you to iterate over a sequence of values and perform a certain action for each value. The general syntax of a for loop is:

```R
for (value in sequence) {
  # code to be executed
}
```

Here's an example of a for loop that prints numbers from 1 to 5:

```R
for (i in 1:5) {
  print(i)
}
```

## Nesting Loops

In R, you can nest loops by placing one loop inside another loop. This allows you to perform more complex iterations. Here's an example of nested loops that prints a multiplication table:

```R
for (i in 1:5) {
  for (j in 1:5) {
    result <- i * j
    print(paste(i, "*", j, "=", result))
  }
}
```
