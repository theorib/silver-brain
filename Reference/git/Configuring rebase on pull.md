#git #github #rebase 

# Configuring git to rebase on pull

By default git may try to merge a pull command from remote/origin but it may be quite convenient to have it set up so that it rebases the current branch instead. 

```bash
git config --global pull.rebase true
```