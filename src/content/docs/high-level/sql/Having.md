---
title: Having
sidebar:
  order: 32
---
```sql
SELECT column1, column2
FROM table
GROUP BY column1
HAVING COUNT(column2) > 10;
```
In this example, we are using the `HAVING` clause in SQL. The `HAVING` clause is used to filter the results of a `GROUP BY` query based on a condition. In the above query, we are selecting `column1` and `column2` from a table and grouping the results by `column1`. Then, we are applying a condition in the `HAVING` clause that only includes the groups where the count of `column2` is greater than 10.

The `HAVING` clause is similar to the `WHERE` clause, but it operates on the grouped results rather than individual rows. It allows us to filter the groups based on aggregate functions like `COUNT`, `SUM`, `AVG`, etc.

Note that the `HAVING` clause can only be used in conjunction with the `GROUP BY` clause. It is used to filter the groups, whereas the `WHERE` clause is used to filter individual rows before grouping.

By using the `HAVING` clause, we can further refine our query results based on aggregate conditions, allowing for more complex and specific data analysis.