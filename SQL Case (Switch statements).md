---
tags:
  - SQL
  - CASE
  - switch-statements
---
# SQL Case (Switch statements)

```sql
SELECT
  COUNT(
	CASE 
		WHEN county='Harris' THEN 1
		WHEN county='Bexar' THEN 1
    	ELSE null 
	END
  )
FROM executions
```