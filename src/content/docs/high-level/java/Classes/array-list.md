---
title: Array List 
sidebar:
  order: 16
---

# Array List

The `ArrayList` class in Java is a resizable array implementation of the `List` interface. It provides dynamic resizing, allowing you to add or remove elements as needed.

## Creating an ArrayList

To create an `ArrayList` in Java, you can use the following syntax:

```java
ArrayList<String> list = new ArrayList<>();
```

In this example, we create an `ArrayList` that can hold `String` objects.

## Adding Elements

You can add elements to an `ArrayList` using the `add()` method. Here's an example:

```java
list.add("Apple");
list.add("Banana");
list.add("Orange");
```

## Accessing Elements

To access elements in an `ArrayList`, you can use the `get()` method. The index starts from 0. Here's an example:

```java
String firstElement = list.get(0);
System.out.println(firstElement); // Output: Apple
```

## Removing Elements

To remove elements from an `ArrayList`, you can use the `remove()` method. Here's an example:

```java
list.remove("Banana");
```

## Size of ArrayList

To get the size of an `ArrayList`, you can use the `size()` method. Here's an example:

```java
int size = list.size();
System.out.println(size); // Output: 2
```

This is a basic overview of using `ArrayList` in Java. You can explore more methods and functionalities in the official Java documentation.
