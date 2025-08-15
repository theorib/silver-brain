Tags: #linux, #cli-commands , #bash, #security, #SSH

## Create an SSH key

After entering the following command, follow the on-screen prompts. You can create a password which you will have to remember every time you use the key (or you can store it in your keychain)

```bash
ssh-keygen -t ed25519 -C "key-label" -f ~/.ssh/my-key
```

### Creating an SSH key with outdated algorithms
```bash
ssh-keygen -t rsa -b 2048 -f ~/.ssh/my-key
```

### Setting the correct permissions for the generated files
```bash
chmod 600 ~/.ssh/my-key
chmod 644 ~/.ssh/my-key.pub
```

## Troubleshooting

### Adding the newly generated key to the SSH process
```bash
ssh-add ~/.ssh/my-key
```