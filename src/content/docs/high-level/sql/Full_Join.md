---
title: Full Join
sidebar:
  order: 28
---
```sql
SELECT *
FROM table1
FULL JOIN table2
ON table1.id = table2.id;
```
In this example, we are performing a full join between `table1` and `table2` based on the `id` column. The `FULL JOIN` keyword returns all rows from both tables, matching rows from both tables where the join condition is met, and `NULL` values where there is no match.

This type of join is useful when you want to combine the results of a left join and a right join, ensuring that all rows from both tables are included in the result set.

You can customize the join condition based on your specific requirements.