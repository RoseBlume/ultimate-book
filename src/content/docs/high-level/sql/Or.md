---
title: Or
sidebar:
  order: 6
---
```sql
SELECT *
FROM table_name
WHERE condition1 OR condition2;
```
In SQL, the `OR` operator is used to combine multiple conditions in a `WHERE` clause. It returns true if any of the conditions are true. 

For example, the following query selects all rows from the `table_name` where either `condition1` or `condition2` is true.

Replace `table_name`, `condition1`, and `condition2` with the actual table name and conditions you want to use.

You can also use the `OR` operator with other logical operators, such as `AND`, to create more complex conditions.

Remember to use parentheses to group conditions if needed, to ensure the desired logic is applied.

For more information on SQL and its operators, refer to the documentation of your specific database management system.
