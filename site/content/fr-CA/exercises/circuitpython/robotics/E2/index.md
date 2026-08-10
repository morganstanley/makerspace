---
template: exercise
title: Color Wheel
level: 4
exercise: 2
category: Robotics
tags: ['CircuitPython']
---

Technically the Blinky project we created with CircuitPython doesn't do exactly the same thing as the one we previously created with Makecode:

![MakeCode Blink](blink.png)

Recall our Python code made use of the `cp.red_led` property, which toggles the small red D13 LED. To light up any of the 10 larger pixels on the device we make use of the `cp.pixels` property:

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
```

### Challenge Problem

Change your Blinky code from Exercise 1 to use LED 0 instead of D13. Try having it blink yellow instead of red.

### References

- [cp.pixels](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.pixels)

- [RGB Color Values](https://www.w3schools.com/colors/colors_rgb.asp)
