---
title: JSON
sidebar:
  order: 26
---
## JSON in Python

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is widely used in web applications to transmit data between a server and a client.

In Python, you can work with JSON using the built-in `json` module. This module provides functions for encoding Python objects into JSON strings, and decoding JSON strings into Python objects.

Here's an example of how to use the `json` module in Python:

```python
import json

# Create a Python dictionary
data = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Convert the dictionary to a JSON string
json_data = json.dumps(data)

# Print the JSON string
print(json_data)

# Convert the JSON string back to a Python object
python_data = json.loads(json_data)

# Print the Python object
print(python_data)
```

This example demonstrates how to encode a Python dictionary into a JSON string using `json.dumps()`, and decode the JSON string back into a Python object using `json.loads()`.

By using the `json` module, you can easily work with JSON data in Python and integrate it with your applications.
