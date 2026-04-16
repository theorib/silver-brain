---
tags:
---
# Python Fluency Cheat Sheet — Softwire Coding Test

Companion to the 30-block training plan. Prioritises idioms that save minutes under pressure: built-ins, `collections`, `itertools`, string tricks, and the core problem-solving patterns that show up on Softwire-style challenges.

Organised for Obsidian's outline panel — use H2/H3 to jump around fast.

---

## Debugging

### Print multiple locals at once

```python
print(f'loop state: {locals()}')
```

### Print with labels (3.8+)

```python
print(f'{i=}, {j=}, {result=}')
# → i=3, j=7, result=[1, 2, 3]
```

Fastest debug syntax in the language. Learn it once, use it forever.

### Breadcrumb prints

```python
print('HERE 1', var)   # fastest to type, easiest to grep for
```

---

## Built-in functions you should never hesitate on

### `enumerate()` — index + value

```python
for i, x in enumerate(arr):         # starts at 0
for i, x in enumerate(arr, start=1, end=6): # starts at 1 ends at 5
```

**Replace every `for i in range(len(arr))`** with this unless you truly need the index only.

### `zip()` — iterate iterables in parallel

```python
for a, b in zip(list_a, list_b):
    ...
for a, b, c in zip(list_a, list_b, list_c):  # any number of iterables
    ...
```

Stops at the shortest. Use `zip_longest` if that's not what you want.

### `reversed()` — iterate backwards

```python
for x in reversed(arr):
    ...
for i in reversed(range(len(arr))):   # i = n-1, n-2, ..., 0
    ...
```

### `any()` / `all()`

```python
any(x > 10 for x in arr)           # True if at least one
all(x > 0 for x in arr)            # True if every
any(c.isdigit() for c in s)        # is there a digit in s?
not any(c.isupper() for c in s)    # is s entirely not uppercase?
```

### `min()` / `max()` with `key=`

```python
longest = max(words, key=len)
closest = min(points, key=lambda p: abs(p - target))
max(arr, default=0)                # 0 if arr is empty (no ValueError)
```

### `sorted()` and `list.sort()`

```python
sorted(arr)                        # returns NEW list
arr.sort()                         # sorts IN PLACE, returns None
sorted(arr, reverse=True)          # descending
sorted(words, key=len)             # by length
sorted(words, key=str.lower)       # case-insensitive
sorted(pairs, key=lambda p: (p[1], -p[0]))  # multi-key: by 2nd asc, then 1st desc
```

### `sum()`, `abs()`, `round()`, `pow()`

```python
sum(arr)
sum(arr, 10)                   # start from 10 instead of 0
sum(1 for x in arr if x > 0)   # count matching — faster than len([...])
pow(2, 10)                     # 1024, same as 2**10
pow(2, 10, 1000)               # (2**10) % 1000, fast for huge exponents
```

### Ternary expression

```python
result = 'even' if n % 2 == 0 else 'odd'
```

### Walrus operator `:=` (3.8+)

Assign and use a value in the same expression.

```python
while (line := input()) != 'quit':
    process(line)

# Inside a comprehension — avoid recomputing:
[y for x in data if (y := expensive(x)) > 0]
```

### Unpacking

```python
a, b = 1, 2                      # parallel assignment
a, b = b, a                      # swap — no temp variable
first, *rest = [1, 2, 3, 4]      # first=1, rest=[2,3,4]
*rest, last = [1, 2, 3, 4]       # rest=[1,2,3], last=4
first, *mid, last = [1,2,3,4,5]  # first=1, mid=[2,3,4], last=5
```

---

## `collections` module

### `Counter` — frequency map

```python
from collections import Counter

c = Counter('abracadabra')
# Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})

c.most_common(2)    # [('a', 5), ('b', 2)]
c['a']              # 5 — returns 0 for missing, NEVER KeyErrors
c.total()           # 11 (3.10+)

# Counter arithmetic
c1 + c2             # add counts
c1 - c2             # subtract (drops non-positive)
c1 & c2             # intersection (min of counts)
c1 | c2             # union (max of counts)

# Testing multiset equality (anagrams)
Counter(a) == Counter(b)
```

`most_common()` preserves insertion order for ties, which is often useful for "first seen" logic.

### `defaultdict` — auto-initialising dict

