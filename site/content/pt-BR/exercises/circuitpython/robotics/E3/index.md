---
template: exercise
title: Sons
level: 4
exercise: 3
category: Robotics
tags: ['CircuitPython']
---

Vamos ouvir os alto-falantes do dispositivo!

Aqui, o primeiro número é o tom e o segundo número é a duração da nota. Toque notas diferentes dependendo do botão pressionado.

```python
from adafruit_circuitplayground import cp

while True:
    if cp.button_a:
        cp.play_tone(329,1)
        cp.play_tone(261,1)
    elif cp.button_b:
        cp.play_tone(440,1)
        cp.play_tone(400,1)
```

### Referências

- [cp.play_tone](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.play_tone)

## Fazendo Música

Se você quiser testar alguma música, aqui estão as variáveis ​​que você precisa para começar. Veja abaixo [exemplos de músicas](http://morganstanley.github.io/makerspace/exercises/pt-BR/circuitpython/robotics/E3/#sample-songs).

Copie estas variáveis ​​de notas musicais no seu código:

```python
deep_A = 116.541
deep_B = 123.471
low_C = 130.813
low_C_sharp = 138.591
low_D = 146.832
low_D_sharp = 155.563
low_E = 164.814
low_F = 174.614
low_F_sharp = 184.997
low_G = 195.998
low_G_sharp = 207.652
low_A = 220
low_B_flat = 233.083
low_B = 246.942

mid_C = 261.626
mid_C_sharp = 277.183
mid_D = 293.665
mid_D_sharp = 311.127
mid_E = 329.628
mid_F = 349.228
mid_F_sharp = 369.994
mid_G = 391.995
mid_G_sharp = 415.305
mid_A = 440
mid_B_flat = 466.164
mid_B = 493.883

high_C = 523.251
high_C_sharp = 554.365
high_D = 587.330
high_D_sharp = 622.254
high_E = 659.255
high_F = 698.465
high_F_sharp = 739.989
high_G = 783.991
high_G_sharp = 830.609
high_A = 880
high_B_flat = 987.767
high_B = 987.767
```

# Exemplos de Músicas

## The Star Spangled Banner - USA National Anthem

```python
cp.play_tone(mid_G, 0.75)
cp.play_tone(mid_E, 0.25)
cp.play_tone(mid_C, 1)
cp.play_tone(mid_E, 1)
cp.play_tone(mid_G, 1)
cp.play_tone(high_C, 2)
time.sleep(0.25)
cp.play_tone(high_E, 0.75)
cp.play_tone(high_D, 0.25)
cp.play_tone(high_C, 1)
cp.play_tone(mid_E, 1)
cp.play_tone(mid_F_sharp, 1)
cp.play_tone(mid_G, 2)
```

## Für Elise - by Ludwig van Beethoven

```python
cp.play_tone(high_E, 0.25)
cp.play_tone(high_D_sharp, 0.25)
cp.play_tone(high_E, 0.25)
cp.play_tone(high_D_sharp, 0.25)
cp.play_tone(high_E, 0.25)
cp.play_tone(mid_B, 0.25)
cp.play_tone(high_F, 0.25)
cp.play_tone(high_G, 0.25)

cp.play_tone(mid_A, 0.5)
cp.play_tone(low_E, 0.25)
cp.play_tone(low_F, 0.25)
cp.play_tone(low_A, 0.25)
cp.play_tone(mid_C, 0.25)
cp.play_tone(mid_E, 0.25)
cp.play_tone(mid_A, 0.25)

cp.play_tone(mid_B, 0.5)
cp.play_tone(low_E, 0.25)
cp.play_tone(low_G_sharp, 0.25)
cp.play_tone(low_B, 0.25)
cp.play_tone(mid_E, 0.25)
cp.play_tone(mid_G_sharp, 0.25)
cp.play_tone(mid_B, 0.25)

cp.play_tone(mid_A, 0.5)
cp.play_tone(low_E, 0.25)
cp.play_tone(low_F, 0.25)
cp.play_tone(low_A, 0.25)
cp.play_tone(mid_E, 0.25)
cp.play_tone(high_E, 0.25)
cp.play_tone(high_D_sharp, 0.25)

cp.play_tone(high_E, 0.25)
cp.play_tone(high_D_sharp, 0.25)
cp.play_tone(high_E, 0.25)
cp.play_tone(mid_B, 0.25)
cp.play_tone(high_F, 0.25)
cp.play_tone(high_G, 0.25)
cp.play_tone(mid_A, 0.5)
```
