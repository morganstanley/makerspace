---
template: exercise
title: Funções
level: 1
exercise: 10
category: Python
tags: ['Python']
---

Uma **função** em Python é um bloco de código reutilizável projetado para executar uma tarefa específica. Uma função pode aceitar um ou mais parâmetros e pode ou não retornar um valor. Aqui estão algumas das funções integradas do Python que usamos até agora:
* `print` - exibe um valor no console
* `list.append` - adiciona um elemento ao final de uma lista
* `input` - solicita uma entrada ao usuário e retorna a string inserida
* `type` - retorna o tipo de um valor (`int`, `float`, `str`, `list`, `bool`)

Os próprios tipos de dados também podem ser chamados como funções para converter um valor de um tipo para outro (quando possível). Lembre-se de que fizemos isso para converter uma string em um inteiro:
```python
int('45')
```
*Output:*
```python
45
```

Outra função integrada é `len`, que aceita um parâmetro. Se o parâmetro for uma string, `len` retorna o número de caracteres na string:
```python
greeting = "Hello"
len(greeting)
```
*Output:*
```python
5
```

Se o parâmetro for uma lista, `len` retornará o número de itens na lista:
```python
groceries = ['maçãs', 'peras', 'uvas']
len(groceries)
```
*Output:*
```python
3
```

Também podemos definir nossas próprias funções usando a palavra-chave `def`. Semelhante às instruções `if` e aos loops `while`, devemos terminar a linha com dois pontos `:` e recuar as linhas de código dentro da função. Use a palavra-chave `return` para que uma função retorne um valor. Por exemplo, aqui está uma função que recebe um parâmetro string e retorna uma string com uma saudação personalizada:

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
*Output:*
```
Hello, Bob!
```

## Exercício

Altere a função `make_greeting` acima para aceitar dois parâmetros, first_name e last_name (nome e sobrenome), e retornar uma saudação com o nome completo do usuário.