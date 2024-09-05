---
title: Datetime
sidebar:
  order: 24
---
The `datetime` module in Python provides classes for manipulating dates and times. It allows you to work with dates, times, and time intervals, perform arithmetic operations, and format dates and times.

To use the `datetime` module, you need to import it at the beginning of your Python script:

```python
import datetime
```

Once imported, you can create `datetime` objects to represent specific dates and times. Here's an example of creating a `datetime` object for the current date and time:

```python
current_datetime = datetime.datetime.now()
print(current_datetime)
```

You can also create `datetime` objects for specific dates and times by passing the year, month, day, hour, minute, and second as arguments. For example:

```python
specific_datetime = datetime.datetime(2022, 1, 1, 12, 0, 0)
print(specific_datetime)
```

The `datetime` objects have various attributes and methods that allow you to extract information or perform operations. For example, you can access the year, month, day, hour, minute, and second of a `datetime` object using its attributes:

```python
print(current_datetime.year)
print(current_datetime.month)
print(current_datetime.day)
print(current_datetime.hour)
print(current_datetime.minute)
print(current_datetime.second)
```

You can also perform arithmetic operations on `datetime` objects, such as adding or subtracting time intervals. Here's an example of adding 1 day to the current date:

```python
next_day = current_datetime + datetime.timedelta(days=1)
print(next_day)
```

The `datetime` module also provides functions for formatting dates and times into strings. For example, you can format a `datetime` object as a string in a specific format using the `strftime` method:

```python
formatted_datetime = current_datetime.strftime("%Y-%m-%d %H:%M:%S")
print(formatted_datetime)
```

This will output the current date and time in the format "YYYY-MM-DD HH:MM:SS".

These are just a few examples of what you can do with the `datetime` module in Python. It offers many more features and functionalities for working with dates and times.
