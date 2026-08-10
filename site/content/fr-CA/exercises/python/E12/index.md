---
template: exercise
title: Jeux de cybersécurité
level: 1
exercise: 12
category: Python
tags: ['Python']
---

Utilisez vos compétences en Python pour écrire trois fonctions liées à une bonne gestion des mots de passe.

## Force du mot de passe

Écrivez une fonction pour tester si un mot de passe est robuste ou non.

Remplissez les parties du code marquées `TODO` :

```python
def is_strong(password):
  # TODO: Si le mot de passe fait moins de 12 caractères, retournez False.
  symbols = ['!', '@', '#']
  # TODO: Écrivez une boucle For pour parcourir la liste des symboles.
  #       Si un symbole se trouve dans le mot de passe, retournez True.
  #       Sinon, retournez False.
```

*Indice : utilisez la fonction* `len` *pour obtenir la longueur d’une chaîne.*
*Révisez les leçons sur* `If/Elif/Else`*,* `Functions`*,* et `For Loops`*.*

## Délai d’attente du mot de passe

Écrivez une fonction qui attend 10 secondes si l’utilisateur saisit un mot de passe incorrect 3 fois de suite.

Utilisez des variables globales pour stocker le mot de passe secret et le nombre de fois où l’utilisateur a tenté.

Remplissez les parties du code marquées `TODO` :

```python
from time import sleep
secret_password = # TODO: définissez le mot de passe ici
num_tries = 0

def try_password(entered_password):
  global num_tries
  # TODO: Si entered_password correspond à secret_password, retournez True.
  # TODO: Sinon, augmentez num_tries de 1.
  # TODO: Si num_tries est 3 ou plus, faites sleep(10) secondes et réinitialisez num_tries à 0.
  return False
```

*Indice : appelez* `sleep(10)` *pour attendre 10 secondes.*
*Révisez la leçon sur les* `Variables` *pour savoir comment augmenter la valeur d’une variable, et la leçon sur les* `If/Elif/Else` *pour comparer deux nombres.*

## Verrouillage du mot de passe

Écrivez une fonction qui verrouille le compte utilisateur si l’utilisateur tente un mot de passe incorrect 3 fois de suite.

Utilisez des variables globales pour stocker le mot de passe secret et le nombre de fois où l’utilisateur a tenté.

Remplissez les parties du code marquées `TODO` :

```python
from time import sleep
secret_password = # TODO: définissez le mot de passe ici
num_tries = 0

def try_password(entered_password):
  global num_tries
  # TODO: Si num_tries est 3 ou plus, retournez False.
  # TODO: Si entered_password correspond à secret_password, réinitialisez num_tries à 0 et retournez True.
  # TODO: Sinon, augmentez num_tries de 1 et retournez False.
  return False
```

*Révisez la leçon sur les* `Variables` *pour savoir comment augmenter la valeur d’une variable, et la leçon sur les* `If/Elif/Else` *pour comparer deux nombres.*
