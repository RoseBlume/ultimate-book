---
title: Date
sidebar:
  order: 15
---

# Date

In Java, the `Date` class is used to represent dates and times. It provides various methods to manipulate and format dates.

## Creating a Date Object

To create a `Date` object, you can use the `new` keyword followed by the `Date` constructor. Here's an example:

```java
Date currentDate = new Date();
```

## Formatting Dates

The `SimpleDateFormat` class can be used to format dates according to a specific pattern. Here's an example:

```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        String formattedDate = dateFormat.format(currentDate);
        System.out.println("Formatted Date: " + formattedDate);
    }
}
```

This will output the current date in the format "dd/MM/yyyy".

## Manipulating Dates

The `Date` class provides methods to manipulate dates, such as adding or subtracting days, months, or years. Here's an example:

```java
import java.util.Calendar;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Date currentDate = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(currentDate);
        calendar.add(Calendar.DAY_OF_MONTH, 7);
        Date newDate = calendar.getTime();
        System.out.println("New Date: " + newDate);
    }
}
```

This will add 7 days to the current date and print the new date.

Remember to import the necessary classes before using them.

For more information, refer to the [Java Date documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html).
