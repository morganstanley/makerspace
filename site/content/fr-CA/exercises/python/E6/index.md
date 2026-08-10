---
template: exercise
title: Si/Elif/Sinon
level: 1
exercise: 6
category: Python
tags: ['Python']
---

Vous pouvez utiliser les instructions `if` pour tester des conditions spécifiques et réagir en conséquence. Python utilise l’**indentation** pour déterminer quel code exécuter si une condition spécifique est remplie (notez que l’instruction `print` ci-dessous est indentée par rapport à l’instruction `if`) :

```python
a = 34
b = 22
if a > b:
  print("a is greater than b")
```
*Résultat :*
```
a is greater than b
```

Vous pouvez utiliser `elif` pour tester des conditions supplémentaires — elles ne seront testées que si la condition initiale est fausse. Vous pouvez aussi ajouter une instruction finale `else` qui ne s’exécutera que si toutes les conditions précédentes sont fausses :

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
*Résultat :*
```
a is equal to b
```

## Exercices
1. Créez une instruction `if` qui vérifie si la valeur stockée dans la variable `temperature` est entre 60 et 80, et si c’est le cas affiche le message « Nice weather ! »

2. Développez l’instruction `if` précédente en une instruction `if`/`elif`/`else` qui affiche « It’s freezing! » si la température est inférieure à 32, « It’s cold! » si elle est entre 32 et 50, et « It’s hot! » si elle est supérieure à 80.
