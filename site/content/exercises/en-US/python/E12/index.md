---
template: exercise
title: Cyber Safety Games
level: 1
exercise: 12
category: Python
tags: ['Python']
---

Use your Python skills to write three functions related to good password management.

## Password Strength

Write a function to test whether a password is strong or not.

Fill in parts of the code marked `TODO`:

```python
def is_strong(password):
  # TODO: If password is less than 12 characters, return False.
  symbols = ['!', '@', '#']
  # TODO: Write a For Loop to iterate through the list of symbols.
  #       If any symbol is in the password, return True.
  #       Otherwise, return False.
```

*Hint: use the* `len` *function to get the length of a string.*
*Review lessons on* `If/Elif/Else`*,* `Functions`*,* and `For Loops`*.*

## Password Timeout

Write a function that times out for 10 seconds if the user tries an incorrect password 3 times in a row.

Use global variables to store the secret password and the number of times the user has tried.

Fill in parts of the code marked `TODO`:

```python
from time import sleep
secret_password = # TODO: set password here
num_tries = 0

def try_password(entered_password):
  global num_tries
  # TODO: If entered_password matches secret_password, return True.
  # TODO: Otherwise, increase num_tries by 1.
  # TODO: If num_tries is 3 or more, sleep for 10 seconds and reset num_tries to 0.
  return False
```

*Hint: call* `sleep(10)` *to sleep for 10 seconds.*
*Review the* `Variables` *lesson for how to increase the value of a variable, and the* `If/Elif/Else` *lesson for how to compare two numbers.*

## Password Lockout

Write a function that locks the user account if the user tries an incorrect password 3 times in a row.

Use global variables to store the secret password and the number of times the user has tried.

Fill in parts of the code marked `TODO`:

```python
from time import sleep
secret_password = # TODO: set password here
num_tries = 0

def try_password(entered_password):
  global num_tries
  # TODO: If num_tries is 3 or more, return False.
  # TODO: If entered_password matches secret_password, reset num_tries to 0 and return True.
  # TODO: Otherwise, increase num_tries by 1 and return False.
  return False
```

*Review the* `Variables` *lesson for how to increase the value of a variable, and the* `If/Elif/Else` *lesson for how to compare two numbers.*
