#git #config

# Configuring git

Getting the configuration for the name of the initial branch in a repository (normally `master` or `main`)

Git configs are stored in several locations are are accessed in order with later ones taking precedence over earlier ones:

1. System Config: located at `/etc/gitconfig`
2. Global Config: located at `~/.gitconfig`
3. Local Config: located at `.git/config` within a project directory
4. Worktree Config: located at `.git/config.worktree`, this configures git for a specific part of the project.

Setting a new user name and email:
```bash
git config --add --global user.name "John Doe"
git config --add --global user.email "johndoe@johndoe.com"
```

Deleting a config:
```bash
git config --unset <key>
```

Deleting entire sections from git config such as `init`, `core`, etc:
```bash
git config --remove-section <sectionName>
```

Getting git configs:
```bash
git config --global --get init.defaultBranch
```

Setting the name of the initial branch in a repository:

```bash
#in this case we are setting it to main
git config --global init.defaultBranch main
```

Listing git configs:
```bash
git config --list
git config --global --list
git config --local --list
```

