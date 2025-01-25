// 1. Check if a number is odd or even
let num = prompt("Introduce un número: ");

num = Number(num);

if (num %2 == 0) {
    console.log (num + " es par.");

} else {
    console.log (num + " es impar.")
}


// 2. Check if input variable is a number or not
let input = prompt("Introduce un valor: ");

if (isNaN(input)) {
    console.log ("El valor introducido no es un número.");

} else {
    console.log ("El valor introducido es un número.");
}


// 3. Find the largest of two number
let num1 = prompt("Introduce un número: ");
let num2 = prompt("Introduce otro número: ");

num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
    console.log ("El número " + num1 + " es el mayor.");

} else if (num2 > num1) {
    console.log ("El número " + num2 + " es el mayor.");

} else {
    console.log ("Los dos números son iguales.")
}


// 4. Find the largest of three number
let numero1 = prompt("Introduce un número: ");
let numero2 = prompt("Introduce otro número: ");
let numero3 = prompt("Introduce otro número: ");

numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);

if (numero1 > numero2 && numero1 > numero3) {
    console.log ("El número " + numero1 + " es el mayor.");

} else if (numero2 > numero1 && numero2 > numero3) {
    console.log ("El número " + numero2 + " es el mayor.");

} else if (numero3 > numero1 && numero3 > numero2){
    console.log ("El número " + numero3 + " es el mayor.")

} else if (numero1 == numero2 && numero1 == numero3) {
    console.log("Los tres números son iguales.");

} else {
    console.log ("Hay 2 números iguales que son los mayores.");
}


/* 5. Check if a triangle is equilateral (all side equal), scalene (all side unequal), or isosceles (2
sides are equals) */
let lado1 = prompt("Introduce la longitud del primer lado: ");
let lado2 = prompt("Introduce la longitud del segundo lado: ");
let lado3 = prompt("Introduce la longitud del tercer lado: ");

lado1 = Number(lado1);
lado2 = Number(lado2);
lado3 = Number(lado3);

if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
    console.log ("El triángulo es equilátero, todos los lados son iguales.");
} else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    console.log ("El triángulo es escaleno, todos los lados son desiguales.");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log ("El triángulo es isósceles, 2 de sus lados son iguales.")
} else {
    console.log ("No es un triángulo.")
}


// 6. Find the a number is present in given range (provide start, end and number to be found)
let start = prompt("Introduce el inicio del rango: ");
let end = prompt("Introduce el fin del rango: ");
let numberToFind = prompt("Introduce el número que deseas encontrar: ");

start = Number(start);
end = Number(end);
numberToFind = Number(numberToFind);

if (numberToFind >= start && numberToFind <= end) {
    console.log ("El número " + numberToFind + " está presente en el rango de " + start + " a " + end + ".");
} else {
    console.log ("El número " + numberToFind + " no está presente en el rango de " + start + " a " + end + ".");
}


/* 7. Check if a year is leap year or not. A leap year is 1.- divisible by 400 OR 2.- divisible by 4
and not by 100 */
let anio = 2024;

if (anio % 400 == 0 || anio % 4 == 0 && anio % 100 != 0) {
    console.log(anio + " es un año bisiesto");
} else {
    console.log (anio + " no es un año bisiesto");
}


// 8. Rewrite the former if by using the ternary operator
console.log ((anio % 400 == 0 || (anio % 4 == 0 && anio % 100 != 0)) ? anio + " es un año bisiesto" : 
            anio + " no es un año bisiesto");

  
// 9. Show the number of days in a given month
let month = 2; 
let year = 2024; 

let days;

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    days = 31;
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    days = 30;
} else if (month == 2) {
    days = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? 29 : 28;
} else {
    days = 'Invalid month';
}

console.log(days); 


// 10. Rewrite the former if by using a switch statement
switch (month) {
    case 1:
    case 3:
    case 5: 
    case 7:
    case 8: 
    case 10: 
    case 12: 
        days = 31;
        break;
    case 4: 
    case 6: 
    case 9: 
    case 11:
        days = 30;
        break;
    case 2:
        days = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? 29 : 28;
        break;
    default:
        days = 'Invalid month';
}

console.log(days);


// 11. Rewrite the former if by using && and || operators
days = (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) ? 31 :
       (month == 4 || month == 6 || month == 9 || month == 11) ? 30 :
       (month == 2) ? ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? 29 : 28) :'Invalid month';

console.log(days);


// 12. Will alert be shown?
if ("0") {
    alert( 'Hello' );
}

/* "0" es un valor verdadero, por lo tanto, el bloque if se evalúa como verdadero y se ejecuta el alert 
que mostrará el mensaje Hello.*/


/* 13. Rewrite the following code to optimize it (do not use switch). Rewrite again the following
code by using a switch statement */
let a = +prompt('a?', '');

if (a == 0) {
    alert( 0 );
}

if (a == 1) {
    alert( 1 );
}
    
if (a == 2 || a == 3) {
    alert( '2,3' );
}


//Sin switch
if (a == 0) {
    alert( 0 );
} else if (a == 1) {
    alert( 1 );
} else if (a == 2 || a == 3) {
    alert( '2,3' );
}


//Con switch
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        // No hacer nada para otros valores de 'a'
}
