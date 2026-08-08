---
template: exercise
title: While Loops
level: 1
exercise: 7
category: Python
tags: ['Python']
---

A `while` loop repeats a block of code as long a specific condition is `True`.  Here's an example that prints the numbers from 1 to 5:


```python
x = 1
while x <= 5:
  print(x)
  x = x + 1
```
*Output:*
```python
1
2
3
4
5
```

You can use the `break` statement to stop executing a `while` loop. Usually a `break` statement is used within an `if` block to stop the loop when a specific condition is met. For example here is the same loop as above but using a `break` statement:

```python
x = 1
while True:
  if x > 5:
    break
  print(x)
  x = x + 1
```
*Output:*
```python
1
2
3
4
5
```

## Exercises

Write a while loop that prints the numbers from 15 to 20.
