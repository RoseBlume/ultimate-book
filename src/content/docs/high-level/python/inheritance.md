---
title: Inheritance
sidebar:
  order: 20
---
## Inheritance in Python

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows classes to inherit attributes and methods from other classes. In Python, you can create a new class that inherits from an existing class by using the `class` keyword followed by the name of the new class and the name of the existing class in parentheses.

Here's an example:

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} is speaking")

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def bark(self):
        print(f"{self.name} is barking")

dog = Dog("Buddy", "Labrador")
dog.speak()  # Output: Buddy is speaking
dog.bark()   # Output: Buddy is barking
```

In the example above, we have a base class `Animal` with an `__init__` method and a `speak` method. The `Dog` class inherits from the `Animal` class and adds its own `__init__` method and a `bark` method. We create an instance of the `Dog` class and call the `speak` and `bark` methods.

By using inheritance, we can reuse code and create more specialized classes that inherit common attributes and behaviors from a base class. This promotes code reusability and makes our code more organized and maintainable.

In addition to inheriting attributes and methods, a derived class can also override methods from the base class to provide its own implementation. This is known as method overriding.

```python
class Cat(Animal):
    def speak(self):
        print(f"{self.name} is meowing")

cat = Cat("Whiskers")
cat.speak()  # Output: Whiskers is meowing
```

In the example above, the `Cat` class inherits the `speak` method from the `Animal` class but provides its own implementation.

In conclusion, inheritance is a powerful feature in Python that allows classes to inherit attributes and methods from other classes. It promotes code reusability and makes our code more organized and maintainable.
```
