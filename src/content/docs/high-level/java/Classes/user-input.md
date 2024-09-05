---
title: User Input
sidebar:
  order: 14
---

## User Input in Java

In Java, you can use the `Scanner` class to read user input from the console. Here's an example:

```java
import java.util.Scanner;

public class UserInputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.println("Hello, " + name + "! You are " + age + " years old.");
        
        scanner.close();
    }
}
```

In the above example, we first create a `Scanner` object to read input from the console. We then prompt the user to enter their name and age. The `nextLine()` method is used to read a line of text, while the `nextInt()` method is used to read an integer.

Finally, we display a message that includes the user's name and age. Don't forget to close the `Scanner` object at the end to release system resources.

This is just a basic example of user input in Java. You can explore more advanced techniques and error handling as you become more familiar with the language.

Remember to import the `java.util.Scanner` class at the beginning of your Java file to use the `Scanner` class.

I hope this helps! Let me know if you have any further questions.