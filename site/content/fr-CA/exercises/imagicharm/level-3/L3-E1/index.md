---
template: exercise
title: Fait briller l'Arc-en-ciel
level: 3
exercise: 1
category: ImagiCharm
tags: ['Niveau 3']
---

Illuminons l'ImagiCharm avec un arc-en-ciel ! Suit les étapes ci-dessous pour apprendre à faire briller l'arc-en-ciel.

---

### Étape 1 : Commence avec une Toile Vierge

Tout d'abord, nous devons effacer l'affichage de l'ImagiCharm pour nous assurer qu'il est prêt pour l'arc-en-ciel.

```python
# Efface l'affichage
pixels.clear()
```

- **Ce que cela fait** : Efface l'écran pour qu'il ne reste rien d'avant.
- Essaye d'exécuter juste cette ligne. Que se passe-t-il sur l'ImagiCharm ?

---

### Étape 2 : Allumez le Premier Pixel

Commençons par allumer le pixel en haut à gauche avec une couleur rouge vif.

```python
# Allume le premier pixel
pixels[0][0] = (255, 0, 0)  # Rouge
```

- **Explication** :
  - **`pixels[0][0]`** : Cela sélectionne le premier pixel dans le coin supérieur gauche.
  - **`(255, 0, 0)`** : Cela signifie que le pixel brillera en rouge (255 pour le rouge, 0 pour le vert et le bleu).

- **Défi** : Peux-tu changer cela en vert ? (Indice : Règle le deuxième nombre à 255.)

---

### Étape 3 : Ajoute Plus de Couleurs

Maintenant, allumons plus de pixels pour faire un arc-en-ciel sur la première rangée.

```python
# Allume les pixels pour créer un arc-en-ciel !
pixels[0][1] = (255, 165, 0)     # Orange
pixels[0][2] = (255, 255, 0)     # Jaune
pixels[0][3] = (0, 255, 0)       # Vert
pixels[0][4] = (0, 0, 255)       # Bleu
pixels[0][5] = (75, 0, 130)      # Indigo
pixels[0][6] = (238, 130, 238)   # Violet
```

- **Explication** :
  - Chaque pixel de la rangée est assigné à une couleur.
  - Les couleurs de l'arc-en-ciel sont ajoutées une par une, en utilisant les valeurs `(rouge, vert, bleu)`.

- **Activité** : Essaye de changer une des couleurs. Que se passe-t-il si tu mélanges le rouge et le bleu ?

---

### Étape 4 : Affiche l'Arc-en-ciel

Enfin, affichons l'arc-en-ciel sur l'ImagiCharm.

```python
# Affiche l'arc-en-ciel sur l'ImagiCharm !
pixels.show()
```

- **Ce que cela fait** : Allume tous les pixels que nous avons définis !

---

### Code Complet

Voici le code complet pour faire briller ton arc-en-ciel :

```python
# Efface l'affichage
pixels.clear()

# Allume les pixels pour un arc-en-ciel !
pixels[0][0] = (255, 0, 0)       # Rouge
pixels[0][1] = (255, 165, 0)     # Orange
pixels[0][2] = (255, 255, 0)     # Jaune
pixels[0][3] = (0, 255, 0)       # Vert
pixels[0][4] = (0, 0, 255)       # Bleu
pixels[0][5] = (75, 0, 130)      # Indigo
pixels[0][6] = (238, 130, 238)   # Violet

# Affiche l'arc-en-ciel sur l'ImagiCharm !
pixels.show()
```

---

### Explore d'avantage

- Change la luminosité des pixels.
  *(Indice : Utilisez `pixels.brightness = 0.5` avant la ligne `pixels.show()`.)*
- Crée une deuxième rangée de couleurs arc-en-ciel. Quels motifs pouvez-vous créer ?

Appui sur "Exécuter" pour voir votre arc-en-ciel briller ! 🌈
