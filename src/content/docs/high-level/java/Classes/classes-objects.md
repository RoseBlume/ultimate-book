---
title: Classes and Objects
sidebar:
  order: 2
---

# Classes and Objects

In Java, classes and objects are fundamental concepts. A class is a blueprint for creating objects, while an object is an instance of a class.

## Creating a Class

To create a class in Java, you use the `class` keyword followed by the class name. Here's an example:

```java
public class Car {
    // class body
}
```

## Creating an Object

To create an object in Java, you use the `new` keyword followed by the class name and parentheses. Here's an example:

```java
Car myCar = new Car();
```

## Accessing Class Members

You can access class members (fields and methods) using the dot operator (`.`). Here's an example:

```java
myCar.color = "red";
myCar.startEngine();
```

## Example: Car Class

Here's an example of a `Car` class with some fields and methods:

```java
public class Car {
    String color;
    int year;
    
    public void startEngine() {
        System.out.println("Engine started");
    }
    
    public void stopEngine() {
        System.out.println("Engine stopped");
    }
}
```

## Conclusion

In this guide, you learned about classes and objects in Java. Classes serve as blueprints for creating objects, and objects are instances of classes. You also learned how to create a class, create an object, and access class members.

Remember to practice and experiment with classes and objects to solidify your understanding of this important concept in Java programming.
