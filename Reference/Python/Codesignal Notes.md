---
tags:
  - python
---
# CodeSignal Notes

## Quick Debugging and printing multiple variables:
```python
print(f'inner loop: {locals()}')
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



## other

```python
def iterateMiddleToEnd(numbers):
  mid = len(numbers) // 2 + len(numbers) % 2 
  left = mid - 1
  right = mid + 1
  new_order = [numbers[mid]] if len(numbers) % 2 == 1 else []
  
  while left >= 0 and right < len(numbers):
    new_order.append(numbers[left])
    new_order.append(numbers[right])
    left -= 1
    right += 1   
  return new_order
```

```python
def iterateMiddleToEnd(numbers):
    mid = len(numbers) // 2 # Middle index if odd; right-middle index if even
    if len(numbers) % 2 == 1:
        left = mid - 1 # The left to the middle element
        right = mid + 1 # The right to the middle element
        new_order = [numbers[mid]] # Adding the middle element to the resulting array
    else:
        left = mid - 1 # Left middle element
        right = mid # Right middle element
        new_order = [] # No elements in the resulting array for now

    while left >= 0 and right < len(numbers):
        new_order.append(numbers[left])
        new_order.append(numbers[right])
        left -= 1
        right += 1
            
    return new_order
```



### Counting consecutive string characters without a dictionary or set:

```python
def solution(s):
    groups = []
    current_group_char = None
    current_group_length = 0

    for char in s:
        if char.isalnum():
            if char == current_group_char:
                current_group_length += 1
            else:
                if current_group_char is not None:
                    groups.append((current_group_char, current_group_length))
                current_group_char = char
                current_group_length = 1
                
    if current_group_char is not None: # necessary to add the last group to the result
        groups.append((current_group_char, current_group_length))
    
    return groups
```

### Adding Seconds to a time string:

```python
def solution(time, seconds):
    time_parts = [int(part) for part in time.split(":")]
    seconds_since_start = time_parts[0] * 3600 + time_parts[1] * 60 + time_parts[2]
    total_seconds = (seconds_since_start + seconds) % (24 * 3600)
    hours, remainder = divmod(total_seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"
```

### Finding all indices of a substring:
```python
def solution(orig_strs, substrs):
    result_arr = []

    for original, substring in zip(orig_strs, substrs):
        start_pos = original.find(substring)
        match_indices = []
        while start_pos != -1:
            match_indices.append(str(start_pos))
            start_pos = original.find(substring, start_pos + 1)
        result_arr.append(f"The substring '{substring}' was found in the original string '{original}' at position(s) {', '.join(match_indices)}.")

    return result_arr
```


### Get most common character in odd length words:
```python
from collections import Counter

def solution(sentence):
    # initialize result
    result = ''
    # split sentence into words
    # loop through words
    for word in sentence.split():
        # if a word has an odd len:
        if len(word) % 2 != 0:
            # make the word lowercase
            word = word.lower()
            # get most used character if tie, get first char
            char = Counter(word).most_common(1)[0][0]
            # add char to result
            result += char
    # return result
    return result
    
```

### Multiplying very large numbers as strings
```python
def sum(num1, num2):
    i, j, carry, res = len(num1) - 1, len(num2) - 1, 0, []

    while i >= 0 or j >= 0 or carry > 0:
        n1 = int(num1[i]) if i >= 0 else 0
        n2 = int(num2[j]) if j >= 0 else 0
        total = n1 + n2 + carry
        if total > 9:
            carry = 1
        else:
            carry = 0
        curr = total%10
        res.append(str(curr))
        i, j = i - 1, j - 1

    return ''.join(res[::-1])

def solution(num1: str, num2: str):
    j = len(num2) - 1
    carry = 0
    current = ''
    to_sum = []
    
    while j >= 0:
        i = len(num1) - 1
        num_j = int(num2[j])
        
        while i >= 0:
            num_i = int(num1[i])
            if i == 0:
                current = str(num_j * num_i + carry) + current
                carry = 0
                break
            else:
                current = str((num_j * num_i + carry) % 10) + current
                carry = (num_j * num_i + carry) // 10
                i -= 1
                
        if j < len(num2) - 1:
            current += '0' * (len(num1) - 1 - j)
        to_sum.append(current)
        current = ''
        carry = 0
        j -= 1
    
    if len(to_sum) <= 2:
        return to_sum[0] if len(to_sum) else '0'
    
    result = to_sum[0]
    
    for i in range(1, len(to_sum)):
        result = sum(to_sum[i], result)
        
    return result
```


### Problem:
You are given a string `s` containing only uppercase letters, with its length `n` ranging from `1` to `100`, inclusive. Your task involves series of sequential comparisons resulting in the removal of certain characters, following this process:

1. Form neighbouring pairs in the string sequentially (pair the first and second characters, the third and fourth, and so forth). If the string length is odd, keep the last character unpaired.
2. For each pair, compare the characters and remove the character that comes earlier in the lexicographical order. If they are the same, remove the first character in the pair.
3. These two steps define a round of operation. Perform these rounds until the string becomes empty.
4. If the string length after a round is 1, in the next round the last remaining character is removed and the process terminates.

Your task is to implement a Python function, `solution(s)`, where `s` is the initial input string. The function should follow the described process and return a list of the removed letters in the order of their removal.

Each character of the string is an uppercase letter from `A`to `Z`, inclusive.

As an example, if `s = "BCAAB"`, the output should be `['B', 'A', 'A', 'B', 'C']`.

The rounds would occur as follows:

- After the first round, the pairs are (`B,C`), (`A,A`), (`B`) and the resulting string is `CAB` with 'B' and 'A' being removed. The removed characters list becomes `['B', 'A']`.
- After the second round, the pairs are (`C,A`) and (`B`), and the resulting string is `CB` with 'A' being removed. The removed characters list becomes `['B', 'A', 'A']`.
- After the third round, `B` is removed and the string becomes `C`. The removed characters list becomes `['B', 'A', 'A', 'B']`.
- After the fourth round, there are no pairs, and thus 'C' is removed, and the resulting string is empty. The removed characters list becomes `['B', 'A', 'A', 'B', 'C']`.

Solution:
```python
from itertools import zip_longest
def solution(s):

    current_s = s
    result = []
    
    while len(result) < len(s) and current_s:
        if len(current_s) == 1:
            result.append(current_s)
            current_s = ''
            break
            
        pairs = list(zip_longest(current_s[::2], current_s[1::2]))
        
        current_s = ''
        
        for a, b in pairs:
            if a is None or b is None:
                keep, remove = (a, b) if b is None else (b, a)
            else:
                keep, remove = (a, b) if ord(a) > ord(b) else (b, a)
            
            current_s += keep
            
            if remove:
                result.append(remove)
                
    return result
```

### Transposing matrixes
Transposing a matrix is referred to the process of transforming a matrix's rows into its columns and its columns into its rows.

```python
transpose_matrix(arr: list):
	rows = len(arr)
	cols = len(arr[0]) if rows else 0
	transposed_arr = [[arr[j][i] for j in range(rows)] for i in range(cols)]
	
	return transposed_arr
```