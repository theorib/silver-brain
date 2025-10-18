---
tags:
  - linux
  - shebang
  - shell-scripts
---
# Sheebangs

A shebang is a special line at the top of a file that tells your shell which interpreter to use to execute that file.

The format of a # shebang

shebang is:
```
#! interpreter_programe [optional_args]
```

For example, a program meant to be executed in bash may have the following shebang:
```bash
#!/usr/bin/env bash
```

For example, a program meant to be executed in with [[Python]] 3

```python
#!/usr/bin/env python3
import time

fd = open("/the-python-script-ran-at-boot.txt", "w")
fd.write("Written with Python at %f" % time.time())
fd.close()
```