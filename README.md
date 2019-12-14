# ionic4-example-background-geolocation

[![Version](https://img.shields.io/badge/version-1.0.1-blue)](https://img.shields.io/badge/version-1.0.1-blue)
[![Build Status](https://travis-ci.org/alxsmora1/ionic4-example-background-geolocation.svg?branch=master)](https://travis-ci.org/alxsmora1/ionic4-example-background-geolocation)

Ejemplo de uso del plugin background geolocation en Ionic 4 Angular.

Se desarrollo un ejemplo de la implementación del plugin Background Geolocation sobre Ionic 4 Angular.
La app se compilo solamente para android, así que el resultado para IOS no esta comprobado.

## Instrucciones
* Instalar las depencias con npm desde consola:
```console
foo@bar:~$ npm install
```
* Agrega los recursos de cordova al proyecto y sus archivos base:
```console
foo@bar:~$ ionic integrations enable cordova --add
```
* Agregar el plugin background geolocation desde consola con:
```console
foo@bar:~$ ionic cordova plugin add @mauron85/cordova-plugin-background-geolocation
foo@bar:~$ npm install @ionic-native/background-geolocation
```
* Agregar la plataforma Android a traves de la consola con:
```console
foo@bar:~$ ionic cordova platform add android
```
* Se tiene que crear la carpeta mipmap que contenga el archivo icon.png dentro, en: platforms\android\app\src\main\res, de lo contrario arrojará un error el plugin background geolocation durante la compilación.

* Compilar la app
```console
foo@bar:~$ ionic cordova run android
```



