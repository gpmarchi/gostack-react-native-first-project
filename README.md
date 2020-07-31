# Mobile com React Native

Primeiro projeto utilizando React Native do bootcamp GoStack 10 da Rocketseat.

A idéia do aplicativo é exibir o perfil e a listagem dos projetos favoritados de um usuário utilizando a api pública do github.

## Tecnologias e libs utilizadas

Seguem as tecnologias utilizadas no desenvolvimento:

- react-native
- react-navigation
- prop-types
- async-storage
- styled-components
- reactotron
- axios

## Instalação

Para instalar o projeto localmente na sua máquina basta clonar o repositório:

```bash
git clone https://github.com/gpmarchi/gostack-react-native-first-project.git && cd gostack-react-native-first-project
```

E rodar o comando abaixo para instalar as dependências necessárias:

```bash
yarn
```

## Rodando o projeto

Para rodar o projeto basta utilizar o comando abaixo para iniciar o metro bundler:

```bash
yarn start
```

A partir desse momento será possível rodar o app em qualquer uma das duas plataformas.

Para rodar no emulador do ios, primeiro é necessário rodar o comando abaixo para a associação dos módulos nativos declarados na aplicação:

```bash
cd ios && pod install
```

Após serem associados os módulos, rodar o comando abaixo para instalar o app no emulador:

```bash
yarn ios
```

Para rodar no emulador do android, primeiro é necessário executar o emulador e garantir que o sistema o reconheça. Isso pode ser conferido utilizando o comando abaixo para listar os emuladores disponíveis no seu sistema (somente será listado o emulador caso ele já esteja executando):

```bash
adb devices
```

Após confirmar que seu emulador está listado, rodar o comando abaixo para instalar o app:

```bash
yarn android
```
