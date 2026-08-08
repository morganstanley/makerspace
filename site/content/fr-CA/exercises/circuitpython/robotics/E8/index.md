---
template: exercise
title: Bluetooth
level: 4
exercise: 8
category: Robotics
tags: ['CircuitPython']
---

In this lesson we will use the Adafruit Bluefruit Connect mobile app to remote-control the LEDs on our Circuit Playground Bluefruit device.

Start by installing the Bluefruit Connect app from the mobile app store:
- [Apple Store](https://apps.apple.com/us/app/bluefruit-connect/id830125974)
- [Google Play](https://play.google.com/store/apps/details?id=com.adafruit.bluefruit.le.connect)

Bluetooth Low Energy (BLE) is a wireless technology for pairing two devices and then transmitting information between them. One device *advertises* it's availability, while the other *scans* the environment for available devices.

In this exercise we will program the Bluefruit device to advertise it's availability, and then use the Bluefruit Connect mobile app to scan the environment, connect to the device, and begin transmitting information. Specifically we will transmit a color from our mobile app, and program the device to change the LEDs to that color.

Adafruit provides helper functions to make this relatively straightforward to implement. We'll use a variable named `connected` to determine whether another device (i.e., our mobile phone) is paired with the bluefruit:
- If it isn't connected, then we keep advertising availability.
- If it is connected, then we keep listening for ColorPackets, and change the color of the LEDs when we receive one.

```python
from adafruit_circuitplayground import cp

from adafruit_bluefruit_connect.packet import Packet
from adafruit_bluefruit_connect.color_packet import ColorPacket

from adafruit_ble import BLERadio
from adafruit_ble.advertising.standard import ProvideServicesAdvertisement
from adafruit_ble.services.nordic import UARTService

# Start with the LEDs turned off
BLACK = (0, 0, 0)
cp.pixels.brightness = 0.3
cp.pixels.fill(BLACK)

ble = BLERadio()
uart_service = UARTService()
advertisement = ProvideServicesAdvertisement(uart_service)

while True:
    # Keep advertising until another device connects
    ble.start_advertising(advertisement)
    while not ble.connected:
        pass
    ble.stop_advertising()

    # Keep listening for packets while connected
    while ble.connected:
        if uart_service.in_waiting:
            packet = Packet.from_stream(uart_service)
            if isinstance(packet, ColorPacket):
                print(packet.color)
                cp.pixels.fill(packet.color)
```

### Challenge Problem
Instead of setting the LEDs to the color received from the mobile app, set the LEDs to the [complementary color](https://www.w3schools.com/colors/colors_complementary.asp).

_Hint: create a new color variable based on the value of `packet.color`, then use it in the call to `cp.pixels.fill`_

### References

- [Python: pass keyword](https://www.w3schools.com/python/ref_keyword_pass.asp)

- [BLERadio: start_advertising & stop_advertising](https://docs.circuitpython.org/projects/ble/en/latest/api.html#adafruit_ble.BLERadio)

- [BLERadio: connected](https://docs.circuitpython.org/projects/ble/en/latest/api.html#adafruit_ble.BLERadio.connected)

- [UARTService](https://docs.circuitpython.org/projects/ble/en/latest/services.html#adafruit_ble.services.nordic.UARTService)

- [ProvideServicesAdvertisement](https://docs.circuitpython.org/projects/ble/en/latest/advertising.html#adafruit_ble.advertising.standard.ProvideServicesAdvertisement)

- [Packet](https://docs.circuitpython.org/projects/bluefruitconnect/en/latest/api.html#adafruit_bluefruit_connect.packet.Packet)

- [ColorPacket](https://docs.circuitpython.org/projects/bluefruitconnect/en/latest/api.html#adafruit_bluefruit_connect.color_packet.ColorPacket)
