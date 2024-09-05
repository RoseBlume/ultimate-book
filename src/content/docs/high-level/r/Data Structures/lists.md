---
title: Lists
description: A guide in my new Starlight docs site.
sidebar:
  order: 2
---
## Introduction to Lists in R

In R, a list is a versatile data structure that can hold elements of different types. It allows you to store and organize related data in a single object.

### Creating a List

To create a list in R, you can use the `list()` function. Each element in the list is separated by a comma.

```R
my_list <- list("apple", 3.14, TRUE)
```

In the example above, `my_list` is a list that contains a character string, a numeric value, and a logical value.

### Accessing List Elements

You can access individual elements in a list using the indexing operator `[ ]`. The index starts from 1 for the first element.

```R
my_list <- list("apple", 3.14, TRUE)
print(my_list[1])  # Output: "apple"
print(my_list[2])  # Output: 3.14
print(my_list[3])  # Output: TRUE
```

### Modifying List Elements

You can modify elements in a list by assigning new values to specific indices.

```R
my_list <- list("apple", 3.14, TRUE)
my_list[2] <- 2.718
print(my_list)  # Output: "apple", 2.718, TRUE
```

### List Operations

Lists in R support various operations such as adding elements, removing elements, and combining lists.

```R
# Adding elements to a list
my_list <- list("apple", 3.14, TRUE)
my_list <- c(my_list, "banana")
print(my_list)  # Output: "apple", 3.14, TRUE, "banana"

# Removing elements from a list
my_list <- list("apple", 3.14, TRUE)
my_list <- my_list[-2]
print(my_list)  # Output: "apple", TRUE

# Combining lists
list1 <- list("apple", 3.14)
list2 <- list(TRUE, "banana")
combined_list <- c(list1, list2)
print(combined_list)  # Output: "apple", 3.14, TRUE, "banana"
```

### Conclusion

Lists are a powerful data structure in R that allow you to store and manipulate different types of data. They provide flexibility and versatility when working with complex datasets.