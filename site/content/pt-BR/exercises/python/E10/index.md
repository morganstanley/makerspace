---
template: exercise
title: Funções
level: 1
exercise: 10
category: Python
tags: ['Python']
---

Uma **função** em Python é um bloco reutilizável de código projetado para executar uma tarefa específica. Uma função pode aceitar um ou mais parâmetros e pode ou não retornar um valor. Aqui estão algumas das funções internas do Python que usamos até agora:
* `print` - exibir um valor no console
* `list.append` - adicionar um elemento ao final de uma lista
* `input` - solicitar uma entrada do usuário e devolver a string informada
* `type` - retornar o tipo de um valor (`int`, `float`, `str`, `list`, `bool`)

Os próprios tipos de dados também podem ser chamados como funções para converter um valor de um tipo para outro (quando possível). Lembre-se de que fizemos isso para converter uma string em inteiro:

```python
int('45')
```
*Saída:*
```python
45
```

Outra função interna é `len`, que aceita um parâmetro. Se o parâmetro for uma string, `len` retorna o número de caracteres da string:
```python
greeting = "Hello"
len(greeting)
```
*Saída:*
```python
5
```

Se o parâmetro for uma lista, `len` retorna o número de itens da lista:
```python
groceries = ['apples', 'pears', 'grapes']
len(groceries)
```
*Saída:*
```python
3
```

Também podemos definir nossas próprias funções usando a palavra-chave `def`. Semelhante às instruções `if` e aos loops `while`, devemos terminar a linha com dois pontos `:` e indentar as linhas de código dentro da função. Use a palavra-chave `return` para fazer a função retornar um valor. Por exemplo, aqui está uma função que recebe um parâmetro string e retorna uma string com uma saudação personalizada:

```python
def make_greeting(first_name):
    s = f"Hello, {first_name}!"
    return s
```
Agora podemos chamar a função que acabamos de criar:
```python
greeting = make_greeting('Bob')
print(greeting)
```
*Saída:*
```
Hello, Bob!
```

## Exercícios

Altere a função `make_greeting` acima para aceitar dois parâmetros, first_name e last_name, e retornar uma saudação com o nome completo do usuário.
