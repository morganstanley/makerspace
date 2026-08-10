---
template: exercise
title: Lists
level: 1
exercise: 4
category: Python
tags: ['Python']
---

You can use lists to store multiple items in a single variable. Use square brackets to create a list. Here is a list with 4 elements:

```python
groceries = ['eggs', 'milk', 'bread', 'coffee']
print(groceries)
```
*Output:*
```python
['eggs', 'milk', 'bread', 'coffee']
```

You access items in the list using an **index**. The first item has index `[0]`, the second has index `[1]`, etc. This lets you print individual items:

```python
print(groceries[2])
```
*Output:*
```python
bread
```

It also lets you change individual items:

```python
groceries[3] = 'decaf coffee'
print(groceries)
```
*Output:*
```python
['eggs', 'milk', 'bread', 'decaf coffee']
```

You can add an item to the end of the list using `append()`:


```python
groceries.append('flour')
print(groceries)
```
*Output:*
```python
['eggs', 'milk', 'bread', 'decaf coffee', 'flour']
```

You can delete an item using `del`:


```python
del groceries[1]
print(groceries)
```
*Output:*
```python
['eggs', 'bread', 'decaf coffee', 'flour']
```

A list can contain numbers, strings, or even a mix of both. Two or more lists can be combined using the `+` operator:


```python
lottery_numbers = [4, 8, 15, 16, 23, 42]
big_list = groceries + lottery_numbers
print(big_list)
```
*Output:*
```python
['eggs', 'bread', 'decaf coffee', 'flour', 4, 8, 15, 16, 23, 42]
```

## Exercises

1. Create a list called `fruits` with the following elements: 'apple', 'banana', 'orange'
   * Add 'grape' to the end of the list

     _Hint: use the_ `append()` *function*
   * Change 'banana' to 'pear'
   * Print the final list

2. Create a list of four consecutive numbers
    * Add the first and last elements of the list
    * Add the middle two elements of the list
    * Are the two sums the same or different?

3. Make a list of your favorite games and assign it to a variable named `games`. Make a list of your favorite foods and assign it to a variable named `foods`. Now combine these lists into a new list named `favorites`.
    * Now remove the third element of `favorites`, and print the new `favorites` list
    * Did removing the element from `favorites` affect either `games` or `foods`?
