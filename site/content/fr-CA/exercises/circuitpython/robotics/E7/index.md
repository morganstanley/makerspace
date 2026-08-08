---
template: exercise
title: Loops and Lists
level: 4
exercise: 7
category: Robotics
tags: ['CircuitPython']
---

### Loops

Now suppose instead of turning on all the LEDs at once, we'd like to turn them on one-by-one, pausing briefly in between each. At first you might think this would require 20 lines of Python code: 1 `cp.pixel` plus 1 `time.sleep` for each of the 10 LEDs. Recall from Makecode we can simplify this by using loops - here is how a `for` loop can be implemented in Python:

```python
from adafruit_circuitplayground import cp
import time

# Colors
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

### Lists

Now what if we want to rotate through more colors than just red and green? We could add an extra 4-lines for each color... or better yet we can create a list of colors and then use a loop to iterate through colors in the list:

```python
from adafruit_circuitplayground import cp
import time

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

cp.pixels.brightness = 0.3
cp.pixels.fill(BLACK)

while True:
    for color in colors:
        for i in range(len(cp.pixels)):
            cp.pixels[i] = color
            time.sleep(.05)
        time.sleep(1)
```

Notice how there's a loop within a loop - this is sometimes called a *nested loop*, and is an extremely powerful programming construct. If we were to re-write this program without any loops it would require 10x(10x2+1)=210 lines of Python code!

### Built-in Functions

Notice the use of `len` and `range` in the above programs - these are built-in functions. Built-in functions are handy tools built into the Python language (and other languages) that help programmers do common things.

#### `len(s)`

Return the length (the number of items) of an object. The argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection (such as a dictionary, set, or frozen set).

#### `range(stop)`

Rather than being a function, range is actually an immutable sequence type, as documented in [Ranges and Sequence Types — list, tuple, range](https://docs.python.org/fr/3/library/stdtypes.html#range).

### Challenge Problem

Modify the program above to make Button A a "clear" button: when the user presses A turn off all the pixels. Allow the program to continue running, turning them back on one-by-one.

### References

- [Python: for loops](https://www.w3schools.com/python/python_for_loops.asp)

- [Python: lists](https://www.w3schools.com/python/python_lists.asp)

- [Python: len](https://www.w3schools.com/python/ref_func_len.asp)

- [Python: range](https://www.w3schools.com/python/ref_func_range.asp)

- [Built-In Function Reference](https://docs.python.org/fr/3/library/functions.html)
