---
template: exercise
title: Entrada do usuário
level: 1
exercise: 9
category: Python
tags: ['Python']
---

Você pode solicitar uma entrada do usuário com `input()` — tudo o que o usuário digitar no prompt será armazenado como uma string.

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```
*Saída:*
```
What is your name? Bob
Hello, Bob!
```

Não esqueça que `input()` sempre retorna uma string, então, se você tentar usá-la com um operador de comparação numérica, o Python lançará um erro. Para corrigir isso, convertemos a string em inteiro usando `int()`:

```python
age = input(f"How old are you, {name}? ")
age = int(age)
if age < 21:
  print(f"{name} is still young")
```
*Saída:*
```
How old are you, Bob? 18
Bob is still young
```

## Exercícios

Escreva um jogo em que o jogador tenha que adivinhar um número secreto. Primeiro, armazene o número em uma variável chamada `secret`. Depois, use um loop while que continue pedindo ao jogador para adivinhar o número até que ele esteja correto. Certifique-se de dar ao jogador dicas como "too high" ou "too low" com base nas tentativas.
