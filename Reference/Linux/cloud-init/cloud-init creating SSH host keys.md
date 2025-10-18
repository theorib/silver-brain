---
tags:
  - linux
  - cloud-init
  - cloud-config
  - ssh
---
# Creating [[SSH]] host keys on [[cloud-init]]

Important tasks:
- Generate some know ssh keys
- move the keys into `/etc/ssh` before the first time the `ssh.service` unit starts

