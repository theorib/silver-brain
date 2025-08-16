Tags: #linux #cli-commands  #bash #security #ssh #authentication 

The Secure Shell Protocol is a cryptographic network protocol for operating network services securely over an unsecured network.
## Create an SSH key

After entering the following command, follow the on-screen prompts. You can create a password which you will have to remember every time you use the key (or you can store it in your keychain).

>[!info]
This process will create two files in the chosen directory. The one with the `.pub` extension is the public key that you send or set up in the services you are using. The other file is your private key, which you should never share.

```bash
ssh-keygen -t ed25519 -C "key-label" -f ~/.ssh/my-key
```

### Creating an SSH key with an outdated algorithm (RSA)

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

> [!tip]
If newly created SSH keys are not being picked up by the system, you can add them to the ssh process using the following command:
```bash
ssh-add ~/.ssh/my-key
```