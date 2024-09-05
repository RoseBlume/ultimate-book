---
title: Vectors
description: A guide in my new Starlight docs site.
sidebar:
  order: 1
---
## Introduction to Vectors in R

In R, a vector is a basic data structure that represents a collection of elements of the same data type. It is one of the fundamental objects used for storing and manipulating data in R.

### Creating a Vector

To create a vector in R, you can use the `c()` function, which stands for "combine" or "concatenate". Here's an example:

```R
# Creating a numeric vector
numeric_vector <- c(1, 2, 3, 4, 5)

# Creating a character vector
character_vector <- c("apple", "banana", "orange")

# Creating a logical vector
logical_vector <- c(TRUE, FALSE, TRUE)
```

### Accessing Elements of a Vector

You can access individual elements of a vector using indexing. In R, indexing starts at 1. Here's an example:

```R
# Accessing elements of a vector
numeric_vector <- c(1, 2, 3, 4, 5)

# Accessing the first element
first_element <- numeric_vector[1]

# Accessing the third element
third_element <- numeric_vector[3]

# Accessing a range of elements
range_of_elements <- numeric_vector[2:4]
```

### Modifying Elements of a Vector

You can modify elements of a vector by assigning new values to specific indices. Here's an example:

```R
# Modifying elements of a vector
numeric_vector <- c(1, 2, 3, 4, 5)

# Modifying the second element
numeric_vector[2] <- 10

# Modifying a range of elements
numeric_vector[3:5] <- c(20, 30, 40)
```

### Vector Operations

R provides various operations that can be performed on vectors, such as arithmetic operations, logical operations, and statistical functions. Here are a few examples:

```R
# Arithmetic operations
numeric_vector <- c(1, 2, 3, 4, 5)

# Adding 2 to each element
addition_result <- numeric_vector + 2

# Multiplying each element by 3
multiplication_result <- numeric_vector * 3

# Logical operations
logical_vector <- c(TRUE, FALSE, TRUE)

# Negating the logical vector
negation_result <- !logical_vector

# Statistical functions
numeric_vector <- c(1, 2, 3, 4, 5)

# Calculating the sum of the vector
sum_result <- sum(numeric_vector)

# Calculating the mean of the vector
mean_result <- mean(numeric_vector)
```

### Conclusion

Vectors are a fundamental data structure in R that allow you to store and manipulate collections of elements. They are versatile and can be used for various purposes in data analysis and statistical computing. Understanding how to create, access, modify, and perform operations on vectors is essential for working with data in R.
