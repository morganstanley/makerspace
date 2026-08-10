---
template: exercise
title: Saisie utilisateur
level: 1
exercise: 9
category: Python
tags: ['Python']
---

Vous pouvez demander une saisie à l’utilisateur avec `input()` — tout ce que l’utilisateur tape au niveau du prompt sera stocké comme une chaîne.

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```
*Résultat :*
```
What is your name? Bob
Hello, Bob!
```

N’oubliez pas que `input()` renvoie toujours une chaîne, donc si vous essayez de l’utiliser avec un opérateur de comparaison numérique, Python générera une erreur. Pour corriger cela, nous convertissons la chaîne en entier avec `int()` :

```python
age = input(f"How old are you, {name}? ")
age = int(age)
if age < 21:
  print(f"{name} is still young")
```
*Résultat :*
```
How old are you, Bob? 18
Bob is still young
```

## Exercices

Écrivez un jeu où le joueur doit deviner un nombre secret. Commencez par stocker le nombre dans une variable nommée `secret`. Ensuite, utilisez une boucle while qui demande au joueur de deviner le nombre jusqu’à ce qu’il soit correct. N’oubliez pas de donner au joueur des indices tels que « too high » ou « too low » selon les tentatives.
