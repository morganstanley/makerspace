---
template: exercise
title: Loops for
level: 1
exercise: 11
category: Python
tags: ['Python']
---

Um loop `for` itera sobre uma lista (ou outra sequência) e executa um bloco de código uma vez para cada item da lista. Lembre-se do loop `while` que escrevemos anteriormente:

```python
x = 1
while x <= 5:
  print(x)
  x = x + 1
```

Podemos fazer a mesma coisa em apenas duas linhas de código usando um loop `for` juntamente com a função `range`:

```python
for x in range(1,6):
  print(x)
```
*Saída:*
```python
1
2
3
4
5
```

A função `range` retorna uma sequência de números, começando em 0 por padrão, incrementando em 1 por padrão e terminando no número final. O exemplo acima passa tanto o número inicial quanto o número final como parâmetros. Aqui está um exemplo que passa apenas o número final (usando o valor padrão 0 para o início):

```python
for x in range(4):
  print(x)
```
*Saída:*
```python
0
1
2
3
```

Aqui está um exemplo de um loop `for` iterando sobre nossa lista de compras:

```python
groceries = ['eggs', 'milk', 'bread', 'coffee']
for g in groceries:
    print(g)
```
*Saída:*
```
eggs
milk
bread
coffee
```

## Exercícios

Modifique o último exemplo acima para imprimir uma lista de compras numerada. Por exemplo:
```
1. eggs
2. milk
3. bread
4. coffee
```
*Dica: use as funções* `len` *e* `range`, *e comece sua lista em « 1. », não « 0. »*
