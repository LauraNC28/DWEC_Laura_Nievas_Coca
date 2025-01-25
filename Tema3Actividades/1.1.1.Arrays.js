//SIMPLE EXERCISES

//1. Creating arrays

//Exercise 1: Create an empty array and then add numbers from 1 to 5.
let array = [];

array1.push(1,2,3,4,5);

console.log (array1);

//Exercise 2: Create an array with the names of five fruits and access the third element.
let array1 = ["manzana", "naranja", "pera", "melón", "sandía"];

console.log (array1[2]);

//Exercise 3: Create an array with five elements, including numbers, strings, and a boolean.
let array2 = ["manzana", 2, 4, true, "sandía"];

//Exercise 4: Create a 3x3 two-dimensional array that contains numbers from 1 to 9.
let array3 = [[1,2,3], [4,5,6], [7,8,9]];


//2. Accessing elements

//Exercise 1: Create an array with the names of four cities. Access and display the first and last elements.
let array4 = ["Madrid", "Granada", "Bilbao", "Valencia"];

console.log (array4[0], array4[3]);

//Exercise 2: Given the array [2, 4, 6, 8, 10], access the second and penultimate elements.
let array5 = [2, 4, 6, 8, 10];

console.log (array4[1], array4[3]);

//Exercise 3: Given an array of arrays [[1,2], [3,4], [5,6]], access the second element of the third array.
let array6 = [[1,2], [3,4], [5,6]];

console.log (array6[2][1]);

//Exercise 4: Create an array with the days of the week. Use a negative index to access the last day.
let array7 = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

console.log (array7[array7.length(-1)]);
console.log(array7.slice(-1)); //Otra forma


//3. Inserting and removing elements

//Exercise 1: Create an array with three colors. Add a new color at the end.
let array8 = ["Morado", "Azul", "Blanco"];

array8.push("Rosa");

console.log (array8);

//Exercise 2: Create an array with five numbers. Use pop() to remove the last element and push() to add a new one at the end.
let array9 = [1,2,3,4,5];

array9.pop();

array9.push(6);

console.log (array9);

//Exercise 3: Use splice() to remove the third element from a five-fruit array.
let array10 = ["manzana", "naranja", "pera", "melón", "sandía"];

array10.splice(2,1);

console.log(array10);

//Exercise 4: Insert two elements at position 2 in a three-element array using splice().
let array11 = ["manzana", "naranja", "pera", "melón", "sandía"];

array11.splice(2,0, "fresa", "melocotón");

console.log(array11);


//4. Arrays behaving like stacks and queues

//Exercise 1: Create an empty array. Use push() to add three elements and pop() to remove the last one.
let array12 = [];

array12.push(1,2,3);

console.log(array12);

array12.pop();

console.log(array12);

//Exercise 2: Use an array as a queue. Add elements to the end using push() and remove the first element with shift().
let array13 = [];

array13.push(4,5,6,7,8,9);

console.log(array13);

array13.shift();

console.log(array13);

//Exercise 3: Simulate the behavior of a stack using push() and pop() with an array of numbers.
let array14 = [];

array14.push(1);
array14.push(2);
array14.push(1);
array14.push(2);

console.log(array14);

array14.pop();
array14.pop();

console.log(array14);

//Exercise 4: Simulate the behavior of a queue using push() and shift() with an array of names.
let array15 = [];

array15.push("Laura");
array15.push("Noelia");
array15.push("María");
array15.push("Jorge");

console.log(array15);

array15.shift();
array15.shift();

console.log(array15);


// 5. Iterating over arrays

//Exercise 1: Given an array of numbers [1, 2, 3, 4, 5], use a for loop to display each number.
let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//Exercise 2: Use forEach() to iterate over an array of names and display each one in uppercase.
let nombres = ["Laura", "Noelia", "Mari Luz", "Jorge"];

nombres.foreach (nombre => {
    console.log(nombre.toUpperCase());
});

