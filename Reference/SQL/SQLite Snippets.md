---
tags:
  - tables
  - SQLite
  - SQL
---
# SQLite Snippets
## Finding all table names from a database
This command is specific to SQLite, other databases will have a different command.

```sql
SELECT name
FROM sqlite_master
WHERE type = 'table';
```

## Find the structure of a SQLite table
This command is specific to SQLite, other databases will have a different command.

````sql
SELECT sql
FROM sqlite_master
WHERE name = "table_name"
```