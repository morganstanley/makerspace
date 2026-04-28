---
template: exercise
title: Robot Programming
level: 4
exercise: 14
category: Robotics
tags: ['CircuitPython']
---

Now let's program the robot!

# Bluetooth Code

Start with a basic program that listens for the three types of Bluetooth packets we've been using (`ColorPacket`, `ButtonPacket`, `AccelerometerPacket`) and prints the packet contents to the serial console. Start by running this program and sending each of the 3 packet types from your phone, confirming they're printed to the serial console. This will be the foundation of our robot program:

```python
from adafruit_circuitplayground import cp

from adafruit_bluefruit_connect.packet import Packet
from adafruit_bluefruit_connect.color_packet import ColorPacket
from adafruit_bluefruit_connect.button_packet import ButtonPacket
from adafruit_bluefruit_connect.accelerometer_packet import AccelerometerPacket

from adafruit_ble import BLERadio
from adafruit_ble.advertising.standard import ProvideServicesAdvertisement
from adafruit_ble.services.nordic import UARTService

from adafruit_crickit import crickit

# Start with the LEDs turned off
BLACK = (0, 0, 0)
cp.pixels.brightness = 0.3
cp.pixels.fill(BLACK)

ble = BLERadio()
ble.name = # TODO: give your device a name
uart_service = UARTService()
advertisement = ProvideServicesAdvertisement(uart_service)

def handle_color_packet(packet):
    print(f"Color={packet.color}")
    cp.pixels.fill(packet.color)

def handle_button_packet(packet):
    print(f"Button={packet.button}, Pressed={packet.pressed}")

def handle_accelerometer_packet(packet):
    print(f"X={packet.x}, Y={packet.y}, Z={packet.z}")

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
                handle_color_packet(packet)
            if isinstance(packet, ButtonPacket):
                handle_button_packet(packet)
            if isinstance(packet, AccelerometerPacket):
                handle_accelerometer_packet(packet)
```

# Driving with the Control Pad

We can use the Control Pad on the phone app to drive the robot. Let's program each button to set the throttle on each of the two motors. Keep in mind you may have to change the throttle values based on how your robot was wired up - experiment and find out!

```python
def full_stop():
    print("STOP")
    crickit.dc_motor_1.throttle = 0
    crickit.dc_motor_2.throttle = 0

def handle_button_packet(packet):
    print(f"Button={packet.button}, Pressed={packet.pressed}")
    if not packet.pressed:
        full_stop()
    elif packet.button == '5':
        print("UP")
        crickit.dc_motor_1.throttle = 0.5
        crickit.dc_motor_2.throttle = 0.5
    elif packet.button == '6':
        print("DOWN")
        crickit.dc_motor_1.throttle = -0.5
        crickit.dc_motor_2.throttle = -0.5
    elif packet.button == '7':
        print("LEFT")
        crickit.dc_motor_1.throttle = 0.5
        crickit.dc_motor_2.throttle = -0.5
    elif packet.button == '8':
        print("RIGHT")
        crickit.dc_motor_1.throttle = -0.5
        crickit.dc_motor_2.throttle = 0.5
```

# Accelerometer: Forward/Backward

Instead of using the control, we can use the accelerometer measurement along the Z-axis to set forward/backward motor speed. Be sure the throttle doesn't go above 1.0 or below -1.0, otherwise an exception will be thrown:
```python
def compute_throttle(value):
    if value > 1:
        return 1
    elif value < -1:
        return -1
    return value

def handle_accelerometer_packet(packet):
    print(f"X={packet.x}, Y={packet.y}, Z={packet.z}")
    throttle = compute_throttle(packet.z)
    crickit.dc_motor_1.throttle = throttle
    crickit.dc_motor_2.throttle = throttle
```

Try using your phone to make the robot move forward and backward, and notice how the speed changes based on the tilt of your phone. The wheel attachments probably won't be perfectly straight so you're likely to see the robot veer slightly to the left or right.

# Accelerometer: Left/Right

Now let's add the ability to turn left and right by changing the motor throttles to different values based on accelerometer measurement along the X-axis:
```python
def handle_accelerometer_packet(packet):
    print(f"X={packet.x}, Y={packet.y}, Z={packet.z}")
    throttle_1 = compute_throttle(packet.z + packet.x)
    throttle_2 = compute_throttle(packet.z - packet.x)
    crickit.dc_motor_1.throttle = throttle_1
    crickit.dc_motor_2.throttle = throttle_2
```

# Servo: Turning Heads

If we're using the accelerometer to control the motors, we can attach the servo and swivel the arm back and forth using the control pad on your phone app:
```python
# Start with arm at the halfway point
angle = 90
crickit.servo_1.angle = angle

def adjust_angle(amount):
    global angle
    angle = angle + amount
    if angle > 180:
        angle = 180
    elif angle < 0:
        angle = 0
    crickit.servo_1.angle = angle

def handle_button_packet(packet):
    print(f"Button={packet.button}, Pressed={packet.pressed}")
    if packet.pressed:
        if packet.button == ButtonPacket.LEFT:
            adjust_angle(20)
        elif packet.button == ButtonPacket.RIGHT:
            adjust_angle(-20)
```

We can mount a paper cup "head" onto the servo arm, allowing us to turn the robot's head left and right using the control pad while it moves around based on the accelerometer readings.

# Customize It!

Now that we have the robot working let's add some bells and whistles! The left and right control pad buttons are used to adjust the servo angle, but currently the up and down buttons and the four number buttons are unused. Here are a few ideas:
- Play a tune (go back to the Sounds lesson for some musical samples).
- Blink LEDs in a pattern.
- Program the color picker to allow you to change LED colors.