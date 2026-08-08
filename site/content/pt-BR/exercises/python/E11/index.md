---
template: exercise
title: Loops For
level: 1
exercise: 11
category: Python
tags: ['Python']
---

Um loop `for` itera sobre uma lista (ou outra sequência) e executa um bloco de código, uma vez para cada item da lista. Lembre-se do loop `while` que escrevemos anteriormente:

```python
x = 1
while x <= 5:
  print(x)
  x = x + 1
```

Podemos fazer a mesma coisa em apenas duas linhas de código usando um loop `for` junto com a função `range`:

```python
for x in range(1,6):
  print(x)
```
*Output:*
```python
1
2
3
4
5
```

A função `range` retorna uma sequência de números, começando em 0 (por padrão), incrementando em 1 (por padrão) e parando no número final. O exemplo acima passa os números inicial e final como parâmetros. Aqui está um exemplo que passa apenas o número final (usando o número inicial padrão, 0):

```python
for x in range(4):
  print(x)
```
*Output:*
```python
0
1
2
3
```

Aqui está um exemplo de um loop `for` iterando sobre nossa lista de compras:

```python
groceries = ['ovos', 'leite', 'pão', 'café']
for g in groceries:
    print(g)
```
*Output:*
```
ovos
leite
pão
café
```

## Exercício

Modifique o último exemplo acima para exibir uma lista de compras numerada. Por exemplo:
```
1. ovos
2. leite
3. pão
4. café
```
*Dica: use as funções* `len` *e* `range` *e comece sua lista em "1.", não em "0."*