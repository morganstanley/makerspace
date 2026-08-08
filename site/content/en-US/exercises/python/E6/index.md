---
template: exercise
title: If/Elif/Else
level: 1
exercise: 6
category: Python
tags: ['Python']
---

You can use `if` statements to test for specific conditions and respond accordingly. Python uses **indentation** to determine what code to execute if a specific condition is met (note the `print` statement below is indented from the `if` statement):

```python
a = 34
b = 22
if a > b:
  print("a is greater than b")
```
*Output:*
```
a is greater than b
```

You can use `elif` to test for additional conditions - these will only be tested if the original condition is false. You can also add a final `else` statement that will only execute if all the preceding conditions are false:

```python
a = 34
b = 34
if a > b:
  print("a is greater than b")
elif a < b:
  print("a is less than b")
else:
  print("a is equal to b")
```
*Output:*
```
a is equal to b
```

## Exercises
1. Create an `if` statement that checks whether the value stored in the variable `temperature` is between 60 and 80, and if so prints the message "Nice weather!"

2. Expand the previous `if` statement into an `if`/`elif`/`else` statement that prints "It's freezing!" if the temperature is below 32, "It's cold!" if it's between 32 and 50, and "It's hot!" if it's above 80.
