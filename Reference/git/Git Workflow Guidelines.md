Tags: #git #workflow #pull-request #rebase #feature-branch #collaboration #best-practices #cli-commands #bash #troubleshooting 

# Git Workflow Guidelines

## Before Creating a Pull Request from a Feature Branch

### 1. Switch to Your Feature Branch

Switch into the branch we want to create the pull request from:

```bash
git switch feature-branch-name
```

### 2. Get Latest Changes from Origin

Get latest changes from origin if the branch is online and you are collaborating with someone else:

```bash
git fetch origin
```

### 3. Rebase onto Main Branch

Rebase the feature branch onto the latest version of the main branch:

```bash
git rebase origin/main
```

### 4. Resolve Conflicts (if any)

If there are conflicts, resolve them and then add the resolved files:

```bash
git add files_that_you_resolved_conflicts
```

### 5. Continue the Rebase

Continue the rebase after resolving conflicts:

```bash
git rebase --continue
```

### 6. Repeat Until Complete

Repeat step 4 until all conflicts are resolved and rebase is finished.

## Important Rebase Guidelines

**Don't do these things:**

- Don't use `git pull origin main` while on a feature branch - this creates merge commits
- Don't keep pulling to "make sure you're up to date"

**Do this instead:**

- Use `git rebase origin/main` instead to keep a clean linear history
- Only pull once after fetching

## If You Have Too Many Conflicts and Are Stuck in a Rebase Loop

Sometimes you get stuck in a rebase loop with too many conflicts. Here's how to get out of it:

Find the commits you want to integrate into main and copy their commit hashes. You can achieve this with git log.

### 1. Create a Brand New Clean Branch

```bash
git switch main
git pull origin main
git checkout -b feature-branch-name-clean
```

### 2. Cherry Pick Only the Commits You Want

```bash
git cherry-pick commit-hash-1 commit-hash-2
```

### 3. Edit Commits During Cherry Pick (Optional)

If you want to edit those commits instead of just accepting them, you can edit them one by one with:

```bash
git cherry-pick --no-commit commit-hash
```

## Other Useful Workflows

### Fixing Local Branches After Remote Branch Deletion

If you deleted a remote branch and want to reset the links of your local branch so it's not connected with any ghost remote branches, there are a few options:

#### Option 1: Remove the Remote Reference

```bash
git switch branch-to-fix
git branch --unset-upstream
```

#### Option 2: Clean Up All Stale Remote References

```bash
git remote prune origin
```

### Checking Remote Branches

To check if a remote branch exists:

```bash
git branch -r
```

### Reset to Specific Commit

Reset your branch to a specific commit:

```bash
git reset --hard <commit-hash>
```

## Summary of Best Practices

1. **Always fetch before rebasing** to get the latest changes
2. **Use rebase instead of merge** for feature branches to maintain clean history
3. **Resolve conflicts carefully** and test after each resolution
4. **Cherry pick when stuck** in complex rebase situations
5. **Clean up stale references** regularly to avoid confusion
6. **Check remote branches** before assuming they exist