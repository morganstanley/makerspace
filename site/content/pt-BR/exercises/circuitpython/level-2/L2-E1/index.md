---
template: exercise
title: Variáveis e Tipos
level: 2
exercise: 1
category: CircuitPython
tags: ['Level 2']
---

No nível 1, abordamos os recursos do Circuit Playground Express, mas não nos aprofundamos nos conceitos básicos de programação. Esses conceitos estão presentes em todas as linguagens de programação, de alguma forma.

Nesta aula, aprenderemos sobre variáveis ​​e como podemos usá-las para armazenar informações para usá-las novamente mais tarde.

## Variáveis ​​de Cor

[Do nível 1 exercício 2](../../level-1/L1-E2), colocamos o seguinte programa no CPX:

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

O que esses números significam? Como podemos tornar isso mais legível?

Faça uma lista de variáveis ​​de cores por nome de cor.

```python
import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)

# Cores
BLACK = (0, 0, 0)
RED = (255, 0, 0)
PINK = (255, 100, 120)
ORANGE = (255, 100, 0)
YELLOW = (255, 255, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
PURPLE = (255, 0, 255)
BLUE = (0, 0, 255)
LIGHT_BLUE = (80, 200, 175)
WHITE = (255, 255, 255)

pixels.fill(BLACK)

while True:
    pixels[0] = RED
    pixels[1] = ORANGE
    pixels[2] = GREEN
    pixels[3] = CYAN
    pixels[4] = PURPLE
    pixels[5] = BLUE
    pixels[6] = WHITE
    pixels[7] = YELLOW
    pixels[8] = PINK
    pixels[9] = LIGHT_BLUE
    pixels.show()
```

- Uma variável é usada para armazenar dados a serem usados ​​pelo programa.
- Esses dados podem ser um número, uma string, um booleano, uma lista ou algum outro tipo de dado.
- Cada variável tem um nome que pode consistir em letras, números e o caractere sublinhado (\_).
- Nenhum outro tipo de caractere pode ser usado para criar o nome da variável e a variável NÃO pode começar com um número.
- O sinal de igual = é usado para atribuir um valor a uma variável.
- Essa atribuição pode ser de um valor fixo ou retirada de outra variável existente.
- Também pode ser usado para alterar o valor de uma variável de um valor para outro após a atribuição inicial ser feita.

## Trabalhando com listas

No final chegamos a isto:

```python
# Aprenda mais em https://realpython.com/python-variables/
# e https://realpython.com/python-data-types/
import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)

# Cores
BLACK = (0, 0, 0)
RED = (255, 0, 0)
PINK = (255, 100, 120)
ORANGE = (255, 100, 0)
YELLOW = (255, 255, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
PURPLE = (255, 0, 255)
BLUE = (0, 0, 255)
LIGHT_BLUE = (80, 200, 175)
WHITE = (255, 255, 255)

pixels = pixels
pixels.fill(BLACK)
pixels.show()

while True:
    for i in range(len(pixels)):
        pixels[i] = RED
        time.sleep(.05)
    time.sleep(1)

    for i in range(len(pixels)):
        pixels[i] = GREEN
        time.sleep(.05)
    time.sleep(1)
```

Como podemos simplificar isso para que não tenhamos que inserir uma cor para cada bloco `for`?

```python
import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)

# Cores
BLACK = (0, 0, 0)
RED = (255, 0, 0)
PINK = (255, 100, 120)
ORANGE = (255, 100, 0)
YELLOW = (255, 255, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
PURPLE = (255, 0, 255)
BLUE = (0, 0, 255)
LIGHT_BLUE = (80, 200, 175)
WHITE = (255, 255, 255)

colors = [
    PINK,
    RED,
    ORANGE,
    YELLOW,
    GREEN,
    CYAN,
    PURPLE,
    BLUE,
    LIGHT_BLUE,
    WHITE
]

pixels.fill(BLACK)
pixels.show()

while True:
    for i in range(len(pixels)):
        pixels[i] = colors[i]
        time.sleep(.05)
    time.sleep(1)

```
