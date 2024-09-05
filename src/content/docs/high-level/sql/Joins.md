---
title: Joins
sidebar:
  order: 24
---
## Introduction to Joins

In SQL, a join is used to combine rows from two or more tables based on a related column between them. Joins are essential for retrieving data from multiple tables and creating meaningful relationships between them.

There are different types of joins in SQL, including:

- Inner Join: Returns only the matching rows from both tables.
- Left Join: Returns all the rows from the left table and the matching rows from the right table.
- Right Join: Returns all the rows from the right table and the matching rows from the left table.
- Full Outer Join: Returns all the rows from both tables, including the unmatched rows.

To perform a join, you need to specify the tables you want to join and the columns that establish the relationship between them using the `JOIN` keyword. Here's a basic syntax for an inner join:

```sql
SELECT column1, column2, ...
FROM table1
JOIN table2 ON table1.column = table2.column;
```

You can replace `JOIN` with `LEFT JOIN`, `RIGHT JOIN`, or `FULL OUTER JOIN` to perform different types of joins.

Joins are powerful tools in SQL that allow you to combine data from multiple tables and extract meaningful insights. Understanding how to use joins effectively is crucial for working with relational databases.

For more information on SQL joins, refer to the [official documentation](https://docs.microsoft.com/en-us/sql/relational-databases/performance/joins?view=sql-server-ver15).
