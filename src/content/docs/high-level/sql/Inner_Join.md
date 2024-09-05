---
title: Inner Join
sidebar:
  order: 25
---
```sql
SELECT column1, column2
FROM table1
INNER JOIN table2
ON table1.column = table2.column;
```
In this example, the `INNER JOIN` keyword is used to combine rows from two or more tables based on a related column between them. The result set will only include the rows where the join condition is met.

Replace `column1`, `column2`, `table1`, `table2`, and `column` with the actual column and table names in your database.