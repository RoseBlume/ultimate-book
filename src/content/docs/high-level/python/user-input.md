---
title: User Input
sidebar:
  order: 30
---
## User Input

In Python, you can use the `input()` function to prompt the user for input. The `input()` function reads a line of text entered by the user and returns it as a string.

Here's an example:

```python
name = input("Enter your name: ")
print("Hello, " + name + "!")
```

In the above example, the `input()` function prompts the user to enter their name. The entered name is then stored in the `name` variable. Finally, the program prints a greeting message using the entered name.

You can also convert the user input to other data types. For example, if you want to read an integer from the user, you can use the `int()` function to convert the input string to an integer.

```python
age = int(input("Enter your age: "))
print("You are " + str(age) + " years old.")
```

In this example, the `input()` function reads the user's age as a string. The `int()` function is then used to convert the input string to an integer. Finally, the program prints the user's age.

Remember to handle any potential errors that may occur when converting user input to different data types.
