---
tags:
  - python
---
# Useful Phython standard library functions

## `collections.Counter`
```python
from collections import Counter

print(Counter(['a','b','c','a','a'])) # Counter({'a': 3, 'b': 1, 'c': 1})

```

## `collections.deque`
```python
from collections import deque

queue = deque()
queue.append('b')
queue.appendleft('a')

print(queue) # deque(['a', 'b'])
```

## `collections.defaultdict`


## `@lru_cache(None)`
This decorator will cache the result of previous iterations, preventing out of memory issues with for example recursive functions that perform the same calculations over and over again.

`math.inf`: Use this for initialising "minimum" variables: `min_val = math.inf`. It's cleaner than using a random large number like `999999`.

`itertools.accumulate()`

`itertools.chain()`

`string.ascii_lowercase()`

`divmod(a, b)` This small function returns a tuple containing both the quotient and the remainder: `(a // b, a % b)`.

`reversed()`
```python
"".join(reversed("Hello, World!"))
# !dlroW ,olleH'
```

