---
title: Matrices
description: A guide in my new Starlight docs site.
sidebar:
  order: 3
---
```R
# Creating a matrix
matrix_data <- matrix(1:9, nrow = 3, ncol = 3)
print(matrix_data)

# Accessing elements in a matrix
element <- matrix_data[2, 3]
print(element)

# Modifying elements in a matrix
matrix_data[1, 2] <- 10
print(matrix_data)

# Performing operations on matrices
matrix1 <- matrix(1:4, nrow = 2)
matrix2 <- matrix(5:8, nrow = 2)
result <- matrix1 + matrix2
print(result)

# Transposing a matrix
transposed_matrix <- t(matrix_data)
print(transposed_matrix)

# Finding the dimensions of a matrix
dimensions <- dim(matrix_data)
print(dimensions)
```