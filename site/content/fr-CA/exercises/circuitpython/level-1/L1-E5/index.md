---
template: exercise
title: Accélération
level: 1
exercise: 5
category: CircuitPython
tags: ['Niveau 1']
---

Le CPX est équipé d'un accéléromètre et peut donc indiquer quand il bouge. Voyons ce que nous pouvons faire avec ça.

```python
from adafruit_circuitplayground.express import cpx
import time

# La boucle principale reçoit l'accéleration sur les axes x, y, z, affiche les valeurs et allume les
# lumières proportionnellement à l'accéleration sur chaque axe (rouge : axe x, vert : axe y, bleu : axe z).

while True:
    if cpx.switch:
        print("Interrupteur à OFF!")
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
