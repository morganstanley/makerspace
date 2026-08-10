---
template: exercise
title: Animons des Pixels
level: 2
exercise: 1
category: ImagiCharm
tags: ['Niveau 2']
---

### Animons des Pixels

Cette leçon apprend comment créer un pixel qui se déplace sur l'ImagiCharm et rebondit lorsqu'il touche un bord.

---


### Code Complet : Pixel en Mouvement et Rebondissant

Copiez et collez le code ci-dessous dans votre ImagiCharm pour voir le pixel en mouvement et rebondissant en action !

```python
import time

# Faire rebondir le pixel dans la première rangée
direction = 1  # 1 pour aller à droite, -1 pour aller à gauche
position = 0  # Commencer à la première colonne

while True:
    pixels.clear()  # Effacer l'affichage
    pixels[0][position] = (0, 255, 0)  # Pixel vert
    pixels.show()  # Mettre à jour l'affichage de l'ImagiCharm
    time.sleep(0.3)  # Pause pour rendre le mouvement visible

    # Mettre à jour la position
    position += direction

    # Inverser la direction si le pixel atteint les bords
    if position == 7 ou position == 0:
        direction *= -1
