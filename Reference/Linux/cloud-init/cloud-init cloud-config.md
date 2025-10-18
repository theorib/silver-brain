---
tags:
  - linux
  - cloud-init
  - cloud-infra-structure
  - cloud-config
---
# cloud-init

Validating a cloud-init config file:
```bash
cloud-init schema --config-file config-file-name.yaml
```

## cloud-config files:

A config file to change the default user generated upon init:
```yaml
#cloud-config

system info:
	default user:
		name: ops 
		gecos: "Operations User"
		primary group: ops 
		shell: /bin/bash 
		lock_passwd: true
		sudo: ['ALL=(ALL) NOPASSWD: ALL']
```
