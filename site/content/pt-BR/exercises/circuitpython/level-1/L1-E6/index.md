---
template: exercise
title: Temperatura
level: 1
exercise: 6
category: CircuitPython
tags: ['Level 1']
---

Este código mostrará a temperatura atual no visor do MuEditor. Clique no botão Serial no MuEditor para ver a saída de dados brutos ou no botão Plotter para ver um gráfico.

```python
import time
from adafruit_circuitplayground.express import cpx

while True:
    print("Temperatura C:", cpx.temperature)
    print("Temperatura F:", cpx.temperature * 1.8 + 32)
    print((cpx.temperature, cpx.temperature * 1.8 + 32))
    time.sleep(1)
```
