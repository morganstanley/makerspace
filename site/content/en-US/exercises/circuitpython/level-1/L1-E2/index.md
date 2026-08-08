---
template: exercise
title: Lights
level: 1
exercise: 2
category: CircuitPython
tags: ['Level 1']
---

Let's explore further.

We can do all sorts of crazy things by adding to the **while loop**.

Here we will tell the circuit to turn on some colorful lights.

```python
from adafruit_circuitplayground.express import cpx

cpx.pixels.brightness = 0.3
cpx.pixels.fill((0, 0, 0))

while True:

    # notice how these lines are similar
    cpx.pixels[0] = (255, 0, 0)
    cpx.pixels[1] = (255, 127, 0)
    cpx.pixels[2] = (0, 255, 0)
    cpx.pixels[3] = (0, 255, 127)
    cpx.pixels[4] = (75, 0, 130)
    cpx.pixels[5] = (60, 0, 255)
    cpx.pixels[6] = (255, 255, 255)
    cpx.pixels[7] = (0, 100, 0)
    cpx.pixels[8] = (100, 0, 0)
    cpx.pixels[9] = (0, 0, 100)

    # the [] with a number determines which light to turn on
    # and the numbers in () deterine the color!
    # It says how much (red, green, blue) we want.
    # Try changing the numbers!

    # this line turns on the lights!
    cpx.pixels.show()
```
