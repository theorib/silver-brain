---
created:
tags:
  - python
  - binary
  - maths
  - syntax
  - numbers
---
# Binary Numbers
Binary numbers in python can be written using the binary syntax, example:
`0b1` is equal to the number `1`.

Each `0` or `1` that comes after the `0b` characters represents another bit or another greater multiple of two with the exception of the first byte which represents the numbers zero or one, so:
```
    128, 64, 32, 16, 8, 4, 2, 1
0b   1   1   1   1   1  1  1  1
# represents 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255
```

```python
print(0b1)
# prints 1
print# prints (0b10)
# prints 2
print(0b11)
# prints 3
print(0b100)
# prints 4
print(0b101)
# prints 5
print(0b110)
# prints 6
print(0b111)
# prints 7
print(0b1000)
# prints 8
print(0b1001)
# prints 9
print(0b1010)
# prints 10
```

## Bitwise `&` Operator
The bitwise `&` operator, operates in all the bits in a value by column. Only values that are `True` in both sides of the comparison remain `True`, everything else becomes `False` for example:
`0b0101` equals 5
`0b0111` equals 7

```python
0101 #0b0101 
& 
0111 #0b0111
```

`0b0101 & 0b0111` equals `0b0101` or 5, because:

```
0 & 0 = 0
1 & 1 = 1
0 & 1 = 0
1 & 1 = 1
```

# Bitwise `|` Operator

The bitwise `|` operator operates in the same way column by column but it combines values so any ones that are `True` in either sides of the operation become `True` in the final result

```python
0101 #0b0101 
|
0111 #0b0111
```
	
`0b0101 | 0b0111` equals `0b0111` or 7, because:

```
0 | 0 = 0
1 | 1 = 1
0 | 1 = 1
1 | 1 = 1
```