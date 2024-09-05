---
title: Iterators
sidebar:
  order: 21
---

# Iterators in Java

In Java, an iterator is an object that allows you to traverse through a collection of elements. It provides methods to access and manipulate the elements of the collection.

## Example Usage

Here's an example of how to use an iterator in Java:

```java
import java.util.ArrayList;
import java.util.Iterator;

public class IteratorExample {
    public static void main(String[] args) {
        // Create a list of integers
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        numbers.add(5);

        // Get an iterator for the list
        Iterator<Integer> iterator = numbers.iterator();

        // Iterate through the list using the iterator
        while (iterator.hasNext()) {
            int number = iterator.next();
            System.out.println(number);
        }
    }
}
```

In the above example, we create an `ArrayList` of integers and add some numbers to it. We then obtain an iterator for the list using the `iterator()` method. We can then use the iterator to iterate through the list and print each element.

Iterators provide methods like `hasNext()` to check if there are more elements in the collection, and `next()` to retrieve the next element.

Using iterators can be useful when you need to perform operations on each element of a collection without knowing the specific implementation details of the collection.

That's it! You now have a basic understanding of iterators in Java.
