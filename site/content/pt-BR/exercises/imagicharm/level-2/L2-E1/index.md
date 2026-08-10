---
template: exercise
title: Movendo Pixels
level: 2
exercise: 1
category: ImagiCharm
tags: ['Level 2']
---

### Aula sobre mover pixels

Esta aula ensina como criar um pixel que se move pelo ImagiCharm e retorna quando atinge as bordas.

---

### Código completo: Pixel movendo e saltando

Copie e cole o código abaixo no seu ImagiCharm para ver o pixel se movendo e saltando!

```python
import time

# Faça o pixel saltar na primeira linha
direction = 1  # 1 para mover para a direita, -1 para mover para a esquerda
position = 0  # Comece na primeira coluna

while True:
    pixels.clear()  # Limpe a tela
    pixels[0][position] = (0, 255, 0)  # Verde
    pixels.show()  # Atualize a tela do ImagiCharm
    time.sleep(0.3)  # Faça uma pausa para tornar o movimento visível

    # Atualize a posição
    position += direction

    # Inverta a direção se o pixel atingir as bordas
    if position == 7 or position == 0:
        direction *= -1
