---
template: exercise
title: Aceleração
level: 1
exercise: 5
category: CircuitPython
tags: ['Level 1']
---

O circuit playground tem um acelerômetro para detectar quando está em movimento. Vamos ver o que podemos fazer com isso.

```python
from adafruit_circuitplayground.express import cpx
import time

# O loop principal obtém a aceleração dos eixos x, y e z, imprime os valores e
# ativa vermelho, verde e azul, em níveis relacionados aos valores x, y e z.
while True:
    if cpx.switch:
        print("Interruptor desligado!")
        cpx.pixels.fill((0, 0, 0))
        continue
    else:
        R = 0
        G = 0
        B = 0
        x, y, z = cpx.acceleration

        print((x, y, z))

        if x:
            R = R + abs(int(x))
        if y:
            G = G + abs(int(y))
        if z:
            B = B + abs(int(z))
        cpx.pixels.fill((R, G, B))
        time.sleep(0.25)
```
