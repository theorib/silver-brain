---
tags:
  - SQL
  - Snippets
---
# SQL Snippets

## Get first 10 rows from a table
```sql
SELECT * 
FROM table_name LIMIT 10;
```

## Get all the possible values from a Column

```sql
SELECT DISTINCT some_column_name 
FROM some_table_name;
```

## Get how many records are in a table
```sql
SELECT COUNT(*) 
FROM table_name;
```

## Get all records for a specific person
```sql
SELECT *
FROM person
WHERE name = "John Doe"
```

## Wildcards for partial matches
Find cities beginning with `I`
```sql
SELECT DISTINCT city 
FROM crime_scene_report 
WHERE city LIKE 'I%';
```

you can also use comparison operators to get a range of results:
```sql
SELECT DISTINCT city 
FROM crime_scene_report 
WHERE city BETWEEN 'W%' AND 'Z%';
```

## Upper and Lower case
Transforming results to lower or upper case:
```sql
SELECT DISTINCT city 
FROM crime_scene_report 
WHERE LOWER(city) ='sql city';
```

Otherwise you can use the `UPPER()` function to transform the result to upper case.

## Decimal Division
To do decimal division, ensure that one of the numbers is multiplied by `1.0` which will transform everything in to decimal:

```sql
SELECT COUNT(
	CASE
  		WHEN last_statement LIKE '%innocent%' THEN 1
  		ELSE null
  	END
) * 1.0 / COUNT(*) as ' inmates with claims of innocence'
FROM executions
```