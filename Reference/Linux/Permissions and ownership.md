#permissions #linux #chmod

# Permissions and ownership

## Changing Permissions

Permissions are represented by a 10 character string. The first character is either a `d` which stands for a directory or a `-` which in this case means it's a file.

The subsequent characters are the permissions for the owner, group and others respectively and their values can be either 3x `rwx` or any combination of those letters with `-` for when a permission isn't granted. 
`r` = read
`w` = write
`x` = execute
`-` = not allowed

For example, the following means it's a directory, the owner has read, write and execute permission but the group and everyone else have no permissions.
```
drwx------
```

On the other hand, the following would allow anyone to read write and execute that directory:
```
drwxrwxrwx
```

You can get the permissions for all files in a directory using:
```bash
ls -l
```

You can change permissions using the `chmod` command or "change mode" and you can do it recursively into all files in a directory with the `-R` flag:

```bash
chmod -R u=rwx,g=,o= DIRECTORY
```

You can remove the ability to execute a file by running
```bash
chmod -x file_name.sh
```

Conversely, we can add the ability to execute that file with:
```bash
chmod u+x file_name.sh
```

## Changing Ownership

You can change the ownership of a file or directory with the `chown` command. To do so, you probably need to run that command as `sudo`

The following command will change the owner of the folder `some_folder` and all of it's contents to be the `root` user. 

```bash
sudo chown -R root some_folder
```

Here is an explanation of the command
- `sudo` - Run as the root user
- `chown` - Command to change the owner
- `-R` - "Recursive", meaning also apply the changes to everything inside the directory
- `root` - The name of the new owner
- `contacts` - The directory to change the owner of