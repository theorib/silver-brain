---
tags:
  - python
---
# CodeSignal Notes

## Quick Debugging and printing multiple variables:
```python
print(f'inner loop: {locals()}')

print(f'{i=}, {j=}, {result=}') # → i=3, j=7, result=[1, 2, 3]
```

## Getting the middle element of a list

This formula always finds the **middle index** of a list if it's length is even **and** the **right** middle index if it's **odd** in length. It gives you the index directly, not a count.
```python
arr = [1,2,3,4,5]
middle = len(arr) // 2
```

## Cycling (cycle, rotation or rotating) through a list and going back to the beginning:

`(i + step) % length` notice the parenthesis which is crucial

## Cycling (cycle, rotation or rotating) through `ord()` numbers of lowercase characters:
```python
char = 'a'
offset = -3
min_ascii = ord('a')
max_ascii = ord('z')
result = ((ord(char) + offset - min_ascii) % (max_ascii - min_ascii + 1) + min_ascii
```

## Reversing a range in python:
```python
range(len(some_list) - 1, -1, -1)
```
or. a more pythonic way
```python
reversed(range(len(some_list)))
```

## `collections.Counter`
creates a counter object prioritising the order in which elements were passed to it so if there are two elements with the same count, the first instance that entered the count will be the first one to be presented in a `.most_common()` method.
```python
from collections import Counter

counter = Counter(['a', 'b', 'c', 'c', 'a', 'a', 'c', 'b', 'z', 'a']) # Counter({'a': 4, 'c': 3, 'b': 2, 'z': 1})
counter.most_common(1) # [('a', 4)]
counter.most_common(2) # [('a', 4), ('c', 3)]
list(counter.items()) # [('a', 4), ('b', 2), ('c', 3), ('z', 1)]
```


## `itertools.zip_longest()`
returns a zip iterable but doesn't stop at the smallest iterable length, instead, it includes the values from the longer iterable paired with `None` values.
```python
from itertools import zip_longest
result = zip_longest(['a', 'b', 'c'], [1, 2, 3, 4]) # <itertools.zip_longest object at 0x100ae90d0>
list(result) # [('a', 1), ('b', 2), ('c', 3), (None, 4)]
```

## `divmod()`
```python
floor_division, remainder = divmod(15, 10) # 1, 5
```

## Padding numbers in a string:
```python
hours = 1
minutes = 22
seconds = 5
time_stamp = f'{hours:02d}:{minutes:02d}:{seconds:02d}' # 01:22:05
```

## `collections.deque()`
```python
from collections import deque

double_ended_queue = deque(['b', 'c', 'd']) # deque(['b', 'c', 'd'])
double_ended_queue.append('e') # deque(['b', 'c', 'd', 'e'])
double_ended_queue.extend(['f', 'g']) # deque(['b', 'c', 'd', 'e', 'f', 'g'])
double_ended_queue.pop() # 'g'
double_ended_queue.appendleft('a') # deque(['a', 'b', 'c', 'd', 'e', 'f'])
double_ended_queue.extendleft([7, 8, 9]) # deque([9, 8, 7, 'a', 'b', 'c', 'd', 'e', 'f']) ! NOTICE HOW EXTENDED LIST VALUES ARE INVERTED
double_ended_queue.popleft() # 9
double_ended_queue.rotate() # deque(['f', 8, 7, 'a', 'b', 'c', 'd', 'e'])
double_ended_queue.rotate(-1) # deque([8, 7, 'a', 'b', 'c', 'd', 'e', 'f'])
```

## `operator.itemgetter()`
The `operator.itemgetter()` is a higher order function from the standard library that returns a function that gets the specified values from a list, dictionary, etc.

It's very useful in sorting operations where we need to sort by multiple values at once, for example, sorting a list by last names and for each last name sorting those by first name:

```python
from operator import itemgetter
user_data = [
    ("Alice", "Evergreen"),
    ("Marcus", "Solomon"),
    ("Elena", "Rodriguez"),
    ("Julian", "Thorne"),
    ("Sana", "Patel"),
    ("Oliver", "Bennett"),
    ("Amara", "Okonkwo")
]

user_data.sort(key=itemgetter(1,0)) # [('Oliver', 'Bennett'), ('Alice', 'Evergreen'), ('Amara', 'Okonkwo'), ('Sana', 'Patel'), ('Elena', 'Rodriguez'), ('Marcus', 'Solomon'), ('Julian', 'Thorne')]
```

## Getting well formatted duration strings
```python
from datetime import datetime, timedelta
from time import sleep # just so we can have a time difference

initial_count = timedelta(0)

start_time = datetime.now()
sleep(5)
end_time = datetime.now()

duration = initial_count + (end_time - start_time)

total_seconds = int(duration.total_seconds())

hours, remainder = divmod(total_seconds, 3600)
minutes, seconds = divmod(remainder, 60)

print(f"{hours:02d}:{minutes:02d}:{seconds:02d}")
```
## String operations

### Upper and lower cases
`.lower()` converts a string to lowercase
`.upper()` converts a string to uppercase
`.istitle()` checks if a string is written in title case with every word starting with an uppercase letter

### ASCII strings
`.ord()` gives us the ASCII number of a character while
`.chr()` gives us the character equivalent to an ASCII number

### Boolean checking of characters
`.isdigit()` checks if a string is a number digit
`.isdecimal()` is the strictest way of checking if something is a number, as it returns false also for superscripts or roman numerals
`.isnumeric()` is the broadest number check and returns `True` even if it's a fraction such as `1/2`

`.isalpha()` checks if a string is a text character (no numbers, spaces or special characters)
`.isalnum()` checks if a string is alphanumeric (numbers and digits but no spaces or special characters)
`.isspace()` checks if a string is a whitespace character, including spaces, tabs, new lines and other unicode defined whitespace characters

`.islower()` check if a string is lowercase
`.isupper()` check if a string is uppercase

### Manipulating strings
`.strip()` remove any whitespace characters from beginning and end of a string
`.lstrip()`remove any whitespace characters from beginning of a string
`.rstrip()`remove any whitespace characters from end of a string


### Manipulating and loping numbers only through math
Reversing Digits using only Math, for example 12345 becomes 54321:
```python
def solution(n):
	result = 0

	while n > 0:
		digit = n % 10 # get the last di
		result = result * 10 + digit # Adds the last digit as the first
		n = n // 10 # Remove the last digit
	
	return result
```

summing up all the even digits:
```python
def solution(n):
    digit_sum = 0
    while n > 0:
        digit = n % 10
        if digit % 2 == 0:  # Check if the digit is even
            digit_sum += digit
        n = n // 10  # Remove the last digit
    return digit_sum
```


### Getting the opposite equivalent indexed element in a list
```python
arr = [1,2,3,4,5]
opposite_pairs = []
middle = len(arr) // 2 + len(arr) % 2
# The formula is:
# length - 1 - i
for i in range(middle):
	opposite_pairs.append(arr[i], arr[len(arr) - 1 - i])
	
print(opposite_pairs) # [(1, 5), (2, 4), (3, 3)]
```
