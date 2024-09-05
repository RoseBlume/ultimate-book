---
title: Hash Map
sidebar:
  order: 19
---

# Hash Map

The `HashMap` class in Java is a commonly used implementation of the `Map` interface. It provides a way to store key-value pairs, where each key is unique.

## Creating a HashMap

To create a `HashMap` object, you can use the following syntax:

```java
HashMap<KeyType, ValueType> hashMap = new HashMap<>();
```

Here, `KeyType` represents the type of the keys, and `ValueType` represents the type of the values.

## Adding Elements to a HashMap

You can add elements to a `HashMap` using the `put()` method. The `put()` method takes two parameters: the key and the value.

```java
hashMap.put(key, value);
```

Here's an example:

```java
HashMap<String, Integer> studentGrades = new HashMap<>();
studentGrades.put("John", 90);
studentGrades.put("Emily", 95);
studentGrades.put("Michael", 85);
```

## Accessing Elements in a HashMap

To access an element in a `HashMap`, you can use the `get()` method. The `get()` method takes the key as a parameter and returns the corresponding value.

```java
ValueType value = hashMap.get(key);
```

Here's an example:

```java
int johnGrade = studentGrades.get("John");
System.out.println("John's grade: " + johnGrade);
```

## Removing Elements from a HashMap

To remove an element from a `HashMap`, you can use the `remove()` method. The `remove()` method takes the key as a parameter and removes the corresponding key-value pair.

```java
hashMap.remove(key);
```

Here's an example:

```java
studentGrades.remove("Michael");
```

## Conclusion

In this guide, you learned about the `HashMap` class in Java and how to use it to store key-value pairs. You also learned how to add, access, and remove elements from a `HashMap`.