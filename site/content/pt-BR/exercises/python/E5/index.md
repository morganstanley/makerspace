---
template: exercise
title: Booleanos
level: 1
exercise: 5
category: Python
tags: ['Python']
---

Booleanos (ou bools) representam um de dois valores: `True` ou `False` (Verdadeiro ou Falso). Você pode usar os operadores de comparação do Python para comparar dois números:

* `>` Maior que
* `<` Menor que
* `>=` Maior ou igual a
* `<=` Menor ou igual a
* `==` Igual a
* `!=` Diferente de

Exemplo usando o operador "maior que":
```python
print(43 > 21)
```
*Output:*
```python
True
```

Exemplo usando o operador "igual a":
```python
print(43 == 21)
```
*Output:*
```python
False
```

Na ordem das operações, os operadores aritméticos são avaliados antes dos operadores de comparação:
```python
print(78 <= 3 * 26)
```
*Output:*
```python
True
```

Os booleanos podem ser combinados ou negados usando operadores lógicos:
* `and`
* `or`
* `not`

```python
(0 == 1) or (53 > 20)
```
*Output:*
```python
True
```

```python
(67 > 3) and (34 != 34)
```
*Output:*
```python
False
```

Valores booleanos podem ser atribuídos a variáveis ​​assim como números e strings:

```python
b = (54 < 22)
c = not b
print(c)
```
*Output:*
```python
True
```

## Exercícios

1. Escreva uma única linha de código para determinar se 241 vezes 4,5 é maior ou igual a 3281 dividido por 3.

    _Dica: usar um operador de comparação._

2. A variável `red_led` está sendo usada como um booleano para controlar a luz vermelha em uma placa de circuito. Se for definida como `True`, a luz estará acesa. Se for definida como `False`, a luz estará apagada. Escreva uma única linha de código para inverter o estado da luz (ou seja, se estiver acesa, desligue-a; se estiver apagada, ligue-a).

    _Dica: use um operador lógico, não um bloco if/else._
