---
template: exercise
title: User Input
level: 1
exercise: 9
category: Python
tags: ['Python']
---

You can prompt the user for input using `input()` - whatever the user types at the prompt will be stored as a string.

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```
*Output:*
```
What is your name? Bob
Hello, Bob!
```

Don't forget that `input()` always returns a string, so if you try to use it with a numerical comparison operator, Python will throw an error. To fix this we convert the string to an integer using `int()`:

```python
age = input(f"How old are you, {name}? ")
age = int(age)
if age < 21:
  print(f"{name} is still young")
```
*Output:*
```
How old are you, Bob? 18
Bob is still young
```

## Exercises

Write a game where the player has to guess a secret number. First, store the number in a variable named `secret`. Then use a while loop that keeps asking the player to guess the number until it's correct. Be sure to give the player hints like "too high" or "too low" based on the guesses.
