---
template: exercise
title: Expressões e Declarações
level: 2
exercise: 2
category: CircuitPython
tags: ['Level 2']
---

### Definição

- **Expressão**: algo que precisa ser avaliado.
  - uma combinação de valores, variáveis, operadores e chamadas para funções: `1+1`
  - a avaliação de uma expressão produz um valor
- **Declaração**: instrução que pode ser executada
  - atribuição: `x = 1`
  - declarações for, while, if, import

**Selecione um programa anterior: analise o código linha por linha, qual é a expressão e qual é a declaração?**

[Revise o uso do console: do exercício 6 do Nível 1](../../level-1/L1-E6)

```python
import time
from adafruit_circuitplayground.express import cpx

while True:
    print("Temperatura C:", cpx.temperature)
    print("Temperatura F:", cpx.temperature * 1.8 + 32)
    print((cpx.temperature, cpx.temperature * 1.8 + 32))
    time.sleep(1)

```

```python
# Executar instruções/expressões simples usando o console
y = 3.14
x = len("hello")
print(x)
print(y)
```

**Qual é a diferença entre declaração e expressão em relação ao uso do console?**
