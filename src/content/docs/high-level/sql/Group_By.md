---
title: Group By
sidebar:
  order: 31
---
```sql
SELECT column1, column2, aggregate_function(column3)
FROM table_name
GROUP BY column1, column2;
```
In SQL, the `GROUP BY` clause is used to group rows based on one or more columns. It is often used in conjunction with aggregate functions like `SUM`, `COUNT`, `AVG`, etc. The `GROUP BY` clause divides the result set into groups based on the specified columns, and the aggregate function is applied to each group separately.

For example, the following query groups the rows in the `table_name` by `column1` and `column2`, and calculates the sum of `column3` for each group:

```sql
SELECT column1, column2, SUM(column3)
FROM table_name
GROUP BY column1, column2;
```

This will return a result set with the grouped columns (`column1` and `column2`) and the sum of `column3` for each group.

Note that any column that is not included in the `GROUP BY` clause or an aggregate function must be omitted from the `SELECT` clause.

The `GROUP BY` clause is a powerful tool for analyzing data and generating summary reports in SQL. It allows you to perform calculations on groups of data rather than individual rows, providing valuable insights into your data.