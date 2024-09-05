---
title: Random
sidebar:
  order: 25
---
## Generating Random Numbers in Python

To generate random numbers in Python, you can use the `random` module. This module provides various functions for generating random numbers and selecting random elements from a sequence.

### Generating a Random Integer

To generate a random integer within a specified range, you can use the `randint()` function. This function takes two arguments: the lower bound (inclusive) and the upper bound (exclusive).

```python
import random

random_number = random.randint(1, 10)
print(random_number)
```

In the above example, `random_number` will be assigned a random integer between 1 and 10 (inclusive of 1, but exclusive of 10). The output will vary each time the code is run.

### Generating a Random Float

If you need to generate a random floating-point number, you can use the `uniform()` function. This function takes two arguments: the lower bound and the upper bound.

```python
import random

random_float = random.uniform(0.0, 1.0)
print(random_float)
```

In the above example, `random_float` will be assigned a random floating-point number between 0.0 and 1.0 (inclusive of 0.0, but exclusive of 1.0). The output will vary each time the code is run.

### Selecting a Random Element from a List

To select a random element from a list, you can use the `choice()` function. This function takes a list as an argument and returns a randomly selected element from that list.

```python
import random

fruits = ["apple", "banana", "orange", "grape", "kiwi"]
random_fruit = random.choice(fruits)
print(random_fruit)
```

In the above example, `random_fruit` will be assigned a random fruit from the `fruits` list. The output will vary each time the code is run.

These are just a few examples of how you can generate random numbers and select random elements in Python using the `random` module. Experiment with different functions and explore the module's documentation for more options.
