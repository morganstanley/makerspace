---
template: exercise
title: Chaînes de caractères
level: 1
exercise: 3
category: Python
tags: ['Python']
---

Une chaîne de caractères est une série de caractères entourés de guillemets simples ou doubles. Une chaîne peut être assignée à une variable comme un nombre. Vous pouvez utiliser `print()` pour afficher la chaîne :

```python
hello = 'Hello, World!'
print(hello)
```
*Résultat :*
```
Hello, World!
```

Si vous voulez utiliser un guillemet simple dans une chaîne (comme une apostrophe), vous avez deux choix : (1) entourer la chaîne de guillemets doubles, ou (2) utiliser l’**échappement de chaîne**, ce qui signifie ajouter une barre oblique inverse avant le guillemet.

Utiliser des guillemets doubles :
```python
greeting = "What's up?"
print(greeting)
```
*Résultat :*
```
What's up?
```

Utiliser l’échappement de chaîne :
```python
greeting = 'What's up?'
print(greeting)
```
*Résultat :*
```
What's up?
```

Deux chaînes ou plus peuvent être **concaténées** (combinées) en utilisant l’opérateur `+` :

```python
hello = "Hello"
there = "there"
greeting = hello + ' ' + there
print(greeting)
```
*Résultat :*
```
Hello there
```

Les **f-strings** de Python vous permettent d’utiliser des variables dans des chaînes pour construire des messages dynamiques. Pour définir une f-string, placez simplement un `f` devant la chaîne, et ajoutez des accolades pour insérer des variables ou d’autres expressions dans la chaîne :

```python
name = "Bob"
greeting = f"Hello {name}"
print(greeting)
```
*Résultat :*
```
Hello Bob
```

Autre exemple utilisant des entiers dans une f-string :
```python
coins = 15
score = f'You currently have {coins} coins. After this level you'll have {coins + 10}'
print(score)
```
*Résultat :*
```
You currently have 15 coins. After this level you'll have 25
```

## Exercices

1. Créez et affichez une variable avec la chaîne suivante :
```
When I say "Knock. Knock.", you say "Who's there?"
```

    *Indice : utilisez l’échappement de chaîne. Il y a deux solutions possibles.*

2. Créez deux variables, une qui stocke votre prénom et une autre votre nom de famille. Utilisez-les pour créer et afficher deux nouvelles chaînes :
   * Une qui vous salue par votre nom, par exemple : « Bonjour, John Doe ! »
   * Une qui affiche votre nom comme il pourrait apparaître dans un dossier officiel (nom, prénom). Par exemple : « Doe, John »

    *Indice : utilisez les f-strings*

3. Voici le début d’une blague à la porte :
```
s1 = "Knock. Knock."
s2 = "Who's there?"
```
Écrivez la suite de la blague en créant trois nouvelles variables : `s3`, `s4` et `s5`. Lors de la création de `s4`, utilisez `s3` dans une f-string (ne réécrivez pas manuellement les mots de `s3` dans `s4`).