//Exercise 3: Use a for...of loop to iterate over an array of fruits and display only those starting with "a."
let frutas = ["manzana", "naranja", "arándano", "melón", "sandía", "albaricoque"];

for (let fruta of frutas) {
    if(fruta.startsWith("a")) {
        console.log(fruta);
    }
}

//Exercise 4: Iterate over a two-dimensional array and display each number in the console.
let numeros2 = [[1,2,3,4], [5,6,7,8], [9,10,11,12]];

for (let fila of numeros2) {
    for(let numero of fila) {
        console.log (numero);
    }
}


//6. Returning the position of an element or checking if it exists

//Exercise 1: Given an array of fruits, use indexOf() to find the position of "mango."
let frutas1 = ["manzana", "naranja", "arándano", "melón", "sandía", "mango", "albaricoque"];

let posicion = frutas1.indexOf("mango");

console.log("La posición de 'mango' es:", posicion);

//Exercise 2: Use includes() to check if the array [3, 5, 7, 9] contains the number 5.
let numeros1 = [3,5,7,9];

let contiene = numeros1.includes(5);

console.log("¿El array contiene el número 5?", contiene);

//Exercise 3: Given an array with repeated elements, use lastIndexOf() to find the last occurrence of "banana."
let frutas2 = ["manzana", "banana", "pera", "banana", "uva", "banana"];

let ultimaPosicion = frutas2.lastIndexOf("banana");

console.log("La última posición de 'banana' es:", ultimaPosicion);

//Exercise 4: Given an array of names, use indexOf() to return the position of a name, or -1 if it doesn't exist.
let nombres1 = ["Maria", "Antonio", "Paco", "Ana", "David"];

function buscarNombre(array, nombre) {
    let posicion = array.indexOf(nombre);
    return posicion !== -1 ? posicion : -1;
}

let nombreBuscado = "Paco";
console.log(`La posición de '${nombreBuscado}' es:`, buscarNombre(nombres1, nombreBuscado));

//7. Array comparison

//Exercise 1: Compare two arrays [1, 2, 3] and [1, 2, 3] using === and explain the result.
let arr1 = [1,2,3];
let arr2 = [1,2,3];

console.log (arr1 === arr2);
/*Aunque array1 y array2 contienen los mismos valores ([1, 2, 3]), son dos objetos diferentes en memoria.
Por lo tanto, array1 === array2 devuelve false porque son dos referencias distintas.*/

//FORMA CORRECTA
console.log(JSON.stringify(array1) === JSON.stringify(array2)); // Resultado: true

//Exercise 2: Write a function that compares two arrays and returns true if they are equal in content and length.
let arr3 = [1,2,3,4];
let arr4 = [1,2,5,4];

function comparaArrays(array3, array4) {
    if (JSON.stringify(array3) === JSON.stringify(array4) && array3.length === array4.length) {
        return true;
    } else {
        return false;
    }
}

console.log (comparaArrays(arr3, arr4));

//Exercise 3: Create two two-dimensional arrays and compare them element by element.
let arrayA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let arrayB = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function compararArrays(arr1, arr2) {
    // Verificar si ambas matrices tienen el mismo número de filas
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Iterar a través de cada fila
    for (let i = 0; i < arr1.length; i++) {
        // Verificar si ambas filas tienen el mismo número de elementos
        if (arr1[i].length !== arr2[i].length) {
            return false;
        }

        // Comparar cada elemento de la fila
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] !== arr2[i][j]) {
                return false;
            }
        }
    }

    return true;
}

console.log(compararArrays(arrayA, arrayB));

