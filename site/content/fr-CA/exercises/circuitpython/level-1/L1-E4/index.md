---
template: exercise
title: Tactile
level: 1
exercise: 4
category: CircuitPython
tags: ['Niveau 1']
---

Nous avons joué avec les lumières et les sons, maintenant amusons-nous avec le toucher !

Toucher différents contacts du CPX déclenche différents sons et lumières !

Nous pouvons aussi utiliser l'interrupteur pour complètement activer ou désactiver les sons et lumières.

Les contacts tactiles sont assignés par numéro sur le CPX.

```python
from adafruit_circuitplayground.express import cpx

while True:
    if cpx.switch:
        print("Système éteint !")
        cpx.pixels.fill((0, 0, 0))
        cpx.stop_tone()
        continue
    if cpx.touch_A4:
        print('Touché A4!')
        cpx.pixels.fill((15, 0, 0))
        cpx.start_tone(262)
    elif cpx.touch_A5:
        print('Touché A5!')
        cpx.pixels.fill((15, 5, 0))
        cpx.start_tone(294)
    elif cpx.touch_A6:
        print('Touché A6!')
        cpx.pixels.fill((15, 15, 0))
        cpx.start_tone(330)
    elif cpx.touch_A7:
        print('Touché A7!')
        cpx.pixels.fill((0, 15, 0))
        cpx.start_tone(349)
    elif cpx.touch_A1:
        print('Touché A1!')
        cpx.pixels.fill((0, 15, 15))
        cpx.start_tone(392)
    elif cpx.touch_A2 and not cpx.touch_A3:
        print('Touché A2!')
        cpx.pixels.fill((0, 0, 15))
        cpx.start_tone(440)
    elif cpx.touch_A3 and not cpx.touch_A2:
        print('Touché A3!')
        cpx.pixels.fill((5, 0, 15))
        cpx.start_tone(494)
    elif cpx.touch_A2 and cpx.touch_A3:
        print('Touché "8"!')
        cpx.pixels.fill((15, 0, 15))
        cpx.start_tone(523)
    else:
        cpx.pixels.fill((0, 0, 0))
        cpx.stop_tone()
```
