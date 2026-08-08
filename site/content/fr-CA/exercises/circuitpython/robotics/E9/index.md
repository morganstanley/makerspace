---
template: exercise
title: Accelerometer
level: 4
exercise: 9
category: Robotics
tags: ['CircuitPython']
---

Both the Circuit Playground Express and Bluefruit contain an accelerometer, so the device can detect when it's moving and its orientation in three dimensions.

The follow program reads acceleration along the x, y, and z axis, prints the values to the Serial console, and sets the red/green/blue values of the LEDs based on the x/y/z readings of the accelerometer.

```python
from adafruit_circuitplayground import cp
import time

while True:
    if cp.switch:
        print("Slide switch off!")
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

### Challenge Problem

With the above program running, tilt the device so that the value of x is 0 while the values of y and z are approximately equal. What degree angle is the device being held at?

### Bluetooth Connection

Our phones have accelerometers too - let's send the readings from our phone to the Bluefruit device via bluetooth. This program is almost identical to the previous bluethooth exercise, except now the Bluefruit device will receive packets of type `AccelerometerPacket` instead of `ColorPacket`.

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
    # Keep advertising until another device connects
    ble.start_advertising(advertisement)
    while not ble.connected:
        pass
    ble.stop_advertising()

    # Keep listening for packets while connected
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

### References

- [cp.acceleration](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.acceleration)

- [Python: abs function](https://www.w3schools.com/python/ref_func_abs.asp)

- [AccelerometerPacket](https://docs.circuitpython.org/projects/bluefruitconnect/en/latest/api.html#adafruit-bluefruit-connect-accelerometer-packet)
