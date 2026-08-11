---
template: exercise
title: If/Elif/Else
level: 1
exercise: 6
category: Python
tags: ['Python']
---

Você pode usar declarações `if` para testar condições específicas e responder de acordo. Python usa **indentação** para determinar qual código executar se uma condição específica for atendida (observe que a instrução `print` abaixo está indentada em relação à instrução `if`):

```python
a = 34
b = 22
if a > b:
  print("a is greater than b")
```
*Saída:*
```
a is greater than b
```

Você pode usar `elif` para testar condições adicionais — elas só serão testadas se a condição original for falsa. Você também pode adicionar uma instrução final `else` que só será executada se todas as condições anteriores forem falsas:

```python
a = 34
b = 34
if a > b:
  print("a is greater than b")
elif a < b:
  print("a is less than b")
else:
  print("a is equal to b")
```
*Saída:*
```
a is equal to b
```

## Exercícios
1. Crie uma instrução `if` que verifique se o valor armazenado na variável `temperature` está entre 60 e 80 e, se for o caso, imprima a mensagem "Nice weather!"

2. Expanda a instrução `if` anterior em uma instrução `if`/`elif`/`else` que imprima "It's freezing!" se a temperatura estiver abaixo de 32, "It's cold!" se estiver entre 32 e 50, e "It's hot!" se estiver acima de 80.
