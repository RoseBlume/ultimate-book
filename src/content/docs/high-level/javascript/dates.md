---
title: Dates
description: A guide in my new Starlight docs site.
---
## Dates in JavaScript

In JavaScript, dates can be represented using the `Date` object. This object provides various methods to work with dates and times.

To create a new date object, you can use the `new Date()` constructor. By default, it will create a date object representing the current date and time.

```javascript
const currentDate = new Date();
console.log(currentDate);
```

You can also create a date object by passing specific values for year, month, day, hour, minute, second, and millisecond.

```javascript
const specificDate = new Date(2022, 0, 1, 12, 0, 0, 0);
console.log(specificDate);
```

Once you have a date object, you can perform various operations on it. Here are some common operations:

- Getting the current date and time components:
    ```javascript
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const millisecond = currentDate.getMilliseconds();
    ```

- Formatting the date as a string:
    ```javascript
    const formattedDate = currentDate.toDateString();
    console.log(formattedDate);
    ```

- Performing arithmetic operations on dates:
    ```javascript
    const tomorrow = new Date();
    tomorrow.setDate(currentDate.getDate() + 1);
    console.log(tomorrow);
    ```

- Comparing dates:
    ```javascript
    const date1 = new Date(2022, 0, 1);
    const date2 = new Date(2022, 0, 2);
    if (date1 < date2) {
        console.log("date1 is before date2");
    } else if (date1 > date2) {
        console.log("date1 is after date2");
    } else {
        console.log("date1 and date2 are equal");
    }
    ```

These are just a few examples of what you can do with dates in JavaScript. The `Date` object provides many more methods and properties to work with dates and times.

For more information, you can refer to the [MDN documentation on Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).
