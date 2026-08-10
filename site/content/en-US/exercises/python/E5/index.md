---
template: exercise
title: Booleans
level: 1
exercise: 5
category: Python
tags: ['Python']
---

Booleans (or bools) represent one of two values: `True` or `False`. You can use Python's comparison operators to compare two numbers:

* `>`  Greater than
* `<`  Less than
* `>=`  Greater than or equal to
* `<=`  Less than or equal to
* `==`  Equal to
* `!=`  Not equal to

Example using "greater than" operator:
```python
print(43 > 21)
```
*Output:*
```python
True
```

Example using "equals to" operator:
```python
print(43 == 21)
```
*Output:*
```python
False
```

In the order of operations, arithmetic operators are evaluated before comparison operators:
```python
print(78 <= 3 * 26)
```
*Output:*
```python
True
```

Booleans can be combined or negated using logical operators:
* `and`
* `or`
* `not`

```python
(0 == 1) or (53 > 20)
```
*Output:*
```python
True
```

```python
(67 > 3) and (34 != 34)
```
*Output:*
```python
False
```

Boolean values can be assigned to variables just like numbers and strings:

```python
b = (54 < 22)
c = not b
print(c)
```
*Output:*
```python
True
```

## Exercises

1. Write a single line of code to determine if 241 times 4.5 is greater than or equal to 3281 divided by 3.

    _Hint: use a comparison operator._

2. The variable `red_led` is being used as a bool to control the red light on a circuit board. If it's set to `True` then then light will be on. If it's set to `False` then the light will be off. Write a single line of code to flip the state of the light (i.e., if it's on, turn it off; if it's off, turn it on).

    _Hint: use a logical operator, not an if/else block._
