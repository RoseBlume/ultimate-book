---
title: Avg
sidebar:
  order: 18
---
title: Avg
sidebar:
  order: 18
---

## Average Calculation in SQL

To calculate the average of a column in SQL, you can use the `AVG()` function. This function takes the column name as an argument and returns the average value.

Here's an example of how to use the `AVG()` function:

```sql
SELECT AVG(column_name) AS average_value
FROM table_name;
```

Replace `column_name` with the name of the column you want to calculate the average for, and `table_name` with the name of the table.

You can also use the `AVG()` function with a `GROUP BY` clause to calculate the average for each group in a table. Here's an example:

```sql
SELECT column_name, AVG(column_name) AS average_value
FROM table_name
GROUP BY column_name;
```

This will calculate the average for each unique value in the `column_name` column.

Remember to use appropriate data types and handle NULL values when calculating averages in SQL.
