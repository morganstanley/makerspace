---
template: exercise
title: Fonctions
level: 1
exercise: 10
category: Python
tags: ['Python']
---

Une **fonction** en Python est un bloc de code réutilisable conçu pour effectuer une tâche spécifique. Une fonction peut accepter un ou plusieurs paramètres, et peut ou non retourner une valeur. Voici quelques-unes des fonctions intégrées de Python que nous avons utilisées jusqu’à présent :
* `print` - afficher une valeur dans la console
* `list.append` - ajouter un élément à la fin d’une liste
* `input` - demander une saisie à l’utilisateur et retourner la chaîne saisie
* `type` - retourner le type d’une valeur (`int`, `float`, `str`, `list`, `bool`)

Les types de données eux-mêmes peuvent également être appelés comme des fonctions pour convertir une valeur d’un type à un autre (lorsque c’est possible). Souvenez-vous que nous l’avons fait pour convertir une chaîne en entier :

```python
int('45')
```
*Résultat :*
```python
45
```

Une autre fonction intégrée est `len`, qui accepte un paramètre. Si le paramètre est une chaîne, `len` renvoie le nombre de caractères de la chaîne :
```python
greeting = "Hello"
len(greeting)
```
*Résultat :*
```python
5
```

Si le paramètre est une liste, `len` renvoie le nombre d’éléments de la liste :
```python
groceries = ['apples', 'pears', 'grapes']
len(groceries)
```
*Résultat :*
```python
3
```

Nous pouvons également définir nos propres fonctions avec le mot-clé `def`. Comme pour les instructions `if` et les boucles `while`, nous devons terminer la ligne par deux points `:` et indenter les lignes de code à l’intérieur de la fonction. Utilisez le mot-clé `return` pour faire retourner une valeur à une fonction. Par exemple, voici une fonction qui prend un paramètre chaîne et retourne une chaîne avec un message personnalisé :

```python
def make_greeting(first_name):
    s = f"Hello, {first_name}!"
    return s
```
Nous pouvons maintenant appeler la fonction que nous venons de créer :
```python
greeting = make_greeting('Bob')
print(greeting)
```
*Résultat :*
```
Hello, Bob!
```

## Exercices

Modifiez la fonction `make_greeting` ci-dessus pour qu’elle accepte deux paramètres, first_name et last_name, et retourne un message de salutation avec le nom complet de l’utilisateur.
