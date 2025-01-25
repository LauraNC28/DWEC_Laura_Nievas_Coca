// 1. Take loop exercises from 4 until the last one and rewrite them by using functions
// 4.
function crearArraysParesImpares(n) {
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

    return { numPares, numImpares };
}

function crearArraySuma(numPares, numImpares) {
    let sumArray = [];

    for (let j = 0; j < numPares.length || j < numImpares.length; j++) {
        let valorPar = numPares[j] || 0; // Valor de par, o 0 si no existe
        let valorImpar = numImpares[j] || 0; // Valor de impar, o 0 si no existe
        sumArray.push(valorPar + valorImpar); // Sumar y agregar al arreglo de suma
    }

    return sumArray;
}

// 5.
function obtenerNumerosPrimos(c) {
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

    return numPrimos;
}

// 6.
function eliminarPrimosDeImpares(d) {
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

        for (let j = 2; j < num; j++) {
            if (num % j == 0) {
                esPrimo = false;
                break;
            }
        }

        if (!esPrimo || num == 1) { // 1 no es primo
            imparesSinPrimos.push(num);
        }
    }

    return imparesSinPrimos;
}

// 7.
function encontrarNumeroMaximo(num) {
    let numeros = [];
    
    for (let i = 0; i < num; i++) {
        let numRandom = Math.floor(Math.random() * 9999);
        numeros.push(numRandom);
    }

    let numMax = numeros[0]; // Asignar el primer número como máximo inicial
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numMax) {
            numMax = numeros[i];
        }
    }

    return { numeros, numMax };
}

// 8.
function invertirPalabra(palabra) {
    let palabraInvertida = "";

    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }

    return palabraInvertida;
}

// 9.
function imprimirTrianguloIsosceles(nivel) {
    let resultado = "";

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

        resultado += linea + "\n";
    }

    return resultado;
}

// 10.
function calcularFactorial(number) {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

// 11.
function esPalindromo(cadenaEntrada) {
    let cadenaOriginal = "";

    // Convertir la cadena a minúsculas y eliminar espacios y caracteres especiales
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

    return cadenaOriginal == cadenaInvertida;
}

// 12.
function adivinarPin(numeroAleatorio, intentosRestantes) {
    while (intentosRestantes > 0) {
        let intentoUsuario = parseInt(prompt("Introduce un número de 4 dígitos: "));

        if (!isNaN(intentoUsuario) && intentoUsuario >= 1000 && intentoUsuario <= 9999) {
            if (intentoUsuario === numeroAleatorio) {
                return "¡Felicidades! Adivinaste el número PIN correctamente.";
            } else {
                intentosRestantes--;
                console.log("Intento incorrecto. Te quedan " + intentosRestantes + " intentos.");
            }
        } else {
            console.log("Entrada no válida. Introduce un número de 4 dígitos.");
        }
    }

    return "Lo siento, te quedaste sin intentos. El número PIN era: " + numeroAleatorio;
}


// 2. Write a function that returns the square of a number
function cuadradoNumero(numero) {
    return numero * numero;
}

console.log(cuadradoNumero(4));


// 3. Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(5, 10));


// 4. Rewrite min function as an expression function 
let min = function (a, b) {
    return (a < b) ? a : b;
}


// 5. Rewrite min function as an arrow function
let min2 = (a, b) => (a < b) ? a : b;


// 6. Write a function pow(x,n) that returns x in power n.  Ask the user fot both numbers.
function pow(x, n) {
    return x ** n;
}

let base = parseFloat(prompt("Introduce la base (x): "));
let exponente = parseInt(prompt("Introduce el exponente (n): "));

if (!isNaN(base) && !isNaN(exponente)) {
    console.log(`El resultado de ${base} elevado a la potencia ${exponente} es: ${pow(base, exponente)}`);
} else {
    console.log("Introduce números válidos.");
}


// 7. Rewrite pow function as an expression function
let pow = function (x, n) {
    Math.pow(x,n);
}


// 8. Rewrite pow function as an arrow function
let pow2 = (x, n) => Math.pow(x, n);


// 9. Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
    }
    ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
    );


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
    }
    
    ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
    );


/* 10. Write a function named calculateSupply that: 
a) takes 2 arguments: age, amount per day. 
b) calculates the amount consumed for rest of the life (based on a constant max age). 
c) outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X" 
Express it as an arrow function, if possible */
let calculateSupply = (age, amountPerDay) => {
    const MAX_AGE = 100; 
    const yearsLeft = MAX_AGE - age; 
    const totalAmount = amountPerDay * 365 * yearsLeft; 

    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${MAX_AGE}.`);
};

calculateSupply(25, 2);


/* 11. Create a function that greets the user by his name and with a message according to the
moment of the day (morning, afternoon, night). It accepts two parameters: user name and a
callback function. */
let mdia = 'maniana';

function saluda (nombre, fn) {
    console.log (nombre + fn(mdia))
}

function momento (mdia) {
    if (mdia == 'maniana') {
        return 'Buenos días';
    } else if (mdia == 'tarde') {
        return 'Buenas tardes';
    } else {
        return 'Buenas noches';
    }
}

saluda ('María', momento);


/* 12. Create a function that accepts three parameters: two numbers and the mathematical
operation to be performed with these numbers. The following mathematical operations must
be supported: addition, subtraction, division and multiplication. Use callback functions */
function math (n1, n2, callback) {
    callback(n1, n2);
}

function op (n, n2) {
    console.log (n + n2);
    console.log (n - n2);
    console.log (n * n2);
    (n > n2) ? console.log (n / n2) : console.log ("No se puede.");
}