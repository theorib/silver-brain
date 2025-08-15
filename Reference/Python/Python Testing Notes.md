Tags: #python #testing #pytest #unit-testing #decorators #functions #oop #iterators #best-practices

# Python Testing Notes

## General Testing Guidelines

### Core Testing Principles

- Test for **purity** - checking if new objects are being created
- Test for **value mutation** of the original arguments passed
- Test for **empty lists**, **empty strings**, etc.
- Always test with the **simplest possible inputs** first
- Test for correct exceptions raised with `pytest.raises()`

### Basic Testing Strategy

1. **Start simple** - use the most basic inputs that still test the core functionality
2. **Test edge cases** - empty collections, None values, zero, negative numbers
3. **Test error conditions** - invalid inputs should raise appropriate exceptions
4. **Test immutability** - ensure original data isn't modified when it shouldn't be

## Testing Higher Order Functions

Higher-order functions (HOFs) either receive functions as arguments or return functions. When testing them:

- Check that HOF receives or returns a function
- If relevant, check that the HOF function can receive **`n` positional arguments**
- If relevant, check that the HOF function can receive **`n` keyword arguments**
- Check that all **arguments** passed are correctly **received by the decorated function**
- Check the **number of function invocations** in the decorator

### Example Testing Pattern

```python
def test_hof_receives_function():
    def dummy_func():
        return "test"
    
    result = my_higher_order_function(dummy_func)
    assert callable(result)

def test_hof_passes_args_correctly():
    def capture_args(*args, **kwargs):
        return args, kwargs
    
    decorated = my_decorator(capture_args)
    args, kwargs = decorated(1, 2, 3, key="value")
    
    assert args == (1, 2, 3)
    assert kwargs == {"key": "value"}
```

## Testing Decorators

Decorators are a special case of higher order functions. Key testing areas:

### 1. Check Decorator Returns a Function

```python
from types import FunctionType

@pytest.mark.it('check that do_twice returns a function')
def test_return_func():
    @do_twice
    def dummy():
        pass
    
    assert isinstance(dummy, FunctionType)
```

### 2. Test Argument Passing

- Check that all **arguments** passed are correctly **received by decorated function**
- If relevant, check that the decorated function can receive **`n` positional arguments**
- If relevant, check that the decorated function can receive **`n` keyword arguments**

### 3. Test Function Invocation Count

- Check **number of function invocations** in decorator

### Example Decorator Tests

```python
def test_decorator_preserves_args():
    call_log = []
    
    @my_decorator
    def test_func(*args, **kwargs):
        call_log.append((args, kwargs))
        return "result"
    
    result = test_func(1, 2, key="value")
    
    assert len(call_log) == 1
    assert call_log[0] == ((1, 2), {"key": "value"})
    assert result == "result"

def test_decorator_invocation_count():
    call_count = 0
    
    @counting_decorator
    def dummy():
        nonlocal call_count
        call_count += 1
    
    dummy()
    assert call_count == expected_count  # Depends on your decorator logic
```

## Testing Iterators

When testing custom iterators, always ensure they follow the iterator protocol correctly:

### Key Iterator Tests

- Always check that the iterator **returns itself** when passed to the **`iter()`** function
- Test that `__next__()` works correctly
- Test that `StopIteration` is raised when iterator is exhausted
- Test that iterator can be used in for loops

### Example Iterator Tests

```python
def test_iterator_protocol():
    my_iterator = MyCustomIterator([1, 2, 3])
    
    # Iterator should return itself when passed to iter()
    assert iter(my_iterator) is my_iterator

def test_iterator_next():
    my_iterator = MyCustomIterator([1, 2, 3])
    
    assert next(my_iterator) == 1
    assert next(my_iterator) == 2
    assert next(my_iterator) == 3
    
    with pytest.raises(StopIteration):
        next(my_iterator)

def test_iterator_in_for_loop():
    items = [1, 2, 3]
    my_iterator = MyCustomIterator(items)
    result = []
    
    for item in my_iterator:
        result.append(item)
    
    assert result == items
```

## Testing Object-Oriented Programming (OOP)

When testing classes and objects:

### Key OOP Testing Areas

- Check that classes are storing values in **all relevant properties**
- Test object initialisation with various parameter combinations
- Test method behaviour and return values
- Test property getters and setters
- Test inheritance and method overriding
- Test class and static methods

### Example OOP Tests

```python
def test_class_initialization():
    obj = MyClass(name="test", value=42)
    
    assert obj.name == "test"
    assert obj.value == 42
    assert obj.computed_property == expected_value

def test_method_behaviour():
    obj = MyClass(initial_value=10)
    result = obj.process_data(input_data)
    
    assert result == expected_result
    assert obj.internal_state == expected_state

def test_property_setters():
    obj = MyClass()
    obj.property_name = "new_value"
    
    assert obj.property_name == "new_value"
    assert obj._internal_property == expected_internal_value
```

## Common Testing Patterns

### Testing Pure Functions

```python
def test_function_purity():
    original_list = [1, 2, 3]
    original_copy = original_list.copy()
    
    result = my_pure_function(original_list)
    
    # Original should not be modified
    assert original_list == original_copy
    # New object should be returned
    assert result is not original_list
```

### Testing Exception Handling

```python
def test_exception_raising():
    with pytest.raises(ValueError, match="Invalid input"):
        my_function(invalid_input)

def test_multiple_exception_types():
    with pytest.raises((TypeError, ValueError)):
        my_function(problematic_input)
```

### Testing Edge Cases

```python
def test_empty_inputs():
    assert my_function([]) == expected_empty_result
    assert my_function("") == expected_empty_string_result
    assert my_function(None) == expected_none_result

def test_boundary_conditions():
    assert my_function(0) == expected_zero_result
    assert my_function(-1) == expected_negative_result
    assert my_function(float('inf')) == expected_infinity_result
```

## Best Practices Summary

1. **Test the contract, not the implementation** - focus on what the function should do, not how it does it
2. **Use descriptive test names** - test names should clearly state what is being tested
3. **Keep tests isolated** - each test should be independent and not rely on others
4. **Test one thing at a time** - each test should verify one specific behaviour
5. **Use appropriate assertions** - choose the most specific assertion that clearly shows what you're testing
6. **Don't forget negative cases** - test that invalid inputs are handled correctly