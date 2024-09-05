---
title: Null Functions
sidebar:
  order: 38
---

## IS NULL Function

The `IS NULL` function is used to check if a value is `NULL` or not. It returns `TRUE` if the value is `NULL`, otherwise it returns `FALSE`.

Syntax:

```sql
expression IS NULL
```

Example:

```sql
SELECT * FROM employees
WHERE salary IS NULL;
```

This query will return all the employees whose salary is `NULL`.

## IS NOT NULL Function

The `IS NOT NULL` function is used to check if a value is not `NULL`. It returns `TRUE` if the value is not `NULL`, otherwise it returns `FALSE`.

Syntax:

```sql
expression IS NOT NULL
```

Example:

```sql
SELECT * FROM employees
WHERE salary IS NOT NULL;
```

This query will return all the employees whose salary is not `NULL`.