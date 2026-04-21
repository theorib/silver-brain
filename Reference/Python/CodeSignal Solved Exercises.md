---
tags:
---
# CodeSignal Solved Exercises

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
	transposed_arr = [[arr[c][r] for c in range(rows)] for r in range(cols)]
	
	return transposed_arr
	
# INITIAL LIST
# [         col 0   col 1   col 2   col 3
#  row 0  [(r0,c0),(r0,c1),(r0,c2),(r0,c3)]
#  row 1  [(r1,c0),(r1,c1),(r1,c2),(r1,c3)] 
#  row 2  [(r2,c0),(r2,c1),(r2,c2),(r2,c3)]
# ]
# TRANSPOSED RESULT
# [         row 0   row 1   row 2  
#  col 0  [(r0,c0),(r1,c0),(r2,c0)]
#  col 1  [(r0,c1),(r1,c1),(r2,c1)] 
#  col 2  [(r0,c2),(r1,c2),(r2,c2)]
#  col 3  [(r0,c3),(r1,c3),(r2,c3)]
# ]

```

#### Traversing a Matrix to find the maximum reachable
Finding the maximum reachable value from a start position that walks the matrix only if there is an adjacent value higher than the current one.
```python
# Given a grid representing a mountain terrain where each value represents altitude
# and a starting point, we'll find the highest peak reachable through adjacent steps.
def find_peak(grid, start_row, start_col):
    rows, cols = len(grid), len(grid[0])
    altitude = grid[start_row][start_col]
    # Check North, East, South, West for higher altitude
    while True:
        current_max_altitude = -1
        next_start_row = start_row
        next_start_col = start_col
        for row_offset, col_offset in [(-1, 0), (0, 1), (1, 0), (0, -1)]:
            row, col = start_row + row_offset, start_col + col_offset
            if 0 <= row < rows and 0 <= col < cols and grid[row][col] > current_max_altitude:
                current_max_altitude = grid[row][col]  # This line introduces a logical error
                next_start_row = row
                next_start_col = col
        if current_max_altitude > altitude:
            altitude = current_max_altitude
            start_row = next_start_row
            start_col = next_start_col
        else:
            break
    return altitude

# Example mountain terrain grid
mountain = [
    [1, 2, 3],
    [2, 5, 7],
    [4, 6, 9]
]
# Starting at the base (0, 1) representing the beginning of the hike
print(find_peak(mountain, 0, 1)) # 9  # Should print the altitude of the highest peak reachable
```

## Exploring Diagonal Matrix Traversal Techniques

Given a 2D matrix of `n x m` integers, where `n`represents the number of rows and `m` represents the number of columns. Both `n` and `m` range from 1 to 100, inclusive.

The matrix cells may contain either a positive, a negative integer, or zero, with values ranging from -100 to 100, inclusive.

In this task, you are required to traverse the matrix diagonally from the top-left cell to the bottom-right cell in a zigzag pattern. Start from the top-left cell, move one cell to the right (if it exists), then move one step diagonally down-left. After reaching a left (bottom) boundary, move one step down (right) and start moving diagonally up-right. Continue this pattern until you reach the last cell of the matrix. Your task is to return a list of tuples, each tuple containing the index pair of cells with negative integers encountered during your traversal.

For example, consider a `3 x 4` matrix:
```python
[[1, -2, 3, -4],
[5, -6, 7, 8],
[-9, 10, -11, 12]]
```

The traversal in a zigzag pattern will result in: [1, -2, 5, -9, -6, 3, -4, 7, 10, -11, 8, 12]
The negative integers in this sequence and their corresponding positions in the matrix are: [-2, -9, -6, -4, -11], with indices: [(0, 1), (2, 0), (1, 1), (0, 3), (2, 2)].
Your function, solution(matrix), should then return these indices as a list of tuples: [(0, 1), (2, 0), (1, 1), (0, 3), (2, 2)].

Solution:

```python
def solution(matrix):
    result = []
   
    row, col = 0, 0
    rows = len(matrix)
    cols = len(matrix[0]) if rows else 0
    is_going_up = True
    
    for _ in range(rows * cols):
        value = matrix[row][col]
        if value < 0:
            result.append((row, col))
        
        if is_going_up:
            if col == cols - 1:
                row += 1
                is_going_up = False
            elif row == 0:
                col += 1
                is_going_up = False
            else:
                row -= 1
                col += 1
        else:
            if row == rows - 1:
                col += 1
                is_going_up = True
            elif col == 0:
                row += 1
                is_going_up = True
            else:
                row += 1
                col -= 1
            
    return result  
