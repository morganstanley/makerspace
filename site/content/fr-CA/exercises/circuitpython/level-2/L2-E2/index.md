---
template: exercise
title: Expression et Instructions
level: 2
exercise: 2
category: CircuitPython
tags: ['Niveau 2']
---

### Définitions

- **Expression**: quelque-chose qui doit être évalué
  - une combinaison de valeurs, variables, opérateurs et appel de fonctions : `1+1`
  - l'évaluation d'une expression produit une valeur

- **Instruction**: une instruction qui peut être exécutée
  - assignation: `x = 1`
  - boucles for (pour) et while (tant que), condition if (si), instruction d'import

**Choisi un programme précédent : parcours le code ligne par ligne. Qu'est-ce qui est une expression et ce qui est une instruction ?**


[Retourne voir l'utilisation de la console au Niveau 1, exercice 6](../../level-1/L1-E6)

```python
import time
from adafruit_circuitplayground.express import cpx

while True:
    print("Température C:", cpx.temperature)
    print("Température F:", cpx.temperature * 1.8 + 32)
    print((cpx.temperature, cpx.temperature * 1.8 + 32))
    time.sleep(1)

```

```python
# Execute des instructions simples ou des expressions en utilisant la console
y = 3.14
x = len("hello")
print(x)
print(y)
```

**Quelle est la différence entre une expression et une instruction lorsque l'on utilise la console ?**