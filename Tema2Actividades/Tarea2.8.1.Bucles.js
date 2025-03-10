// 1. What is the last value output by this code? Why?
let i = 3;
while (i) {
 Console.log( i-- );
}

/*El último valor que imprime este código es 1. El bucle while se ejecuta mientras la condición i sea verdadera. 
Cualquier número distinto de 0 se considera true. Por lo tanto, el bucle continuará ejecutándose 
siempre que i sea mayor que 0. Primero se imprime 3, luego el valor se decrementa a 2 y así hasta llegar a 0,
como no es mayor que 0 y es false, se sale del bucle y no lo imprime.


/* 2. Rewrite the following code changing the for loop to while without altering its behavior
(the output should stay same). */
for (let i = 0; i < 3; i++) {
    Console.log ( `number ${i}!` );
}

let a = 0;
while (a < 3) {
    Console.log ( `number ${i}!` );
    a++;
}


// 3. Write a loop which keeps prompting for a number until it is greater than 100 or enters an empty line.
let input;

while (true) {
    input = prompt("Ingresa un número: ");

    if (input == "") {
        break;
    }

    let number = Number(input);

    if (number > 100) {
        console.log("El número es mayor que 100:", number);
        break;
    } else {
        console.log("El número no es mayor que 100. Intenta de nuevo.");
    }
}


/* 4. Using while loop, create two arrays: one with even numbers and another one with odds numbers. 
Both of them from 1 to n, being n a number provided by user. Using a for loop, create a third array whose nth number 
is the sum of nth number of both arrays. */
let n = parseInt(prompt("Ingresa un número: ")); 

let numPares = []; 
let numImpares = [];

let b = 1; 

while (b <= n) {
    if (b % 2 == 0) {
        numPares.push(b); // Agregar a los pares
    } else {
        numImpares.push(b); // Agregar a los impares
    }

    b++; 
}

let sumArray = [];

for (let j = 0; j < numPares.length || j < numImpares.length; j++) {
    let valorPar = numPares[j] || 0; // Valor de par, o 0 si no existe
    let valorImpar = numImpares[j] || 0; // Valor de impar, o 0 si no existe
    sumArray.push(valorPar + valorImpar); // Sumar y agregar al arreglo de suma
}

console.log("Números pares: ", numPares);
console.log("Números impares: ", numImpares);
console.log("Suma de ambos: ", sumArray);


// 5. Write code which outputs prime numbers from 1 to n, being the latter a numbrer provided by user.
let c = parseInt(prompt("Ingresa un número: "));

let numPrimos = [];

for (let i = 2; i <= c; i++) {
    let esPrimo = true;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            esPrimo = false; // No es primo si es divisible
            break;
        }
    }

    if (esPrimo) {
        numPrimos.push(i);
    }
}

console.log("Números primos de 1 a " + c + ": ", numPrimos);


/* 6. Take odd numbers array and remove the prime numbers from it. Tip: as we have not seen array methods yet, 
the only way is to create a new array without those numbers */
let d = parseInt(prompt("Ingresa un número: ")); 

let impares = []; 

for (let i = 1; i <= d; i++) {
    if (i % 2 != 0) {
        impares.push(i); 
    }
}

let imparesSinPrimos = [];

for (let i = 0; i < impares.length; i++) {
    let esPrimo = true; 
    let num = impares[i];

    // Verificar si el número es primo
    for (let j = 2; j < num; j++) {
        if (num % j == 0) {
            esPrimo = false; // No es primo si es divisible
            break; 
        }
    }

    // Si no es primo, agregarlo al nuevo arreglo
    if (!esPrimo || num == 1) { // 1 no es primo
        imparesSinPrimos.push(num);
    }
}

console.log("Números impares: ", impares);
console.log("Números impares sin primos: ", imparesSinPrimos);


/* 7. Ask the user for a number n. Create an array of n random numbers and print the highest
one. Use the following code to generate a random number between 0 and 9999 Math.floor(Math.random() * 9999) */
let num = parseInt(prompt("Introduce un número: "));

