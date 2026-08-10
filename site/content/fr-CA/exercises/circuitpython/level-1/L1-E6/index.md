---
template: exercise
title: Température
level: 1
exercise: 6
category: CircuitPython
tags: ['Niveau 1']
---

Ce programme va afficher la température actuelle dans l'affichage du MuEditor.
Clique sur le bouton Serial (Série) dans le MuEditor pour voir les données de sortie brut, ou utilise "Plotter" pour voir un graphique.


```python
import time
from adafruit_circuitplayground.express import cpx

while True:
    print("Température C:", cpx.temperature)
    print("Température F:", cpx.temperature * 1.8 + 32)
    print((cpx.temperature, cpx.temperature * 1.8 + 32))
    time.sleep(1)
```
