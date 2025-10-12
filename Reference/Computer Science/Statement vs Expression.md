---
tags:
  - computer-science
  - statement
  - expression
  - declarative
---
# Statement versus Expression

Statements are actions to be carried out, for example, assigning a value to a variable or defining a function or an if statement.
```python
n = 7 # variable assignment statement

def greet(name): # function definition statement
	return f'Hello, {name}!'
	
if x > 10: # `if` statement
	print('too big')
	
for i in range(n): # `for` loop statement
```

Expressions are a subset of statements that produce values. for example, evaluating an expression result:

```python
result = 2 + 2 # arithmetic expression
length = len("hello") # function call expression
total_cost = len(items) * cost # multiple expressions combined into one
```

In most programming languages, including [[Python]] and [[JavaScript]], any function call is an expression since it produces a value whether we want it or not. In python, if a function doesn't have an explicit return value it returns `None`, it JavaScript, it returns `undefined`, both are values evaluated from the function.

For example, a function that returns a [[sum]] is an expression:
```python
total = sum([1,2,3,4])
```

We could get the same result with a loop but that is much more verbose, involving a series of steps:
```python
total = 0
for num in [1,2,3,4]:
	total += num
```

Because expressions always return values, they are [[reusable]] and [[declarative]].

You can compose expressions and nest them within each other, but you can't always do that with other kinds of statements.

Example of combining expressions:
```python
print(sum([1,2,3,4]) * 2) # == 20
```

We can't do the same with our series of statements:
```python
# This doesn't work!
print((
total = 0
for n in [1, 2, 3, 4]:
    total += n
) * 4)
```

## [[ternary]] expressions 
Ternaries are also expressions since they are a single statement that evaluates to a value, one of two, depending on a condition.

```python
result = number / 2 if number % 2 == 0 else (number * 3) + 1
```

