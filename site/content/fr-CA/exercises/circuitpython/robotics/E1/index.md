---
template: exercise
title: Blinky
level: 4
exercise: 1
category: Robotics
tags: ['CircuitPython']
---

Remember Blinky?

The very first project from the Makecode Robotics course caused a single LED to cycle back and forth between on and off.

Recall it used a single while loop containing 4 blocks:

1. set the LED to on
2. sleep for half a second
3. set the LED to off
4. sleep for half a second

Now we do the same thing, just using 4 lines of Python code instead of 4 Makecode blocks:

```python
# This section lets the system know which libraries we want to use
from adafruit_circuitplayground import cp
import time

# This section is where our main code goes
# Everything indented under the 'while True' will repeat forever
# We call this a 'while loop'
while True:
    cp.red_led = True
    time.sleep(0.5)
    cp.red_led = False
    time.sleep(0.5)

# Note - anything with a '#' infront is a comment and is ignored
```

![CPX Blink](../../../circuitpython/level-1/L1-E1/blink.gif)

### Challenge Problem

Can you do the same thing using only 2 lines of Python code within the while loop?

### References

- [cp.red_led](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.red_led)

- [Python: while loops](https://www.w3schools.com/python/python_while_loops.asp)

- [Python: time.sleep](https://docs.python.org/fr/3/library/time.html#time.sleep)
