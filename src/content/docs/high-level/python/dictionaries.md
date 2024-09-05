---
title: Dictionaries
sidebar:
  order: 12
---

In Python, a dictionary is an unordered collection of key-value pairs. It is represented by curly braces `{}` and each key-value pair is separated by a colon `:`. Dictionaries are mutable, meaning their values can be changed.

Example:
```python
# Creating a dictionary
my_dict = {"name": "John", "age": 25, "city": "New York"}

# Printing the dictionary
print(my_dict)
```

## Accessing Dictionary Items

To access a value in a dictionary, you can use the key as the index. If the key does not exist, it will raise a `KeyError` exception. Alternatively, you can use the `get()` method, which returns `None` if the key is not found.

Example:
```python
# Accessing dictionary items
print(my_dict["name"])  # Output: John
print(my_dict.get("age"))  # Output: 25
```

## Changing Items

To change the value of a specific key in a dictionary, you can simply assign a new value to it.

Example:
```python
# Changing dictionary items
my_dict["age"] = 30
print(my_dict)  # Output: {"name": "John", "age": 30, "city": "New York"}
```

## Adding Items

To add a new key-value pair to a dictionary, you can simply assign a value to a new key.

Example:
```python
# Adding dictionary items
my_dict["occupation"] = "Engineer"
print(my_dict)  # Output: {"name": "John", "age": 30, "city": "New York", "occupation": "Engineer"}
```

## Removing Items

To remove a key-value pair from a dictionary, you can use the `del` keyword followed by the key.

Example:
```python
# Removing dictionary items
del my_dict["city"]
print(my_dict)  # Output: {"name": "John", "age": 30, "occupation": "Engineer"}
```

## Looping Through Dictionaries

You can loop through a dictionary using a `for` loop. By default, the loop iterates over the keys of the dictionary. To access both the keys and values, you can use the `items()` method.

Example:
```python
# Looping through dictionary items
for key in my_dict:
    print(key, my_dict[key])

# Output:
# name John
# age 30
# occupation Engineer
```

## Copying Dictionaries

To create a copy of a dictionary, you can use the `copy()` method or the dictionary constructor.

Example:
```python
# Copying dictionaries
new_dict = my_dict.copy()
print(new_dict)  # Output: {"name": "John", "age": 30, "occupation": "Engineer"}
```

## Nesting Dictionaries

Dictionaries can be nested inside other dictionaries, allowing you to create more complex data structures.

Example:
```python
# Nesting dictionaries
my_dict["details"] = {"height": 180, "weight": 75}
print(my_dict)  # Output: {"name": "John", "age": 30, "occupation": "Engineer", "details": {"height": 180, "weight": 75}}
```
