---
title: Select Top
sidebar:
  order: 13
---
```sql
SELECT TOP 10 * FROM table_name;
```

The `SELECT TOP` statement is used in SQL to retrieve a specified number of records from a table. In this example, we are selecting the top 10 records from the `table_name` table.

You can modify the number after `TOP` to retrieve a different number of records. For example, `SELECT TOP 5 * FROM table_name;` would retrieve the top 5 records.

It's important to note that the specific syntax for the `SELECT TOP` statement may vary depending on the database management system you are using. Some databases may use `LIMIT` or other keywords instead of `TOP`.

Make sure to replace `table_name` with the actual name of the table you want to retrieve records from.

Remember to include the necessary conditions and ordering if needed to get the desired results.

For more information on the `SELECT TOP` statement, you can refer to the documentation of your specific database management system.