//Exercise 4: Use JSON.stringify() to compare two arrays and check if they have the same content.
let arrayC = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let arrayD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function compararArraysConJSON(arr1, arr2) {
    // Convertir ambos arrays a cadenas JSON y compararlas
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(compararArraysConJSON(arrayC, arrayD));


//8. Finding elements in arrays

//Exercise 1: Given an array of numbers, use find() to locate the first number greater than 10.
let arr5 = [1,4,8,10,14];

let numMayor10 = arr5.find(num => num > 10);

console.log(numMayor10);

//Exercise 2: Use findIndex() to find the position of the first negative number in an array.
let arr6 = [1,-4,8,-10,14];

let numNegativo = arr6.findIndex(num => num < 0);

console.log(numNegativo);

//Exercise 3: Given an array with repeated elements, use findLastIndex() to find the last position of a number greater than 5.
let arr7 = [1,1,8,10,14,10];

let posicionFinal = arr7.findLastIndex(num => num > 5);

console.log(posicionFinal);

//Exercise 4: Given an array of objects representing people, use find() to locate the first person over 30 years old.
let personas = [
    {nombre: 'Alicia', edad: 25},
    {nombre: 'David', edad: 35},
    {nombre: 'Marcos', edad: 40},
    {nombre: 'María', edad: 28}
];

let mayorDe30 = personas.find(personas => personas.edad > 30);

console.log(mayorDe30);


//9. Filtering elements

//Exercise 1: Given the array [1, 2, 3, 4, 5], use filter() to return a new array with numbers greater than 3.
let arr8 = [1,2,3,4,5];

let nuevoArray = arr8.filter(num => num > 3);

console.log(nuevoArray);

//Exercise 2: Filter an array of names to return only those that start with the letter "J."
let nombres2 = ["Laura", "Javier", "Maria", "Jimena"];

let nombresJ =  nombres2.filter(nombre => nombre.startsWith('J'));

console.log(nombresJ);

//Exercise 3: Given an array of objects {name: "John", age: 25}, use filter() to return an array of people over 18.
let personas1 = [
    {nombre: 'Alicia', edad: 8},
    {nombre: 'David', edad: 21},
    {nombre: 'Marcos', edad: 30},
    {nombre: 'María', edad: 16}
];

let mayorDe18 = personas1.filter(persona => persona.edad > 18);

console.log(mayorDe18);

//Exercise 4: Use filter() and map() to filter numbers greater than 10 and return a new array with the numbers multiplied by 2.
let numeros3 = [4,6,10,16,20];

let nuevoArray1 = numeros3.filter(num => num > 10).map(num => num * 2);

console.log(nuevoArray1);


//10. Operations with elements (map, reduce)

//Exercise 1: Use map() to create a new array containing the squares of the numbers [1, 2, 3, 4].
let numeros4 = [1,2,3,4];

let nuevoArray2 = numeros4.map(num => num * num);

console.log(nuevoArray2);

//Exercise 2: Use reduce() to sum all the numbers in the array [5, 10, 15, 20].
let numeros5 = [5, 10, 15, 20];

let suma = numeros5.reduce((acumulador, actual) => acumulador + actual, 0);

console.log(suma);

//Exercise 3: Given an array of names, use map() to return a new array where each name is in lowercase.
let nombres3 = ["Alice", "Bob", "Charlie"];

let nuevoArray3 = nombres3.map(nom => nom.toLowerCase());

console.log(nuevoArray3);

//Exercise 4: Use filter() followed by reduce() to filter numbers greater than 5 and then sum them.
let numeros6 = [2, 5, 8, 12, 3];

let filtroNum = numeros6.filter(num => num > 5).reduce((acumulador, actual) => acumulador + actual, 0);

console.log(filtroNum);


//11. Array concatenation

//Exercise 1: Use concat() to join two arrays of numbers [1, 2, 3] and [4, 5, 6].
let numeros7 = [1, 2, 3];

let numeros8 = [4, 5, 6];

let combinado = numeros7.concat(numeros8);

console.log(combinado);

//Exercise 2: Concatenate two arrays of strings and display the length of the new concatenated array.
let strings1 = ["Hello", "World"];

let strings2 = ["How", "Are", "You"];

let concatenado = strings1.concat(strings2);

console.log(concatenado);

console.log(concatenado.length);

//Exercise 3: Concatenate three arrays of fruits and use join() to convert the new array into a string.
let fruits1 = ["Apple", "Banana"];

let fruits2 = ["Orange", "Mango"];

let fruits3 = ["Pineapple", "Grape"];

let allFruits = fruits1.concat(fruits2, fruits3);

let fruitsString = allFruits.join(", ");

console.log(fruitsString); 

//Exercise 4: Use concat() to join two-dimensional arrays and then access one of their elements.
let matriz1 = [[1, 2], [3, 4]];

let matriz2 = [[5, 6], [7, 8]];

let combinadas = matriz1.concat(matriz2);

console.log(combinadas); 

console.log(combinadas[2][1]); //6


//12. Sorting arrays

//Exercise 1: Use sort() to sort an array of numbers [3, 1, 4, 1, 5, 9] in ascending order.
let numbers = [3, 1, 4, 1, 5, 9];

numbers.sort((a, b) => a - b); // Orden ascendente

console.log(numbers);

//Exercise 2: Alphabetically sort an array of names using sort().
let names = ["Charlie", "Alice", "Bob"];

names.sort();

console.log(names);

//Exercise 3: Use sort() with a comparison function to sort an array of numbers from largest to smallest.
let numbers1 = [3, 1, 4, 1, 5, 9];

numbers1.sort((a, b) => b - a); // Orden descendente

console.log(numbers1);

//Exercise 4: Sort an array of objects {name: "John", age: 25} by the age property using sort().
let people = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 }
];

