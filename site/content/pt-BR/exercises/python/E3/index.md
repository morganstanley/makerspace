---
template: exercise
title: Strings
level: 1
exercise: 3
category: Python
tags: ['Python']
---

Uma string é uma série de caracteres entre aspas simples ou duplas. Uma string pode ser atribuída a uma variável da mesma forma que um número. Você pode usar `print()` para exibir a string:

```python
hello = 'Hello, World!'
print(hello)
```
*Output:*
```
Hello, World!
```

Se você quiser usar uma aspa simples dentro de uma string (como um apóstrofo), você tem duas opções: (1) colocar a string entre aspas duplas ou (2) usar **string escaping**, que significa adicionar uma barra invertida antes da aspa:

Usando aspas duplas:
```python
greeting = "What's up?"
print(greeting)
```
*Output:*
```
What's up?
```

Usando string escaping:
```python
greeting = 'What\'s up?'
print(greeting)
```
*Output:*
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
*Output:*
```
Hello there
```

As **f-strings** do Python permitem usar variáveis ​​dentro de strings para criar mensagens dinâmicas. Para definir uma f-string, basta colocar um `f` antes da string e adicionar chaves para inserir variáveis ​​ou outras expressões na string:

```python
name = "Bob"
greeting = f"Hello {name}"
print(greeting)
```
*Output:*
```
Hello Bob
```

Outro exemplo usando inteiros dentro de uma f-string:
```python
coins = 15
score = f'Atualmente você tem {coins} moedas. Após este nível, você terá {coins + 10}'
print(score)
```
*Output:*
```
Atualmente você tem 15 moedas. Após este nível você terá 25
```

## Exercícios

1. Crie e mostre uma variável com a seguinte string:
```
Quando eu digo "Toc. Toc.", você diz "Quem está aí?"
```

    *Dica: use string escaping. Tem duas soluções possíveis.*

2. Crie duas variáveis, uma que armazene seu primeiro nome e outra que armazene seu sobrenome. Use-as para criar e imprimir duas novas strings:
    * Uma que o cumprimente pelo nome, por exemplo: "Olá, João Silva!"
    * Uma que mostre seu nome como ele poderia aparecer em um registro oficial (sobrenome, nome). Por exemplo: "Silva, João"

    *Dica: use f-strings*

3. Aqui está o começo de uma piada:
```
s1 = "Toc. Toc."
s2 = "Quem está aí?"
```
Escreva o restante da piada criando três novas variáveis: `s3`, `s4` e `s5`. Ao criar `s4`, use `s3` dentro de uma f-string (não digite manualmente as palavras de `s3` para `s4`).
