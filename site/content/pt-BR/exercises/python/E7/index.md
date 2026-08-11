---
template: exercise
title: Loops while
level: 1
exercise: 7
category: Python
tags: ['Python']
---

Um loop `while` repete um bloco de código enquanto uma condição específica for `True`. Aqui está um exemplo que imprime os números de 1 a 5:

```python
x = 1
while x <= 5:
  print(x)
  x = x + 1
```
*Saída:*
```python
1
2
3
4
5
```

Você pode usar a instrução `break` para parar a execução de um loop `while`. Normalmente, uma instrução `break` é usada dentro de um bloco `if` para parar o loop quando uma condição específica é atendida. Por exemplo, aqui está o mesmo loop acima, mas usando uma instrução `break`:

```python
x = 1
while True:
  if x > 5:
    break
  print(x)
  x = x + 1
```
*Saída:*
```python
1
2
3
4
5
```

## Exercícios

Escreva um loop while que imprima os números de 15 a 20.
