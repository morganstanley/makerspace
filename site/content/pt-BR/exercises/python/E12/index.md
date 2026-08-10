---
template: exercise
title: Jogos de segurança cibernética
level: 1
exercise: 12
category: Python
tags: ['Python']
---

Use suas habilidades em Python para escrever três funções relacionadas a uma boa gestão de senhas.

## Força da senha

Escreva uma função para testar se uma senha é forte ou não.

Preencha as partes do código marcadas com `TODO`:

```python
def is_strong(password):
  # TODO: Se a senha tiver menos de 12 caracteres, retorne False.
  symbols = ['!', '@', '#']
  # TODO: Escreva um loop For para percorrer a lista de símbolos.
  #       Se algum símbolo estiver na senha, retorne True.
  #       Caso contrário, retorne False.
```

*Dica: use a função* `len` *para obter o comprimento de uma string.*
*Revise as lições sobre* `If/Elif/Else`*,* `Functions`*,* e `For Loops`*.*

## Tempo limite da senha

Escreva uma função que espere 10 segundos se o usuário tentar uma senha incorreta 3 vezes seguidas.

Use variáveis globais para armazenar a senha secreta e o número de vezes que o usuário tentou.

Preencha as partes do código marcadas com `TODO`:

```python
from time import sleep
secret_password = # TODO: defina a senha aqui
num_tries = 0

def try_password(entered_password):
  global num_tries
  # TODO: Se entered_password corresponder a secret_password, retorne True.
  # TODO: Caso contrário, aumente num_tries em 1.
  # TODO: Se num_tries for 3 ou mais, faça sleep(10) segundos e redefina num_tries para 0.
  return False
```

*Dica: chame* `sleep(10)` *para esperar 10 segundos.*
*Revise a lição sobre* `Variables` *para saber como aumentar o valor de uma variável, e a lição sobre* `If/Elif/Else` *para comparar dois números.*

## Bloqueio da senha

Escreva uma função que bloqueie a conta do usuário se ele tentar uma senha incorreta 3 vezes seguidas.

Use variáveis globais para armazenar a senha secreta e o número de vezes que o usuário tentou.

Preencha as partes do código marcadas com `TODO`:

```python
from time import sleep
secret_password = # TODO: defina a senha aqui
num_tries = 0

def try_password(entered_password):
  global num_tries
  # TODO: Se num_tries for 3 ou mais, retorne False.
  # TODO: Se entered_password corresponder a secret_password, redefina num_tries para 0 e retorne True.
  # TODO: Caso contrário, aumente num_tries em 1 e retorne False.
  return False
```

*Revise a lição sobre* `Variables` *para saber como aumentar o valor de uma variável, e a lição sobre* `If/Elif/Else` *para comparar dois números.*
