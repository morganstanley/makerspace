---
template: exercise
title: Blinky
level: 4
exercise: 1
category: Robotics
tags: ['CircuitPython']
---

Lembra do Blinky?

O primeiro projeto do curso de Robótica Makecode fazia com que um único LED alternasse entre ligado e desligado.

Lembre-se de que ele usava um único loop "while" contendo 4 blocos:

1. ligue o LED
2. deixe em repouso por meio segundo
3. desligue o LED
4. deixe em repouso por meio segundo

Agora fazemos a mesma coisa, só que usando 4 linhas de código Python em vez de 4 blocos Makecode:

```python
# Esta seção permite que o sistema saiba quais bibliotecas queremos usar
from adafruit_circuitplayground import cp
import time

# Esta seção é onde nosso código principal vai
# Tudo o que estiver recuado sob 'while True' será repetido para sempre
# Chamamos isso de 'while loop'
while True:
    cp.red_led = True
    time.sleep(0.5)
    cp.red_led = False
    time.sleep(0.5)

# Observação - qualquer coisa com um '#' na frente é um comentário e é ignorado
```

![CPX Blink](../../../circuitpython/level-1/L1-E1/blink.gif)

### Desafio

Você pode fazer a mesma coisa usando apenas 2 linhas de código Python dentro do loop while?

### Referências

- [cp.red_led](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.red_led)

- [Python: while loops](https://www.w3schools.com/python/python_while_loops.asp)

- [Python: time.sleep](https://docs.python.org/3/library/time.html#time.sleep)
