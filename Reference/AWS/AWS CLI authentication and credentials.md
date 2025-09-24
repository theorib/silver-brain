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
## Running a command as a specific profile
```bash
aws s3 ls --profile SomeProfileName
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

>[!info]
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

## Configuring IAM Identity Center authentication with the AWS CLI (SSO authentication)

Official docs [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html) and how to set up an account user here: [[AWSAccountSetup]]
Follow the onscreen prompts:

```bash
aws configure sso
```

