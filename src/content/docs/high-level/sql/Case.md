---
title: Case
sidebar:
  order: 37
---
```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```
In SQL, the `CASE` statement is used to perform conditional logic. It allows you to specify different actions or values based on different conditions.

The basic syntax of the `CASE` statement is as follows:

```sql
CASE
  WHEN condition1 THEN result1
  WHEN condition2 THEN result2
  ...
  ELSE result
END
```

Here's an example to illustrate how the `CASE` statement works:

```sql
SELECT column1,
     column2,
     CASE
       WHEN condition1 THEN result1
       WHEN condition2 THEN result2
       ...
       ELSE result
     END AS new_column
FROM table_name;
```

In this example, the `CASE` statement is used to create a new column (`new_column`) based on certain conditions. If `condition1` is true, `result1` will be assigned to `new_column`. If `condition2` is true, `result2` will be assigned, and so on. If none of the conditions are met, the `ELSE` clause specifies the default value (`result`).

The `CASE` statement can be used in various scenarios, such as transforming data, performing calculations, or filtering results based on conditions. It provides a flexible way to handle conditional logic in SQL queries.

Remember to replace `column1`, `column2`, `table_name`, `condition`, `result1`, `result2`, and `new_column` with the actual names and values relevant to your SQL query.

For more information on the `CASE` statement, you can refer to the SQL documentation of your specific database management system.
