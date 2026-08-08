---
template: exercise
title: Boutons
level: 1
exercise: 3
category: CircuitPython
tags: ['Niveau 1']
---

Écoutons maintenant le haut-parleur du CPX !

Ici, le premier nombre est la tonalité (fréquence), le second est la durée de la note.

L'instruction 'if' (si) permet de vérifier quel bouton est pressé et joue la note correspondante.

```python
from adafruit_circuitplayground.express import cpx

while True:
    if cpx.button_a:
        cpx.play_tone(329,1)
        cpx.play_tone(261,1)
    elif cpx.button_b:
        cpx.play_tone(440,1)
        cpx.play_tone(400,1)
```
