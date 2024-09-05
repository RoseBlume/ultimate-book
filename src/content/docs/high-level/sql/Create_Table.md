---
title: Create Table
sidebar:
  order: 46
---
```sql
CREATE TABLE table_name (
  column1 datatype,
  column2 datatype,
  column3 datatype,
  ...
);
```

To create a table in SQL, you can use the `CREATE TABLE` statement followed by the table name and a list of columns with their respective data types. Each column is defined with a name and a data type.

For example, to create a table called `employees` with columns for `id`, `name`, and `age`, you can use the following SQL code:

```sql
CREATE TABLE employees (
  id INT,
  name VARCHAR(50),
  age INT
);
```

In this example, `id` is defined as an integer (`INT`), `name` is defined as a variable-length character string with a maximum length of 50 characters (`VARCHAR(50)`), and `age` is defined as an integer (`INT`).

You can add more columns to the table by including additional lines in the `CREATE TABLE` statement. Each column should be separated by a comma.

Once you have defined the table structure, you can execute the SQL code to create the table in your database.

Remember to replace `table_name`, `column1`, `column2`, etc. with the actual names you want to use for your table and columns.

For more information on creating tables in SQL, you can refer to the documentation of your specific database management system.