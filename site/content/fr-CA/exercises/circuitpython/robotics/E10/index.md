---
template: exercise
title: Functions
level: 4
exercise: 10
category: Robotics
tags: ['CircuitPython']
---

Up to this point we've made use of many functions in our programs: some of them are Python built-in functions:
* `abs` - return absolute value of a number
* `int` - return closest integer (rounded down) of a number
* `isinstance` - return True if variable is of the given data type (otherwise False)
* `len` - return length (number of items) of an object (such as a list)
* `print` - output string to the Serial console
* `range` - return a sequence of integers

Some are provided by Python's standard library:
* `time.sleep` - suspend execution for the given number of seconds

Others are provided by Adafruit modules:
* `cp.pixels.fill` - color all pixels the given color
* `cp.play_tone` - produce a tone using the speaker
* `cp.stop_tone` - stop producing the tone
* `ble.start_advertising` - start advertising Bluetooth availability
* `ble.stop_advertising` - stop advertising Bluetooth availability
* `Packet.from_stream` - read the next packet from the incoming stream

### Defining Your Own Functions

Recall how we used loops and lists to simplify our code when we needed to perform a task multiple times. Functions are another technique to simplify our code and prevent us from having to rewrite the same code in multiple places.

Let's go back to the Touch/Serial program from Exercise 4:
```python
from adafruit_circuitplayground import cp

while True:
    if cp.switch:
        print("Slide switch off!")
        cp.pixels.fill((0, 0, 0))
        cp.stop_tone()
        continue
    if cp.touch_A4:
        print('Touched A4!')
        cp.pixels.fill((15, 0, 0))
        cp.start_tone(262)
    elif cp.touch_A5:
        print('Touched A5!')
        cp.pixels.fill((15, 5, 0))
        cp.start_tone(294)
    elif cp.touch_A6:
        print('Touched A6!')
        cp.pixels.fill((15, 15, 0))
        cp.start_tone(330)
    elif cp.touch_A1:
        print('Touched A1!')
        cp.pixels.fill((0, 15, 15))
        cp.start_tone(392)
    elif cp.touch_A2 and not cp.touch_A3:
        print('Touched A2!')
        cp.pixels.fill((0, 0, 15))
        cp.start_tone(440)
    elif cp.touch_A3 and not cp.touch_A2:
        print('Touched A3!')
        cp.pixels.fill((5, 0, 15))
        cp.start_tone(494)
    elif cp.touch_A2 and cp.touch_A3:
        print('Touched "8"!')
        cp.pixels.fill((15, 0, 15))
        cp.start_tone(523)
    else:
        cp.pixels.fill((0, 0, 0))
        cp.stop_tone()
```

Note that each time a touchpad is touched, the same 3 actions are taken: print to serial console, color pixels, and play a tone. This is a perfect opportunity to simplify our code by defining a function:
```python
from adafruit_circuitplayground import cp

def my_function(message, color, tone):
    print(message)
    cp.pixels.fill(color)
    cp.start_tone(tone)

while True:
    if cp.switch:
        print("Slide switch off!")
        cp.pixels.fill((0, 0, 0))
        cp.stop_tone()
        continue
    if cp.touch_A4:
        my_function('Touched A4!', (15, 0, 0), 262)
    elif cp.touch_A5:
        my_function('Touched A5!', (15, 5, 0), 294)
    elif cp.touch_A6:
        my_function('Touched A6!', (15, 15, 0), 330)
    elif cp.touch_A1:
        my_function('Touched A1!', (0, 15, 15), 392)
    elif cp.touch_A2 and not cp.touch_A3:
        my_function('Touched A2!', (0, 0, 15), 440)
    elif cp.touch_A3 and not cp.touch_A2:
        my_function('Touched A3!', (5, 0, 15), 494)
    elif cp.touch_A2 and cp.touch_A3:
        my_function('Touched "8"!', (15, 0, 15), 523)
    else:
        cp.pixels.fill((0, 0, 0))
        cp.stop_tone()
```

**Defining a function**: `def` keyword followed by the name of the function, parentheses, and a colon

- The body of the function, or the code for what the function will actually do, comes after the colon on an **indented** line

**Calling a function**: writing the function name followed by parentheses, for example: `ble.start_advertising()`

**Function parameters**:

- Sometimes functions require input to provide data for their code. This input is defined using parameters.
- Parameters are variables that are defined in the function definition.
- They are assigned the values which were passed as arguments when the function was called, elsewhere in the code.
- For example `my_function` has 3 parameters: `message`, `color`, and `tone`.

**Function arguments**:

- Parameters in python are variables — placeholders for the actual values the function needs.
- When the function is called, these values are passed in as arguments.
- For example: `my_function('Touched A4!', (15, 0, 0), 262)`

### Challenge Problem

Combine the code in Exercise 8 (Bluetooth) and Exercise 9 (Accelerometer) so that the Bluefruit device can accept both packets of type ColorPacket (from the Color Picker screen) and packets of type AccelerometerPacket (from the Accelerometer controller screen), and color the pixels accordingly. Use functions to simplify your code.