# Sistema De Login React

Nesse projeto foi desenvolvido um sistema de login onde o usuário final vai ter algumas opções: logar no sistema, caso já possua uma conta, ou criar uma conta nova
caso ele não possua. Os dados do usuário como senhas e e-mails são salvos no local storage, deixando a aplicação similar a um sistema real.

![img1 - loginsystem](https://user-images.githubusercontent.com/89361241/213807637-9d435707-0b33-4de3-b5df-1333ce6f9af5.PNG)

## Validações

Para deixar a aplicação mais segura e coerente, foi implementada algumas validações básicas.

### Validações na tela de login
- Senhas incorretas não não conseguem efetuar o login.
- E-mails não cadastrados não conseguem efetuar o login.

### Validações na tela de cadastro de usuário
- É necessário inserir o seu e-mail duas vezes no momento do cadastro, e ambos precisam ser iguais. Caso os e-mails não sejam iguais, o cadastro não é efetuado.

![cadastrar](https://user-images.githubusercontent.com/89361241/213809283-270977a0-8f9a-489d-9e6a-49c4a4cb793d.PNG)

## Tecnologias utilizadas
- React / JavaScript
- Biblioteca React: Styled-components

