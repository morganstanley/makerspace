---
template: exercise
title: Botões
level: 4
exercise: 5
category: Robotics
tags: ['CircuitPython']
---

Agora, vamos usar os botões do dispositivo para ligar e desligar LEDs individuais. Usamos as propriedades `cp.button_a` e `cp.button_b` para determinar se o botão em questão está sendo pressionado:

```python
from adafruit_circuitplayground import cp

while True:
    if cp.button_a:
        cp.pixels[0] = (255, 255, 255)
    elif cp.button_b:
        cp.pixels[1] = (255, 255, 255)
```

### Desafio 1

Modifique o código acima para que apenas um pixel fique ligado por vez. Em outras palavras, se vários botões forem pressionados em sequência, apenas o pixel mais recente permanecerá ligado.

_Dica: considere usar `cp.pixels.fill`_

### Desafio 2

Agora modifique o código para que cada pixel fique ligado somente enquanto o usuário mantiver o botão pressionado.

### Referências

- [Python: if/elif/else](https://www.w3schools.com/python/python_conditions.asp)

- [cp.button_a](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.button_a)

- [cp.button_b](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.button_b)
