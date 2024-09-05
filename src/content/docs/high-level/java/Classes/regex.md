---
title: RegEX
sidebar:
  order: 23
---
# Regular Expressions in Java

Regular expressions, also known as regex, are powerful tools for pattern matching and manipulation of strings in Java. They allow you to search, validate, and manipulate text based on specific patterns.

## Creating a Regex Pattern

To use regular expressions in Java, you need to create a `Pattern` object. Here's an example:

```java
import java.util.regex.Pattern;

public class RegexExample {
    public static void main(String[] args) {
        String regex = "hello";
        String text = "Hello, World!";

        Pattern pattern = Pattern.compile(regex);
        boolean matches = pattern.matcher(text).find();

        System.out.println("Matches: " + matches);
    }
}
```

In the above example, we create a `Pattern` object using the `Pattern.compile()` method and then use the `matcher()` method to check if the pattern matches the given text.

## Matching Patterns

To match a pattern in a string, you can use the `matches()` method of the `Matcher` class. Here's an example:

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExample {
    public static void main(String[] args) {
        String regex = "\\d+";
        String text = "12345";

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(text);

        if (matcher.matches()) {
            System.out.println("Pattern matched!");
        } else {
            System.out.println("Pattern not matched!");
        }
    }
}
```

In the above example, we use the `matches()` method to check if the entire string matches the given pattern.

## Extracting Matches

You can also extract specific matches from a string using the `find()` method of the `Matcher` class. Here's an example:

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExample {
    public static void main(String[] args) {
        String regex = "\\b\\w+\\b";
        String text = "Hello, World!";

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(text);

        while (matcher.find()) {
            System.out.println("Match: " + matcher.group());
        }
    }
}
```

In the above example, we use the `find()` method to find all occurrences of the pattern in the given text and then use the `group()` method to get the matched substring.

## Conclusion

Regular expressions are a powerful tool for pattern matching and manipulation of strings in Java. They provide a flexible and efficient way to search, validate, and manipulate text based on specific patterns.