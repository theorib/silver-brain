#linux #cli-commands 

# Variables in bash

```bash
name="theo"
echo $name
# theo
```

## Environment Variables
Environment variables are not only available inside the current shell but also available to any programs running in the shell.

```bash
export SOME_ENV_VARIABLE="some_value"
```

## The `PATH` variable
The `PATH` is a special variable that is used by your system to look for the executable files you normally use. Instead of having to remember for example exactly when the `sh` executable is to run it (`/bin/sh` for example) the PATH variable is used by the system to provide a list of directories for it to look for the executable we called. If it finds one, it will use that executable.

```
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
```

To temporarily add a directory to your path:
```bash
export PATH="$PATH:/path/to/new"
```