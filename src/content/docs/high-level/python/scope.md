---
title: Scope
sidebar:
  order: 23
---
## Scope in Python

In Python, scope refers to the visibility and accessibility of variables within a program. Understanding scope is crucial for writing clean and maintainable code.

### Local Scope

Variables defined inside a function have local scope. They are only accessible within that function. Here's an example:

```python
def greet():
    message = "Hello, world!"
    print(message)

greet()  # Output: Hello, world!
print(message)  # Error: NameError: name 'message' is not defined
```

In the above example, the `message` variable is defined inside the `greet()` function and can only be accessed within that function. Trying to access it outside the function will result in a `NameError`.

### Global Scope

Variables defined outside any function or class have global scope. They can be accessed from anywhere within the program. Here's an example:

```python
count = 0

def increment():
    global count
    count += 1

increment()
print(count)  # Output: 1
```

In the above example, the `count` variable is defined outside the `increment()` function and can be accessed and modified within the function using the `global` keyword.

### Enclosing Scope

In Python, when a function is defined inside another function, it creates a new scope called the enclosing scope. Variables defined in the enclosing scope are accessible within the inner function. Here's an example:

```python
def outer():
    x = 10

    def inner():
        print(x)

    inner()  # Output: 10

outer()
```

In the above example, the `inner()` function is defined inside the `outer()` function. The `x` variable is defined in the enclosing scope of `inner()` and can be accessed within the inner function.

### Built-in Scope

Python has a built-in scope that contains all the built-in functions and modules. These functions and modules are accessible from anywhere within the program without the need for any import statements. Here's an example:

```python
import math

print(math.sqrt(25))  # Output: 5.0
```

In the above example, the `math` module is part of the built-in scope and can be accessed directly without any import statements.

Understanding scope in Python is essential for writing efficient and bug-free code. By properly managing the scope of variables, you can avoid naming conflicts and improve the overall structure of your programs.
