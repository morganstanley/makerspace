---
template: exercise
title: Funções
level: 4
exercise: 10
category: Robotics
tags: ['CircuitPython']
---

Até este ponto, utilizamos muitas funções em nossos programas: algumas delas são funções internas do Python:
* `abs` - retorna o valor absoluto de um número
* `int` - retorna o inteiro mais próximo (arredondado para baixo) de um número
* `isinstance` - retorna True se a variável for do tipo de dado fornecido (caso contrário, retorna False)
* `len` - retorna o comprimento (número de itens) de um objeto (como uma lista)
* `print` - envia uma string para o console Serial
* `range` - retorna uma sequência de inteiros

Algumas são fornecidas pela biblioteca padrão do Python:
* `time.sleep` - suspende a execução pelo número de segundos fornecido

Outras são fornecidas pelos módulos do Adafruit:
* `cp.pixels.fill` - colore todos os pixels com a cor fornecida
* `cp.play_tone` - emite um tom usando o alto-falante
* `cp.stop_tone` - interrompe a emissão do tom
* `ble.start_advertising` - inicia a publicidade da disponibilidade do Bluetooth
* `ble.stop_advertising` - interrompe a publicidade da disponibilidade do Bluetooth
* `Packet.from_stream` - lê o próximo pacote do fluxo de entrada

### Definindo suas próprias funções

Lembre-se de como usamos loops e listas para simplificar nosso código quando precisávamos executar uma tarefa várias vezes. Funções são outra técnica para simplificar nosso programa e evitar que tenhamos que reescrever o mesmo código em vários lugares.

Voltemos ao programa Touch/Serial do Exercício 4:
```python
from adafruit_circuitplayground import cp

while True:
    if cp.switch:
        print("Interruptor desligado!")
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

Observe que cada vez que um touchpad é tocado, as mesmas 3 ações são executadas: imprimir no console serial, colorir pixels e emitir um sinal sonoro. Esta é uma oportunidade perfeita para simplificar nosso código definindo uma função:
```python
from adafruit_circuitplayground import cp

def my_function(message, color, tone):
    print(message)
    cp.pixels.fill(color)
    cp.start_tone(tone)

while True:
    if cp.switch:
        print("Interruptor desligado!")
        cp.pixels.fill((0, 0, 0))
        cp.stop_tone()
        continue
    if cp.touch_A4:
        my_function('Tocou A4!', (15, 0, 0), 262)
    elif cp.touch_A5:
        my_function('Tocou A5!', (15, 5, 0), 294)
    elif cp.touch_A6:
        my_function('Tocou A6!', (15, 15, 0), 330)
    elif cp.touch_A1:
        my_function('Tocou A1!', (0, 15, 15), 392)
    elif cp.touch_A2 and not cp.touch_A3:
        my_function('Tocou A2!', (0, 0, 15), 440)
    elif cp.touch_A3 and not cp.touch_A2:
        my_function('Tocou A3!', (5, 0, 15), 494)
    elif cp.touch_A2 and cp.touch_A3:
        my_function('Tocou "8"!', (15, 0, 15), 523)
    else:
        cp.pixels.fill((0, 0, 0))
        cp.stop_tone()
```

**Definindo a função**: `def` palavra-chave seguida do nome da função, parênteses e dois pontos

- O corpo da função, ou o código que a função realmente fará, vem depois dos dois pontos em uma linha **recuada**

**Chamando a função**: escrevendo o nome da função seguido de parênteses, por exemplo: `ble.start_advertising()`

**Parâmetros da função**:

- Às vezes, funções requerem entrada para fornecer dados para seu código. Essa entrada é definida por meio de parâmetros.
- Parâmetros são variáveis ​​definidas na definição da função.
- A eles são atribuídos os valores que foram passados ​​como argumentos quando a função foi chamada, em outro lugar no código.
- Por exemplo, `my_function` tem 3 parâmetros: `message`, `color` e `tone`.

**Argumentos da função**:

- Parâmetros em Python são variáveis ​​— espaços reservados para os valores reais que a função precisa.
- Quando a função é chamada, esses valores são passados ​​como argumentos.
- Por exemplo: `my_function('Tocado em A4!', (15, 0, 0), 262)`

### Desafio

Combine o código do Exercício 8 (Bluetooth) e do Exercício 9 (Acelerômetro) para que o dispositivo Bluefruit possa aceitar pacotes do tipo ColorPacket (da tela Color Picker) e pacotes do tipo AccelerometerPacket (da tela Accelerometer controller) e colorir os pixels adequadamente. Use funções para simplificar seu código.