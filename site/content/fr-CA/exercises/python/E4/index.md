---
template: exercise
title: Listes
level: 1
exercise: 4
category: Python
tags: ['Python']
---

Vous pouvez utiliser des listes pour stocker plusieurs éléments dans une seule variable. Utilisez des crochets pour créer une liste. Voici une liste de 4 éléments :

```python
groceries = ['eggs', 'milk', 'bread', 'coffee']
print(groceries)
```
*Résultat :*
```python
['eggs', 'milk', 'bread', 'coffee']
```

Vous accédez aux éléments de la liste en utilisant un **index**. Le premier élément a l’index `[0]`, le second `[1]`, etc. Cela vous permet d’afficher des éléments individuels :

```python
print(groceries[2])
```
*Résultat :*
```python
bread
```

Cela vous permet également de modifier des éléments individuels :

```python
groceries[3] = 'decaf coffee'
print(groceries)
```
*Résultat :*
```python
['eggs', 'milk', 'bread', 'decaf coffee']
```

Vous pouvez ajouter un élément à la fin de la liste en utilisant `append()` :

```python
groceries.append('flour')
print(groceries)
```
*Résultat :*
```python
['eggs', 'milk', 'bread', 'decaf coffee', 'flour']
```

Vous pouvez supprimer un élément avec `del` :

```python
del groceries[1]
print(groceries)
```
*Résultat :*
```python
['eggs', 'bread', 'decaf coffee', 'flour']
```

Une liste peut contenir des nombres, des chaînes ou même un mélange des deux. Deux listes ou plus peuvent être combinées avec l’opérateur `+` :

```python
lottery_numbers = [4, 8, 15, 16, 23, 42]
big_list = groceries + lottery_numbers
print(big_list)
```
*Résultat :*
```python
['eggs', 'bread', 'decaf coffee', 'flour', 4, 8, 15, 16, 23, 42]
```

## Exercices

1. Créez une liste appelée `fruits` avec les éléments suivants : 'apple', 'banana', 'orange'
   * Ajoutez 'grape' à la fin de la liste

     _Indice : utilisez la fonction_ `append()`
   * Remplacez 'banana' par 'pear'
   * Affichez la liste finale

2. Créez une liste de quatre nombres consécutifs
    * Ajoutez le premier et le dernier élément de la liste
    * Ajoutez les deux éléments du milieu de la liste
    * Les deux sommes sont-elles identiques ou différentes ?

3. Créez une liste de vos jeux préférés et assignez-la à une variable nommée `games`. Créez une liste de vos aliments préférés et assignez-la à une variable nommée `foods`. Combinez maintenant ces listes dans une nouvelle liste nommée `favorites`.
    * Supprimez maintenant le troisième élément de `favorites`, puis affichez la nouvelle liste `favorites`
    * Supprimer l’élément de `favorites` a-t-il affecté `games` ou `foods` ?
