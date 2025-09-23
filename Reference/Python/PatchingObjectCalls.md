# Python Pytest Testing - Patching Example

#python #pytest #testing #patching

We can use python's `unittest.mock.patch` to intercept and mock function calls during testing.

Consider a simple function that fetches a user's profile from an API. We want to test our logic without making actual HTTP requests:

```python
import requests

def get_user_profile(user_id):
    """Fetch user profile from API"""
    try:
        response = requests.get(f"https://api.example.com/users/{user_id}")
        response.raise_for_status()  # Raises exception for 4xx/5xx status codes
        return response.json()
    except requests.RequestException as e:
        return {"error": f"Failed to fetch user: {str(e)}"}

def format_user_display(user_id):
    """Get user data and format for display"""
    profile = get_user_profile(user_id)
    
    if "error" in profile:
        return f"Error: {profile['error']}"
    
    name = profile.get('name', 'Unknown')
    email = profile.get('email', 'No email')
    
    return f"{name} ({email})"
```

```python
from unittest.mock import patch, Mock
import pytest
import requests

@patch('your_module.requests.get')  # Replace 'your_module' with actual module name
def test_format_user_display_success(mock_get):
    # Mock successful API response
    mock_response = Mock()
    mock_response.json.return_value = {
        'name': 'John Doe',
        'email': 'john@example.com'
    }
    mock_response.raise_for_status.return_value = None
    mock_get.return_value = mock_response
    
    result = format_user_display(123)
    
    assert result == "John Doe (john@example.com)"
    mock_get.assert_called_once_with("https://api.example.com/users/123")

@patch('your_module.requests.get')
def test_format_user_display_api_error(mock_get):
    # Mock API failure
    mock_get.side_effect = requests.ConnectionError("Connection failed")
    
    result = format_user_display(123)
    
    assert result == "Error: Failed to fetch user: Connection failed"

@patch('your_module.requests.get')
def test_format_user_display_missing_data(mock_get):
    # Mock response with missing fields
    mock_response = Mock()
    mock_response.json.return_value = {'id': 123}  # Missing name and email
    mock_response.raise_for_status.return_value = None
    mock_get.return_value = mock_response
    
    result = format_user_display(123)
    
    assert result == "Unknown (No email)"
```

## Key Points

In this example:

- We patch `requests.get` to avoid making real HTTP calls during tests
- We test the **happy path** with successful API responses
- We test **error handling** by simulating network failures using `side_effect`
- We test **edge cases** like missing data fields
- The patching lets us control exactly what the API "returns" for predictable testing

This is a common pattern when testing code that depends on external services - patch the external dependency and focus on testing your own logic.