---
title: Check
sidebar:
  order: 54
---
```sql
-- Check Constraint

A check constraint is used to limit the values that can be inserted or updated in a column. It allows you to define a condition that must be satisfied for the data to be considered valid.

Syntax:

```sql
CREATE TABLE table_name (
  column_name data_type CONSTRAINT constraint_name CHECK (condition)
);
```

Example:

```sql
CREATE TABLE employees (
  id INT,
  name VARCHAR(50),
  age INT CHECK (age >= 18)
);
```

In the above example, the `age` column has a check constraint that ensures the age is greater than or equal to 18.

Check constraints can also be added to an existing table using the `ALTER TABLE` statement.

```sql
ALTER TABLE table_name
ADD CONSTRAINT constraint_name CHECK (condition);
```

Note that the condition in the check constraint can be any valid SQL expression.

```

Feel free to add more content or customize the page as needed.
