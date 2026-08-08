---
template: exercise
title: Luzes
level: 1
exercise: 2
category: CircuitPython
tags: ['Level 1']
---

Vamos explorar mais a fundo.

Podemos fazer todo tipo de loucura adicionando elementos ao **loop while**.

Aqui, vamos dizer ao circuito para acender algumas luzes coloridas.

```python
from adafruit_circuitplayground.express import cpx

cpx.pixels.brightness = 0.3
cpx.pixels.fill((0, 0, 0))

while True:

    # observe como essas linhas são semelhantes
    cpx.pixels[0] = (255, 0, 0)
    cpx.pixels[1] = (255, 127, 0)
    cpx.pixels[2] = (0, 255, 0)
    cpx.pixels[3] = (0, 255, 127)
    cpx.pixels[4] = (75, 0, 130)
    cpx.pixels[5] = (60, 0, 255)
    cpx.pixels[6] = (255, 255, 255)
    cpx.pixels[7] = (0, 100, 0)
    cpx.pixels[8] = (100, 0, 0)
    cpx.pixels[9] = (0, 0, 100)

    # O [] com um número determina qual luz acender
    # e os números em () determinam a cor!
    # Diz a quantidade (vermelho, verde, azul) que queremos.
    # Tente mudar os números!

    # esta linha acende as luzes!
    cpx.pixels.show()
```
