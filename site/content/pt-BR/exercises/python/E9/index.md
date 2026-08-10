---
template: exercise
title: Entrada do Usuário
level: 1
exercise: 9
category: Python
tags: ['Python']
---

Você pode solicitar uma entrada ao usuário usando `input()` - tudo o que o usuário digitar no prompt será armazenado como uma string.

```python
nome = input("Qual o seu nome? ")
print(f"Olá, {nome}!")
```
*Output:*
```
Qual o seu nome? Bob
Olá, Bob!
```

Não se esqueça de que `input()` sempre retorna uma string, portanto, se você tentar usá-lo com um operador de comparação numérica, o Python gerará um erro. Para corrigir isso, convertemos a string para um inteiro usando `int()`:

```python
idade = input(f"Quantos anos você tem, {nome}? ")
idade = int(idade)
if idade < 21:
  print(f"{nome} ainda é jovem")
```
*Output:*
```
Quantos anos você tem, Bob? 18
Bob ainda é jovem
```

## Exercício

Escreva um jogo em que o jogador precisa adivinhar um número secreto. Primeiro, armazene o número em uma variável chamada `secret`. Em seguida, use um loop `while` que pede ao jogador para adivinhar o número até que ele esteja correto. Certifique-se de dar dicas ao jogador, como "muito alto" ou "muito baixo", com base nos palpites.