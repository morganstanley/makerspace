---
template: exercise
title: Booléens
level: 1
exercise: 5
category: Python
tags: ['Python']
---

Les booléens (ou bools) représentent une des deux valeurs : `True` ou `False`. Vous pouvez utiliser les opérateurs de comparaison de Python pour comparer deux nombres :

* `>`  Supérieur à
* `<`  Inférieur à
* `>=`  Supérieur ou égal à
* `<=`  Inférieur ou égal à
* `==`  Égal à
* `!=`  Différent de

Exemple utilisant l’opérateur « supérieur à » :
```python
print(43 > 21)
```
*Résultat :*
```python
True
```

Exemple utilisant l’opérateur « égal à » :
```python
print(43 == 21)
```
*Résultat :*
```python
False
```

Dans l’ordre des opérations, les opérateurs arithmétiques sont évalués avant les opérateurs de comparaison :
```python
print(78 <= 3 * 26)
```
*Résultat :*
```python
True
```

Les booléens peuvent être combinés ou niés en utilisant des opérateurs logiques :
* `and`
* `or`
* `not`

```python
(0 == 1) or (53 > 20)
```
*Résultat :*
```python
True
```

```python
(67 > 3) and (34 != 34)
```
*Résultat :*
```python
False
```

Les valeurs booléennes peuvent être assignées à des variables comme les nombres et les chaînes :

```python
b = (54 < 22)
c = not b
print(c)
```
*Résultat :*
```python
True
```

## Exercices

1. Écrivez une seule ligne de code pour déterminer si 241 multiplié par 4,5 est supérieur ou égal à 3281 divisé par 3.

    _Indice : utilisez un opérateur de comparaison._

2. La variable `red_led` est utilisée comme bool pour contrôler la LED rouge sur une carte de circuit. Si elle est définie sur `True`, le voyant sera allumé. Si elle est définie sur `False`, le voyant sera éteint. Écrivez une seule ligne de code pour inverser l’état du voyant (c’est-à-dire si elle est allumée, l’éteindre ; si elle est éteinte, l’allumer).

    _Indice : utilisez un opérateur logique, pas un bloc if/else._
