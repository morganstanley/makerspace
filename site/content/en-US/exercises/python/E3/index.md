---
template: exercise
title: Strings
level: 1
exercise: 3
category: Python
tags: ['Python']
---

A string is a series of characters surrounded by single or double quotes. A string can be assigned to a variable just like a number can be. You can use `print()` to display the string:

```python
hello = 'Hello, World!'
print(hello)
```
*Output:*
```
Hello, World!
```

If you want to use a single quote within a string (such as an apostrophe), you have two choices: (1) surround the string in double quotes, or (2) use **string escaping**, which means adding a backslash before the quote:

Using double quotes:
```python
greeting = "What's up?"
print(greeting)
```
*Output:*
```
What's up?
```

Using string escaping:
```python
greeting = 'What\'s up?'
print(greeting)
```
*Output:*
```
What's up?
```

Two or more strings can be **concatenated** (combined) using the `+` operator:

```python
hello = "Hello"
there = "there"
greeting = hello + ' ' + there
print(greeting)
```
*Output:*
```
Hello there
```

Python's **f-strings** allow you to use variables inside strings to build dynamic messages. To define an f-string simply put an `f` in front of the string, and add curly braces to insert variables or other expressions into the string:

```python
name = "Bob"
greeting = f"Hello {name}"
print(greeting)
```
*Output:*
```
Hello Bob
```

Another example using integers within an f-string:
```python
coins = 15
score = f'You currently have {coins} coins. After this level you\'ll have {coins + 10}'
print(score)
```
*Output:*
```
You currently have 15 coins. After this level you'll have 25
```

## Exercises

1. Create and print a variable with the following string:
```
When I say "Knock. Knock.", you say "Who's there?"
```

    *Hint: use string escaping. There are two possible solutions.*

2. Create two variables, one that stores your first name and one that stores your last name. Use these to create and print two new strings:
   * One that greets you by name, for example: "Hello, John Doe!"
   * One that prints your name as it might appear in an official record (last name, first name). For example: "Doe, John"

    *Hint: use f-strings*

3. Here's the start of a knock-knock joke:
```
s1 = "Knock. Knock."
s2 = "Who's there?"
```
Write the rest of the joke by creating three new variables: `s3`, `s4`, and `s5`. When creating `s4`, make use of `s3` within an f-string (do not manually retype the words from `s3` into `s4`).
