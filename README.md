# Introducci贸n a la aplicaci贸n Prueba de akelab

Este proyecto se inici贸 con la aplicaci贸n [Create React App](https://github.com/facebook/create-react-app).

## Tabla de contenido

  1. [Fork](#Fork).
  2. [Comandos](#iniciar-proyecto).
  3. [Pagina web](#sobre-la-pagina).
  4. [Fibonacci](#Fibonacci).
  5. [Akelab](#Akelab).
  
### 馃攧 Fork
Comienza haciendo Fork a este Repositorio y corriendolo con los siguientes comandos 馃憞
  
### 馃懆鈥嶐煉籭niciar-proyecto 


  #### `npm run start`
  Para ejecutar la aplicaci贸n usamos en la terminal `npm run star` este correra en el [http://localhost:3000](http://localhost:3000) y nos mostrara el proyecto 
  
  #### `npm run servers`
  la aplicaci贸n hace llamdos a un servidor local hecho en JSONserver por lo cual es necesario iniciar en una segunda terminal el comando  `npm run servers` este correra en el [http://localhost:6969](http://localhost:6969)
  
### 馃sobre-la-pagina
Esta pagina es una  SPA hecha en **React.JS** sobre datos de peliculas clasicas en la  que puedes ver

  - titulos pelicuas
  - poster de la pelicula
  - una breve descripci贸n de la pelicula
  - calificaci贸n en estrellas
  - genero
  - fecha de estreno

Toda los datos son traidos de un archivo JSON desde un servidro local por esto para interactuar con el proyecto debes estar en [http://localhost:3000/](http://localhost:3000)

### 馃敘Fibonacci
Una vez estes en el [http://localhost:3000/](http://localhost:3000) podras ver dos botones `Akelab` y `fibonacci` que se hicieron con react router para una mejor velocidad, 
si le das click en fibonacci podras interactuar con un input donde puedes digitar cualquier numero y este te dara el resultado de la suma Fibonacci

### 鈿橝kelab
Una vez este en el [http://localhost:3000/](http://localhost:3000) podras ver dos botones `Akelab` y `fibonacci` que se hicieron con react router para una mejor velocidad, 
si le das click en Akelab podras interactuar con un boton `NEXT` donde dependiendo si el numero es multiplo de 3 mostrara AKE si es multiplo de 5 mostrara LAB y si el numero es multiplo de 3 y 5 mostrara AKELAB