people.sort((a, b) => a.age - b.age); // Orden ascendente

console.log(people);


//13. Reversing arrays

//Exercise 1: Use reverse() to reverse an array of numbers [1, 2, 3, 4, 5].
let numbers2 = [1, 2, 3, 4, 5];

numbers2.reverse();

console.log(numbers2);

//Exercise 2: Reverse an array of strings and use join() to create a string with the words in reverse order.
let words = ["Hello", "world", "how", "are", "you"];

let reversed = words.reverse().join(" ");

console.log(reversed);

//Exercise 3: Given a two-dimensional array, use reverse() to reverse the order of the rows.
let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

matriz.reverse();

console.log(matriz);

//Exercise 4: Use sort() and then reverse() to sort and then reverse an array of numbers.
let numbers3 = [3, 1, 4, 1, 5, 9];

numbers3.sort((a, b) => a - b).reverse();

console.log(numbers3);


//14. Filling arrays with values (fill)

//Exercise 1: Use fill() to fill an empty array of length 5 with the number 0.
let array16 = new Array(5).fill(0);

console.log(array16);

//Exercise 2: Fill part of an array of numbers [1, 2, 3, 4, 5] with the value 9 starting from index 2.
let array17 = [1, 2, 3, 4, 5];

array17.fill(9, 2); 

console.log(array17); //[1, 2, 9, 9, 9]

//Exercise 3: Create an array of length 10 and fill it with the value "x" in the last 5 elements.
let array18 = new Array(10).fill("x", 5);

console.log(array18); //[undefined, undefined, undefined, undefined, undefined, "x", "x", "x", "x", "x"]

//Exercise 4: Use fill() to replace the first 3 elements of an array with the value "A."
let array19 = ["B", "C", "D", "E", "F"];

array19.fill("A", 0, 3); 

console.log(array19); //["A", "A", "A", "E", "F"]


//15. Destructuring

//Exercise 1: Destructure a two-element array [10, 20] into two variables.
let [a, b] = [10, 20];

console.log(a);

console.log(b);

//Exercise 2: Destructure the first two elements of an array and store the rest in another variable using the spread operator.
let array20 = [1, 2, 3, 4, 5];

let [first, second, ...rest] = array20;

console.log(first); //1

console.log(second); //2

console.log(rest);

//Exercise 3: Given a two-dimensional array, destructure the first row into three variables.
let matriz3 = [
    [7, 8, 9],
    [10, 11, 12]
];

let [x, y, z] = matriz3[0];

console.log(x); //7

console.log(y); //8

console.log(z); //9

