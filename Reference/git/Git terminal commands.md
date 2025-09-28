Tags: #cli-commands #git #github #bash

## CheatSheet Reference

https://github.com/arslanbilal/git-cheat-sheet#readme

## Configuring a Global Git Account to Sync All Your Projects

Replace username with your username and email with your email

```bash
git config --global user.name username
git config --global user.email email
```

## Configuring Git's Default Editor to be VS Code Globally

```bash
git config --global core.editor "code --wait"
```

## Configuring Git's Default Master Branch to be Called Main (for older repos)

Rename the Master branch to Main for an existing git repository (following GitHub's new standard)

```bash
git branch -m master main
git symbolic-ref HEAD refs/heads/main
```

## Starting an Empty Git Repository

Initialize a git repository in the directory where you execute the command

```bash
git init
```

## Creating a Git Ignore File

Create a `.gitignore` file where you include any files you don't want in the repository

**Filename:** `.gitignore`

## Checking Repository Status

Get the status of all files

```bash
git status
```

## Adding Files to Staging Area

Add all files from THIS DIRECTORY and subdirectories into Staging Area

```bash
git add .
```

Add all files into Staging Area

```bash
git add -A
```

Add specific files from the working directory into the Staging Area

```bash
git add fileToCommit.extension
git add fileToCommit1.extension fileToCommit2.extension
```

## Committing Files

To commit your files to git, you always add a message. If it's the first commit, it would normally be called 'Initial commit'.

```bash
git commit -a
git commit -a -m "my message"
git commit -am "my message"
```

## Viewing Commit History

Log of all commits (type "q" to quit)

```bash
git log
```

Log of all commits with one line per commit

```bash
git log --oneline
```

Quit the git log

```
q
```

Viewing the log history as a pretty graph
```bash
git --no-pager log --oneline --decorate --graph --parents
```
## Amending Commits

Amend the last commit (first add any files missing to that commit with git add)

```bash
git commit --amend
```

Amend the last commit without changing the message (first add any files missing to that commit with git add)

```bash
git commit --amend --no-edit
```

## Working with Branches

View existing branches (q to quit)

```bash
git branch
```

More information about a branch

```bash
git branch -v
```

Create a new branch based upon the current HEAD (replace branch-name with the name you want)

```bash
git branch branch-name
```

## Switching Branches (NEW Method)

It's intended to be a safer and more user-friendly way to change branches. When you use git switch, it will only switch branches. It won't discard changes in your working directory. If you have uncommitted changes in your current branch, git switch will prompt you to either commit your changes or stash them.

Switch to another branch

```bash
git switch branchName
# or do it the old way
git checkout branchName
```

Create a new branch based upon the current HEAD and switch to it

```bash
git switch -c newbranchName
```

Go to the previous branch

```bash
git switch -
```

## Managing Branches

Delete a branch

```bash
git branch -d branchToDelete
```

Rename a branch

```bash
git branch -m oldBranchName newBranchName
```

Show all branches (local and remote)

```bash
git branch -a
```

## Switching Branches (OLD Method)

**Note:** This is the old way of switching to another branch. Has many other functions but git switch is preferred for branch switching.

```bash
git checkout branch-name
```

## Merging Branches

Merge two branches (replace branch-name with the name you want). You have to be in the branch you want to merge another one into and then type:

```bash
git merge branch-name
git merge --no-ff branch-name  # Preferred way to merge using a new commit (no fast forward) to preserve better commit history
```

## Resetting Changes

Reset all files to git's last commit

```bash
git reset --hard HEAD
```

## Viewing Differences

Show changes in the working directory that are NOT staged for the next commit (compares Working Directory and Staging Area)

```bash
git diff
```

List all changes in the working directory since the last commit (staged or unstaged)

```bash
git diff HEAD
```

Show only staged changes

```bash
git diff --staged
git diff --cached  # same as --staged
```

## Comparing Changes in Specific Files

```bash
git diff file1
git diff file1 file2  # multiple files
git diff HEAD file1  # changes since last commit (staged or unstaged)
git diff HEAD file1 file2  # changes since last commit (staged or unstaged) on multiple files
```

## Comparing Differences Between Branches

**Note:** The order matters

```bash
git diff branch1..branch2
git diff branch1 branch2
```

## Comparing Changes Between Two Commits

**Note:** The order matters

```bash
git diff commitHASH1..commitHASH2
git diff commitHASH1 commitHASH2
```

## Stashing Changes

Stash your current changes

```bash
git stash  # short for git stash save
git stash save
git stash save "Work in progress for feature X"
```

Apply the stashed changes into the current branch and delete them from the stash. Does not commit or add them to the staging area.

```bash
git stash pop
```

Apply the most recent stash (does not delete the stash). You need to specify the stash you want to apply if you have multiple stashes. Useful when you want to apply the same stash to multiple branches.

```bash
git stash apply
```

## Managing Stashes

List all stashes

```bash
git stash list
```

Apply a specific stash

```bash
git stash apply stash@{2}
```

Delete a specific stash

```bash
git stash drop stash@{2}
```

Delete all stashes

```bash
git stash clear
```

## Checking Out Specific Commits

Checking out a specific commit

```bash
git checkout commitHash
```

Checking out previous commits relative to HEAD

```bash
git checkout HEAD~1  # one commit before HEAD
git checkout HEAD~2  # two commits before HEAD
git checkout HEAD~3  # three commits before HEAD
```

## Discarding Changes with Git Checkout

```bash
git checkout HEAD file1  # discard changes in file1
git checkout -- file1  # discard changes in file1
git checkout -- file1 file2  # discard changes in file1 and file2
```

## Restoring Changes with Git Restore

Restore changes to current HEAD

```bash
git restore file1  # restore changes in file1
git restore file1 file2  # restore changes in file1 and file2
```

Restore changes to a previous commit

```bash
git restore --source HEAD~1 file1  # restore changes in file1 to previous commit
git restore --source HEAD~1 file1 file2  # restore changes in file1 and file2 to previous commit
```

Unstaging files with git restore

```bash
git restore --staged file1  # unstage file1
```

## Deleting Commits with Git Reset

Deleting commits but keeping the changes in the working directory. This deletes the commits but keeps the changes in the working directory, so you can move them and commit them in a new branch.

```bash
git reset HEAD~1  # delete last commit
git reset commithash  # delete all commits after commithash
```

Deleting commits and discarding the changes in the working directory

```bash
git reset --hard HEAD~1  # delete last commit and discard changes in working directory
git reset --hard commithash  # delete all commits after commithash and discard changes in working directory
```

## Reverting Commits

Reverting to a previous commit without deleting the changes. Instead, creates a new commit with the reverted changes. This keeps the commit history but creates a new commit with the reverted changes.

```bash
git revert HEAD~1  # revert last commit
git revert commithash  # revert specific commit
```

## Git Remote Commands

Show all remote repositories

```bash
git remote -v
```

## Cloning a Repository

**Important:** Make sure you are NOT in a git repository

```bash
git clone <url>
```

## Adding a Remote Repository

Add a remote repository to a local Git repository. Recommend using "origin" as the name of the remote repository.

```bash
git remote add <name> <url>
git remote add origin https://github.com/username/repo.git  # example
git remote add upstream https://github.com/username/repo.git  # example
```

## Managing Remote Repositories

Renaming a remote repository

```bash
git remote rename <old-name> <new-name>
```

Removing a remote repository

```bash
git remote remove <name>
```

## Pushing to Remote Repository

Basic push to remote repository

```bash
git push <remote> <branch>
git push origin main  # example
```

Push from a branch into a branch with a different name

```bash
git push <remote> <local-branch>:<remote-branch>
git push origin localBranchName:remoteBranchName  # example
```

Setting up the upstream branch (equivalent in GitHub of a local branch). This is only needed the first time you push a branch to a remote repository.

```bash
git push -u <remote> <branch>
git push -u origin main  # example
```

## Viewing Remote Branches

```bash
git branch -r
```

## Fetching Changes from Remote

Fetching changes from remote without adding them to the working directory. Does not merge changes into the current HEAD. Safe to do at any time.

```bash
git fetch <remote>
git fetch origin  # example
git fetch  # fetch all remotes
```

## Pulling Changes from Remote

Pulling changes from remote and merging them into the current branch. Updates the current branch with the new changes, merging them in. Can result in conflicts. Not recommended if you have uncommitted changes.

**Important:** Where we run git pull from matters. If we are in the main branch, it will pull from the main branch of the remote repository.

```bash
git pull <remote> <branch>
git pull origin main  # example
git pull  # pull from origin, from the tracked remote branch into current branch
```

## Rebasing

Similar to merging but it rewrites the commit history.

**Important:**

- Only rebase commits that have NEVER been pushed to a remote repository
- NEVER rebase commits that have been shared with other people as it will cause serious conflicts

```bash
git switch featureBranch
git rebase main  # you have to be on the feature branch and call the branch you want to rebase from
```

## Utility Commands

Copy full git diff of staged files to the clipboard

```bash
git diff --staged | pbcopy
```

## Trick Commands

Go to the previous branch

```bash
git checkout -
```

Merge the previous branch onto the current branch

```bash
git merge -
```