---
template: exercise
title: Botões
level: 1
exercise: 3
category: CircuitPython
tags: ['Level 1']
---

Vamos ouvir os alto-falantes do CPX!

Aqui, o primeiro número é a altura e o segundo número é a duração da nota.

A instrução 'if' verificará qual botão pressionamos e tocará a
nota correspondente.

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
