---
title: Hash Set
sidebar:
  order: 20
---

In Java, a `HashSet` is an implementation of the `Set` interface that uses a hash table to store elements. It does not guarantee the order of elements and allows null values.

## Creating a HashSet

To create a `HashSet` in Java, you can use the following syntax:

```java
Set<String> set = new HashSet<>();
```

## Adding Elements

You can add elements to a `HashSet` using the `add()` method. Here's an example:

```java
Set<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Orange");
```

## Removing Elements

To remove an element from a `HashSet`, you can use the `remove()` method. Here's an example:

```java
Set<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Orange");

set.remove("Banana");
```

## Iterating Over a HashSet

You can iterate over the elements of a `HashSet` using a for-each loop. Here's an example:

```java
Set<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Orange");

for (String element : set) {
    System.out.println(element);
}
```

This will output:

```
Apple
Banana
Orange
```

## Conclusion

In this guide, you learned about the `HashSet` class in Java and how to use it to store and manipulate a collection of elements. Remember that a `HashSet` does not guarantee the order of elements and allows null values.
