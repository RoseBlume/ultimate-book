---
title: Iterators
sidebar:
  order: 21
---

In Python, an iterator is an object that allows you to traverse through a collection of elements one by one. It provides a way to access the elements of a collection sequentially without exposing its underlying representation.

To create an iterator in Python, you need to implement two methods: `__iter__()` and `__next__()`. The `__iter__()` method returns the iterator object itself, and the `__next__()` method returns the next element in the sequence.

Here's an example of creating a custom iterator in Python:

```python
class MyIterator:
    def __init__(self, data):
        self.data = data
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index >= len(self.data):
            raise StopIteration
        element = self.data[self.index]
        self.index += 1
        return element

# Usage
my_list = [1, 2, 3, 4, 5]
my_iterator = MyIterator(my_list)

for item in my_iterator:
    print(item)
```

In the above example, we define a custom iterator `MyIterator` that iterates over a list of numbers. The `__iter__()` method returns the iterator object itself, and the `__next__()` method returns the next element in the list. We can use this iterator in a `for` loop to iterate over the elements of the list.

Python also provides built-in iterators such as `list`, `tuple`, `set`, `dict`, and `string`. These built-in iterators can be used directly in a `for` loop without the need to implement the `__iter__()` and `__next__()` methods.

```python
my_list = [1, 2, 3, 4, 5]

for item in my_list:
    print(item)
```

In the above example, we use the built-in iterator of the `list` class to iterate over the elements of the list.

Iterators are memory efficient as they don't load the entire collection into memory at once. They generate the next element on the fly, which makes them suitable for working with large datasets.

That's a brief introduction to iterators in Python. They provide a powerful way to iterate over collections and perform operations on each element. Happy iterating!
```