```


## Exploring Diagonal Matrix Traversal Techniques 2

Consider a grid of characters in the form of a 2D array, where each cell represents a distinct character selected from `a`-`z`. Your task is to process this grid following a specific order.

Start from the top-left cell of the grid and move in a _clockwise spiral direction_. Initially, go right until you hit the right boundary, then down until you reach the bottom boundary, then left until you encounter the left boundary, and finally, up until you hit the top boundary (note that the top boundary is now the first row since we already visited the first cell in the matrix). Once this cycle is complete, move inwards, i.e., one cell to the right, and repeat the spiral process within the remaining unvisited cells.

During this spiral traversal, you will generate a sequence of visited cell characters. Afterwards, identify the vowels (`a`, `e`, `i`, `o`, `u`) in the sequence and return their positions.

Please implement the function `spiral_traverse_and_vowels(grid)` to achieve this. This function takes a 2D array of characters (`grid`) as input and returns a list containing the positions of the vowels in the spirally traversed sequence.

For instance, consider the following 3x4 grid:

```python
[['a', 'b', 'c', 'd'],
['e', 'f', 'g', 'h'],
['i', 'j', 'k', 'l']]
```

Upon completing the spiral traversal, we will obtain the sequence: `['a', 'b', 'c', 'd', 'h', 'l', 'k', 'j', 'i', 'e', 'f', 'g']`. From this sequence, we observe that `'a'`, `'i'`, and `'e'` are vowels and are located at the 1st, 9th, and 10th positions in the sequence, so our function returns: `[0, 8, 9]`.

The size of the 2D array (`grid`) will not exceed 100x100, and each character will be a lowercase letter from `'a'` to `'z'`.

Solution:
```python
def spiral_traverse_and_vowels(grid):
    vowels = 'aeiou'
    path = []
    result = []
    
    rows = len(grid)
    cols = len(grid[0]) if rows else 0
    
    limits = {
        'first_row': 0,
        'last_row': rows - 1,
        'first_col': 0,
        'last_col': cols - 1
    }
    
    direction = 'right'
    
    row, col = 0, 0
    
    for _ in range(rows * cols):
        char = grid[row][col]
        path.append(char)
        
        if char in vowels:
            result.append(len(path) - 1)
            
        if direction == 'right':
            if col == limits['last_col'] and row == limits['first_row'] and row < limits['last_row']:
                row += 1
                limits['first_row'] += 1
                direction = 'down'
            elif col < limits['last_col']:
                col += 1
                
        elif direction == 'down':
            if row == limits['last_row'] and col == limits['last_col'] and col > limits['first_col']:
                col -= 1
                limits['last_col'] -= 1
                direction = 'left'
            elif row < limits['last_row']:
                row += 1
                
        elif direction == 'left':
            if col == limits['first_col'] and row == limits['last_row'] and row > limits['first_row']:
                row -= 1
                limits['last_row'] -= 1
                direction = 'up'
            elif col > limits['first_col']:
                col -= 1
        elif direction == "up":
            if row == limits['first_row'] and col == limits['first_col'] and col < limits['last_col']:
                col += 1
                limits['first_col'] += 1
                direction = 'right'
            elif row > limits['first_row']:
                row -= 1
                
            
            
    
    return result
        
```

## Combining Submatrices for Unified Solutions

You are tasked with creating a Python function named `matrix_boundary_concatenation()`. This function should accept two 2D matrices, `matrix_A` and `matrix_B`, and the number of boundary layers, `n`, to extract from both matrices.

In this context, a _boundary layer_ refers to the elements that form the outer contour of a matrix. For instance, the first layer of the following `4x4` matrix includes the elements `1`, `2`, `3`, `4`, `8`, `12`, `16`, `15`, `14`, `13`, `9`, and `5`:

```python
[[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]]
```

Your function should extract the first n boundary layers from both matrix_A and matrix_B. It should then concatenate these extracted layers into a new array, ensuring that the layers from matrix_A precede those from matrix_B in the resultant array.
The matrices A and B will be square matrices, with each side's length ranging from 1 to 10. The number of layers n will be less than or equal to the side length of the square matrices.
The function signature should be:
```python
def matrix_boundary_concatenation(matrix_A, matrix_B, n):
```
The elements in the input matrices can be any integer between -100 and 100.
Example
Consider the following input to our function:
```python
matrix_A = [[1, 2, 3, 4], 
            [5, 6, 7, 8], 
            [9, 10, 11, 12], 
            [13, 14, 15, 16]]

matrix_B = [[17, 18, 19, 20], 
            [21, 22, 23, 24], 
            [25, 26, 27, 28], 
            [29, 30, 31, 32]]
n = 2
```
Our function `matrix_boundary_concatenation(matrix_A, matrix_B, n)` should return:
```python
[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10, 17, 18, 19, 20, 24, 28, 32, 31, 30, 29, 25, 21, 22, 23, 27, 26]
```
Explanation:
In matrix_A, the first boundary layer is composed of the elements 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, and 5, taken in a clockwise direction from the top-left corner. Our second layer then includes the elements 6, 7, 11, and 10.
For matrix_B, the corresponding boundary layers include the elements 17, 18, 19, 20, 24, 28, 32, 31, 30, 29, 25, 21 for the first layer and 22, 23, 27, 26 for the second one.
The function outputs an array where the extracted layers from matrix_A are followed by those from matrix_B.

RESULT:
```python
def get_boundary_layer(matrix, boundary):
    if len(matrix) <= 1:
        return matrix[0]
    first_row = matrix[boundary['top']][boundary['left']:boundary['right'] + 1]
    right_col = []
    bottom_row = matrix[boundary['bottom']][boundary['left']:boundary['right'] + 1]
    left_col = []
    
    if first_row == bottom_row:
        bottom_row = []
    
    for row in matrix[boundary['top'] + 1: boundary['bottom']]:
        right_col.append(row[boundary['right']])
        left_col.append(row[boundary['left']])
        
    bottom_row.reverse()
    left_col.reverse()
    
    result = first_row + right_col + bottom_row + left_col
    
    return result
        

def solution(matrix_A, matrix_B, n):

    result_A = []
    result_B = []
    
    length = len(matrix_A)
    boundary = {
        'top': 0,
        'right': length - 1,
        'bottom': length - 1,
        'left': 0
    }
    
    for i in range(n):
        increment = 1 if i else 0
        boundary['top'] = boundary['top'] + increment
        boundary['right'] = boundary['right'] - increment
        boundary['bottom'] = boundary['bottom'] - increment
        boundary['left'] = boundary['left'] + increment
        
        result_A.extend(get_boundary_layer(matrix_A, boundary))
        result_B.extend(get_boundary_layer(matrix_B, boundary))
    
    result = result_A + result_B

    return result
        
```