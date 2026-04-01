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