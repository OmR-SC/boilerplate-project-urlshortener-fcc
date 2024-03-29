# URL Shortener Microservice de freeCodeCamp

## Descripción

Este es un proyecto de desafio de freeCodeCamp. El mismo consiste en realizar una aplicación que permite acrotar URLs suministradas por el ususario.

## Tecnologias

- Express
- Node js
- Mongo
- Mongoose
- JavaScript
- HTML
- CSS

## Retos

- Se tuvo que aprender como verificar que una url es valida y funcional


## Razón

A fin de mejorar mis conocimientos en express y completar el curso *Back End Development and APIs* de freeCodeCamp.

## Instalación

1- Clonar el repositorio

2- Instalar las dependencias del proyecto

3- Crear el archivo de las variables de entorno (.env) utilizando las variables del archivo de ejemplo [sample.env](sample.env)

4- Iniciar la aplicación

```sh
npm install
npm run start
```
## Como usar la aplicación:

La aplicacion consta de una pagina web.

Esta pagina tiene un input el cual recibe la url a acortar y el servidor retorna un json con la url acortada.

Existe un endpooint que al acceder con la url acortada el servidor redireccionará el usuario hacia esa página.

### Rutas o Endpoints 

Página principal con el forumulario: **/ [GET]**

Ruta para acceder a las URLs acortadas: **/api/shorturl/:short_url [GET]**

Ruta que escucha los datos del formulario del acortador de URLs: **/api/shorturl [POST]**

>Nota: Las URLs a acortar deben de estar acompañadas de sus respectivos protocolos, ej: HTTP,HTTPS,FTP, etc.

### Proyecto original

This is the boilerplate code for the URL Shortener Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.

## Licencia

MIT License

Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.


