---
title: Drop Table
sidebar:
  order: 47
---

# Drop Table

To drop a table in SQL, you can use the `DROP TABLE` statement. This statement removes the entire table and all its data from the database.

Here's the syntax for dropping a table:

```sql
DROP TABLE table_name;
```

Replace `table_name` with the name of the table you want to drop.

**Note:** Dropping a table will permanently delete all the data stored in that table. Make sure you have a backup or are absolutely certain before executing this command.

Example:

```sql
DROP TABLE customers;
```

This example drops the `customers` table from the database.

Remember to use this command with caution, as it cannot be undone.


