---
template: exercise
title: Funções
level: 2
exercise: 4
category: CircuitPython
tags: ['Level 2']
---

Vamos começar por [onde paramos em variáveis](../L2-E1).

```python
def my_function(x):
  return x + 1

def findvolume(length=1, width=1, depth=1):
    print("Length = " + str(length))
    print("Width = " + str(width))
    print("Depth = " + str(depth))
    return length * width * depth

findvolume(1, 2, 3)
findvolume(length=5, depth=2, width=4)
findvolume(2, depth=3, width=4)
```

- Algumas tarefas precisam ser executadas várias vezes em um programa.
- Em vez de reescrever o mesmo código em vários lugares, uma função pode ser definida usando a palavra-chave def.
- As definições de função podem incluir parâmetros, fornecendo dados de entrada para a função.
- As funções podem retornar um valor usando a palavra-chave return seguida do valor a ser retornado.

**Chamando a função**: `makeLight()` escrevendo o nome da função seguido de parênteses

**Definindo a função**: palavra-chave `def` seguida do nome da função, parênteses e dois pontos

- O corpo da função, ou o código que a função realmente executará, vem depois dos dois pontos em uma linha **recuada**

**Paramêtros da função**:

- Às vezes, funções requerem entrada para fornecer dados para seu código. Essa entrada é definida por meio de parâmetros.
- Parâmetros são variáveis ​​definidas na definição da função.
- A eles são atribuídos os valores que foram passados ​​como argumentos quando a função foi chamada, em outro lugar no código.

**Argumentos da função**:

- Parâmetros em Python são variáveis ​​— espaços reservados para os valores reais que a função precisa.
- Quando a função é chamada, esses valores são passados ​​como argumentos.

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

E faça uma função do comportamento:

```python
def simpleCircle(wait):
    # Cores
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

    for i in range(len(pixels)):
        pixels[i] = colors[i]
        time.sleep(.05)
    time.sleep(1)
```

Como usar:

```python
# CircuitPlaygroundExpress_NeoPixel
# https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-neopixel

import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)
pixels.fill((0, 0, 0))
pixels.show()

# escolha quais demos tocar
# 1 significa tocar, 0 significa não tocar!
simpleCircleDemo = 1

def simpleCircle(wait):
    # Cores
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

    for i in range(len(pixels)):
        pixels[i] = colors[i]
        time.sleep(wait)
    time.sleep(1)


while True:
    if simpleCircleDemo:
        print('Simple Circle Demo')
        simpleCircle(.05)
    pixels.fill((0, 0, 0))
```
