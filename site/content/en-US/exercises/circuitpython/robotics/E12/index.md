---
template: exercise
title: Crickit & Servos
level: 4
exercise: 12
category: Robotics
tags: ['CircuitPython']
---

# What is the CRICKIT?

- The CRICKIT board can be used in conjunction with a supported Circuit Playground board (such as the CPX or Bluefruit) to control more powerful motors that the Circuit Playground board could not power by itself.
- It also has the capability of hooking up additional sensors to the CRICKIT

![](../../../makecode/robotics/E5/Lesson51.jpg)

![](../../../makecode/robotics/E5/Lesson52.png)

# Servo Motors

Servos are specialized motors that can be programmed to move in precise increments. The servo we will be using has a special control signal that instructs the motor to move its arm to a specific angle (between 0 and 180 degrees).

![](servo.jpg)

# Assembly

- Attach the Circuit Playground board to the CRICKIT

- Use the metal spacers and screws (inside of CRICKIT bag)

- The micro USB on the CP board should align with the power supply of the CRICKIT

![](../../../makecode/robotics/E6/Assembly3.jpg)

# Programming

After plugging the servo cable into Servo 1 on the CRICKIT (yellow wire toward the outside), the following program can be run to demonstrate the full range of motion of the servo motor arm:

```python
from adafruit_crickit import crickit
import time

def move_and_sleep(angle):
    crickit.servo_1.angle = angle
    time.sleep(5)

while True:
    move_and_sleep(0)
    move_and_sleep(180)
```

Now let's use the phone to move the servo arm gradually through its range of motion. We'll use Bluetooth packets of type `ButtonPacket` to receive Left and Right button presses from the app's Control Pad. We'll use a [global variable](https://www.w3schools.com/python/python_variables_global.asp) that keeps track of the current angle of the servo arm, and we'll implement a function `adjust_angle` that rotates the arm by the specified amount:

```python
from adafruit_crickit import crickit

from adafruit_bluefruit_connect.packet import Packet
from adafruit_bluefruit_connect.button_packet import ButtonPacket

from adafruit_ble import BLERadio
from adafruit_ble.advertising.standard import ProvideServicesAdvertisement
from adafruit_ble.services.nordic import UARTService

ble = BLERadio()
uart_service = UARTService()
advertisement = ProvideServicesAdvertisement(uart_service)

# Start with arm at the halfway point
angle = 90
crickit.servo_1.angle = angle

def adjust_angle(amount):
    global angle
    angle = angle + amount
    crickit.servo_1.angle = angle

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
            if isinstance(packet, ButtonPacket):
                if packet.pressed:
                    if packet.button == ButtonPacket.LEFT:
                        adjust_angle(20)
                    elif packet.button == ButtonPacket.RIGHT:
                        adjust_angle(-20)
```

# Challenge Problem

If you experiment with the above program enough, it will eventually crash with a `ValueError` exception (Hint: try rotating it beyond its full range of motion). Add two `if` blocks to the `adjust_angle` function that will prevent angle from going outside its valid range.

# References

- [servo.angle](https://docs.circuitpython.org/projects/motor/en/latest/api.html#adafruit_motor.servo.Servo)

- [ButtonPacket](https://docs.circuitpython.org/projects/bluefruitconnect/en/latest/api.html#adafruit-bluefruit-connect-button-packet)

- [Python: global keyword](https://www.w3schools.com/python/gloss_python_global_keyword.asp)
