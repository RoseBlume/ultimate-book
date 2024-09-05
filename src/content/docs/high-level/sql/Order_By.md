---
title: Order By
sidebar:
  order: 8
---
```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 ASC/DESC;
```
In SQL, the `ORDER BY` clause is used to sort the result set in ascending or descending order based on one or more columns. 

To use `ORDER BY`, you need to specify the column(s) you want to sort by after the `ORDER BY` keyword. You can specify multiple columns separated by commas.

For example, to sort the result set of a `SELECT` query by the `column1` in ascending order, you would use:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 ASC;
```

To sort in descending order, you would use `DESC` instead of `ASC`:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 DESC;
```

You can also sort by multiple columns. In this case, the sorting is done based on the first column specified, and if there are any ties, it will be sorted based on the second column, and so on.

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 ASC, column2 DESC;
```

Remember that the `ORDER BY` clause is always the last clause in a `SELECT` statement.
