---
title: RegEx
sidebar:
  order: 27
---
## Introduction to Regular Expressions in Python

Regular expressions, also known as regex, are powerful tools for pattern matching and text manipulation. In Python, regular expressions are supported through the `re` module.

### Basic Syntax

To use regular expressions in Python, you need to import the `re` module:

```python
import re
```

### Matching Patterns

The `re` module provides various functions for matching patterns in strings. Here are a few commonly used functions:

- `re.match(pattern, string)`: Checks if the pattern matches at the beginning of the string.
- `re.search(pattern, string)`: Searches the string for a match to the pattern.
- `re.findall(pattern, string)`: Returns all non-overlapping matches of the pattern in the string.

### Examples

Here are some examples to illustrate the usage of regular expressions in Python:

1. Matching a specific word:

```python
import re

string = "Hello, World!"
pattern = r"Hello"
match = re.match(pattern, string)
print(match)  # Output: <re.Match object; span=(0, 5), match='Hello'>
```

2. Searching for a pattern:

```python
import re

string = "The quick brown fox jumps over the lazy dog."
pattern = r"fox"
match = re.search(pattern, string)
print(match)  # Output: <re.Match object; span=(16, 19), match='fox'>
```

3. Finding all occurrences of a pattern:

```python
import re

string = "The cat in the hat sat on the mat."
pattern = r"at"
matches = re.findall(pattern, string)
print(matches)  # Output: ['at', 'at', 'at', 'at']
```

These are just a few examples to get you started with regular expressions in Python. Regular expressions offer a wide range of features and can be used for complex pattern matching tasks.

For more information and advanced usage, refer to the [Python documentation on regular expressions](https://docs.python.org/3/library/re.html).
