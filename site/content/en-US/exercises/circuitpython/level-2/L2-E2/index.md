---
template: exercise
title: Expression and Statements
level: 2
exercise: 2
category: CircuitPython
tags: ['Level 2']
---

### Definition

- **Expression**: something that needs to be evaluated.
  - a combination of values, variables, operators, and calls to functions: `1+1`
  - the evaluation of an expression produces a value
- **Statement**: instruction that can be executed
  - assignment: `x = 1`
  - for, while, if, import statements

**Pick a previous program: go through the code line by line, which is expression and which is statement?**

[Review the use of console: from Level 1 exercise 6](../../level-1/L1-E6)

```python
import time
from adafruit_circuitplayground.express import cpx

while True:
    print("Temperature C:", cpx.temperature)
    print("Temperature F:", cpx.temperature * 1.8 + 32)
    print((cpx.temperature, cpx.temperature * 1.8 + 32))
    time.sleep(1)

```

```python
# Execute simple statements/expression using console
y = 3.14
x = len("hello")
print(x)
print(y)
```

**What is the difference between statement and expression from using console?**
