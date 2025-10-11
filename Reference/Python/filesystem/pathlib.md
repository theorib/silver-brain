---
tags:
  - python
  - file-system
  - pathlib
---
# Python pathlib standard library

## creating a path
```python
from pathlib import Path

base = Path("my_project")
config = base / "config" / "settings.toml"

print(config) # "my_project/config/settings.toml"
```


## checking if a file exists
```python
from pathlib import Path

file = Path("my_project/config/settings.toml")

if file.exists():
	#do something
```

