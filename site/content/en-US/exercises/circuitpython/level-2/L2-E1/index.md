---
template: exercise
title: Variables and Types
level: 2
exercise: 1
category: CircuitPython
tags: ['Level 2']
---

In level 1, we went over the features of the Circuit Playground Express, but we didn't dig into the basics of programming. These concepts are present in all programming languages in some shape or form.

In this lesson, we are going to learn about variables and how we can use them to store information in order to use it again later.

## Color Variables

[From level 1 exercise 2](../../level-1/L1-E2), we put the following program into the CPX:

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

What do those numbers mean? How can we make this more readable?

Make a list of color variables by color name.

```python
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

- a variable is used to store data to be used by the program
- this data can be a number, a string, a Boolean, a list or some other data type
- every variable has a name which can consist of letters, numbers, and the underscore character (\_).
- no other type of characters can be used to create the variable name and the variable may NOT start with a number.
- the equal sign = is used to assign a value to a variable.
- that assignment can be from a fixed value or taken from another existing variable
- it can also be used to change the value of a variable from one value to another after the initial assignment is made

## Working with lists

Eventually come to this:

```python
# Learn more https://realpython.com/python-variables/
# and https://realpython.com/python-data-types/
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

How can we streamline this so that we don't have to enter a color for each `for` block?

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
