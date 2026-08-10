---
template: exercise
title: Programação do Robô
level: 4
exercise: 14
category: Robotics
tags: ['CircuitPython']
---

Agora vamos programar o robô!

# Código Bluetooth

Comece com um programa básico que detecta os três tipos de pacotes Bluetooth que usamos (`ColorPacket`, `AccelerometerPacket`, `ButtonPacket`) e imprime o conteúdo do pacote no console serial. Comece executando este programa e enviando cada um dos três tipos de pacotes do seu telefone, confirmando que eles foram impressos no console serial. Esta será a base do nosso programa de robô:

```python
from adafruit_ble import BLERadio
from adafruit_ble.advertising.standard import ProvideServicesAdvertisement
from adafruit_ble.services.nordic import UARTService

from adafruit_bluefruit_connect.packet import Packet
from adafruit_bluefruit_connect.color_packet import ColorPacket
from adafruit_bluefruit_connect.accelerometer_packet import AccelerometerPacket
from adafruit_bluefruit_connect.button_packet import ButtonPacket

from adafruit_crickit import crickit

ble = BLERadio()
uart_service = UARTService()
advertisement = ProvideServicesAdvertisement(uart_service)

def handle_color_packet(packet):
    print(f"Color={packet.color}")

def handle_accelerometer_packet(packet):
    print(f"X={packet.x}, Y={packet.y}, Z={packet.z}")

def handle_button_packet(packet):
    print(f"Button={packet.button}, Pressed={packet.pressed}")

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
                handle_color_packet(packet)
            if isinstance(packet, AccelerometerPacket):
                handle_accelerometer_packet(packet)
            if isinstance(packet, ButtonPacket):
                handle_button_packet(packet)
```

# Acelerômetro: Frente/Trás

Usaremos a medição do acelerômetro ao longo do eixo Z para definir a velocidade do motor para frente/trás. Certifique-se de que o acelerador não ultrapasse 1,0 ou fique abaixo de -1,0, caso contrário, uma exceção será gerada:

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

Tente usar seu celular para fazer o robô se mover para frente e para trás e observe como a velocidade muda com a inclinação do celular. Os suportes das rodas provavelmente não estarão perfeitamente retos, então é provável que você veja o robô se inclinar ligeiramente para a esquerda ou para a direita.

# Acelerômetro: Esquerda/Direita

Agora vamos adicionar a capacidade de virar para a esquerda e para a direita alterando os aceleradores do motor para valores diferentes com base na medição do acelerômetro ao longo do eixo X:
```python
def handle_accelerometer_packet(packet):
    print(f"X={packet.x}, Y={packet.y}, Z={packet.z}")
    throttle_1 = compute_throttle(packet.z + packet.x)
    throttle_2 = compute_throttle(packet.z - packet.x)
    crickit.dc_motor_1.throttle = throttle_1
    crickit.dc_motor_2.throttle = throttle_2
```

# Servo: Virando a cabeça

Agora vamos anexar o servo da lição anterior e girar o braço do servo para frente e para trás usando o painel de controle do aplicativo do seu telefone:
```python
# Comece com o braço na metade do caminho
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

Podemos montar uma "cabeça" de copo de papel no braço do servo, permitindo girar a cabeça do robô para a esquerda e para a direita usando o painel de controle enquanto ele se move com base nas leituras do acelerômetro.

# Personalize!

Agora que o robô está funcionando, vamos adicionar alguns recursos! Os botões esquerdo e direito do painel de controle são usados ​​para ajustar o ângulo do servo, mas atualmente os botões para cima e para baixo e os quatro botões numéricos não são usados. Aqui estão algumas ideias:
- Toque uma música (volte à lição Sons para alguns exemplos musicais).
- Pisque os LEDs em um padrão.
- Programe o seletor de cores para permitir que você altere as cores dos LEDs.