#python #aws #boto3 #moto #typing 

# To create static typing for the AWS boto3 package:

- Install [uv](https://docs.astral.sh/uv/getting-started/installation/)
- Run:
```bash
uvx mypy-boto3-builder
```
- Answer some questions, get your custom package
- Install a generated package
```bash
# for cloudformation, dynamodb, ec2, lambda, rds, s3, sqs
uv add 'types-boto3[essential]'
```
or
```bash
# or install all-in-one annotations for all services
uv add 'types-boto3[full]'
```
or follow [these instructions](https://youtype.github.io/types_boto3_docs/)

[Original Docs](https://youtype.github.io/mypy_boto3_builder/)

Use type hinting for example

```python
from typing import Generator
import boto3
import pytest
from moto import mock_aws
from types_boto3_s3.client import S3Client

@pytest.fixture(scope="function")
def s3_client() -> Generator[S3Client, None, None]:
	with mock_aws():
		yield boto3.client("s3")
```