```python
from collections import defaultdict

d = defaultdict(list)
d['a'].append(1)    # no KeyError — creates [] automatically
d['a'].append(2)
# d == {'a': [1, 2]}

d = defaultdict(int)
for c in 'hello':
    d[c] += 1       # cleaner than Counter when you also need in-loop logic

d = defaultdict(set)  # for grouping unique values
```

### `deque` — double-ended queue, O(1) at both ends

```python
from collections import deque

dq = deque(['b', 'c', 'd'])
dq.append('e')                  # add right
dq.appendleft('a')              # add left
dq.pop()                        # remove right
dq.popleft()                    # remove left
dq.rotate(1)                    # rotate right: [x,y,z] → [z,x,y]
dq.rotate(-1)                   # rotate left

dq = deque(maxlen=3)            # auto-evicts from left when full — sliding window trick
```

Use `deque` for BFS queues — `list.pop(0)` is O(n), `deque.popleft()` is O(1).

---

## `itertools` module

The single highest-value module for problem-solving speed. Learn these.

### `zip_longest()` — zip that doesn't truncate

```python
from itertools import zip_longest

list(zip_longest('abc', [1, 2, 3, 4]))
# [('a', 1), ('b', 2), ('c', 3), (None, 4)]

list(zip_longest('abc', [1, 2, 3, 4], fillvalue=0))
# [('a', 1), ('b', 2), ('c', 3), (0, 4)]
```

### `accumulate()` — running totals, products, max, min, anything

```python
from itertools import accumulate
import operator

list(accumulate([1, 2, 3, 4, 5]))               # [1, 3, 6, 10, 15] (running sum)
list(accumulate([1, 2, 3, 4, 5], operator.mul)) # [1, 2, 6, 24, 120] (running product)
list(accumulate([3, 1, 4, 1, 5], max))          # [3, 3, 4, 4, 5] (running max)
list(accumulate([3, 1, 4, 1, 5], min))          # [3, 1, 1, 1, 1] (running min)
```

### `combinations()` / `permutations()`

```python
from itertools import combinations, permutations

list(combinations([1, 2, 3], 2))  # [(1,2), (1,3), (2,3)] — order doesn't matter
list(permutations([1, 2, 3], 2))  # [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]
list(permutations([1, 2, 3]))     # all 6 orderings of the full list
```

### `product()` — Cartesian product (replaces nested loops)

```python
from itertools import product

list(product([1, 2], ['a', 'b']))
# [(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]

list(product(range(3), repeat=2))  # all (i,j) with i,j in 0..2
# equivalent to `for i in range(3): for j in range(3): ...`
```

### `groupby()` — group *consecutive* equal elements

```python
from itertools import groupby

for key, group in groupby('aaabbcccc'):
    print(key, list(group))
# a ['a', 'a', 'a']
# b ['b', 'b']
# c ['c', 'c', 'c', 'c']

# Run-length encoding in ONE line:
[(k, len(list(g))) for k, g in groupby('aaabbcccc')]
# [('a', 3), ('b', 2), ('c', 4)]

# With a key function
for key, group in groupby(words, key=len):
    ...  # groups consecutive words of the same length
```

**Warning:** only groups *consecutive* duplicates. Sort first if you need to group all equal elements.

### `chain()` — flatten iterables

```python
from itertools import chain

list(chain([1, 2], [3, 4], [5]))          # [1, 2, 3, 4, 5]
list(chain.from_iterable([[1,2],[3,4]]))  # [1, 2, 3, 4] — flatten list of lists
```

### `count()`, `cycle()`, `repeat()` — infinite iterators

```python
from itertools import count, cycle, repeat

count(10, 2)     # 10, 12, 14, 16, ... — bound with zip() or islice()
cycle('abc')     # 'a','b','c','a','b','c',...  — use for round-robin
repeat('x', 5)   # 'x','x','x','x','x'
```

### `islice()` — slice any iterator (including generators)

```python
from itertools import islice, count

list(islice(count(), 5))            # [0, 1, 2, 3, 4] — bounds an infinite iterator
list(islice(range(100), 10, 20))    # [10, 11, ..., 19]
list(islice(iter(arr), 0, None, 2)) # every other element of an iterator
```

---

## `functools` module

### `reduce()` — accumulate into a single value

```python
from functools import reduce

reduce(lambda a, b: a + b, [1, 2, 3, 4])      # 10
reduce(lambda a, b: a * b, [1, 2, 3, 4])      # 24
reduce(lambda a, b: a + b, [1, 2, 3, 4], 10)  # 20 (with initial)
```

