---
title: Variables
sidebar:
    order: 2
---

## Creating and Casting Variables

In Python, you can create variables by assigning a value to a name. Python is a dynamically typed language, which means you don't need to explicitly declare the variable type. Here's an example:

```python
# Creating an integer variable
age = 25

# Creating a string variable
name = "John Doe"

# Creating a boolean variable
is_student = True
```

You can also cast variables from one type to another using built-in functions like `int()`, `float()`, `str()`, etc. For example:

```python
# Casting a string to an integer
num1 = int("10")

# Casting an integer to a string
num2 = str(5)

# Casting a float to an integer
num3 = int(3.14)
```

## Variable Names

When naming variables in Python, there are a few rules to follow:

- Variable names can contain letters, numbers, and underscores.
- Variable names cannot start with a number.
- Variable names are case-sensitive.

Here are some examples of valid variable names:

```python
my_variable = 10
user_name = "John"
is_active = True
```

## Assigning Multiple Values

In Python, you can assign multiple values to multiple variables in a single line using the unpacking feature. Here's an example:

```python
# Assigning multiple values to multiple variables
x, y, z = 1, 2, 3

# Swapping variable values
a, b = b, a
```

## Outputting Variables

To output the value of a variable in Python, you can use the `print()` function. Here's an example:

```python
name = "John"
age = 25

print("Name:", name)
print("Age:", age)
```

## Global Variables

In Python, you can define global variables that can be accessed from anywhere in your code. Here's an example:

```python
# Defining a global variable
global_var = "I am a global variable"

def my_function():
        # Accessing the global variable
        print(global_var)

my_function()  # Output: I am a global variable
```

Remember to use global variables sparingly and consider using function parameters instead for better code organization.

