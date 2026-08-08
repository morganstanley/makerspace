---
template: exercise
title: Variáveis
level: 4
exercise: 6
category: Robotics
tags: ['CircuitPython']
---

Nesta aula, aprenderemos sobre variáveis ​​e como podemos usá-las para armazenar informações e usá-las novamente mais tarde.

Lembre-se de que usar variáveis ​​no Makecode envolve clicar em "Make a Variable", digitar o nome da variável que você deseja criar e, em seguida, arrastar os blocos para o seu código. As coisas são muito mais fáceis em Python — basta digitar o nome da variável e começar a usá-la!

### Variáveis de Cor

[Do Exercício 2](../E2), rodamos o seguinte programa:

```python
from adafruit_circuitplayground import cp

cp.pixels.brightness = 0.3
cp.pixels.fill((0, 0, 0))

while True:

    # observe como essas linhas são semelhantes
    cp.pixels[0] = (255, 0, 0)
    cp.pixels[1] = (255, 127, 0)
    cp.pixels[2] = (0, 255, 0)
    cp.pixels[3] = (0, 255, 127)
    cp.pixels[4] = (75, 0, 130)
    cp.pixels[5] = (60, 0, 255)
    cp.pixels[6] = (255, 255, 255)
    cp.pixels[7] = (0, 100, 0)
    cp.pixels[8] = (100, 0, 0)
    cp.pixels[9] = (0, 0, 100)

    # O [] com um número determina qual luz acender 
    # e os números entre () determinam a cor! 
    # Ele diz o quanto (vermelho, verde, azul) queremos. 
    # Tente mudar os números!
```

O que esses números significam? Como podemos tornar isso mais legível?

Faça uma lista de variáveis ​​de cores por nome da cor.

```python
from adafruit_circuitplayground import cp

# Cores
BLACK = (0, 0, 0)
RED = (255, 0, 0)
PINK = (255, 100, 120)
ORANGE = (255, 100, 0)
YELLOW = (255, 255, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
PURPLE = (255, 0, 255)
BLUE = (0, 0, 255)
LIGHT_BLUE = (80, 200, 175)
WHITE = (255, 255, 255)

cp.pixels.brightness = 0.3
cp.pixels.fill(BLACK)

while True:
    cp.pixels[0] = RED
    cp.pixels[1] = ORANGE
    cp.pixels[2] = GREEN
    cp.pixels[3] = CYAN
    cp.pixels[4] = PURPLE
    cp.pixels[5] = BLUE
    cp.pixels[6] = WHITE
    cp.pixels[7] = YELLOW
    cp.pixels[8] = PINK
    cp.pixels[9] = LIGHT_BLUE
```

- uma variável é usada para armazenar dados a serem usados ​​pelo programa
- esses dados podem ser um número, uma string, um booleano, uma lista ou algum outro tipo de dado
- cada variável tem um nome que pode consistir em letras, números e o caractere sublinhado (\_).
- nenhum outro tipo de caractere pode ser usado para criar o nome da variável e a variável NÃO pode começar com um número.
- o sinal de igual = é usado para atribuir um valor a uma variável.
- essa atribuição pode ser de um valor fixo ou retirada de outra variável existente
- também pode ser usado para alterar o valor de uma variável de um valor para outro após a atribuição inicial ser feita

### Mudando de Cores

Agora, vamos usar os botões do dispositivo para alterar as cores dos pixels. Fazemos isso atribuindo o valor de uma variável com base no botão pressionado e, em seguida, definindo a cor do pixel para o valor da variável.

```python
from adafruit_circuitplayground import cp

# Cores
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)

cp.pixels.brightness = 0.3
color = BLACK
cp.pixels.fill(color)

while True:
    if cp.button_a:
        color = RED
    elif cp.button_b:
        color = GREEN
    cp.pixels[0] = color
```

### Desafio

Modifique o código para que os botões mudem a cor de todos os LEDs, não apenas do LED 0.

### Referências

- [Python: variáveis](https://www.w3schools.com/python/python_variables.asp)