Usually `sum()`/`max()`/`min()` or `accumulate()` is cleaner — but `reduce` fills the gaps.

### `lru_cache()` — instant memoisation for recursion

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)
```

Turns an O(2^n) recursive function into O(n). Only works if args are hashable.

---

## `operator` module

### `itemgetter` — sort by multiple fields cleanly

```python
from operator import itemgetter

users = [('Alice', 'Evergreen'), ('Marcus', 'Solomon'), ('Elena', 'Rodriguez')]
users.sort(key=itemgetter(1, 0))   # sort by last name, then first
```

### `attrgetter` — sort by object attributes

```python
from operator import attrgetter
people.sort(key=attrgetter('age', 'name'))
```

### Functional operators (for `reduce`, `accumulate`)

```python
from operator import add, mul, sub, truediv, mod
from functools import reduce

reduce(add, [1, 2, 3, 4])   # 10
reduce(mul, [1, 2, 3, 4])   # 24
```

---

## `math` module — numerics

```python
import math

math.gcd(12, 8)          # 4
math.gcd(12, 8, 6)       # 2 (3.9+ supports multiple args)
math.lcm(4, 6)           # 12 (3.9+)
math.sqrt(16)            # 4.0 (float)
math.isqrt(17)           # 4 (integer — no float imprecision)
math.floor(3.7)          # 3
math.ceil(3.2)           # 4
math.log2(8)             # 3.0
math.log10(1000)         # 3.0
math.log(8, 2)           # 3.0 (log base 2)
math.inf, -math.inf      # initialise min/max trackers
math.factorial(5)        # 120
math.comb(5, 2)          # 10 — n choose k
math.perm(5, 2)          # 20 — n permute k
math.dist((0,0), (3,4))  # 5.0 — Euclidean distance
```

### `divmod()` — quotient and remainder in one call

```python
divmod(15, 10)           # (1, 5)

# Seconds → h:m:s:
hours, rem = divmod(total_seconds, 3600)
minutes, seconds = divmod(rem, 60)
```

### Number base conversion

```python
bin(10)                  # '0b1010'
oct(10)                  # '0o12'
hex(255)                 # '0xff'

f'{10:b}'                # '1010' (no prefix)
f'{10:08b}'              # '00001010' (padded)
f'{255:x}'               # 'ff'

int('1010', 2)           # 10 — parse binary
int('ff', 16)            # 255 — parse hex
int('1010', 0)           # auto-detect from '0b','0o','0x' prefix
```

### Counting set bits

```python
bin(n).count('1')        # works everywhere
n.bit_count()            # 3.10+, fastest
```

---

## String operations

### Case

| Method           | Effect                                       |
| ---------------- | -------------------------------------------- |
| `s.lower()`      | lowercase                                    |
| `s.upper()`      | uppercase                                    |
| `s.title()`      | Title Case Each Word                         |
| `s.capitalize()` | First letter upper, rest lower               |
| `s.swapcase()`   | swap each letter's case                      |
| `s.casefold()`   | aggressive lowercase (handles German ß etc.) |

### Boolean checks

| Method                              | Checks                                                    |
| ----------------------------------- | --------------------------------------------------------- |
| `s.isdigit()`                       | all digit characters (0-9 and some unicode digits)        |
| `s.isdecimal()`                     | strict decimal digits only                                |
| `s.isnumeric()`                     | broadest: fractions, roman numerals too                   |
| `s.isalpha()`                       | all letters, no digits/spaces/punct                       |
| `s.isalnum()`                       | letters and digits only                                   |
| `s.isspace()`                       | whitespace only                                           |
| `s.islower()` / `s.isupper()`       | all cased chars are lower/upper                           |
| `s.istitle()`                       | follows title-case rules                                  |
| `s.startswith(p)` / `s.endswith(p)` | prefix/suffix check — can take a **tuple** of candidates! |

### Whitespace

```python
s.strip()         # both ends
s.lstrip()        # left only
s.rstrip()        # right only
s.strip('.,!?')   # strip ANY chars in the arg, not just whitespace
```

### Finding & counting

```python
s.find(sub)               # first index, or -1 if not found
s.find(sub, start)        # search from `start`
s.rfind(sub)              # last occurrence
s.index(sub)              # like find, but RAISES ValueError if missing
s.count(sub)              # non-overlapping count
s.count(sub, start, end)  # count within slice
```

### Splitting & joining

```python
'a,b,c'.split(',')             # ['a', 'b', 'c']
'a  b\tc'.split()              # ['a', 'b', 'c'] — any whitespace, any count
'a,b,c'.split(',', maxsplit=1) # ['a', 'b,c']
'a\nb\nc'.splitlines()         # ['a', 'b', 'c']
'a,b,c'.partition(',')         # ('a', ',', 'b,c') — split ONCE
','.join(['a', 'b', 'c'])      # 'a,b,c'
''.join(reversed(s))           # reverse via join
```

### Replacement & translation

```python
s.replace('x', 'y')            # replace all
s.replace('x', 'y', count=1)   # replace first only

