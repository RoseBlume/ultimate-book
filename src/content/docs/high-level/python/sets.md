---
title: Sets
sidebar:
    order: 11
---

# Introduction to sets in Python

In Python, a set is an unordered collection of unique elements. Sets are useful when you want to store multiple items without any particular order and ensure that each item appears only once.

## Accessing Set Items

To access the items in a set, you can use a loop or convert the set to a list or tuple.

```python
my_set = {1, 2, 3, 4, 5}

# Loop through the set
for item in my_set:
        print(item)

# Convert the set to a list
my_list = list(my_set)
print(my_list)

# Convert the set to a tuple
my_tuple = tuple(my_set)
print(my_tuple)
```

## Adding Set Items

You can add items to a set using the `add()` method or the `update()` method.

```python
my_set = {1, 2, 3}

# Add a single item to the set
my_set.add(4)
print(my_set)

# Add multiple items to the set
my_set.update([5, 6, 7])
print(my_set)
```

## Removing Set Items

To remove items from a set, you can use the `remove()` method or the `discard()` method.

```python
my_set = {1, 2, 3, 4, 5}

# Remove a specific item from the set
my_set.remove(3)
print(my_set)

# Remove an item from the set if it exists
my_set.discard(6)
print(my_set)
```

## Looping Through Sets

You can loop through a set using a for loop, similar to how you loop through a list or tuple.

```python
my_set = {1, 2, 3, 4, 5}

for item in my_set:
        print(item)
```

## Joining Sets

You can join two or more sets together using the `union()` method or the `update()` method.

```python
set1 = {1, 2, 3}
set2 = {4, 5, 6}

# Join two sets using the union() method
set3 = set1.union(set2)
print(set3)

# Join two sets using the update() method
set1.update(set2)
print(set1)
```

