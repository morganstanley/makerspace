---
template: exercise
title: If/Elif/Else
level: 1
exercise: 6
category: Python
tags: ['Python']
---

Você pode usar instruções `if` para testar condições específicas e responder adequadamente. O Python usa **indentation** (recuo) para determinar qual código executar se uma condição específica for atendida (observe que a instrução `print` abaixo está recuada em relação à instrução `if`):

```python
a = 34
b = 22
if a > b:
  print("a é maior do que b")
```
*Output:*
```
a é maior do que b
```

Você pode usar `elif` para testar condições adicionais — estas só serão testadas se a condição original for falsa. Você também pode adicionar uma instrução final `else`, que só será executada se todas as condições anteriores forem falsas:

```python
a = 34
b = 34
if a > b:
  print("a é maior do que b")
elif a < b:
  print("a é menor do que b")
else:
  print("a é igual a b")
```
*Output:*
```
a é igual a b
```

## Exercícios
1. Crie uma instrução `if` que verifica se o valor armazenado na variável `temperatura` está entre 20 e 30 e, se estiver, mostre a mensagem "Bom tempo!"

2. Expanda a instrução `if` anterior em uma instrução `if`/`elif`/`else` que mostre "Está congelando!" se a temperatura estiver abaixo de 0, "Está frio!" se estiver entre 0 e 20, e "Está quente!" se estiver acima de 20.
