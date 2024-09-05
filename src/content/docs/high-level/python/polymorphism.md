---
title: Polymorphism
sidebar:
  order: 22
---
## What is Polymorphism?

Polymorphism is a fundamental concept in object-oriented programming that allows objects of different types to be treated as objects of a common base type. This means that a single interface can be used to represent multiple types of objects.

In Python, polymorphism is achieved through method overriding and method overloading.

### Method Overriding

Method overriding occurs when a subclass defines a method with the same name as a method in its superclass. The subclass method overrides the implementation of the superclass method, allowing the subclass to provide its own implementation.

Here's an example:

```python
class Animal:
    def sound(self):
        print("The animal makes a sound")

class Dog(Animal):
    def sound(self):
        print("The dog barks")

class Cat(Animal):
    def sound(self):
        print("The cat meows")

# Create instances of the classes
animal = Animal()
dog = Dog()
cat = Cat()

# Call the sound method on each instance
animal.sound()  # Output: The animal makes a sound
dog.sound()     # Output: The dog barks
cat.sound()     # Output: The cat meows
```

In the example above, the `Animal` class has a `sound` method. The `Dog` and `Cat` classes inherit from the `Animal` class and override the `sound` method with their own implementations. When the `sound` method is called on each instance, the appropriate implementation is executed.

### Method Overloading

Method overloading occurs when a class has multiple methods with the same name but different parameters. The appropriate method is called based on the number and types of arguments passed to it.

Unlike some other programming languages, Python does not support method overloading by default. However, you can achieve a similar effect by using default parameter values or variable-length argument lists.

Here's an example using default parameter values:

```python
class Calculator:
    def add(self, a, b=None):
        if b is None:
            return a
        else:
            return a + b

# Create an instance of the Calculator class
calculator = Calculator()

# Call the add method with different numbers of arguments
print(calculator.add(5))        # Output: 5
print(calculator.add(2, 3))     # Output: 5
```

In the example above, the `Calculator` class has an `add` method that can accept one or two arguments. If only one argument is provided, the method returns the argument itself. If two arguments are provided, the method returns their sum.
