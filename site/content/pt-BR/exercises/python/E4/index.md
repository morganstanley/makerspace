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
groceries = ['ovos', 'leite', 'pão', 'café']
print(groceries)
```
*Output:*
```python
['ovos', 'leite', 'pão', 'café']
```

Você acessa os itens da lista usando um **index** (índice). O primeiro item tem índice `[0]`, o segundo tem índice `[1]`, e assim por diante. Isso permite que você mostre itens individuais:

```python
print(groceries[2])
```
*Output:*
```python
pão
```

Ele também permite que você altere itens individuais:

```python
groceries[3] = 'café descafeinado'
print(groceries)
```
*Output:*
```python
['ovos', 'leite', 'pão', 'café descafeinado']
```

Você pode adicionar um item ao final da lista usando `append()`:


```python
groceries.append('farinha')
print(groceries)
```
*Output:*
```python
['ovos', 'leite', 'pão', 'café descafeinado', 'farinha']
```

Você pode apagar itens usando `del`:


```python
del groceries[1]
print(groceries)
```
*Output:*
```python
['ovos', 'pão', 'café descafeinado', 'farinha']
```

Uma lista pode conter números, strings ou até mesmo uma mistura de ambos. Duas ou mais listas podem ser combinadas usando o operador `+`:


```python
lottery_numbers = [4, 8, 15, 16, 23, 42]
big_list = groceries + lottery_numbers
print(big_list)
```
*Output:*
```python
['ovos', 'pão', 'café descafeinado', 'farinha', 4, 8, 15, 16, 23, 42]
```

## Exercícios

1. Crie uma lista chamada `frutas` com os seguintes elementos: 'maçã', 'banana', 'laranja'
   * Adicione 'uva' ao final da lista

     _Dica: use a_ *função* `append()`
   * Altere 'banana' para 'pera'
   * Exiba a lista final

2. Crie uma lista de quatro números consecutivos
    * Adicione o primeiro e o último elementos da lista
    * Adicione os dois elementos do meio da lista
    * As duas somas são iguais ou diferentes?

3. Faça uma lista dos seus jogos favoritos e atribua-a a uma variável chamada `jogos`. Faça uma lista das suas comidas favoritas e atribua-a a uma variável chamada `comidas`. Agora, combine essas listas em uma nova lista chamada `favoritos`.
    * Agora remova o terceiro elemento de `favoritos` e mostre a nova lista de `favoritos`
    * A remoção do elemento de `favoritos` afetou `jogos` ou `alimentos`?
