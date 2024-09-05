---
title: Linked Lists
sidebar:
  order: 17
---
A linked list is a data structure consisting of a sequence of nodes, where each node contains a value and a reference to the next node in the sequence. In Java, we can implement a linked list using the `LinkedList` class from the `java.util` package.

Here's an example of creating a linked list in Java:

```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        // Create a new linked list
        LinkedList<String> linkedList = new LinkedList<>();

        // Add elements to the linked list
        linkedList.add("Apple");
        linkedList.add("Banana");
        linkedList.add("Orange");

        // Print the linked list
        System.out.println(linkedList);
    }
}
```

Output:
```
[Apple, Banana, Orange]
```

In the above example, we first import the `LinkedList` class from the `java.util` package. Then, we create a new instance of the `LinkedList` class and add elements to it using the `add` method. Finally, we print the linked list using the `System.out.println` method.

Linked lists are useful when we need to frequently insert or delete elements from a collection, as they provide efficient insertion and deletion operations compared to other data structures like arrays.

That's a basic introduction to linked lists in Java. You can explore more about the `LinkedList` class and its methods in the [Java documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/LinkedList.html).
