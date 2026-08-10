---
template: exercise
title: Functions
level: 2
exercise: 4
category: CircuitPython
tags: ['Level 2']
---

Lets start with [where we left off with variables](../L2-E1).

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

- Some tasks need to be performed multiple times within a program.
- Rather than rewrite the same code in multiple places, a function may be defined using the def keyword.
- Function definitions may include parameters, providing data input to the function.
- Functions may return a value using the return keyword followed by the value to return.

**Calling a function**: `makeLight()` wriing the function name followed by parentheses

**Defining a function**: `def` keyword followed by the name of the function, parentheses, and a colon

- The body of the function, or the code for what the function will actually do, comes after the colon on an **indented** line

**Function parameters**:

- Sometimes functions require input to provide data for their code. This input is defined using parameters.
- Parameters are variables that are defined in the function definition.
- They are assigned the values which were passed as arguments when the function was called, elsewhere in the code.

**Function arguments**:

- Parameters in python are variables— placeholders for the actual values the function needs
- When the function is called, these values are passed in as arguments.

```python
import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)

# Colors
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

And make a function out of the behavior:

```python
def simpleCircle(wait):
    # Colors
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

How to use:

```python
# CircuitPlaygroundExpress_NeoPixel
# https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-neopixel

import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)
pixels.fill((0, 0, 0))
pixels.show()

# choose which demos to play
# 1 means play, 0 means don't!
simpleCircleDemo = 1

def simpleCircle(wait):
    # Colors
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
