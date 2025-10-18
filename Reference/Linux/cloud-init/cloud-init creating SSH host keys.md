---
tags:
  - linux
  - cloud-init
  - cloud-config
  - ssh
---
# Creating [[SSH]] host keys on [[cloud-init]]

[source](https://www.youtube.com/watch?v=2_m6EUo6VOI&t=1781s)
Important tasks:
- Generate some know ssh keys
- move the keys into `/etc/ssh` before the first time the `ssh.service` unit starts

```yaml
#cloud-config 

ssh_genkeytypes:
	- rsa
	- ecdsa

ssh_deletekeys: false #cloud-init deletes keys by default 
```

```yaml
ssh keys:
	%{ for key in keys ~}
		${key-algorithm}_private: |
			$(key-private}
		${key-algorithm} public: |
			$(key-public}
	%{ endfor ~}
```