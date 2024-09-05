---
title: Lists
sidebar:
    order: 9
---

## Introduction to Lists in Python

In Python, a list is a collection of items that are ordered and changeable. Lists are one of the most versatile data structures in Python and can hold elements of different data types.

To create a list in Python, you can use square brackets `[]` and separate the items with commas. Here's an example:

```python
fruits = ["apple", "banana", "cherry"]
```

## Access List Items

You can access individual items in a list by referring to their index number. In Python, indexing starts at 0. To access the first item in a list, you can use `list_name[0]`. Here's an example:

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Output: apple
```

## Change List Items

Lists in Python are mutable, which means you can change the value of individual items. To change the value of an item in a list, you can assign a new value to the desired index. Here's an example:

```python
fruits = ["apple", "banana", "cherry"]
fruits[1] = "orange"
print(fruits)  # Output: ["apple", "orange", "cherry"]
```

## Adding List Items

You can add new items to a list using the `append()` method or by concatenating two lists. The `append()` method adds an item to the end of the list. Here's an example:

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)  # Output: ["apple", "banana", "cherry", "orange"]
```

## Removing List Items

To remove an item from a list, you can use the `remove()` method or the `del` keyword followed by the index. The `remove()` method removes the first occurrence of the specified item. Here's an example:

```python
fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")
print(fruits)  # Output: ["apple", "cherry"]
```

## Looping Through Lists

You can iterate over the items in a list using a `for` loop. Here's an example:

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
        print(fruit)
```

Output:
```
apple
banana
cherry
```

## List Comprehension

List comprehension is a concise way to create lists based on existing lists. It allows you to perform operations on each item in the list and create a new list. Here's an example:

```python
numbers = [1, 2, 3, 4, 5]
squared_numbers = [x**2 for x in numbers]
print(squared_numbers)  # Output: [1, 4, 9, 16, 25]
```

## Sort Lists

You can sort the items in a list using the `sort()` method. By default, the `sort()` method sorts the list in ascending order. Here's an example:

```python
fruits = ["apple", "banana", "cherry"]
fruits.sort()
print(fruits)  # Output: ["apple", "banana", "cherry"]
```

## Copy Lists

To create a copy of a list, you can use the `copy()` method or the built-in `list()` function. Here's an example:

```python
fruits = ["apple", "banana", "cherry"]
fruits_copy = fruits.copy()
print(fruits_copy)  # Output: ["apple", "banana", "cherry"]
```

## Join Lists

You can join two or more lists together using the `+` operator. Here's an example:

```python
fruits = ["apple", "banana", "cherry"]
colors = ["red", "yellow", "green"]
combined_list = fruits + colors
print(combined_list)  # Output: ["apple", "banana", "cherry", "red", "yellow", "green"]
```

This covers the basics of working with lists in Python. Experiment with different operations and explore the Python documentation for more advanced list manipulation techniques.

