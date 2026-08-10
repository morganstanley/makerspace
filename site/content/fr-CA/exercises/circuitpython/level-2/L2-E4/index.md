---
template: exercise
title: Les Fonctions
level: 2
exercise: 4
category: CircuitPython
tags: ['Niveau 2']
---

Reprenons [là où nous en étions avec les variables](../L2-E1).

```python
def ma_fonction(x):
    return x + 1

def trouver_volume(longueur=1, largeur=1, profondeur=1):
        print("Longueur = " + str(longueur))
        print("Largeur = " + str(largeur))
        print("Profondeur = " + str(profondeur))
        return longueur * largeur * profondeur

trouver_volume(1, 2, 3)
trouver_volume(longueur=5, profondeur=2, largeur=4)
trouver_volume(2, profondeur=3, largeur=4)
```

- Certaines tâches nécessitent d'être remplies plusieurs fois dans un programme.
- Plutôt que de réécrire le même code à plusieurs endroits, une fonction peut être définie en utilisant le mot-clé def.
- Les définitions de fonctions peuvent inclure des paramètres, fournissant des données d'entrée à la fonction.

**Appeler une fonction**: `allumerLumiere()` en écrivant le nom de la fonction suivi de parenthèses

**Définir une fonction**: mot-clé `def` suivi du nom de la fonction, de parenthèses et d'un deux-points

- Le corps de la fonction, ou le code de ce que la fonction fera réellement, vient après le deux-points sur une ligne **indentée**

**Paramètres de fonction**:

- Parfois, les fonctions nécessitent des entrées pour fournir des données à leur code. Ces entrées sont définies à l'aide de paramètres.
- Les paramètres sont des variables définies dans la définition de la fonction.
- Ils reçoivent les valeurs qui ont été passées en tant qu'arguments lorsque la fonction a été appelée, ailleurs dans le code.

**Arguments de fonction**:

- Les paramètres en python sont des variables— des espaces réservés pour les valeurs réelles dont la fonction a besoin
- Lorsque la fonction est appelée, ces valeurs sont passées en tant qu'arguments.

```python
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

Et faire une fonction du comportement:

```python
def cercleSimple(temps):
        # Couleurs
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

        for i in range(len(pixels)):
                pixels[i] = couleurs[i]
                time.sleep(.05)
        time.sleep(1)
```

Comment utiliser:

```python
# CircuitPlaygroundExpress_NeoPixel
# https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-neopixel

import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)
pixels.fill((0, 0, 0))
pixels.show()

# choisir quelles démos jouer
# 1 signifie jouer, 0 signifie ne pas jouer!
demoCercleSimple = 1

def cercleSimple(temps):
        # Couleurs
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

        for i in range(len(pixels)):
                pixels[i] = couleurs[i]
                time.sleep(temps)
        time.sleep(1)


while True:
        if demoCercleSimple:
                print('Démo Cercle Simple')
                cercleSimple(.05)
        pixels.fill((0, 0, 0))
```
