---
title: Count
sidebar:
  order: 16
---
```sql
SELECT COUNT(*) FROM table_name;
```

The `COUNT()` function is used in SQL to count the number of rows in a table. In the above example, `table_name` should be replaced with the actual name of the table you want to count the rows from.

This function can be useful when you want to know the total number of records in a table, or when you want to count the number of records that meet certain conditions by using the `WHERE` clause.

For example, to count the number of records in a table called `employees`, you would use the following query:

```sql
SELECT COUNT(*) FROM employees;
```

This will return a single value representing the total number of rows in the `employees` table.

Keep in mind that `COUNT(*)` counts all rows, including those with NULL values. If you want to exclude NULL values from the count, you can use the `COUNT(column_name)` syntax instead, where `column_name` is the name of a specific column in the table.

```sql
SELECT COUNT(column_name) FROM table_name;
```

This will count only the non-NULL values in the specified column.

Remember to always end your SQL statements with a semicolon (`;`) to indicate the end of the query.

For more advanced counting operations, you can also use the `GROUP BY` clause to count records based on specific criteria. This allows you to group the results and perform counts on subsets of data.

```sql
SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name;
```

This will return the count of records for each unique value in the specified column.

That's it! You now know how to use the `COUNT()` function in SQL to count rows in a table. Experiment with different tables and conditions to further explore the power of this function.
