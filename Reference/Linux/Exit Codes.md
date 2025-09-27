#linux 

# Exit Codes
Exit codes allow programs to communicate with one another wether they ran successfully  or not. An exit code of `0` means a program ran successfully. Mostly in any other situation, when a program didn't run successfully, it will exit with a code `1` which is the catch-all error code.

We can get the exit code for the last program we ran:
```bash
echo $?
```