//1. Write the recursive version of the function square
function cuadrado(n, resul = 0, cont = 0) {
    if (cont == n) {
        return resul;
    }
    return cuadrado(n, resul + n, cont + 1);
}

console.log(cuadrado(5));


//2. Write the autoexecutable version of the previous version
(function(n) {
    function cuadrado(n, resul = 0, cont = 0) {
        if (cont == n) {
            return resul;
        }
        return cuadrado(n, resul + n, cont + 1);
    }

    console.log(cuadrado(n)); 
})(4);  // Se pasa 4 como parámetro


//3. Write the recursive version of the function pow
function pow(base, exponente) {
    if (exponente == 0) {
        return 1; 
    } else if (exponente < 0) {
        return 1 / pow(base, -exponente);  
    }
    return base * pow(base, exponente - 1);
}


//4. Write an iterative and recursive function to add the nth first prime numbers. 
function isPrime(num) {
    if (num < 2) {
        return false;
    }
        
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        } else {
            return true;
        }
    }
}

function sumaNPrimosIterativa(n) {
    let sum = 0;
    let count = 0;
    let num = 2;

    while (count < n) {
        if (isPrime(num)) {
            sum += num;
            count++;
        }
        num++;
    }

    return sum;
}

console.log(sumaNPrimos(5));  // 28 (2 + 3 + 5 + 7 + 11)


function sumaNPrimosRecursiva(n, currentNum = 2, count = 0, sum = 0) {
    if (count == n) {
        return sum;
    }
    if (isPrime(currentNum)) {
        return sumaNPrimosRecursiva(n, currentNum + 1, count + 1, sum + currentNum);
    } else {
        return sumaNPrimosRecursiva(n, currentNum + 1, count, sum);
    }
}


//5. Write an iterative and recursive function to calculate factorial of a given number
function factorialIterativo (n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}


function factorialRecursivo (n) {
    if (n == 0 || n == 1) {
        return 1;  
    }
    return n * factorialRecursivo (n - 1);  
}


//6. Write a recursive function to check if a number is prime
function esPrimo (num, divisor = 2) {

    if (num < 2) {
        return false;
    }

    if (divisor == num) {
        return true;
    }
    
    if (num % divisor == 0) {
        return false;
    }

    return esPrimo (num, divisor + 1);
}


//7. Rewrite the previous function to be autoexecutable
(function (num) {
    function esPrimo (num, divisor = 2) {
        
        if (num < 2) {
            return false;
        }
        
        if (divisor == num) {
            return true;
        }
        
        if (num % divisor == 0) {
            return false;
        }
        
        return esPrimo (num, divisor + 1);
    }

    console.log(esPrimo(num));  
})(11);


//8. Create a function that accepts an undetermined number of words and returns a string with all these words concatenated.
function concatenarPalabras (...palabras) {
    let resultado = '';
    //El método join concatena 
    for (let i = 0; i < palabras.length; i++) {
        resultado += palabras[i];
    }

    return resultado;
}


//9. Create a function that accepts three parameters: two numbers and a function that indicates the operation to be applied to the numbers: division or pow.
function calcular (num1, num2, operacion) {
    return operacion (num1, num2);
}

// Función para la división
function dividir (a, b) {
    if (b == 0) {
        return 'No se puede dividir por cero';
    } else {
        return a / b;
    }
}

// Función para la potencia
function potencia (a, b) {
    return Math.pow (a, b);
}

console.log(calcular(10, 2, dividir)); 
console.log(calcular(2, 3, potencia));


//10. Check the following code and explain the output
let a=b=5;
function calcula() {
  console.log(a*b);
}
a=b=10;
calcula();

/* Primero, tanto a como b se inicializan a 5.
Después, se reasignan a 10 antes de llamar a la función.
Cuando se ejecuta calcula(), multiplica los valores actualizados de a y b, que son ambos 10 
y muestra 100 en la consola. */


//11. Check the following code and explain the output
function crearCoche() {
    let marca= "Tesla";
  
    return function() {
      return nombre;
    };
  }
  
  let marca = "MG";
  let coche = crearCoche();
  coche();

/* Se declara la función crearCoche que devuelve otra función interna, después se declara la variable marca global
que no tiene relación con la variable marca dentro de la función crearCoche. Se llama a la función crearCoche que 
se le asigna a una variable y en la siguiente línea se ejecuta la función que intenta devolver la variable nombre.
La variable nombre no está definida en ningún ámbito, lo que provoca un error de referencia. */


//12. Check the following code and explain the output
function coche(aux){
    let nombre=aux;
    return function(){
      return nombre;
    }
  }
  
  let coche1=coche("tesla");
  let coche2=coche("mg");
  console.log(coche1());
  console.log(coche2());

/* Cada vez que se llama a la función coche con un argumento, se crea un nuevo closure (clausura) que guarda 
el valor de nombre dentro de la función interna.
Al llamar a coche1() y coche2(), cada una de estas funciones internas devuelve el valor que estaba almacenado 
en su closure: "tesla" para coche1 y "mg" para coche2. */


//13. Check the following code and explain the output
let animal = "gato";

if (1) {
  let animal = "conejo";
  function habla() {
     if (animal1 == "conejo"){
	console.log("Los conejos no hacen ruido");
    }else{
	console.log ("Los gatos maúllan");
    }
  }
}

habla();

/* La variable animal se declara en el ámbito global, pero dentro del bloque if, se declara una nueva variable animal 
que oculta la global.
La función habla() intenta acceder a animal1, que no está definida, lo que da un error al ejecutar el programa. */