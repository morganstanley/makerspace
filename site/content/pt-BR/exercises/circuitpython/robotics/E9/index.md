---
template: exercise
title: Acelerômetro
level: 4
exercise: 9
category: Robotics
tags: ['CircuitPython']
---

Tanto o Circuit Playground Express quanto o Bluefruit contêm um acelerômetro, permitindo que o dispositivo detecte seu movimento e sua orientação em três dimensões.

O programa a seguir lê a aceleração ao longo dos eixos x, y e z, exibe os valores no console serial e define os valores vermelho/verde/azul dos LEDs com base nas leituras x/y/z do acelerômetro.

```python
from adafruit_circuitplayground import cp
import time

while True:
    if cp.switch:
        print("Interruptor desligado!")
        cp.pixels.fill((0, 0, 0))
        time.sleep(1)
    else:
        R = 0
        G = 0
        B = 0
        x, y, z = cp.acceleration

        print((x, y, z))

        R = R + abs(int(x))
        G = G + abs(int(y))
        B = B + abs(int(z))
        cp.pixels.fill((R, G, B))
        time.sleep(0.25)
```

### Desafio

Com o programa acima rodando, incline o dispositivo de modo que o valor de x seja 0, enquanto os valores de y e z sejam aproximadamente iguais. Em que ângulo o dispositivo está sendo segurado?

### Conexão Bluetooth

Nossos celulares também têm acelerômetros — vamos enviar as leituras do nosso celular para o dispositivo Bluefruit via Bluetooth. Este programa é quase idêntico ao exercício de Bluetooth anterior, exceto que agora o dispositivo Bluefruit receberá pacotes do tipo `AccelerometerPacket` em vez de `ColorPacket`.

```python
from adafruit_circuitplayground import cp

from adafruit_bluefruit_connect.packet import Packet
from adafruit_bluefruit_connect.accelerometer_packet import AccelerometerPacket

from adafruit_ble import BLERadio
from adafruit_ble.advertising.standard import ProvideServicesAdvertisement
from adafruit_ble.services.nordic import UARTService

ble = BLERadio()
uart_service = UARTService()
advertisement = ProvideServicesAdvertisement(uart_service)

while True:
    # Continue anunciando até que outro dispositivo se conecte
    ble.start_advertising(advertisement)
    while not ble.connected:
        pass
    ble.stop_advertising()

    # Continue ouvindo por pacotes enquanto estiver conectado
    while ble.connected:
        if uart_service.in_waiting:
            packet = Packet.from_stream(uart_service)
            if isinstance(packet, AccelerometerPacket):
                x, y, z = packet.x, packet.y, packet.z
                print((x, y, z))
                R = abs(int(10 * x))
                G = abs(int(10 * y))
                B = abs(int(10 * z))
                cp.pixels.fill((R, G, B))
```

### Referências

- [cp.acceleration](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.acceleration)

- [Python: abs function](https://www.w3schools.com/python/ref_func_abs.asp)

- [AccelerometerPacket](https://docs.circuitpython.org/projects/bluefruitconnect/en/latest/api.html#adafruit-bluefruit-connect-accelerometer-packet)
