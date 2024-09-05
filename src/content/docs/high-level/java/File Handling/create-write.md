---
title: Creating and Writing to Files
sidebar:
  order: 1
---

## Creating and Writing to Files

In Java, you can create and write to files using the `FileWriter` class. Here's an example:

```java
import java.io.FileWriter;
import java.io.IOException;

public class FileExample {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("output.txt");
            writer.write("Hello, World!");
            writer.close();
            System.out.println("File created and written successfully.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
```

## Reading Files

To read files in Java, you can use the `FileReader` class. Here's an example:

```java
import java.io.FileReader;
import java.io.IOException;

public class FileExample {
    public static void main(String[] args) {
        try {
            FileReader reader = new FileReader("input.txt");
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
            reader.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
```

## Deleting Files

To delete files in Java, you can use the `File` class. Here's an example:

```java
import java.io.File;

public class FileExample {
    public static void main(String[] args) {
        File file = new File("output.txt");
        if (file.delete()) {
            System.out.println("File deleted successfully.");
        } else {
            System.out.println("Failed to delete the file.");
        }
    }
}
```

Remember to handle exceptions appropriately when working with files in Java.
