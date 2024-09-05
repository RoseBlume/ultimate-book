---
title: Auto-Increment
sidebar:
  order: 57
---
title: Auto-Increment
sidebar:
  order: 57
---

Auto Increment is a feature in SQL that allows a column to automatically generate a unique value for each new row inserted into a table. It is commonly used to assign a unique identifier to each record in a table.

To enable auto increment for a column in SQL, you need to define the column as an integer data type and set it as the primary key of the table. Additionally, you need to specify the AUTO_INCREMENT attribute for the column.

Here's an example of creating a table with an auto increment column in SQL:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50)
);
```

In the above example, the `id` column is defined as an integer data type and set as the primary key. The AUTO_INCREMENT attribute ensures that a unique value is automatically generated for each new row inserted into the `users` table.

Auto increment is useful when you want to automatically generate unique identifiers for records, such as user IDs or order numbers. It simplifies the process of managing and ensuring uniqueness of these identifiers.