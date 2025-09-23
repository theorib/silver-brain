#python #pytest #errors #exceptions #error-handling #exception-handling #testing

When testing wether exceptions are raised in python, we can use the `pytest.raises` context manager.

```python
import pytest

def test_raises_exception_if_found_turnips():
    with pytest.raises(ValueError) as error:
        some_function("invalid_value")
    # To assert the error message effectivelly, we have to make the assertion outside the with block
    assert str(error.value) == 'This value was invalid'
```