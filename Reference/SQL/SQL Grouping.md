---
tags:
  - SQL
  - grouping
  - having
---
# SQL Grouping
When grouping we have to include **all** selected column (except for agregate functions) in the `GROUP BY` clause otherwise we may get very unexpected results (the query will run) but we won't know what the values in the other selected columns really represent. We could group by a column that is not selected although it would make very little sense to do so.

```sql
SELECT county
FROM executions
WHERE ex_age >= 50
GROUP BY county;
```

## Filtering grouped queries using `HAVING` 

The `WHERE` clause always has to appear before the `GROUP BY` clause and it happens before the grouping, therefore, to filter a grouped query we use the `HAVING` clause instead, which can happen after grouping has been performed.

```sql
SELECT county
FROM executions
WHERE ex_age >= 50
GROUP BY county
HAVING COUNT(*) > 2;
```