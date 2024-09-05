---
title: Wrapper Classes
sidebar:
  order: 22
---

# Classes and Objects: Wrapper Classes

In Java, **wrapper classes** are used to wrap the primitive data types into objects. This allows us to use the primitive data types as objects and perform various operations on them.

Wrapper classes provide a way to handle specific data types in a more object-oriented manner. For example, the `Integer` wrapper class can be used to store and manipulate integer values.

Here's an example of using the `Integer` wrapper class in Java:

```java
Integer num = new Integer(10);
System.out.println(num); // Output: 10

// Performing operations on the wrapped integer
int square = num * num;
System.out.println(square); // Output: 100
```

In the above example, we create an `Integer` object `num` and initialize it with the value `10`. We can then perform operations on this wrapped integer, such as calculating its square.

Similarly, there are wrapper classes available for other primitive data types like `Boolean`, `Character`, `Double`, etc. These wrapper classes provide useful methods and functionalities for working with the corresponding data types.

Using wrapper classes can be beneficial in scenarios where objects are required, such as when working with collections or when passing values to methods that expect objects.

Overall, wrapper classes in Java provide a convenient way to work with primitive data types as objects, enabling us to leverage the benefits of object-oriented programming.

