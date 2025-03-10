// Seleccionar el segundo párrafo
const segundoParrafo = document.querySelectorAll('p')[1];
console.log(segundoParrafo);

// Seleccionar el título
const titulo = document.querySelector('title');
console.log(titulo);

// Seleccionar la primera sección
const primeraSeccion = document.querySelector('section');
console.log(primeraSeccion);

// Seleccionar todos los párrafos con la clase 'parrafo_cuerpo'
const parrafosConClase = document.querySelectorAll('p.parrafo_cuerpo');
console.log(parrafosConClase);

// Seleccionar el campo de entrada "apellidos"
const inputApellidos = document.querySelector('#apellidos');
console.log(inputApellidos);

// Seleccionar la última sección
const ultimaSeccion = document.querySelectorAll('section')[document.querySelectorAll('section').length - 1];
console.log(ultimaSeccion);

// Seleccionar todos los párrafos
const todosLosParrafos = document.querySelectorAll('p');
console.log(todosLosParrafos);