#python #pytest #testing #patching

We can use python's `unittest.mock.patch` to intercept


Consider a function that calls a module that we need to mock. In this case, the [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html) library is being used to get an s3 file from AWS.

When testing, we can use the [moto](https://docs.getmoto.org/en/latest/docs/getting_started.html) library to mock any AWS calls but to do so, we will need to patch   will need to 
```python
import boto3

def get_s3_file(bucket: str, key: str) -> bytes:
	s3_client = boto3.client("s3")
	response = s3_client.get_object(Bucket=bucket, Key=key)

	file = response["Body"].read()

	return file
```

```python
from unittest.mock import patch

import boto3
import pytest
from moto import mock_aws


@pytest.fixture(scope="function")
def s3_client():
	with mock_aws():
		# Create a mock s3 client
		s3_client = boto3.client("s3", region_name="eu-west-2")
		
		# Create a bucket within the client 
		s3_client.create_bucket( Bucket='test-bucket',
		CreateBucketConfiguration={'LocationConstraint': 'eu-west-2'} ) 
		
		# Add a test file 
		s3_client.put_object(
			Bucket='test-bucket',
			Key='file_key.txt',
			Body=b'some text'
		)
		
		yield s3_client


@patch("boto3.client")
def test_function_returns_bytes(mock_boto3_client, s3_client):
	mock_boto_client.return_value = s3_client

	expected = b'some text'

	result = get_s3_file('test_bucket', 'file_key.txt')
	assert isinstance(result, bytes)
	assert result == expected
```