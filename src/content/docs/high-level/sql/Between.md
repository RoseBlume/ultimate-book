---
title: Between
sidebar:
  order: 22
---
```sql
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```
The `BETWEEN` operator is used in SQL to select values within a specified range. It retrieves records where the column value is between `value1` and `value2`, inclusive. This operator can be used with numeric, date, and string values.

For example, to retrieve all employees with salaries between $3000 and $5000, you can use the following query:

```sql
SELECT *
FROM employees
WHERE salary BETWEEN 3000 AND 5000;
```

This will return all the employee records whose salary falls within the specified range.

Remember that the `BETWEEN` operator includes both the lower and upper bounds. If you want to exclude either of the bounds, you can use the `>` (greater than) or `<` (less than) operators instead.
