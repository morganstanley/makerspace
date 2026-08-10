---
template: exercise
title: Variables
level: 4
exercise: 6
category: Robotics
tags: ['CircuitPython']
---

In this lesson, we are going to learn about variables and how we can use them to store information in order to use it again later.

Recall that using variables in Makecode involves clicking "Make a Variable", typing in the name of the variable you want to create, and then dragging the blocks into your code. Things are much easier in Python - we just type the name of the variable and start using it!

### Color Variables

[From exercise 2](../E2), we ran the following program:

```python
from adafruit_circuitplayground import cp

cp.pixels.brightness = 0.3
cp.pixels.fill((0, 0, 0))

while True:

    # notice how these lines are similar
    cp.pixels[0] = (255, 0, 0)
    cp.pixels[1] = (255, 127, 0)
    cp.pixels[2] = (0, 255, 0)
    cp.pixels[3] = (0, 255, 127)
    cp.pixels[4] = (75, 0, 130)
    cp.pixels[5] = (60, 0, 255)
    cp.pixels[6] = (255, 255, 255)
    cp.pixels[7] = (0, 100, 0)
    cp.pixels[8] = (100, 0, 0)
    cp.pixels[9] = (0, 0, 100)

    # the [] with a number determines which light to turn on
    # and the numbers in () deterine the color!
    # It says how much (red, green, blue) we want.
    # Try changing the numbers!

    # this line turns on the lights!
```

What do those numbers mean? How can we make this more readable?

Make a list of color variables by color name.

```python
from adafruit_circuitplayground import cp

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

cp.pixels.brightness = 0.3
cp.pixels.fill(BLACK)

while True:
    cp.pixels[0] = RED
    cp.pixels[1] = ORANGE
    cp.pixels[2] = GREEN
    cp.pixels[3] = CYAN
    cp.pixels[4] = PURPLE
    cp.pixels[5] = BLUE
    cp.pixels[6] = WHITE
    cp.pixels[7] = YELLOW
    cp.pixels[8] = PINK
    cp.pixels[9] = LIGHT_BLUE
```

- a variable is used to store data to be used by the program
- this data can be a number, a string, a Boolean, a list or some other data type
- every variable has a name which can consist of letters, numbers, and the underscore character (\_).
- no other type of characters can be used to create the variable name and the variable may NOT start with a number.
- the equal sign = is used to assign a value to a variable.
- that assignment can be from a fixed value or taken from another existing variable
- it can also be used to change the value of a variable from one value to another after the initial assignment is made

### Changing Colors

Now let's use the buttons on the device to change the pixel colors. We do this by assigning the value of a variable based on which button is pressed, and then setting the pixel color to the value of the variable.

```python
from adafruit_circuitplayground import cp

# Colors
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)

cp.pixels.brightness = 0.3
color = BLACK
cp.pixels.fill(color)

while True:
    if cp.button_a:
        color = RED
    elif cp.button_b:
        color = GREEN
    cp.pixels[0] = color
```

### Challenge Problem

Modify the code so that the buttons change the color for all LEDs, not just LED 0.

### References

- [Python: variables](https://www.w3schools.com/python/python_variables.asp)
