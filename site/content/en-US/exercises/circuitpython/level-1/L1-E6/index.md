---
template: exercise
title: Temperature
level: 1
exercise: 6
category: CircuitPython
tags: ['Level 1']
---

This code will print out the current temperature to the MuEditor display. Click the Serial button in MuEditor to see the raw data output, or Plotter to see a graph.

```python
import time
from adafruit_circuitplayground.express import cpx

while True:
    print("Temperature C:", cpx.temperature)
    print("Temperature F:", cpx.temperature * 1.8 + 32)
    print((cpx.temperature, cpx.temperature * 1.8 + 32))
    time.sleep(1)
```
