---
template: exercise
title: Variables et Types
level: 2
exercise: 1
category: CircuitPython
tags: ['Niveau 2']
---

Dans le niveau 1, nous avons appris les fonctionnalité du CPX, mais nous n'avons pas approfondi les base de la programmation. Ces concepts sont présents dans tous les languages de programmation sous une forme ou une autre.

Dans cette leçon, nous allons découvrir les variables et apprendre comment les utiliser pour enregistrer de l'information que l'on peut réutiliser plus tard.

## Variables en couleur

[Dans l’exercice 2 du niveau 1](../../level-1/L1-E2), nous avons envoyé le programme suivant au CPX :

```python
import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)
pixels.fill((0, 0, 0))
pixels.show()


while True:
    pixels[0] = (255, 0, 0)
    pixels[1] = (255, 127, 0)
    pixels[2] = (0, 255, 0)
    pixels[3] = (0, 255, 127)
    pixels[4] = (75, 0, 130)
    pixels[5] = (60, 0, 255)
    pixels[6] = (255, 255, 255)
    pixels[7] = (0, 100, 0)
    pixels[8] = (100, 0, 0)
    pixels[9] = (0, 0, 100)
    pixels.show()
```

Que signifient tous ces nombres ? Comment pouvons nous rendre ceci plus lisible ?

Créons une list de variable de couleurs organisée par nom.

```python
import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)

# Colors
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

pixels.fill(NOIR)

while True:
    pixels[0] = ROUGE
    pixels[1] = ORANGE
    pixels[2] = VERT
    pixels[3] = CYAN
    pixels[4] = VIOLET
    pixels[5] = BLEU
    pixels[6] = BLANC
    pixels[7] = JAUNE
    pixels[8] = ROSE
    pixels[9] = BLEU_CLAIR
    pixels.show()
```

- une variable est utilisée pour enregistrer une donnée utilisée par le programme.
- cette donnée peut être un nombre, une chaîne de caractère, une valeur logique (booléenne), une list ou encore d'autre types de données.
- chaque variable a un nom qui peut être composé de lettres, chiffres et du caractère '\_' (underscore/tiret bas).
- aucun autre caractère (par exemple #$^*) ne peut être utilisé pour le nom et le nom ne doit PAS commencer par un chiffre.
- le signe égal '=' est utilisé pour assigner (donner) une valeur à la variable.
- on peut attribuer à une variable une valeur fixe ou encore une autre variable.
- on peut aussi changer la valeur de la variable à une nouvelle valeur depuis la première assignation.

## Utiliser les listes

Nous voulons arriver à ça :

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

Comment pouvons nous uniformiser ceci, de manière à ne pas avoir à spécifier une couleur pour chaque boucle 'for' ?

```python
import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)

# Colors
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

couleurs = [
    ROSE,
    ROUGE,
    ORANGE,
    JAUNE,
    VERT,
    CYAN,
    VIOLET,
    BLEU,
    BLEU_CLAIR,
    BLANC
]

pixels.fill(NOIR)
pixels.show()

while True:
    for i in range(len(pixels)):
        pixels[i] = couleurs[i]
        time.sleep(.05)
    time.sleep(1)

```
