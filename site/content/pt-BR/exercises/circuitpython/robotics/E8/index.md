---
template: exercise
title: Bluetooth
level: 4
exercise: 8
category: Robotics
tags: ['CircuitPython']
---

Nesta lição, usaremos o aplicativo móvel Adafruit Bluefruit Connect para controlar remotamente os LEDs do nosso dispositivo Circuit Playground Bluefruit.

Comece instalando o aplicativo Bluefruit Connect na loja de aplicativos móveis:
- [Apple Store](https://apps.apple.com/us/app/bluefruit-connect/id830125974)
- [Google Play](https://play.google.com/store/apps/details?id=com.adafruit.bluefruit.le.connect)

Bluetooth Low Energy (BLE) é uma tecnologia sem fio para parear dois dispositivos e, em seguida, transmitir informações entre eles. Um dispositivo *anuncia* sua disponibilidade, enquanto o outro *varre* o ambiente em busca de dispositivos disponíveis.

Neste exercício, programaremos o dispositivo Bluefruit para anunciar sua disponibilidade e, em seguida, usaremos o aplicativo móvel Bluefruit Connect para varrer o ambiente, conectar-se ao dispositivo e começar a transmitir informações. Especificamente, transmitiremos uma cor do nosso aplicativo móvel e programaremos o dispositivo para mudar os LEDs para essa cor.

O Adafruit fornece funções auxiliares para tornar isso relativamente simples de implementar. Usaremos uma variável chamada `connected` para determinar se outro dispositivo (por exemplo, nosso celular) está pareado com o Bluefruit:
- Se não estiver conectado, continuamos anunciando a disponibilidade.
- Se estiver conectado, continuamos ouvindo por ColorPackets e mudamos a cor dos LEDs quando recebemos um.

```python
from adafruit_circuitplayground import cp

from adafruit_bluefruit_connect.packet import Packet
from adafruit_bluefruit_connect.color_packet import ColorPacket

from adafruit_ble import BLERadio
from adafruit_ble.advertising.standard import ProvideServicesAdvertisement
from adafruit_ble.services.nordic import UARTService

# Comece com os LEDs desligados
BLACK = (0, 0, 0)
cp.pixels.brightness = 0.3
cp.pixels.fill(BLACK)

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
            if isinstance(packet, ColorPacket):
                print(packet.color)
                cp.pixels.fill(packet.color)
```

### Desafio
Em vez de definir os LEDs para a cor recebida do aplicativo móvel, defina os LEDs para a [cor complementar](https://www.w3schools.com/colors/colors_complementary.asp).

_Dica: crie uma nova variável de cor baseada no valor de `packet.color` e use-a na chamada para `cp.pixels.fill`_

### Referências

- [Python: pass keyword](https://www.w3schools.com/python/ref_keyword_pass.asp)

- [BLERadio: start_advertising & stop_advertising](https://docs.circuitpython.org/projects/ble/en/latest/api.html#adafruit_ble.BLERadio)

- [BLERadio: connected](https://docs.circuitpython.org/projects/ble/en/latest/api.html#adafruit_ble.BLERadio.connected)

- [UARTService](https://docs.circuitpython.org/projects/ble/en/latest/services.html#adafruit_ble.services.nordic.UARTService)

- [ProvideServicesAdvertisement](https://docs.circuitpython.org/projects/ble/en/latest/advertising.html#adafruit_ble.advertising.standard.ProvideServicesAdvertisement)

- [Packet](https://docs.circuitpython.org/projects/bluefruitconnect/en/latest/api.html#adafruit_bluefruit_connect.packet.Packet)

- [ColorPacket](https://docs.circuitpython.org/projects/bluefruitconnect/en/latest/api.html#adafruit_bluefruit_connect.color_packet.ColorPacket)
