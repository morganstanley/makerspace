---
template: exercise
title: Boucles for
level: 1
exercise: 11
category: Python
tags: ['Python']
---

Une boucle `for` parcourt une liste (ou une autre séquence) et exécute un bloc de code une fois pour chaque élément de la liste. Rappelez-vous de la boucle `while` que nous avons écrite plus tôt :

```python
x = 1
while x <= 5:
  print(x)
  x = x + 1
```

Nous pouvons faire la même chose en seulement deux lignes de code en utilisant une boucle `for` avec la fonction `range` :

```python
for x in range(1,6):
  print(x)
```
*Résultat :*
```python
1
2
3
4
5
```

La fonction `range` renvoie une séquence de nombres, commençant à 0 par défaut, en augmentant de 1 par défaut, et s’arrêtant au nombre final. L’exemple ci-dessus passe à la fois le nombre de départ et le nombre de fin en paramètres. Voici un exemple qui passe seulement le nombre final (en utilisant la valeur par défaut de 0 pour le départ) :

```python
for x in range(4):
  print(x)
```
*Résultat :*
```python
0
1
2
3
```

Voici un exemple d’une boucle `for` parcourant notre liste de courses :

```python
groceries = ['eggs', 'milk', 'bread', 'coffee']
for g in groceries:
    print(g)
```
*Résultat :*
```
eggs
milk
bread
coffee
```

## Exercices

Modifiez le dernier exemple ci-dessus pour afficher une liste de courses numérotée. Par exemple :
```
1. eggs
2. milk
3. bread
4. coffee
```
*Indice : utilisez les fonctions* `len` *et* `range`, *et commencez votre liste à « 1. », pas « 0. »*
