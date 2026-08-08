---
template: exercise
title: Acceleration
level: 1
exercise: 5
category: CircuitPython
tags: ['Level 1']
---

The circuit playground has an accelerometer so it can tell when it's moving. Let's see what we can do with this.

```python
from adafruit_circuitplayground.express import cpx
import time

# Main loop gets x, y and z axis acceleration, prints the values, and turns on
# red, green and blue, at levels related to the x, y and z values.
while True:
    if cpx.switch:
        print("Slide switch off!")
        cpx.pixels.fill((0, 0, 0))
        continue
    else:
        R = 0
        G = 0
        B = 0
        x, y, z = cpx.acceleration

        print((x, y, z))

        if x:
            R = R + abs(int(x))
        if y:
            G = G + abs(int(y))
        if z:
            B = B + abs(int(z))
        cpx.pixels.fill((R, G, B))
        time.sleep(0.25)
```
