---
title: Insert Into Select
sidebar:
  order: 36
---
```sql
INSERT INTO table_name (column1, column2, column3, ...)
SELECT expression1, expression2, expression3, ...
FROM source_table
WHERE condition;
```
In this SQL statement, you can use the `INSERT INTO` clause to insert data into a specified table. The `SELECT` statement is used to retrieve data from one or more tables and then insert it into the target table.

Here's a breakdown of the SQL syntax:
- `table_name`: The name of the table where you want to insert data.
- `(column1, column2, column3, ...)`: The columns in the target table where you want to insert data.
- `expression1, expression2, expression3, ...`: The expressions or values you want to insert into the target table.
- `source_table`: The table or tables from which you want to retrieve data.
- `WHERE condition`: An optional condition that specifies which rows to insert into the target table.

Make sure that the number of columns in the `INSERT INTO` clause matches the number of expressions in the `SELECT` statement. Also, ensure that the data types of the expressions match the data types of the columns in the target table.

Remember to replace `table_name`, `column1`, `column2`, etc. with the actual names in your database, and `source_table` with the appropriate table name or join condition.

For more information on the `INSERT INTO SELECT` statement, you can refer to the SQL documentation of your database management system.
