Tags: #bash, #aws, #cli-commands, #aws-cli, #ssh, #authentication, #credentials

# AWS CLI authentication and credentials

To create SSH keys, please see [[Creating SSH key pairs]]
## Get the current credentials
```bash
code ~/.aws/credentials
```

## Listing profiles
```bash
aws configure list-profiles
```
## Creating a new Profile
```bash
aws configure --profile new_profile_name
```

## Switching current profile
```bash
export AWS_PROFILE=new_profile_name
```

## Check current profile
```bash
aws configure list
```

## Checking the current profile with aws cli

```bash
aws sts get-caller-identity
```


## Credentials and Config location
Credentials get stored  by default at: `~/.aws/credentials`
Config such as region and output formats get stored by default at: `~/.aws/config`
### This is a sample credentials file:
```toml
[default]
aws_access_key_id = YOUR_DEFAULT_ACCESS_KEY
aws_secret_access_key = YOUR_DEFAULT_SECRET_KEY

[personal]
aws_access_key_id = YOUR_PERSONAL_ACCESS_KEY
aws_secret_access_key = YOUR_PERSONAL_SECRET_KEY

[work]
aws_access_key_id = YOUR_WORK_ACCESS_KEY
aws_secret_access_key = YOUR_WORK_SECRET_KEY
```

### Sample config file:
```toml
[default]
region = us-west-2
output = json

[profile personal]
region = us-west-1
output = text

[profile work]
region = eu-west-1
output = json
```
