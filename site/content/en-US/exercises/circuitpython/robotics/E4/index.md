---
template: exercise
title: Touch and Serial
level: 4
exercise: 4
category: Robotics
tags: ['CircuitPython']
---

We've played with lights, sounds, and buttons - now let's play with the touch sensors.

Touching different pins on the board will trigger different lights and sounds.

Also try playing with the slide switch to enable and disable it entirely.

The touchpad is assigned by its number on the circuit playground.

In order to view the output of the `print()` statements, ensure **Serial** is enabled in the Mu Editor.

```python
from adafruit_circuitplayground import cp

while True:
    if cp.switch:
        print("Slide switch off!")
        cp.pixels.fill((0, 0, 0))
        cp.stop_tone()
        continue
    if cp.touch_A4:
        print('Touched A4!')
        cp.pixels.fill((15, 0, 0))
        cp.start_tone(262)
    elif cp.touch_A5:
        print('Touched A5!')
        cp.pixels.fill((15, 5, 0))
        cp.start_tone(294)
    elif cp.touch_A6:
        print('Touched A6!')
        cp.pixels.fill((15, 15, 0))
        cp.start_tone(330)
    elif cp.touch_A1:
        print('Touched A1!')
        cp.pixels.fill((0, 15, 15))
        cp.start_tone(392)
    elif cp.touch_A2 and not cp.touch_A3:
        print('Touched A2!')
        cp.pixels.fill((0, 0, 15))
        cp.start_tone(440)
    elif cp.touch_A3 and not cp.touch_A2:
        print('Touched A3!')
        cp.pixels.fill((5, 0, 15))
        cp.start_tone(494)
    elif cp.touch_A2 and cp.touch_A3:
        print('Touched "8"!')
        cp.pixels.fill((15, 0, 15))
        cp.start_tone(523)
    else:
        cp.pixels.fill((0, 0, 0))
        cp.stop_tone()
```

### Challenge Problem

Run the above program and get it to print "Touched 8" to the serial console.

### References

- [cp.touch_A1](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.touch_A1)

- [Python: print](https://www.w3schools.com/python/ref_func_print.asp)
