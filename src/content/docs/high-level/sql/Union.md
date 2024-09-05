---
title: Union
sidebar:
  order: 30
---
```sql
SELECT column1, column2
FROM table1
UNION
SELECT column1, column2
FROM table2;
```
In the above example, the `UNION` operator is used to combine the result sets of two or more `SELECT` statements into a single result set. The columns in the result set must have the same data types in the same order.

The `UNION` operator removes duplicate rows from the result set. If you want to include duplicate rows, you can use the `UNION ALL` operator instead.

Note that the number and order of columns in the `SELECT` statements must be the same for the `UNION` operator to work correctly.

For more information on the `UNION` operator, you can refer to the [official documentation](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/set-operators-union-transact-sql?view=sql-server-ver15).