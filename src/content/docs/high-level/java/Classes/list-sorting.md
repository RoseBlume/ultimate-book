---
title: List Sorting
sidebar:
  order: 18
---

In Java, you can sort a list using the `Collections.sort()` method. This method sorts the elements of a list in ascending order.

Here's an example:

```java
import java.util.ArrayList;
import java.util.Collections;

public class ListSortingExample {
    public static void main(String[] args) {
        // Create a list of integers
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(5);
        numbers.add(2);
        numbers.add(8);
        numbers.add(1);
        numbers.add(10);

        // Sort the list
        Collections.sort(numbers);

        // Print the sorted list
        System.out.println(numbers);
    }
}
```

Output:
```
[1, 2, 5, 8, 10]
```

You can also sort a list in descending order by using the `Collections.reverse()` method after sorting it in ascending order.

```java
import java.util.ArrayList;
import java.util.Collections;

public class ListSortingExample {
    public static void main(String[] args) {
        // Create a list of integers
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(5);
        numbers.add(2);
        numbers.add(8);
        numbers.add(1);
        numbers.add(10);

        // Sort the list in ascending order
        Collections.sort(numbers);

        // Reverse the list
        Collections.reverse(numbers);

        // Print the sorted list in descending order
        System.out.println(numbers);
    }
}
```

Output:
```
[10, 8, 5, 2, 1]
```

That's how you can sort a list in Java using the `Collections.sort()` method.