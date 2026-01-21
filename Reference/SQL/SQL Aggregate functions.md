---
tags:
  - SQL
---
# SQL Aggregate functions

## MAX
finds the maximum value
```sql
SELECT max(age) FROM drivers_license;
```

## MIN
finds the minimum value

## SUM
calculates the sum of the specified column values

## AVG
calculates the average of the specified column values

## COUNT​
counts the number of specified column values

```sql
SELECT MIN(ex_age),MAX(ex_age), AVG(ex_age) FROM executions;
```

## Composing functions
Example, getting the average character length of last_statements:
```sql
SELECT AVG(LENGTH(last_statement))
FROM executions;
```