Tags: #linux #unix #files #directories #cli #cli-commands #bash

## Print Working Directory - Tells me where am I

```bash
pwd
```

## (ls stands for list) List the contents of a folder

```bash
ls
ls folderPath
ls folderPath/folderPath
```

## List the contents of a folder including hidden files

```bash
ls -a
ls -a folderPath
ls -a folderPath/folderPath
```

## (cd stands for change directory) Change Directory up (cd)

```bash
cd folderPath
cd folderPath/folderPath
```

## Change Directory back (cd)

```bash
cd ..
```

## Changes to the previous directory

```bash
cd -
```

## (mkdir stands for make directory) Create a new #directory (or multiple directories)

```bash
mkdir directoryName
mkdir "directory name with multiple words" ## in quotes
mkdir directory\ name\ with\ multiple\ words ## escaped
mkdir directoryName1 directoryName2 directoryName3
mkdir path/directoryName
```

## Create a [[new file]] (or multiple files)

```bash
touch newFileName.extension
touch newFileName.extension newFileName2.extension newFileName3.extension
touch path/newFileName.extension
touch path/path/newFileName.extension
```

## Create a new file (or multiple files)

```bash
touch newFileName.extension
touch newFileName.extension newFileName2.extension newFileName3.extension
touch path/newFileName.extension
touch path/path/newFileName.extension
```

## Open current folder in the finder

```bash
open .
```

## Open a specific folder in the finder

```bash
open folderPath

open folderPath/folderPath
```

## See the contents of a file

```bash
cat filename
```

## (mv stands for move) Move a file

```bash
mv filename.extension ~/destination-path ## absolute paths
mv filename.extension ../destination-path ## relative paths
```

### Renaming can also be done with the `mv` command

```bash
mv ./original_name ./new_name
```

  
## (cp stands for copy) Copy a file

```bash
cp filename.extension ~/destination-path ## absolute paths
cp filename.extension ../destination-path ## relative paths
cp ~/folder-name -R ~/destination-path ## relative paths
cp ../folder-name -R ../destination-path ## relative paths
```

## Delete a file (or multiple files)

```bash

rm fileName.extension
rm fileName.extension fileName.extension
rm path/fileName.extension

```

## Delete a folder (or multiple folders)

```bash
rm -rf folderName
rm -rf folderName1 folderName2
rm -rf path/folderName1
```

## create alias symlink

```bash
ln -s /path/to/original /path/to/link
```

## change permissions to make file executable

```bash
chmod u+x file_name
```

## to check the size of a file

```bash
wc -c file_path
```

