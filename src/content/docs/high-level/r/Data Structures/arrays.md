---
title: Arrays
description: A guide in my new Starlight docs site.
sidebar:
  order: 4
---
```R
# Arrays in R

Arrays are a fundamental data structure in R that allow you to store multiple values of the same data type in a single variable. They are similar to vectors, but with the ability to have multiple dimensions.

## Creating Arrays

You can create an array in R using the `array()` function. The function takes three arguments: the data values, the dimensions of the array, and optional names for the dimensions.

Here's an example of creating a 2-dimensional array:

```R
# Create a 2x3 array
my_array <- array(c(1, 2, 3, 4, 5, 6), dim = c(2, 3))
```

## Accessing Array Elements

You can access individual elements of an array using square brackets `[]`. The indices start from 1.

```R
# Access the element at row 1, column 2
element <- my_array[1, 2]
```

## Modifying Array Elements

You can modify individual elements of an array by assigning new values to them using the assignment operator `<-`.

```R
# Modify the element at row 2, column 3
my_array[2, 3] <- 7
```

## Array Operations

Arrays in R support various operations such as arithmetic operations, element-wise operations, and matrix operations.

```R
# Arithmetic operations
result <- my_array + 2

# Element-wise operations
result <- my_array * 3

# Matrix operations
result <- my_array %*% matrix(c(1, 2, 3, 4, 5, 6), nrow = 3, ncol = 2)
```

## Conclusion

Arrays are a powerful data structure in R that allow you to work with multiple values efficiently. They can be created, accessed, and modified using simple syntax. Understanding arrays is essential for working with multidimensional data in R.

```
