// 1. Explain each otuput of the following code
Console.log( null || 2 || undefined ); 
/* El operador || devuelve el primer valor "verdadero" que encuentra. Si todos los valores son "falsos", 
devuelve el último valor. En este caso, devuelve 2. */

Console.log( 1 && null && 2 );
/* El operador && devuelve el primer valor "falso" que encuentra. Si todos los valores son "verdaderos", 
devuelve el último valor. En este caso, devuelve null. */

Console.log( null || 2 && 3 || 4 );
/* Se debe tener en cuenta el orden de los operadores: && tiene mayor precedencia que ||.
Primero evalúa 2 && 3, que devuelve 3, la expresión se reduce a null || 3 || 4, luego, null || 3 devuelve 3. 
Finalmente, la expresión es 3 || 4, que devuelve 3. */

let x = 3;

console.log((x < 5) && (x > 0));
// El operador && devuelve true si ambas condiciones son verdaderas, por lo que el resultado es true.

console.log((x < 5) && (x > 6));
/* El operador && requiere que ambas condiciones sean verdaderas para devolver true.
Como 3 no es mayor que 6, el resultado es false. */

console.log((x > 2) || (x > 5));
/* El operador || devuelve true si al menos una de las condiciones es verdadera. 
Como 3 es mayor que 2, el resultado es true. */

console.log((x > 3) || (x < 0));
/* Como ambas expresiones son falsas y el operador || necesita al menos una condición verdadera para devolver true, 
el resultado es false. */

console.log(!(x == 3));
// El operador ! invierte el valor de la expresión. Dado que (x == 3) es true, el operador ! lo convierte en false.

console.log(!(x < 2));
// El operador ! invierte el valor de la expresión. Dado que (x < 2) es false, el operador ! lo convierte en true.


// 2. Change the code inside console.log so output is true
const numOne = 5;
const numTwo = 6;
console.log(numOne == numTwo); 
//console.log(!(numOne == numTwo)); o console.log(numOne != numTwo); o console.log(numOne < numTwo);


/* 3. Ask user for his age and check that it is not between 14 and 90 inclusively. Create two
variants: the first one using NOT !, the second one – without it. */
let age = prompt("Please enter your age: ");

if (!(age >= 14 && age <= 90)) {
    console.log ("Your age is not between 14 and 90.");
} else {
    console.log ("Your age is between 14 and 90.");
}

let anyos = prompt("Please enter your age: ");

if (anyos < 14 || anyos > 90) {
    console.log ("Your age is not between 14 and 90.");
} else {
    console.log ("Your age is between 14 and 90.");
}

// 4. Explain what result will produce the following code
(-1 || 0) && ( 'first' );
/* Primero, se evalúa (-1 || 0). El operador || devuelve el primer valor verdadero o el último valor si ambos son falsos. 
En este caso, -1 es un valor "verdadero", por lo que (-1 || 0) devuelve -1. Luego, la expresión se convierte en -1 && 'first'. 
El operador && devuelve el primer valor falso o el último valor si ambos son verdaderos. 
Como -1 es verdadero, se evalúa 'first' y el resultado es 'first'. */

(-1 && 0) || ( 'second' );
/* Primero, se evalúa (-1 && 0). En este caso, 0 es un valor falso, por lo que la expresión devuelve 0. 
Luego, la expresión se convierte en 0 || 'second'. En este caso, el resultado es 'second'. */

(null || -1 && 1) && ( 'third' );
/* Primero, se evalúa (-1 && 1). El operador && devuelve el primer valor falso o el último si ambos son verdaderos. 
Como -1 es verdadero, la expresión devuelve 1. Luego, la expresión se convierte en (null || 1). 
El operador || devuelve el primer valor verdadero, que en este caso es 1. Por último, la expresión se convierte 
en 1 && 'third', el resultado es 'third'. */