---
title: Tuples
sidebar:
    order: 10
---

## Introduction to Tuples in Python

Tuples are immutable sequences in Python, meaning they cannot be modified once created. They are similar to lists, but their values cannot be changed. Tuples are defined using parentheses `()` and can contain elements of different data types.

Example:
```python
# Creating a tuple
my_tuple = (1, "hello", 3.14, True)

# Accessing tuple elements
print(my_tuple[0])  # Output: 1
print(my_tuple[1])  # Output: hello
```

## Access Tuples

To access elements in a tuple, you can use indexing. The index starts from 0 for the first element and goes up to `len(tuple) - 1` for the last element.

Example:
```python
# Accessing tuple elements
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple[2])  # Output: 3
```

## Update Tuples

Since tuples are immutable, you cannot directly update or modify their elements. However, you can create a new tuple by concatenating or slicing existing tuples.

Example:
```python
# Concatenating tuples
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
new_tuple = tuple1 + tuple2
print(new_tuple)  # Output: (1, 2, 3, 4, 5, 6)
```

## Unpacking Tuples

Tuples can be unpacked into multiple variables, allowing you to assign each element of the tuple to a separate variable.

Example:
```python
# Unpacking a tuple
my_tuple = (1, 2, 3)
a, b, c = my_tuple
print(a)  # Output: 1
print(b)  # Output: 2
print(c)  # Output: 3
```

## Loop Tuples

You can iterate over the elements of a tuple using a loop, such as a `for` loop.

Example:
```python
# Looping through a tuple
my_tuple = (1, 2, 3)
for item in my_tuple:
        print(item)
```

## Join Tuples

Tuples can be joined together using the `+` operator to create a new tuple.

Example:
```python
# Joining tuples
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
new_tuple = tuple1 + tuple2
print(new_tuple)  # Output: (1, 2, 3, 4, 5, 6)
```
