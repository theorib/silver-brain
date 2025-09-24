#linux #search #terminal #cli 

# Finding by file content
You can search for words inside a file using the `grep` command:

```
$ grep "CRITICAL" 2024-01-10.log
2024-01-10 01:10:27 CRITICAL: Boots is loose in the server room.
2024-01-10 05:58:18 CRITICAL: Server is on fire, please evacuate.
2024-01-10 20:13:04 CRITICAL: Someone rm -rf'd the root directory.
2024-01-10 20:19:37 CRITICAL: Database files are corrupt.
```

You can also use `grep` to search multiple files recursively using the `-r` flag. In this case we are searching all files, including ones in sub-folders in the current directory:
```
$ grep -r "CRITICAL" .
./2024-01-11.log:2024-01-11 00:03:24 CRITICAL: Someone rm -rf'd the root directory.
./2024-01-11.log:2024-01-11 17:03:14 CRITICAL: Security scan is being maliciously manipulated.
./2024-01-10.log:2024-01-10 01:10:27 CRITICAL: Boots is loose in the server room.
./2024-01-10.log:2024-01-10 05:58:18 CRITICAL: Server is on fire, please evacuate.
./2024-01-10.log:2024-01-10 20:13:04 CRITICAL: Someone rm -rf'd the root directory.
./2024-01-10.log:2024-01-10 20:19:37 CRITICAL: Database files are corrupt.
./2024-01-12.log:2024-01-12 00:04:07 CRITICAL: Boots is out of Salmon again.
./2024-01-13.log:2024-01-13 00:03:08 CRITICAL: Power to the main datacenter has been lost. Attempting to reconnect.
./2024-01-16.log:2024-01-16 00:05:21 CRITICAL: Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0).
./2024-01-14.log:2024-01-14 00:02:58 CRITICAL: No one paid Dennis Nedry for his work. T-Rex released.
./2024-01-15.log:2024-01-15 00:03:57 CRITICAL: Worldbanc monitoring systems offline.
```

# Finding by file name
We use the `find` command to find files by their name, not content:
```bash
find some_directory -name hello.txt
```

You can also use 

```bash
find some_directory -name "*.txt"
```

```bash
# Find all filenames that contain the word "chad"
find some_directory -name "*chad*"
```