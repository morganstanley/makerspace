---
template: exercise
title: Buttons
level: 4
exercise: 5
category: Robotics
tags: ['CircuitPython']
---

Now let's use the buttons on the device to turn individual LEDs on and off. We use the `cp.button_a` and `cp.button_b` properties to determine if the given button is being pressed down:

```python
from adafruit_circuitplayground import cp

while True:
    if cp.button_a:
        cp.pixels[0] = (255, 255, 255)
    elif cp.button_b:
        cp.pixels[1] = (255, 255, 255)
```

### Challenge Problem 1

Modify the code above so that only one pixel is on at a time. In other words, if multiple buttons are pressed in a sequence, only the most recent pixel stays on.

_Hint: consider using `cp.pixels.fill`_

### Challenge Problem 2

Now modify the code so that each pixel is on only as long as the user holds down the button.

### References

- [Python: if/elif/else](https://www.w3schools.com/python/python_conditions.asp)

- [cp.button_a](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.button_a)

- [cp.button_b](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.button_b)
