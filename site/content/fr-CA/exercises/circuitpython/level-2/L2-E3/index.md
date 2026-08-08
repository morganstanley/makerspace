---
template: exercise
title: Functions Natives de Python
level: 2
exercise: 3
category: CircuitPython
tags: ['Niveau 2']
---

Reprenons [là où nous en étions avec les variables](../L2-E1).

Nous utilisons deux des fonctions natives de Python dans ce script, peux-tu les trouver ?

```python
# Apprends en plus https://realpython.com/python-variables/
# et https://realpython.com/python-data-types/
import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)

# Couleurs
NOIR = (0, 0, 0)
ROUGE = (255, 0, 0)
ROSE = (255, 100, 120)
ORANGE = (255, 100, 0)
JAUNE = (255, 255, 0)
VERT = (0, 255, 0)
CYAN = (0, 255, 255)
VIOLET = (255, 0, 255)
BLEU = (0, 0, 255)
BLEU_CLAIR = (80, 200, 175)
BLANC = (255, 255, 255)

pixels = pixels
pixels.fill(NOIR)
pixels.show()

while True:
    for i in range(len(pixels)):
        pixels[i] = ROUGE
        time.sleep(.05)
    time.sleep(1)

    for i in range(len(pixels)):
        pixels[i] = VERT
        time.sleep(.05)
    time.sleep(1)

```
## C'est quoi les fonctions natives ?

Les fonctions natives sont des outils pratiques qui font partie du language Python (et d'autres languages), qui aide les développeurs à remplir des tâches courantes, comme trouver la longueur d'une liste ou définir la séquence d'une boucle.

### Longueur : `len(s)`

Retourne la longueur (le nombre d'éléments) d'un objet. L'argument peut être une séquence (une chaîne, des octets (bytes), des n-uplets (tuples), listes ou séquences) ou encore une collection (un dictionnaire, un ensemble (set), etc. )

### Séquence : `range(stop)`

Plutôt que d'être une fonction, 'range' est en fait une séquence immuable (qui ne change pas), tel que documenté dans [séquence et Séquence — listes, n-uplets, séquences](https://docs.python.org/fr/3/library/stdtypes.html#range).

### Documentation

Tous les développeurs utilisent la documentation comme référence pour planifier et construire leur code. Les détails sur les fonctions natives ci-dessus sont issus de la documentation.

Prends le temps de jeter un oeil et d'explorer la documentation. Tu pourras trouver toute sorte d'outils intéressants pour tes projets. Fais des expériences pour en apprendre plus.

[Référence sur les Fonctions Natives](https://docs.python.org/fr/3/library/functions.html)
