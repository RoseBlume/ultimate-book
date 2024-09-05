---
title: Primary Key
sidebar:
  order: 52
---
A primary key is a column or a set of columns in a database table that uniquely identifies each record in the table. It is used to enforce data integrity and ensure that each record can be uniquely identified.

To define a primary key in SQL, you can use the `PRIMARY KEY` constraint when creating a table. For example:

```sql
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);
```

In this example, the `id` column is defined as the primary key for the `employees` table. This means that each record in the table must have a unique value for the `id` column.

Primary keys have the following characteristics:

- They must contain unique values.
- They cannot contain NULL values.
- Each table can have only one primary key.

Primary keys are important for database performance and data integrity. They are used to create indexes, enforce referential integrity, and optimize query execution.

When designing a database schema, it is important to carefully choose the primary key for each table. Common choices for primary keys include auto-incrementing integers, natural keys (such as social security numbers or email addresses), or composite keys (using multiple columns).

In summary, a primary key is a crucial component of a database table that ensures each record can be uniquely identified. It is defined using the `PRIMARY KEY` constraint and has specific characteristics to enforce data integrity.

Remember to save the file after adding the content.