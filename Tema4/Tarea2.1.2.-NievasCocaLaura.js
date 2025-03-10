// Obtener la tabla con id="age-table"
const ageTable = document.getElementById('age-table');

// Obtener todos los elementos label dentro de la tabla
const labels = ageTable.querySelectorAll('label');

// Obtener el primer elemento de la tabla donde se encuentra la palabra "age"
const ageLabel = ageTable.querySelector('td:contains("Edad")');

// Obtener el formulario con name="search-person"
const searchPersonForm = document.forms['search-person'];

// Obtener el primer input en ese formulario
const firstInput = searchPersonForm.querySelector('input');

// Obtener el último input en ese formulario
const lastInput = searchPersonForm.querySelector('input[type="submit"]');