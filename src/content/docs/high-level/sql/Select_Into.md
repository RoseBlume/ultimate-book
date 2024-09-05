---
title: Select Into
sidebar:
  order: 35
---
```sql
SELECT column1, column2 INTO new_table
FROM existing_table
WHERE condition;
```
In SQL, the `SELECT INTO` statement is used to create a new table and populate it with the result of a query. The `column1` and `column2` represent the columns you want to select from the `existing_table`. The `new_table` is the name of the table that will be created. The `WHERE` clause is optional and is used to specify any conditions that the rows must meet in order to be included in the new table.

This statement is useful when you want to create a new table based on the result of a query, without manually creating the table structure beforehand. It can be used to perform various operations such as creating a backup table, creating a temporary table, or extracting data from one table into another.

Note that the columns in the `new_table` will have the same data types as the corresponding columns in the `existing_table`. If you want to create a table with different column names or data types, you can use the `CREATE TABLE` statement followed by the `INSERT INTO` statement.

Keep in mind that the `SELECT INTO` statement may not be supported by all database systems. It is important to consult the documentation of your specific database system to ensure compatibility.

For more information on the `SELECT INTO` statement, you can refer to the official documentation of your database system or online SQL tutorials.