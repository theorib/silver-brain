#git #cat 

# Git Trees and Blobs

Inspecting a commit to find a tree object:
```bash
git cat-file -p <commit-hash>
```

Inspecting a tree to find blob objects:
```bash
git cat-file -p <tree-hash>
```

Inspecting the contents of a blob:
```bash
git cat-file -p <blob-hash>
```