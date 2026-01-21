---
tags:
  - SQL
  - CASE
  - switch-statements
---
# SQL CASE (Switch statements)
Specially useful with aggregate functions such as count which can only take boolean values
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

```sql
SELECT COUNT(
	CASE 
  		WHEN ex_age > 50 THEN 1
  		ELSE null
  	END
	)
FROM executions
```