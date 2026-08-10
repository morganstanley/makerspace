---
template: exercise
title: Toque
level: 1
exercise: 4
category: CircuitPython
tags: ['Level 1']
---

Já brincamos com luzes e sons, agora vamos brincar com o toque!

Tocar em pinos diferentes na placa Express acionará luzes e sons diferentes.

Experimente também brincar com o interruptor deslizante para ativá-lo e desativá-lo completamente.

O touchpad é atribuído por seu número no circuit playground.

```python
from adafruit_circuitplayground.express import cpx

while True:
    if cpx.switch:
        print("Interruptor desligado!")
        cpx.pixels.fill((0, 0, 0))
        cpx.stop_tone()
        continue
    if cpx.touch_A4:
        print('Tocou A4!')
        cpx.pixels.fill((15, 0, 0))
        cpx.start_tone(262)
    elif cpx.touch_A5:
        print('Tocou A5!')
        cpx.pixels.fill((15, 5, 0))
        cpx.start_tone(294)
    elif cpx.touch_A6:
        print('Tocou A6!')
        cpx.pixels.fill((15, 15, 0))
        cpx.start_tone(330)
    elif cpx.touch_A7:
        print('Tocou A7!')
        cpx.pixels.fill((0, 15, 0))
        cpx.start_tone(349)
    elif cpx.touch_A1:
        print('Tocou A1!')
        cpx.pixels.fill((0, 15, 15))
        cpx.start_tone(392)
    elif cpx.touch_A2 and not cpx.touch_A3:
        print('Tocou A2!')
        cpx.pixels.fill((0, 0, 15))
        cpx.start_tone(440)
    elif cpx.touch_A3 and not cpx.touch_A2:
        print('Tocou A3!')
        cpx.pixels.fill((5, 0, 15))
        cpx.start_tone(494)
    elif cpx.touch_A2 and cpx.touch_A3:
        print('Tocou "8"!')
        cpx.pixels.fill((15, 0, 15))
        cpx.start_tone(523)
    else:
        cpx.pixels.fill((0, 0, 0))
        cpx.stop_tone()
```
