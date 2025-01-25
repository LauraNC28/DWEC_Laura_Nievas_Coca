//1.-JavaScript Precision
/* Exercise 1.- In JavaScript, 0.1 + 0.2 does not result in exactly 0.3 due to floating-point precision issues. Compare the results of 0.1 + 0.2 and 0.3 using a comparison with tolerance. Print true or false depending on the result.*/
// Función para comparar números con tolerancia
function esLoSuficientementeCercano(a, b, tolerancia = 1e-10) {
    return Math.abs(a - b) < tolerancia;
}

// Comparar 0.1 + 0.2 con 0.3
const resultado = 0.1 + 0.2;
const comparacion = 0.3;

console.log(esLoSuficientementeCercano(resultado, comparacion));  // true

//2.-Creating a Number Object
/* Exercise 2.- Create a Number object from the following values:
    - An integer.
    - A decimal number.
    - A string containing a valid number.*/
const entero = new Number(42);
console.log(entero);  

const decimal = new Number(3.14);
console.log(decimal); 

const cadenaNumerica = new Number("123.45");
console.log(cadenaNumerica);  

//Exercise 3: Create a Number object and obtain its primitive value. Print the result.
const numeroObjeto = new Number(99);

// Obtener el valor primitivo del objeto
const valorPrimitivo = numeroObjeto.valueOf();

console.log(valorPrimitivo);  // 99

//Exercise 4.- Use the Number constructor to attempt creating an object with invalid values, such as "Hello", undefined, and null.
const invalido1 = new Number("Hello");
console.log(invalido1);  // [Number: NaN]

const invalido2 = new Number(undefined);
console.log(invalido2);  // [Number: NaN]

const invalido3 = new Number(null);
console.log(invalido3);  // [Number: 0]

//3.-Getting the Value of a Number Object
// Exercise 5.- Create a Number object with the value 42. Use the appropriate method to get its primitive value and verify its type.
const numeroObjeto1 = new Number(42);

// Obtener el valor primitivo utilizando el método valueOf()
const valorPrimitivo1 = numeroObjeto.valueOf();

console.log(valorPrimitivo);  // 42
console.log(typeof valorPrimitivo);  // number

// 4.- Comparison
//Exercise 6: Create a variable num1 as a primitive number and a variable num2 as a Number object with the same value. Compare their values using == and ===. What do you observe?
const num1 = 42;

const num2 = new Number(42);

// Comparar usando == (igualdad de valor)
console.log(num1 == num2);  // true

// Comparar usando === (igualdad de tipo y valor)
console.log(num1 === num2);  // false

//5.- Checking if a Number is Finite
/* Exercise 7.- Write a function that takes a number as a parameter and checks if it is finite or infinite. Test the function with the following values:
    - 42
    - Infinity
    - -Infinity
    - NaN*/
function checkFiniteOrInfinite(num) {
    if (Number.isFinite(num)) {
        return `${num} es un número finito.`;
    } else if (num === Infinity || num === -Infinity) {
        return `${num} es infinito.`;
    } else if (isNaN(num)) {
        return `${num} es NaN (Not a Number).`;
    }
}

console.log(checkFiniteOrInfinite(42));         // 42 es un número finito.
console.log(checkFiniteOrInfinite(Infinity));   // Infinity es infinito.
console.log(checkFiniteOrInfinite(-Infinity));  // -Infinity es infinito.
console.log(checkFiniteOrInfinite(NaN));        // NaN es NaN (Not a Number).

//6.- Checking for NaN
/* Exercise 8.- Create a function that determines if a value is NaN. Test it with:
    - The result of 0 / 0.
    - The result of 42 / "Hello".
    - A valid number.*/
function isValueNaN(value) {
    return isNaN(value);
}

console.log(isValueNaN(0 / 0));        // true (0 / 0 es NaN)
console.log(isValueNaN(42 / "Hello")); // true (42 / "Hello" es NaN)
console.log(isValueNaN(42));           // false (42 es un número válido)

//7.- Checking if a Number is an Integer
/* Exercise 9.- Write a function that takes a number and returns true if it is an integer or false otherwise. Test it with the following values:
    - 3
    - 3.14
    - -42
    - NaN*/
function isInteger(value) {
    return Number.isInteger(value);
}

console.log(isInteger(3));      // true (3 es un entero)
console.log(isInteger(3.14));   // false (3.14 no es un entero)
console.log(isInteger(-42));    // true (-42 es un entero)
console.log(isInteger(NaN));    // false (NaN no es un entero)

// 8. Conversion to String
/* Exercise 10.- Convert the following numbers to strings using different methods and analyze the results:
    - 42
    - 3.14159
    - Infinity
    - NaN*/
function convertToString(number) {
    console.log("Usando .toString(): ", number.toString());
    console.log("Usando String(): ", String(number));
    console.log("Usando concatenación con '': ", number + '');
    console.log("Usando .toFixed(2): ", number.toFixed(2)); // Solo para números con decimales
}

convertToString(42);      // Número entero
convertToString(3.14159); // Número decimal
convertToString(Infinity); // Infinity
convertToString(NaN);      // NaN

//Exercise 11: Create a Number object and convert its value to a string in different bases (2, 8, 10, 16).
let num = new Number(42);

console.log("Base 2 (binario): ", num.toString(2));  
console.log("Base 8 (octal): ", num.toString(8)); 
console.log("Base 10 (decimal): ", num.toString(10)); 
console.log("Base 16 (hexadecimal): ", num.toString(16)); 