# Bulk character substitution — much faster than chained .replace()
tbl = str.maketrans('aeiou', '12345')
'hello'.translate(tbl)         # 'h2ll4'

# Delete characters (3rd arg to maketrans):
tbl = str.maketrans('', '', 'aeiou')
'hello'.translate(tbl)         # 'hll'
```

### Padding & alignment

```python
'5'.zfill(3)          # '005'
'5'.rjust(5, '0')     # '00005'
'5'.rjust(5)          # '    5'
'5'.ljust(5)          # '5    '
'5'.center(5, '*')    # '**5**'

# f-string equivalents (usually cleaner in practice):
f'{5:03d}'            # '005'
f'{5:>5}'             # '    5'
f'{5:<5}'             # '5    '
f'{5:^5}'             # '  5  '
f'{h:02d}:{m:02d}:{s:02d}'   # '01:22:05'
```

### Slicing tricks

```python
s[::-1]               # reverse
s[::2]                # every 2nd char starting at 0
s[1::2]               # every 2nd char starting at 1
s[:5]                 # first 5
s[-5:]                # last 5
s[:-1]                # all but last
s[1:-1]               # drop first and last
```

### Middle character(s)

```python
mid = len(s) // 2     # works as right-middle index for both odd and even

# Return the 1 or 2 middle chars:
middle = s[(len(s)-1)//2 : len(s)//2 + 1]
```

---

## ASCII / character arithmetic

```python
ord('a')              # 97
chr(97)               # 'a'
ord('z') - ord('a') + 1   # 26

# Cycle within alphabet (Caesar cipher idiom)
offset = 3
c = 'x'
shifted = chr((ord(c) - ord('a') + offset) % 26 + ord('a'))   # 'a'

# Character frequency array (26 letters only)
counts = [0] * 26
for c in s:
    counts[ord(c) - ord('a')] += 1
```

---

## Comprehensions

```python
# List
squares = [x*x for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]

# With ternary (else branch)
parity = ['even' if x % 2 == 0 else 'odd' for x in range(10)]

# Nested
matrix = [[r*3 + c for c in range(3)] for r in range(3)]

# Flatten a 2D list
flat = [x for row in matrix for x in row]

# Dict
char_to_index = {c: i for i, c in enumerate('abcdef')}

# Set
unique_lower = {c.lower() for c in s if c.isalpha()}

# Generator (parentheses, not brackets) — memory-efficient for large inputs
gen = (x*x for x in range(1_000_000))
sum(x*x for x in arr)           # can skip the parens when it's the only arg
```

---

## Dict idioms

```python
d.get(key)               # None if missing
d.get(key, 0)            # 0 if missing — great for counting
d.setdefault('k', [])    # set to [] only if missing; returns current value

# Swap keys and values
{v: k for k, v in d.items()}

# Merge dicts (3.9+)
merged = d1 | d2         # values in d2 override d1
d1 |= d2                 # update d1 in place

# Remove duplicates while preserving order
list(dict.fromkeys(arr))
```

---

## `bisect` — binary search on sorted lists

```python
from bisect import bisect_left, bisect_right, insort

arr = [1, 3, 5, 7, 9]
bisect_left(arr, 5)      # 2 — leftmost index where 5 can go
bisect_right(arr, 5)     # 3 — rightmost index where 5 can go
insort(arr, 4)           # arr is now [1, 3, 4, 5, 7, 9]
```

Also: "how many elements are < target?" → `bisect_left(arr, target)`.

---

## `heapq` — min-heap (priority queue)

```python
import heapq

h = []
heapq.heappush(h, 3)
heapq.heappush(h, 1)
heapq.heappush(h, 2)
heapq.heappop(h)         # 1 — always returns smallest

heapq.heapify(arr)       # O(n) conversion of list to heap in-place

heapq.nlargest(3, nums)   # 3 largest
heapq.nsmallest(3, nums)  # 3 smallest
heapq.nlargest(3, dicts, key=lambda d: d['score'])  # with key

# Max-heap trick: negate values
heapq.heappush(h, -value)
max_val = -heapq.heappop(h)
```

---

## Core patterns (templates, not solutions)

### Sliding window — fixed size

```python
# Max sum of any k-length subarray
def max_subarray_sum(arr, k):
    window = sum(arr[:k])
    best = window
    for i in range(k, len(arr)):
        window += arr[i] - arr[i - k]
        best = max(best, window)
    return best
```

### Sliding window — variable size

```python
# Longest substring with at most k distinct characters
def longest_k_distinct(s, k):
    counts = {}
    left = best = 0
    for right, c in enumerate(s):
        counts[c] = counts.get(c, 0) + 1
        while len(counts) > k:
            counts[s[left]] -= 1
            if counts[s[left]] == 0:
                del counts[s[left]]
            left += 1
        best = max(best, right - left + 1)
    return best
```

### Two pointers — converge from both ends (sorted input)

```python
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        s = arr[left] + arr[right]
        if s == target:
            return (left, right)
        elif s < target:
            left += 1
        else:
            right -= 1
    return None
```

### Two pointers — fast / slow (in-place filter)

```python
def remove_duplicates(arr):
    write = 0
    for read in range(len(arr)):
        if read == 0 or arr[read] != arr[read - 1]:
            arr[write] = arr[read]
            write += 1
    return write   # new length
```

### Prefix sums — O(1) range sums after O(n) setup

```python
prefix = [0]
for x in arr:
    prefix.append(prefix[-1] + x)

def range_sum(i, j):            # sum of arr[i..j] inclusive
    return prefix[j + 1] - prefix[i]
```

### Frequency array (lowercase letters only)

```python
counts = [0] * 26
for c in s:
    counts[ord(c) - ord('a')] += 1
```

### Grid / 2D traversal — direction vectors

```python
# 4-directional (N, S, W, E)
DIRS_4 = [(-1, 0), (1, 0), (0, -1), (0, 1)]

for dr, dc in DIRS_4:
    nr, nc = r + dr, c + dc
    if 0 <= nr < rows and 0 <= nc < cols:
        # process (nr, nc)
        ...

# 8-directional (king's moves)
DIRS_8 = [(dr, dc) for dr in (-1, 0, 1) for dc in (-1, 0, 1)
          if (dr, dc) != (0, 0)]
```

### Robot movement (N/S/E/W string-tracked)

```python
x, y = 0, 0
for move in moves:
    if move == 'N':   y += 1
    elif move == 'S': y -= 1
    elif move == 'E': x += 1
    elif move == 'W': x -= 1

# With a direction index (for "turn left" / "turn right")
DIRS = [(0, 1), (1, 0), (0, -1), (-1, 0)]   # N, E, S, W
d = 0
# turn right: d = (d + 1) % 4
# turn left:  d = (d - 1) % 4   (Python handles negative mod cleanly)
```

### Transposing a matrix

```python
# Fastest Pythonic way
transposed = list(map(list, zip(*matrix)))

# Manual (good to understand):
rows, cols = len(matrix), len(matrix[0])
transposed = [[matrix[r][c] for r in range(rows)] for c in range(cols)]
```

### Rotating a matrix 90° clockwise

```python
rotated = [list(row)[::-1] for row in zip(*matrix)]
```

Transpose + reverse each row = 90° CW. Reverse each row first, then transpose = 90° CCW.

### Cycle through a list (wrap around)

```python
idx = (current + step) % len(arr)
```

### Opposite-index pairs

```python
arr = [1, 2, 3, 4, 5]
pairs = []
for i in range(len(arr) // 2 + len(arr) % 2):
    pairs.append((arr[i], arr[len(arr) - 1 - i]))
# [(1, 5), (2, 4), (3, 3)]
```

### Reversing digits of a number (no string conversion)

```python
def reverse_digits(n):
    result = 0
    while n > 0:
        result = result * 10 + n % 10
        n //= 10
    return result
```

### Summing only even digits

```python
def sum_even_digits(n):
    total = 0
    while n > 0:
        d = n % 10
        if d % 2 == 0:
            total += d
        n //= 10
    return total
```

### Run-length encoding

```python
# Shortest — groupby:
from itertools import groupby
rle = [(c, len(list(g))) for c, g in groupby(s)]

# Manual (no imports):
def rle(s):
    if not s:
        return []
    out, cur, cnt = [], s[0], 1
    for c in s[1:]:
        if c == cur:
            cnt += 1
        else:
            out.append((cur, cnt))
            cur, cnt = c, 1
    out.append((cur, cnt))
    return out
```

### All occurrences of a substring

```python
def find_all(haystack, needle):
    indices, start = [], 0
    while (i := haystack.find(needle, start)) != -1:
        indices.append(i)
        start = i + 1
    return indices
```

### Add seconds to a `HH:MM:SS` string

```python
def add_seconds(time_str, seconds):
    h, m, s = map(int, time_str.split(':'))
    total = (h * 3600 + m * 60 + s + seconds) % (24 * 3600)
    h, rem = divmod(total, 3600)
    m, s = divmod(rem, 60)
    return f'{h:02d}:{m:02d}:{s:02d}'
```

### Duration between two `datetime`s, formatted

```python
from datetime import datetime, timedelta

total = int((end - start).total_seconds())
h, rem = divmod(total, 3600)
m, s = divmod(rem, 60)
print(f'{h:02d}:{m:02d}:{s:02d}')
```

---

## One-liners worth memorising

```python
# Flatten a 2D list
flat = [x for row in grid for x in row]

# Swap values
a, b = b, a

# Check all chars unique
len(set(s)) == len(s)

# Chain comparisons
if 0 <= i < len(arr):             # not `i >= 0 and i < len(arr)`

# Count every character
Counter(s)

# Unique, order preserved (3.7+)
list(dict.fromkeys(arr))

# Anagram check
Counter(a) == Counter(b)
sorted(a) == sorted(b)

# All indexes where value equals target
[i for i, x in enumerate(arr) if x == target]

# Most common character
Counter(s).most_common(1)[0][0]

# Sum numbers in a string like "1,2,3"
sum(map(int, s.split(',')))

# Check palindrome
s == s[::-1]

# Reverse words in a sentence
' '.join(s.split()[::-1])

# First non-repeating char
next((c for c in s if s.count(c) == 1), None)
```

---

## Common traps

- **`str` is immutable.** `s[0] = 'x'` errors. Convert to a list, mutate, `''.join(...)`.
- **`list.sort()` returns `None`.** Don't write `x = arr.sort()`. Use `sorted(arr)` for a new list.
- **Default mutable argument.** Never `def f(x=[]):` — the same list is reused across calls. Use `def f(x=None): x = x if x is not None else []`.
- **Integer division with negatives** rounds toward −∞: `-7 // 2 == -4`, not −3.
- **Modulo with negatives** in Python matches the sign of the divisor: `-1 % 5 == 4`. Usually what you want for cyclic indexing — but surprising if you're coming from C or JS.
- **`range(len(x))`** is almost always replaceable by `enumerate(x)`.
- **Slice copy vs reference.** `b = a` shares the list. Use `b = a[:]`, `b = list(a)`, or `b = a.copy()` to copy.
- **Nested list init.** `[[0]*3]*3` creates three references to the **same** inner list. Use `[[0]*3 for _ in range(3)]`.
- **`dict.keys()` isn't a list.** In 3.x it's a view. `keys[0]` errors. Do `list(d.keys())[0]` or `next(iter(d))`.
- **`groupby` only groups *consecutive* equal elements.** Sort first if you want to group all occurrences.
- **`Counter` subtraction drops zero and negative counts.** `Counter({'a':2}) - Counter({'a':5})` gives `Counter()`, not `{'a': -3}`. Use regular dict subtraction if you need the negatives.

---

## On test day

Before you start the real Softwire test:

1. Warm up with 2–3 Codewars 8-kyu katas to prime your fingers.
2. Open this cheat sheet in a second tab (the test permits web references for syntax).
3. Open CodeSignal's own practice environment on another tab to have the IDE already loaded.
4. Read **all three** problem statements in the first 60 seconds before coding anything.
5. Reach for `enumerate`, `Counter`, `defaultdict`, and `divmod` without thinking — they are your four most frequent shortcuts on this style of test.