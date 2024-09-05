---
title: Left Join
sidebar:
  order: 26
---
```sql
SELECT *
FROM table1
LEFT JOIN table2
ON table1.id = table2.id;
```
In the above example, we are performing a left join between `table1` and `table2` based on the `id` column. This will return all the rows from `table1` and the matching rows from `table2`. If there is no match, NULL values will be returned for the columns of `table2`.