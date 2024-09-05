---
title: Self Join
sidebar:
  order: 29
---
## Introduction to Self Join in SQL

In SQL, a self join is a type of join where a table is joined with itself. It is useful when we want to combine rows from the same table based on a related column.

### Syntax of Self Join

The syntax of a self join in SQL is as follows:

```sql
SELECT column_name(s)
FROM table1
JOIN table2 ON table1.column_name = table2.column_name;
```

### Example of Self Join

Let's consider a table called `employees` with the following structure:

| employee_id | employee_name | manager_id |
|-------------|---------------|------------|
| 1           | John          | 3          |
| 2           | Sarah         | 3          |
| 3           | Michael       | NULL       |
| 4           | Emma          | 2          |

To find the employees and their respective managers, we can use a self join on the `employees` table:

```sql
SELECT e.employee_name, m.employee_name AS manager_name
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id;
```

This will give us the following result:

| employee_name | manager_name |
|---------------|--------------|
| John          | Michael      |
| Sarah         | Michael      |
| Emma          | Sarah        |

### Conclusion

Self joins are a powerful tool in SQL that allow us to combine rows from the same table based on a related column. They are particularly useful when dealing with hierarchical data structures, such as employee-manager relationships.
