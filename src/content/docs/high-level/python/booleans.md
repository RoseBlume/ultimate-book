---
title: Booleans
sidebar:
  order: 7
---
Booleans in Python are a data type that represents two values: True and False. They are used to perform logical operations and control the flow of a program.

Here are some examples of using booleans in Python:

```python
# Assigning boolean values to variables
is_sunny = True
is_raining = False

# Comparisons using booleans
temperature = 25
is_hot = temperature > 30
is_cold = temperature < 10

# Logical operations with booleans
is_weekend = True
is_saturday = True

# Using logical operators
is_fun_day = is_weekend and is_saturday
is_relaxing_day = is_weekend or is_saturday
is_not_weekend = not is_weekend

# Conditional statements with booleans
if is_sunny:
    print("It's a sunny day!")
else:
    print("It's not sunny today.")

# Looping with booleans
while is_raining:
    print("It's raining!")
    # Code to handle rainy weather

```

Booleans are an essential part of programming in Python as they allow you to make decisions and control the flow of your code based on certain conditions. They are often used in conditional statements, loops, and logical operations.
