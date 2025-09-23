#python #pytest #errors #exceptions #error-handling #exception-handling #testing


# Testing that exceptions are raised in pytest

When testing wether exceptions are raised in pytest, we can use the `pytest.raises` context manager.

This test will fail if a `ValueError` exception was not raised when calling `some_function` inside the test. You can test for any exceptions you want, just replace `ValueError` with the class name of the exception you want to test

```python
import pytest

def test_raises__value_error_exception():
    with pytest.raises(ValueError) as error:
        some_function("invalid_value")
```

You can also assert that the exception message is the one you expected.
Note that you have to make the assertion outside of the `pytest.raises` context manager otherwise the assertion does not work.

```python
import pytest

def test_raises__value_error_exception():
    with pytest.raises(ValueError) as error:
        another_function("another_invalid_value")
        
    assert str(error.value) == 'This value was invalid'
```