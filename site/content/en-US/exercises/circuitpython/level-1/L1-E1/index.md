---
template: exercise
title: Blink
level: 1
exercise: 1
category: CircuitPython
tags: ['Level 1']
---

All Circuit Playground code follows a similar format. Let's start with a small example.

![CPX Blink](blink.gif)

```python
# This section lets the system know which libraries we want to use
from adafruit_circuitplayground.express import cpx
import time

# This section is where our main code goes
# Everything indented under the 'while True' will repeat forever
# We call this a 'while loop'
while True:
    cpx.red_led = True
    time.sleep(0.5)
    cpx.red_led = False
    time.sleep(0.5)

# Note - anything with a '#' infront is a comment and is ignored
```
