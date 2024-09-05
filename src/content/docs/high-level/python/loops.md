---
title: Loops
sidebar:
  order: 15
---
## Loops in Python

In Python, loops are used to repeatedly execute a block of code until a certain condition is met. There are two types of loops in Python: `for` loop and `while` loop.

### 1. For Loop

The `for` loop is used to iterate over a sequence (such as a list, tuple, or string) or other iterable objects. It executes a block of code for each item in the sequence.

Here's the syntax of a `for` loop in Python:

```python
for item in sequence:
    # code to be executed
```

Example:

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

### 2. While Loop

The `while` loop is used to repeatedly execute a block of code as long as a certain condition is true. It continues to execute the code until the condition becomes false.

Here's the syntax of a `while` loop in Python:

```python
while condition:
    # code to be executed
```

Example:

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

Output:
```
0
1
2
3
4
```

These are the basic concepts of loops in Python. They are powerful tools for automating repetitive tasks and iterating over data structures.
