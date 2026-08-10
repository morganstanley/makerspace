---
template: exercise
title: Brilho do Arco-Íris
level: 3
exercise: 1
category: ImagiCharm
tags: ['Level 3']
---

Vamos iluminar o ImagiCharm com um arco-íris brilhante! Siga os passos abaixo para aprender como fazer o arco-íris brilhar.

---

### Passo 1: Comece com uma tela em branco

Primeiro, precisamos limpar a tela do ImagiCharm para garantir que ele esteja pronto para o arco-íris.

```python
# Crie uma tela em branco
pixels.clear()
```

- **O que esse comando faz**: Limpa a tela para que não reste nada do que foi feito antes.
- Tente executar apenas esta linha. O que acontece no ImagiCharm?

---

### Passo 2: Ligue o primeiro pixel

Vamos começar ativando o pixel superior esquerdo com uma cor vermelha brilhante.

```python
# Ligue o primeiro pixel
pixels[0][0] = (255, 0, 0)  # Vermelho
```

- **Explicação**:
  - **`pixels[0][0]`**: Isso seleciona o primeiro pixel no canto superior esquerdo.
  - **`(255, 0, 0)`**: Isso significa que o pixel brilhará em vermelho (255 para vermelho, 0 para verde e azul).

- **Desafio**: Você pode mudar isso para verde? (Dica: defina o segundo número como 255.)

---

### Passo 3: Adicione mais cores

Agora, vamos ativar mais pixels para criar um arco-íris na primeira linha.

```python
# Ative os pixels para fazer um arco-íris!
pixels[0][1] = (255, 165, 0)     # Laranja
pixels[0][2] = (255, 255, 0)     # Amarelo
pixels[0][3] = (0, 255, 0)       # Verde
pixels[0][4] = (0, 0, 255)       # Azul
pixels[0][5] = (75, 0, 130)      # Indigo
pixels[0][6] = (238, 130, 238)   # Violeta
```

- **Explicação**:
  - Cada pixel na linha recebe uma cor.
  - As cores do arco-íris são adicionadas uma a uma, usando valores `(vermelho, verde, azul)`.

- **Atividade**: Experimente mudar uma das cores. O que acontece se você misturar vermelho e azul?

---

### Passo 4: Mostre o Arco-Íris

Por fim, vamos exibir o arco-íris no ImagiCharm.

```python
# Mostre o arco-íris no ImagiCharm!
pixels.show()
```

- **O que isso faz**: Ilumina todos os pixels que configuramos!

---

### Código completo

Aqui está o código completo para fazer seu arco-íris brilhante:

```python
# Crie uma tela em branco
pixels.clear()

# Ative os pixels para fazer um arco-íris!
pixels[0][0] = (255, 0, 0)       # Vermelho
pixels[0][1] = (255, 165, 0)     # Laranja
pixels[0][2] = (255, 255, 0)     # Amarelo
pixels[0][3] = (0, 255, 0)       # Verde
pixels[0][4] = (0, 0, 255)       # Azul
pixels[0][5] = (75, 0, 130)      # Indigo
pixels[0][6] = (238, 130, 238)   # Violeta

# Mostre o arco-íris no ImagiCharm!
pixels.show()
```

---

### Explore Mais

- Altere o brilho dos pixels.
  *(Dica: Use `pixels.brightness = 0.5` antes da linha `pixels.show()`.)*
- Crie uma segunda linha de cores do arco-íris. Que padrões você consegue criar?

Pressione "Run" para ver seu arco-íris brilhar! 🌈
