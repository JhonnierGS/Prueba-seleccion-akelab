# Introducción a la aplicación Prueba de akelab

Este proyecto se inició con la aplicación [Create React App](https://github.com/facebook/create-react-app).

##Tabla de contenido

  1. [Fork](#Fork).
  2. [Comandos](#iniciar-proyecto).
  3. [Pagina web](#sobre-la-pagina).
  4. [Fibonacci](#Fibonacci).
  5. [Akelab](#Akelab).
  
### 🔄 Fork
Comienza haciendo Fork a este Repositorio y corriendolo con los siguientes comandos 👇
  
### 👨‍💻iniciar-proyecto 


  #### `npm run start`
  Para ejecutar la aplicación usamos en la terminal `npm run star` este correra en el [http://localhost:3000](http://localhost:3000) y nos mostrara una pagna en blanco para ver el proyecto agregale `/badges`
  
  #### `npm run servers`
  la aplicación hace llamdos a un servidor local hecho en JSONserver por lo cual es necesario iniciar en una segunda terminal el comando  `npm run servers` este correra en el [http://localhost:6969](http://localhost:6969)
  
### 🧐 sobre-la-pagina
Esta pagina es una  SPA hecha en **React.JS** sobre datos de peliculas clasicas en la  que puedes ver

  - titulos pelicuas
  - poster de la pelicula
  - una breve descripción de la pelicula
  - calificación en estrellas
  - genero
  - fecha de estreno

Toda los datos son tridos de un archivo JSON desde un servidro local por esto para interactuar con el proyecto debes estar en [http://localhost:3000/badges](http://localhost:3000)

### 🔢 Fibonacci
Una vez estes en el [http://localhost:3000/bdges](http://localhost:3000) podras ver dos botones `Akelab` y `fibonacci` que se hicieron con react router para una mejor velocidad, 
si le das click en fibonacci podras interactuar con un input donde puedes digitar cualquier numero y este te dara el resultado de la suma Fibonacci

### ⚙ Akelab
Una vez este en el [http://localhost:3000/bdges](http://localhost:3000) podras ver dos botones `Akelab` y `fibonacci` que se hicieron con react router para una mejor velocidad, 
si le das click en Akelab podras interactuar con un boton `NEXT` donde dependiendo si el numero es multiplo de 3 mostrara AKE si es multiplo de 5 mostrara LAB y si el numero es multiplo de 3 y 5 mostrara AKELAB

