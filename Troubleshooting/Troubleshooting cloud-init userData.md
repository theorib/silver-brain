---
tags:
  - linux
  - cloud-init
  - troubleshooting
  - dev-ops
  - bash
  - user_data
---
# Troubleshooting Linux [[cloud-init]] [[userData]]
## Check if [[cloud-init]] completed

```bash
cloud-init status
```

## View detailed cloud-init logs

```bash
sudo cat /var/log/cloud-init.log
```

## View command output logs

```bash
sudo cat /var/log/cloud-init-output.log
```

## Check if [[cloud-init]] service ran

```bash
systemctl status cloud-init
```

## Check if the file exists:

```bash
ls -la /root/
```