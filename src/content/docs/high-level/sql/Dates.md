---
title: Dates
sidebar:
  order: 58
---
```sql
SELECT DATE_FORMAT(date_column, '%Y-%m-%d') AS formatted_date
FROM your_table;
```
This SQL query selects the `date_column` from `your_table` and formats it as `YYYY-MM-DD`. You can replace `date_column` with the actual column name in your table.