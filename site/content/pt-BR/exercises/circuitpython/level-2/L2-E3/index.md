---
template: exercise
title: Funções integradas
level: 2
exercise: 3
category: CircuitPython
tags: ['Level 2']
---

Vamos começar [por onde paramos em variáveis](../L2-E1).

Estamos usando duas funções integradas neste script, você consegue encontrá-las?

```python
# Aprenda mais em https://realpython.com/python-variables/
# e https://realpython.com/python-data-types/
import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.2)

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

## O que são funções integradas?

Funções integradas são ferramentas úteis incorporadas à linguagem Python (e outras linguagens) que ajudam os programadores a fazer coisas comuns, como obter o comprimento de uma lista ou o intervalo de um loop.

### `len(s)`

Retorna o comprimento (o número de itens) de um objeto. O argumento pode ser uma sequência (como uma string, bytes, tupla, lista ou intervalo) ou uma coleção (como um dicionário, conjunto ou conjunto congelado).

### `range(stop)`

Em vez de ser uma função, o intervalo é na verdade um tipo de sequência imutável, conforme documentado em [Intervalos e tipos de sequência — lista, tupla, intervalo](https://docs.python.org/3/library/stdtypes.html#range).

### Documentação

Todos os programadores usam referências para planejar e construir seu código. Os detalhes das funções internas acima são da documentação.

Sinta-se à vontade para consultar e explorar a documentação das funções internas. Você pode encontrar todos os tipos de ferramentas interessantes para seus projetos. Experimente para aprender mais.

[Referência de função integrada](https://docs.python.org/3/library/functions.html)
