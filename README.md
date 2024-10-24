## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em seu computador:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (instale com `npm install -g expo-cli`)

## Instalação do Node.js

1. Acesse o site oficial do [Node.js](https://nodejs.org/).
2. Baixe e instale a versão LTS (Long Term Support) recomendada para o seu sistema operacional.

## Instalação do Expo CLI
Abra o terminal e execute o seguinte comando para instalar o Expo CLI globalmente:

```bash
npm install -g expo-cli
```

## Execução do projeto
1.Instale as dependências do projeto:

```bash
npm install
```
2.Inicie o servidor de desenvolvimento:

```bash
expo start
```
3. Para dispositivos Android, abra aplicativo Expo Go no seu dispositivo móvel e escaneie o código QR que aparece no terminal ou no navegador.
4. Para dispositivos iOS, abra aplicativo de câmera do dispositivo e escaneie o código QR que aparece no terminal ou no navegador.
   

## Configuração do ambiente Android/iOS
Android
Android Studio: Instale o Android Studio para configurar um emulador Android.

#### Configuração do Emulador: Siga as instruções no Android Studio para criar um novo dispositivo virtual.

Execução no Emulador: Com o servidor em execução, use:

```bash
npm run android
```

iOS (macOS apenas)
Xcode: Instale o Xcode na App Store.

Execução no Simulador: Com o servidor em execução, use:

```bash
npm run ios
```
