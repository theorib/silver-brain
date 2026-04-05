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


## itertools.