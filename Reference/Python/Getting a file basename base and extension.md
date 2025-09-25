#python #file_manipulation #file_name
# Getting a file's basename and extension

In Python, you can get a file's basename and extension from a path using `pathlib.Path`:

```python
import pathlib

pathlib.Path('/foo/bar.txt').suffix
# Outputs: .txt

pathlib.Path('/foo/bar.txt').stem
# Outputs: bar

pathlib.Path("hello/foo.bar.tar.gz").suffixes) 
# Outputs: ['.bar', '.tar', '.gz']

''.join(pathlib.Path("hello/foo.bar.tar.gz").suffixes)
# Outputs: .bar.tar.gz

pathlib.Path("hello/foo.bar.tar.gz").stem) 
# Outputs: foo.bar.tar
```
