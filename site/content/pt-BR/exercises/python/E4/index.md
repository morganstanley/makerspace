---
template: exercise
title: Listas
level: 1
exercise: 4
category: Python
tags: ['Python']
---

Você pode usar listas para armazenar vários itens em uma única variável. Use colchetes para criar uma lista. Aqui está uma lista com 4 elementos:

```python
groceries = ['eggs', 'milk', 'bread', 'coffee']
print(groceries)
```
*Saída:*
```python
['eggs', 'milk', 'bread', 'coffee']
```

Você acessa itens na lista usando um **índice**. O primeiro item tem índice `[0]`, o segundo tem índice `[1]`, etc. Isso permite imprimir itens individuais:

```python
print(groceries[2])
```
*Saída:*
```python
bread
```

Também permite alterar itens individuais:

```python
groceries[3] = 'decaf coffee'
print(groceries)
```
*Saída:*
```python
['eggs', 'milk', 'bread', 'decaf coffee']
```

Você pode adicionar um item ao final da lista usando `append()`:

```python
groceries.append('flour')
print(groceries)
```
*Saída:*
```python
['eggs', 'milk', 'bread', 'decaf coffee', 'flour']
```

Você pode excluir um item usando `del`:

```python
del groceries[1]
print(groceries)
```
*Saída:*
```python
['eggs', 'bread', 'decaf coffee', 'flour']
```

Uma lista pode conter números, strings ou até uma mistura de ambos. Duas ou mais listas podem ser combinadas usando o operador `+`:

```python
lottery_numbers = [4, 8, 15, 16, 23, 42]
big_list = groceries + lottery_numbers
print(big_list)
```
*Saída:*
```python
['eggs', 'bread', 'decaf coffee', 'flour', 4, 8, 15, 16, 23, 42]
```

## Exercícios

1. Crie uma lista chamada `fruits` com os seguintes elementos: 'apple', 'banana', 'orange'
   * Adicione 'grape' ao fim da lista

     _Dica: use a função_ `append()`
   * Troque 'banana' por 'pear'
   * Imprima a lista final

2. Crie uma lista de quatro números consecutivos
    * Some o primeiro e o último elementos da lista
    * Some os dois elementos do meio da lista
    * As duas somas são iguais ou diferentes?

3. Faça uma lista dos seus jogos favoritos e atribua a uma variável chamada `games`. Faça uma lista dos seus alimentos favoritos e atribua a uma variável chamada `foods`. Agora combine essas listas em uma nova lista chamada `favorites`.
    * Agora remova o terceiro elemento de `favorites` e imprima a nova lista `favorites`
    * Remover o elemento de `favorites` afetou `games` ou `foods`?
