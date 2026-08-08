---
template: exercise
title: Clignotement
level: 1
exercise: 1
category: CircuitPython
tags: ['Niveau 1']
---
Tout les programmes Circuit Playground suivent un format similaire. Commençons par un exemple simple.
![CPX Blink](blink.gif)

```python
# Cette section permet au système de savoir quelles librairies on veut utiliser
from adafruit_circuitplayground.express import cpx
import time

# Cette section est là où nous allons placer notre programme principal
# Tout ce qui est indenté après 'while True' se répétera à l'infini
# Cela s'appel une boucle 'while' ou 'tant que'

while True:
    cpx.red_led = True
    time.sleep(0.5)
    cpx.red_led = False
    time.sleep(0.5)

# Note - Tout ce qui commence avec un '#' est un commentaire et est ignoré
```
