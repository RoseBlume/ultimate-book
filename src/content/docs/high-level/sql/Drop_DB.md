---
title: Drop DB
sidebar:
  order: 44
---
```sql
# Drop DB

To drop a database in SQL, you can use the `DROP DATABASE` statement. This statement removes the entire database and all its associated objects.

Here's the syntax for dropping a database:

```sql
DROP DATABASE database_name;
```

Replace `database_name` with the name of the database you want to drop.

**Note:** Dropping a database is a permanent action and cannot be undone. Make sure to backup any important data before dropping a database.

Example:

```sql
DROP DATABASE my_database;
```

This will drop the `my_database` database.

Remember to exercise caution when using the `DROP DATABASE` statement, as it can result in data loss if not used carefully.
```
