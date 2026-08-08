---
template: exercise
title: Functions
level: 1
exercise: 10
category: Python
tags: ['Python']
---

A **function** in Python is a reusable block of code designed to perform a specific task. A function can accept one or more parameters, and may or may not return a value. Here are some of Python's built-in functions we've used up to this point:
* `print` - output a value to the console
* `list.append` - add an element to the end of a list
* `input` - prompt the user for input and return the string entered by the user
* `type` - return the type of a value (`int`, `float`, `str`, `list`, `bool`)

The data types themselves can also be called as functions to convert a value from one type to another (when possible). Remember we did this to convert a string to an integer:

```python
int('45')
```
*Output:*
```python
45
```

Another built-in function is `len`, which accepts one parameter. If the parameter is a string, `len` returns the the number of characters in the string:
```python
greeting = "Hello"
len(greeting)
```
*Output:*
```python
5
```

If the parameter is a list, `len` returns the number of items in the list:
```python
groceries = ['apples', 'pears', 'grapes']
len(groceries)
```
*Output:*
```python
3
```

We can also define our own functions using the `def` keyword. Similar to `if` statements and `while` loops, we must end the line with a colon `:` and indent the lines of code within the function. Use the `return` keyword to have a function return a value. For example, here is a function that takes one string parameter and returns a string with a personalized greeting:

```python
def make_greeting(first_name):
    s = f"Hello, {first_name}!"
    return s
```
Now we can call the function we just created:
```python
greeting = make_greeting('Bob')
print(greeting)
```
*Output:*
```
Hello, Bob!
```

## Exercises

Change the `make_greeting` function above to accept two parameters, first_name and last_name, and return a greeting with the user's full name.
