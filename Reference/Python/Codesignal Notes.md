---
tags:
  - python
---
# Codesignal Notes

Lists are mutable, strings are immutable.

When slicing lists, the `start` is **inclusive** and the `end` index is **exclusive**.

`my_list.index(8) if 8 in my_list else -1`

Range function: 
```python
for num in range(5): # This line will print numbers from 0 to 4
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

### Getting the middle element of a list

This formula always finds the **middle index** of a list if it's length is even **and** the **right** middle index if it's **odd** in length. It gives you the index directly, not a count.
```python
arr = [1,2,3,4,5]
middle = len(arr) // 2
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

### Formula for cycling through a list and going back to the beginning when index + 1 is bigger than the length:

`(i + step) % length` notice the parenthesis which is crucial


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

### Reversing a range in python:
```python
range(len(some_list) - 1, -1, -1)
```
or. a more pythonic way
```python
reversed(range(len(some_list)))
```