//Exercise 4: Destructure an array of objects {name: "John", age: 25} to get the name and age properties from the first object.
let people1 = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 }
];

let [{ name: personName, age }] = people1;

console.log(personName); //"John"

console.log(age); //25


//FINAL ARRAY EXERCISES

//Exercise 1: Given an array of numbers, remove all negative numbers, reverse the order of the array, and then sum the remaining even numbers. Return the result.
const numeros9 = [1, -2, 3, -4, 6, -8, 10];

const resultado1 = numeros9
    .filter(num => num >= 0) // Eliminar números negativos
    .reverse()               // Invertir el orden
    .filter(num => num % 2 === 0) // Filtrar solo números pares
    .reduce((suma, num) => suma + num, 0); // Sumar los números pares

    console.log(resultado1);

//Exercise 2: You have an array of objects representing people, where each object has the properties name, age, and profession. Filter out people older than 30 who work as "engineers." Then, sort the filtered people by age in descending order and return a new array with just their names.
const personas2 = [
    { nombre: "Juan", edad: 35, profesion: "ingeniero" },
    { nombre: "Alicia", edad: 28, profesion: "maestra" },
    { nombre: "Roberto", edad: 32, profesion: "ingeniero" },
    { nombre: "Eva", edad: 45, profesion: "ingeniero" }
];

const resultado2 = personas2
    .filter(persona => persona.edad > 30 && persona.profesion === "ingeniero") // Filtrar condiciones
    .sort((a, b) => b.edad - a.edad) // Ordenar por edad descendente
    .map(persona => persona.nombre); // Obtener solo los nombres

console.log(resultado2);

//Exercise 3:Given an array of words, remove words that are less than 5 letters long, convert them all to uppercase, sort them alphabetically, and join them into a single string separated by dashes (-). Return the resulting string.
const palabras = ["manzana", "perro", "banana", "kiwi", "uva", "sandía"];

const resultado3 = palabras
    .filter(palabra => palabra.length >= 5) // Eliminar palabras con menos de 5 letras
    .map(palabra => palabra.toUpperCase()) // Convertir a mayúsculas
    .sort() // Ordenar alfabéticamente
    .join("-"); // Unir con guiones

console.log(resultado3);

//Exercise 4:You have two arrays of numbers. First, combine both arrays, removing any duplicates. Then, find the highest and lowest numbers and return a new array containing only the numbers between the second lowest and the second highest values (inclusive).
const array21 = [1, 5, 9, 12];

const array22 = [3, 6, 9, 14];

const arrayCombinado = Array.from(new Set([...array21, ...array22])) // Combinar y eliminar duplicados
    .sort((a, b) => a - b); // Ordenar en orden ascendente

const resultado4 = arrayCombinado.slice(1, -1); // Obtener valores entre el segundo menor y el segundo mayor

console.log(resultado4);

//Exercise 5:Given a two-dimensional array representing a warehouse table of products (each subarray contains the product name, quantity in stock, and price per unit), do the following:

    //Find the product with the highest quantity in stock.
    //Calculate the total value of that product based on its quantity and price.
    //Return an object with the product name and the total value calculated.
const productos = [
    ["Laptop", 30, 1500], 
    ["Teléfono", 50, 800],
    ["Tablet", 20, 600],
    ["Monitor", 60, 200],
    ["Teclado", 100, 50]
];

// Encontrar el producto con la mayor cantidad en stock
const productoConMasCantidad = productos.reduce((mayor, producto) => {
    return producto[1] > mayor[1] ? producto : mayor;
});

// Calcular el valor total del producto encontrado
const nombreProducto = productoConMasCantidad[0];
const cantidadProducto = productoConMasCantidad[1];
const precioProducto = productoConMasCantidad[2];
const valorTotal = cantidadProducto * precioProducto;

// Devolver un objeto con el nombre del producto y el valor total calculado
const resultado5 = {
    nombre: nombreProducto,
    valorTotal: valorTotal
};

console.log(resultado5);

