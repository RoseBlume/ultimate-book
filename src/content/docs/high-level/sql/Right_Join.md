---
title: Right Join
sidebar:
  order: 27
---
```sql
SELECT *
FROM table1
RIGHT JOIN table2
ON table1.id = table2.id;
```
In this example, we are performing a right join between `table1` and `table2` based on the `id` column. The result will include all rows from `table2` and the matching rows from `table1`. If there is no match, the result will contain NULL values for the columns of `table1`.