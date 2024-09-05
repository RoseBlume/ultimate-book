---
title: File Handling
sidebar:
  order: 28
---
## Creating Files

To create a file in Python, you can use the `open()` function with the mode set to `'w'` (write). This will create a new file if it doesn't exist, or overwrite the existing file if it does.

```python
# Create a new file
file = open("example.txt", "w")
file.close()
```

## Reading Files

To read the contents of a file in Python, you can use the `read()` method. This method reads the entire contents of the file as a string.

```python
# Read the contents of a file
file = open("example.txt", "r")
content = file.read()
print(content)
file.close()
```

## Writing Files

To write to a file in Python, you can use the `write()` method. This method writes the specified string to the file.

```python
# Write to a file
file = open("example.txt", "w")
file.write("Hello, World!")
file.close()
```

## Appending Files

To append to a file in Python, you can use the `write()` method with the mode set to `'a'` (append). This method appends the specified string to the end of the file.

```python
# Append to a file
file = open("example.txt", "a")
file.write("This is an appended line.")
file.close()
```

## Deleting Files

To delete a file in Python, you can use the `remove()` function from the `os` module. This function deletes the specified file.

```python
import os

# Delete a file
os.remove("example.txt")
```