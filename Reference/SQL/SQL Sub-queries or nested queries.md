---
tags:
  - SQL
  - sub-queries
---
# SQL Sub-queries or nested queries
Finding the percentage of executions form each county
```sql
SELECT
  county,
  100.0 * COUNT(*) / (SELECT COUNT(*) FROM executions)
    AS percentage
FROM executions
GROUP BY county
ORDER BY percentage DESC
```