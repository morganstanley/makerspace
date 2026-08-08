---
template: exercise
title: Light Sensor
level: 4
exercise: 11
category: Robotics
tags: ['CircuitPython']
---

Both the Circuit Playgound Express and Bluefruit contain a light sensor, so the device can do things like turn on a light automatically, turn off a light, or adjust the brightness of the pixels.

First, let's get a feel for the ambient light in the room - use `cp.light` to read the light level from the sensor, and then print it to the serial console:

```python
from adafruit_circuitplayground import cp
import time

while True:
    print(cp.light)
    time.sleep(1)
```

With the program running, try generating a wide range of values by moving around the device, holding it under a bright light source, holding your hand over the sensor, etc.

Now let's program the device to be an automatic light switch - it will turn on if the ambient light drops below a certain threshold:

```python
from adafruit_circuitplayground import cp
import time

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

cp.pixels.brightness = 0.05
cp.pixels.fill(BLACK)

while True:
    # you may have to adjust the threshold based on your environment
    if cp.light < 50:
        cp.pixels.fill(WHITE)
    else:
        cp.pixels.fill(BLACK)
    time.sleep(1)
```

### Challenge Problem

Most modern smartphones are equipped with an ambient light sensor that automatically adjusts the brightness of the screen based on the lighting in the room. Try programming the device to do the same: set the pixels to a color of your choice, then adjust the pixel brightness based on the light sensor (dimmer for lower light levels and brighter for higher light levels).

### References

- [cp.light](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.light)
