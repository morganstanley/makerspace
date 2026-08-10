---
template: exercise
title: Sensor de Luz
level: 4
exercise: 11
category: Robotics
tags: ['CircuitPython']
---

Tanto o Circuit Playground Express quanto o Bluefruit contêm um sensor de luz, permitindo que o dispositivo faça coisas como acender e apagar uma luz automaticamente ou ajustar o brilho dos pixels.

Primeiro, vamos ter uma ideia da luz ambiente na sala - use `cp.light` para ler o nível de luz do sensor e, em seguida, imprima-o no console serial:

```python
from adafruit_circuitplayground import cp
import time

while True:
    print(cp.light)
    time.sleep(1)
```

Com o programa em execução, tente gerar uma ampla gama de valores movendo-se ao redor do dispositivo, segurando-o sob uma fonte de luz forte, colocando a mão sobre o sensor, etc.

Agora vamos programar o dispositivo para ser um interruptor de luz automático - ele ligará se a luz ambiente cair abaixo de um determinado limite:

```python
from adafruit_circuitplayground import cp
import time

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

cp.pixels.brightness = 0.05
cp.pixels.fill(BLACK)

while True:
    # você pode ter que ajustar o limite com base no seu ambiente
    if cp.light < 50:
        cp.pixels.fill(WHITE)
    else:
        cp.pixels.fill(BLACK)
    time.sleep(1)
```

### Desafio

A maioria dos smartphones modernos é equipada com um sensor de luz ambiente que ajusta automaticamente o brilho da tela com base na iluminação do ambiente. Tente programar o dispositivo para fazer o mesmo: defina os pixels para uma cor de sua escolha e, em seguida, ajuste o brilho dos pixels com base no sensor de luz (mais escuro para níveis de luz mais baixos e mais claro para níveis de luz mais altos).

### Referências

- [cp.light](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.light)
