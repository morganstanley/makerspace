---
template: exercise
title: Boucles while
level: 1
exercise: 7
category: Python
tags: ['Python']
---

Une boucle `while` répète un bloc de code tant qu’une condition spécifique est `True`. Voici un exemple qui affiche les nombres de 1 à 5 :

```python
x = 1
while x <= 5:
  print(x)
  x = x + 1
```
*Résultat :*
```python
1
2
3
4
5
```

Vous pouvez utiliser l’instruction `break` pour arrêter l’exécution d’une boucle `while`. En général, une instruction `break` est utilisée à l’intérieur d’un bloc `if` pour stopper la boucle lorsqu’une condition spécifique est remplie. Par exemple, voici la même boucle que ci-dessus mais en utilisant une instruction `break` :

```python
x = 1
while True:
  if x > 5:
    break
  print(x)
  x = x + 1
```
*Résultat :*
```python
1
2
3
4
5
```

## Exercices

Écrivez une boucle while qui affiche les nombres de 15 à 20.
