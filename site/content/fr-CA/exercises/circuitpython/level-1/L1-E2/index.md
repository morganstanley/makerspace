---
template: exercise
title: Lumières
level: 1
exercise: 2
category: CircuitPython
tags: ['Niveau 1']
---

Continuons à explorer un peu plus loin.

Nous pouvons faire toutes sorte de choses amusantes en ajoutant du code a la **boucle while** (tant que)

Ici nous allons indiquer au circuit d'allumer des lumières avec diverses couleurs.

```python
from adafruit_circuitplayground.express import cpx

cpx.pixels.brightness = 0.3
cpx.pixels.fill((0, 0, 0))

while True:

    # remarque comme ces lignes sont similaires
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

    # les [] avec un chiffre déterminent quelle lumière allumer
    # et les nombres entre parenthèses déterminent la couleur !
    # Cela indique combien de (rouge, vert, bleu) nous voulons.
    # Essaye de changer les nombres!

    # Cette ligne allume les lumières
    cpx.pixels.show()
```
