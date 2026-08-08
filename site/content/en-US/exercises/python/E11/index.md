---
template: exercise
title: For Loops
level: 1
exercise: 11
category: Python
tags: ['Python']
---

A `for` loop iterates over a list (or other sequence) and executes a block of code, once for each item in the list. Recall the `while` loop we wrote earlier:

```python
x = 1
while x <= 5:
  print(x)
  x = x + 1
```

We can do the same thing in only two lines of code using a `for` loop along with the `range` function:

```python
for x in range(1,6):
  print(x)
```
*Output:*
```python
1
2
3
4
5
```

The `range` function returns a sequence of numbers, starting at 0 (by default), incrementing by 1 (by default), and stopping at the end number. The example above passes in both the start and stop numbers as parameters. Here's an example that passes in just the stop number (using the default start number of 0):

```python
for x in range(4):
  print(x)
```
*Output:*
```python
0
1
2
3
```

Here's an example of a `for` loop iterating over our grocery list:

```python
groceries = ['eggs', 'milk', 'bread', 'coffee']
for g in groceries:
    print(g)
```
*Output:*
```
eggs
milk
bread
coffee
```

## Exercises

Modify the last example above to print out a numbered grocery list. For example:
```
1. eggs
2. milk
3. bread
4. coffee
```
*Hint: use the* `len` *and* `range` *functions, and start your list at "1.", not "0."*