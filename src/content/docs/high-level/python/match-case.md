---
title: Match and Case Statements 
sidebar:
  order: 14
---
## Match and Case Statements

In Python, the `match` statement is used to perform pattern matching on values. It allows you to match a value against multiple patterns and execute different code blocks based on the matched pattern.

Here's an example of how to use the `match` statement in Python:

```python
value = 3

match value:
    case 1:
        print("Value is 1")
    case 2:
        print("Value is 2")
    case 3:
        print("Value is 3")
    case _:
        print("Value does not match any pattern")
```

In the above example, the `match` statement is used to match the value of the `value` variable against different cases. If the value matches a case, the corresponding code block is executed. If none of the cases match, the code block under the `_` case is executed.

You can also use the `match` statement with patterns that include variables. Here's an example:

```python
value = 5

match value:
    case 1:
        print("Value is 1")
    case x if x > 1:
        print(f"Value is greater than 1: {x}")
    case _:
        print("Value does not match any pattern")
```

In this example, the second case uses a pattern with a variable `x` and a condition `if x > 1`. If the value is greater than 1, the code block under this case is executed.

The `match` statement provides a powerful way to handle different cases based on the value of a variable in Python.
