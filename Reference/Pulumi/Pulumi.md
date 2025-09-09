Tags: #iac #pulumi #hetzner #cloudflare #cloud-infra-structure 
#devops

# Working with Pulumi
## Setting environment variables using Pulumi cloud
```bash
pulumi config set variable_name variable_value
```

Or to encrypt the environment variable
```bash
pulumi config set --secret secret_variable_name secret_variable_value
```

## Setting specific cloud API keys used internally by Pulumi

Hezner Cloud:
```bash
pulumi config set --secret hcloud:token YOUR_HETZNER_TOKEN
```

Cloudflare:
```bash
pulumi config set --secret cloudflare:apiToken YOUR_CLOUDFLARE_API_TOKEN
```
	