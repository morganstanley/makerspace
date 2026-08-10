---
template: exercise
title: Strings
level: 1
exercise: 3
category: Python
tags: ['Python']
---

Uma string é uma sequência de caracteres delimitada por aspas simples ou duplas. Uma string pode ser atribuída a uma variável como um número. Você pode usar `print()` para exibir a string:

```python
hello = 'Hello, World!'
print(hello)
```
*Saída:*
```
Hello, World!
```

Se você quiser usar uma aspa simples dentro de uma string (como um apóstrofo), você tem duas opções: (1) envolver a string em aspas duplas, ou (2) usar **escape de string**, o que significa adicionar uma barra invertida antes da aspa.

Usando aspas duplas:
```python
greeting = "What's up?"
print(greeting)
```
*Saída:*
```
What's up?
```

Usando escape de string:
```python
greeting = 'What's up?'
print(greeting)
```
*Saída:*
```
What's up?
```

Duas ou mais strings podem ser **concatenadas** (combinadas) usando o operador `+`:

```python
hello = "Hello"
there = "there"
greeting = hello + ' ' + there
print(greeting)
```
*Saída:*
```
Hello there
```

As **f-strings** do Python permitem usar variáveis dentro de strings para construir mensagens dinâmicas. Para definir uma f-string, basta colocar um `f` na frente da string e adicionar chaves para inserir variáveis ou outras expressões dentro da string:

```python
name = "Bob"
greeting = f"Hello {name}"
print(greeting)
```
*Saída:*
```
Hello Bob
```

Outro exemplo usando inteiros dentro de uma f-string:
```python
coins = 15
score = f'You currently have {coins} coins. After this level you'll have {coins + 10}'
print(score)
```
*Saída:*
```
You currently have 15 coins. After this level you'll have 25
```

## Exercícios

1. Crie e imprima uma variável com a seguinte string:
```
When I say "Knock. Knock.", you say "Who's there?"
```

    *Dica: use escape de string. Há duas soluções possíveis.*

2. Crie duas variáveis, uma para armazenar seu primeiro nome e outra para o sobrenome. Use-as para criar e imprimir duas novas strings:
   * Uma que o cumprimente pelo nome, por exemplo: "Olá, John Doe!"
   * Uma que imprima o seu nome como apareceria em um registro oficial (sobrenome, nome). Por exemplo: "Doe, John"

    *Dica: use f-strings*

3. Aqui está o início de uma piada de batida:
```
s1 = "Knock. Knock."
s2 = "Who's there?"
```
Escreva o restante da piada criando três novas variáveis: `s3`, `s4` e `s5`. Ao criar `s4`, use `s3` dentro de uma f-string (não reescreva manualmente as palavras de `s3` em `s4`).