if (!isNaN(num) && num > 0) {
    let numeros = [];
    for (let i = 0; i < num; i++) {
        let numRandom = Math.floor(Math.random() * 9999);
        numeros.push(numRandom);
    }

    console.log("Números generados: " + numeros);

    let numMax = numeros[0]; // Asignar el primer número como máximo inicial
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numMax) {
            numMax = numeros[i];
        }
    }

    console.log("El número más alto es: " + numMax);

} else {
    console.log("Entrada no válida.");
}


// 8. Ask the user for a string and print it reversed
let palabra = prompt("Dime una palabra: ");

let palabraInvertida = "";

for (let i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
}

console.log("Cadena invertida: " + palabraInvertida);


/* 9. Ask the user for a number. Print a isosceles triangle made of asterisks with as many levels as the number 
the user entered. */
let nivel = parseInt(prompt("Introduce el número de niveles del triángulo: "));

if (!isNaN(nivel) && nivel > 0) {
    for (let i = 1; i <= nivel; i++) {
        
        let linea = "";

        // Agregar los espacios a la izquierda
        for (let j = 1; j <= nivel - i; j++) {
            linea += " ";
        }

        // Agregar los asteriscos
        for (let k = 1; k <= 2 * i - 1; k++) {
            linea += "*";
        }

        console.log(linea);
    }

} else {
    console.log("Introduce un número válido.");
}
    

// 10. Ask the user for a number between 3 and 25. Calculate its factorial.
let number = parseInt(prompt("Introduce un número entre 3 y 25 para calcular su factorial: "));

if (!isNaN(number) && number >= 3 && number <= 25) {
    
    let factorial = 1;

    // Calcular el factorial
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    console.log("El factorial de " + number + " es: " + factorial);

} else {
    console.log("Introduce un número válido entre 3 y 25.");
}


/* 11. Ask the user for a string and write a program that checks if it is palindrome (it is spelled 
the same forward and backward). */
let cadenaEntrada = prompt("Introduce una cadena de texto para verificar si es un palíndromo: ");

// Convertir la cadena a minúsculas y eliminar espacios y caracteres especiales
let cadenaOriginal = "";

for (let i = 0; i < cadenaEntrada.length; i++) {
    let char = cadenaEntrada[i].toLowerCase();
    if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
        cadenaOriginal += char;
    }
}

let cadenaInvertida = "";

for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
    cadenaInvertida += cadenaOriginal[i];
}

// Comprobar si la cadena original es igual a la cadena invertida
if (cadenaOriginal == cadenaInvertida) {
    console.log("La cadena '" + cadenaEntrada + "' es un palíndromo.");
} else {
    console.log("La cadena '" + cadenaEntrada + "' no es un palíndromo.");
}


/* 12. Use the following code to generate a random pin number of 4 digits. Write code to allow
a user to try to guess the number in 4 attempts let numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000; */
let numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

let intentosRestantes = 4;

console.log("Adivina el número PIN de 4 dígitos. Tienes 4 intentos.");

while (intentosRestantes > 0) {
    let intentoUsuario = parseInt(prompt("Introduce un número de 4 dígitos: "));

    // Validar que la entrada del usuario es un número de 4 dígitos
    if (!isNaN(intentoUsuario) && intentoUsuario >= 1000 && intentoUsuario <= 9999) {
        if (intentoUsuario == numeroAleatorio) {
            console.log("¡Felicidades! Adivinaste el número PIN correctamente.");
            break;
        } else {
            intentosRestantes--;
            console.log("Intento incorrecto. Te quedan " + intentosRestantes + " intentos.");
        }
    } else {
        console.log("Entrada no válida. Introduce un número de 4 dígitos.");
    }

    if (intentosRestantes == 0) {
        console.log("Lo siento, te quedaste sin intentos. El número PIN era: " + numeroAleatorio);
    }
}
