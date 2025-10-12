#python #os #file-manipulation 

# Creating directories

The most flexible way to create directories in python is with the `os.makedirs()` method. since it can create directories recursively and it also gives you the option of passing an argument so it doesn't raise an exception if said directory already exist.

```python
import os

os.makedirs("data/csv/", exist_ok=True)
```