//Exercise 6:Given an array of numbers, separate the odd numbers from the even ones. Then, multiply the even numbers by 2 and the odd numbers by 3. Finally, combine both sets of numbers into a single array sorted from lowest to highest and return the result.
const numeros23 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Separar números pares e impares
const pares = numeros.filter(num => num % 2 === 0);
const impares = numeros.filter(num => num % 2 !== 0);

// Multiplicar pares por 2 e impares por 3
const paresMultiplicados = pares.map(num => num * 2);
const imparesMultiplicados = impares.map(num => num * 3);

// Combinar ambos arrays y ordenarlos de menor a mayor
const resultado6 = [...paresMultiplicados, ...imparesMultiplicados].sort((a, b) => a - b);

console.log(resultado6);

//Exercise 7:You have an array of objects representing different books, where each object has the properties title, author, and year of publication. Filter out books published after the year 2000, group them by author, and return an object where each key is the author’s name, and the value is an array with the titles of their books.
const libros = [
    { title: "Libro A", author: "Autor 1", year: 1995 },
    { title: "Libro B", author: "Autor 2", year: 2005 },
    { title: "Libro C", author: "Autor 1", year: 1998 },
    { title: "Libro D", author: "Autor 3", year: 1999 },
    { title: "Libro E", author: "Autor 2", year: 1990 }
];

// Filtrar libros publicados antes del año 2000
const librosFiltrados = libros.filter(libro => libro.year > 2000);

// Agrupar libros por autor
const librosPorAutor = librosFiltrados.reduce((acumulador, libro) => {
    if (!acumulador[libro.author]) {
        acumulador[libro.author] = [];
    }
    acumulador[libro.author].push(libro.title);
    return acumulador;
}, {});

console.log(librosPorAutor);

//Exercise 8:Given an array of numbers, return a new array where the numbers are squared if they are odd and cubed if they are even. Then, remove any number greater than 500 and return the result.
const numeros24 = [5, 12, 3, 7, 4, 15, 2, 8];

// Elevar al cuadrado si son impares y al cubo si son pares
const transformados = numeros24.map(num => num % 2 === 0 ? Math.pow(num, 3) : Math.pow(num, 2));

// Filtrar números mayores que 500
const resultado7 = transformados.filter(num => num <= 500);

console.log(resultado7);

//Exercise 9:You have an array of strings representing usernames. You must perform the following actions:

    //Remove duplicate names.
    //Filter names that start with a vowel.
    //Sort the remaining names in descending order by length.
    //Return a string where each name is separated by a comma and a space.
const usernames = ["Alice", "Oscar", "Emma", "Isaac", "Uma", "Alice", "Eve", "Oscar", "María"];

// Eliminar duplicados
const uniqueUsernames = Array.from(new Set(usernames));
    
// Filtrar nombres que comienzan con una vocal
const vowels = ["A", "E", "I", "O", "U"];
const filteredNames = uniqueUsernames.filter(name => vowels.includes(name[0].toUpperCase()));
    
// Ordenar los nombres restantes en orden descendente por longitud
const sortedNames = filteredNames.sort((a, b) => b.length - a.length);
    
// Convertir el array en una cadena de texto con nombres separados por ", "
const result = sortedNames.join(", ");
    
console.log(result);

//Exercise 10: Given a two-dimensional array representing a grid of colors (each subarray is a row of colors), do the following:

    //Reverse the order of the rows and columns of the array (matrix transposition).
    //Replace all colors containing the letter "a" with "black."
    //Return the new grid.
const grid = [
    ["red", "green", "blue"],
    ["yellow", "orange", "purple"],
    ["black", "white", "pink"]
];
    
// Transposición de la matriz (intercambia filas y columnas)
const transposedGrid = grid[0].map((_, colIndex) => grid.map(row => row[colIndex]));
    
// Reemplazar colores que contienen la letra "a" por "black"
const modifiedGrid = transposedGrid.map(row =>
    row.map(color => color.includes("a") ? "black" : color)
);
    
console.log(modifiedGrid);
