---
template: exercise
title: Toque e Serial
level: 4
exercise: 4
category: Robotics
tags: ['CircuitPython']
---

Brincamos com luzes, sons e botões - agora vamos brincar com os sensores de toque.

Tocar em pinos diferentes na placa acionará luzes e sons diferentes.

Tente também brincar com o interruptor deslizante para ativá-lo e desativá-lo completamente.

O touchpad é atribuído por seu número no circuit playground.

Para visualizar a saída das instruções `print()`, certifique-se de que **Serial** esteja habilitado no MuEditor.

```python
from adafruit_circuitplayground import cp

while True:
    if cp.switch:
        print("Interruptor desligado")
        cp.pixels.fill((0, 0, 0))
        cp.stop_tone()
        continue
    if cp.touch_A4:
        print('Tocou A4!')
        cp.pixels.fill((15, 0, 0))
        cp.start_tone(262)
    elif cp.touch_A5:
        print('Tocou A5!')
        cp.pixels.fill((15, 5, 0))
        cp.start_tone(294)
    elif cp.touch_A6:
        print('Tocou A6!')
        cp.pixels.fill((15, 15, 0))
        cp.start_tone(330)
    elif cp.touch_A1:
        print('Tocou A1!')
        cp.pixels.fill((0, 15, 15))
        cp.start_tone(392)
    elif cp.touch_A2 and not cp.touch_A3:
        print('Tocou A2!')
        cp.pixels.fill((0, 0, 15))
        cp.start_tone(440)
    elif cp.touch_A3 and not cp.touch_A2:
        print('Tocou A3!')
        cp.pixels.fill((5, 0, 15))
        cp.start_tone(494)
    elif cp.touch_A2 and cp.touch_A3:
        print('Tocou "8"!')
        cp.pixels.fill((15, 0, 15))
        cp.start_tone(523)
    else:
        cp.pixels.fill((0, 0, 0))
        cp.stop_tone()
```

### Desafio

Execute o programa acima e faça com que ele exiba "Tocou 8" no console serial.

### Referências

- [cp.touch_A1](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.touch_A1)

- [Python: print](https://www.w3schools.com/python/ref_func_print.asp)
