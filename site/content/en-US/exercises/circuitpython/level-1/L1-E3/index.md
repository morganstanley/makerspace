---
template: exercise
title: Buttons
level: 1
exercise: 3
category: CircuitPython
tags: ['Level 1']
---

Let's have a listen to the CPX's speakers!

Here the first number is the pitch, and the second number is the duration of the note.

The 'if statement' is going to check which button we pressed, and play the correspondng
note.

```python
from adafruit_circuitplayground.express import cpx

while True:
    if cpx.button_a:
        cpx.play_tone(329,1)
        cpx.play_tone(261,1)
    elif cpx.button_b:
        cpx.play_tone(440,1)
        cpx.play_tone(400,1)
```
