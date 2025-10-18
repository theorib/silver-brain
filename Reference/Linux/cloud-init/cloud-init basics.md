---
tags:
  - linux
  - cloud-init
---
# cloud-init basics

[[cloud-init]] runs in three distinct phases:
- init Phase: essential config that must be run early on
	- runs before the `ssh.service` runs
- config Phase: configuration that doesn't affect other stages of boot
- final Phase: scripts that need to run as late as possible

The main cloud-init configuration lives by default (in [[Ubuntu]]) at:
`/etc/cloud/cloud.cfg` and is a YAML file

If we examine that file we can see the order in which operations happen.

## configuration merging:

source: [configuration merging](https://jen20.dev/post/cloudinit-configuration-merging/)