Tags: #linux #cloud-init #troubleshooting #dev-ops #bash
## Check if cloud-init completed

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

## Check if cloud-init service ran

```bash
systemctl status cloud-init
```

## Also check if the file exists:

```bash
ls -la /root/
```