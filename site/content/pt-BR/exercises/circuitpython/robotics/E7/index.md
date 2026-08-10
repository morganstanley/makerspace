---
template: exercise
title: Loops e Listas
level: 4
exercise: 7
category: Robotics
tags: ['CircuitPython']
---

### Loops

Agora, suponha que, em vez de acender todos os LEDs de uma só vez, gostaríamos de acendê-los um a um, com uma breve pausa entre cada um. A princípio, você pode pensar que isso exigiria 20 linhas de código Python: 1 `cp.pixel` mais 1 `time.sleep` para cada um dos 10 LEDs. Lembre-se do Makecode: podemos simplificar isso usando loops - veja como um loop `for` pode ser implementado em Python:

```python
from adafruit_circuitplayground import cp
import time

# Cores
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)

cp.pixels.brightness = 0.3
cp.pixels.fill(BLACK)

while True:
    for i in range(len(cp.pixels)):
        cp.pixels[i] = RED
        time.sleep(.05)
    time.sleep(1)

    for i in range(len(cp.pixels)):
        cp.pixels[i] = GREEN
        time.sleep(.05)
    time.sleep(1)
```

### Listas

E se quisermos alternar entre mais cores além de vermelho e verde? Poderíamos adicionar 4 linhas extras para cada cor... ou, melhor ainda, podemos criar uma lista de cores e usar um loop para iterar entre as cores na lista:

```python
from adafruit_circuitplayground import cp
import time

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

cp.pixels.brightness = 0.3
cp.pixels.fill(BLACK)

while True:
    for color in colors:
        for i in range(len(cp.pixels)):
            cp.pixels[i] = color
            time.sleep(.05)
        time.sleep(1)
```

Observe como há um loop dentro de um loop — às vezes chamado de *nested loop* — e é uma construção de programação extremamente poderosa. Se reescrevêssemos este programa sem loops, seriam necessárias 10x(10x2+1)=210 linhas de código Python!

### Funções Integradas

Observe o uso de `len` e `range` nos programas acima — essas são funções integradas. Funções integradas são ferramentas úteis incorporadas à linguagem Python (e outras linguagens) que ajudam os programadores a realizar tarefas comuns.

#### `len(s)`

Retorna o comprimento (o número de itens) de um objeto. O argumento pode ser uma sequência (como uma string, bytes, tupla, lista ou intervalo) ou uma coleção (como um dicionário, conjunto ou conjunto congelado).

#### `range(stop)`

Em vez de ser uma função, range (intervalo) é na verdade um tipo de sequência imutável, conforme documentado em [Intervalos e tipos de sequência — lista, tupla, intervalo](https://docs.python.org/3/library/stdtypes.html#range).

### Desafio

Modifique o programa acima para tornar o Botão A um botão de "limpar": quando o usuário pressionar A, apague todos os pixels. Deixe o programa continuar rodando, ligando-os novamente um por um.

### Referências

- [Python: for loops](https://www.w3schools.com/python/python_for_loops.asp)

- [Python: lists](https://www.w3schools.com/python/python_lists.asp)

- [Python: len](https://www.w3schools.com/python/ref_func_len.asp)

- [Python: range](https://www.w3schools.com/python/ref_func_range.asp)

- [Built-In Function Reference](https://docs.python.org/3/library/functions.html)
