// 1. What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; // a = 2, b = 1, c = 2
let d = b++; // a = 2, b = 2, c = 2, d = 1


// 2. What are the values of a and x after the code below?
let a = 2;
let x = 1 + (a *= 2);
// El valor de a es 4 y el valor de x es 5.


// 3. What are the results of these expressions?
5 > 4 // True
"apple" > "pineapple" // False, porque la a de apple está en una posición más pequeña que la p de pineapple.
"2" > "12" // True, porque 2 es mayor que 1, se compara carácter a carácter.
undefined == null // True, porque los considera equivalentes porque ambos representan ausencia de valor.
undefined === null // False, porque son tipos diferentes undefined es de tipo undefined y null es de tipo object.
null == "\n0\n" // False, porque null no se convierte en un string ni en otro tipo para compararse.
null === +"\n0\n" // False, porque null y 0 son de tipos diferentes.
"" + 1 + 0 // "10", se convierte en una concatenación de cadenas.
"" - 1 + 0 // -1, realiza operaciones numéricas.
true + false // 1, true se convierte en 1 y false se convierte en 0.
6 / "3" // 2, convierte "3" a un número.
"2" * "3" // 6, convierte ambas cadenas a números y multiplica.
4 + 5 + "px" // "9px", suma los números, convierte el resultado 9 a una cadena y lo concatena con "px".
"$" + 4 + 5 // "$45", concatena la cadena "$" con los números.
"4" - 2 // 2, convierte la cadena "4" a número y realiza la resta.
"4px" - 2 // NaN, no se puede convertir "4px" a un número.
" -9 " + 5 // " -9 5", concatena la cadena " -9 " con 5.
" -9 " - 5 // -14, convierte " -9 " en -9 y luego resta 5.
null + 1 // 1, null se convierte en 0, por lo que 0 + 1 = 1.
undefined + 1 // NaN, undefined no puede convertirse en un número.
" \t \n" - 2 // -2, la cadena de espacios se convierte en 0.


/* 4. Here’s a code that asks the user for two numbers and shows their sum. It works incorrectly.
The output in the example below is 12 (for default prompt values). Why? Fix it. The result
should be 3. */
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // La función prompt() devuelve un valor de tipo cadena de texto por lo que se concatenan y no se suman.
/*Para solucionarlo, hay que convertir los valores a números antes de sumarlos.
a = Number(a);
b = Number(b);
alert (a + b);*/
