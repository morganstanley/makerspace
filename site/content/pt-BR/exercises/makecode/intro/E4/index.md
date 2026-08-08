---
template: exercise
title: Sensor de Luz
level: 1
exercise: 4
category: MakeCode
tags: ['MakeCode']
description: Vamos nos aprofundar nos detalhes do uso do sensor de luz!
---

### O que são sensores de luz?

Onde você vê sensores de luz sendo usados?

A entrada do sensor de luz pode ser usada para muitas coisas, como acender ou apagar uma luz automaticamente.

Projeto: Detectar a luz no ambiente e alterar a cor dos pixels de LED com base na cor da luz.

Um dispositivo que detecta a quantidade de luz em um ambiente.
Tarefa:

- Se a leitura do sensor de luz for inferior a 50, acender todos os neopixels em cinza.
- Se a leitura do sensor de luz for superior a 175, acender todos os neopixels em amarelo.
- Se a leitura do sensor de luz for qualquer outro valor, acender todos os neopixels em azul claro.
  Objetivo: Explorar o Sensor de Luz da tarefa acima.

![e3-1](e4-1.png)
![e3-2](e4-2.png)
![e3-3](e4-3.png)
![e3-4](e4-4.png)
![e3-5](e4-5.png)
![e3-6](e4-6.png)
![e3-7](e4-7.png)
![e3-8](e4-8.png)
![e3-9](e4-9.png)
![e3-10](e4-10.png)
![e3-11](e4-11.png)
![e3-12](e4-12.png)
![e3-13](e4-13.png)
![e3-14](e4-14.png)

Experimente levar a CPX em:

- locais escuros, como um armário.
- locais moderadamente iluminados, como um cômodo com luzes acesas.
- mais perto de uma luminária, onde haja luz, e observe como os pixels mudam de cor.

Indo além: modifique o programa do sensor de luz para que ele seja executado somente quando o Botão A for clicado. Dica: use o bloco "On Button" dos Blocos de ENTRADA.

- faça o programa ser executado apenas uma vez por clique.
- faça as luzes mudarem de cor com base no nível de iluminação SEM usar o bloco if-else e colorir os pixels diretamente.