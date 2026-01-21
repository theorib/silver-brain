---
tags:
  - SQL
  - "null"
---
# Checking for NULL values in SQL
In SQL `WHERE` clauses to check for `null` values we can't use the `=` operator, we have to use the keyword `IS`

```SQL
SELECT *
FROM executions
WHERE last_statement IS NULL;
```

