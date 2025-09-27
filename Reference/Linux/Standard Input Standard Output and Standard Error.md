#linux #stdout #stderr

# Standard Input, Standard Output and Standard Error

## Standard Output
Standard output is the default place where programs print their output. for exempla, in python we use the `print()` function to print to `stdout` or `echo` in bash.

## Standard Error
Standard error is a separate stream that is intended for a program's error messages.

By default, `stderr` prints to the terminal just like `stdout` but we can redirect their outputs.

## Redirecting `stdout` and `stderr`

We can redirect `stdout` with `>` and `stderr` with `2>`
```bash
echo "Hello world" > hello.txt
cat hello.txt
# Hello world
```

```bash
cat doesnotexist.txt 2> error.txt
cat error.txt
# cat: doesnotexist.txt: No such file or directory
```

## Standard Input
Usually called "standard in" or "stdin", is the default place where programs _read_ their input.
In python, it's represented by the `input()` function in bash it's the `read`