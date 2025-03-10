//Exercise 1: Count the number of characters: Given the string "JavaScript is awesome", display how many characters it has.
const texto1 = "JavaScript is awesome";
console.log(`Número de caracteres: ${texto1.length}`);

//Exercise 2: Convert to uppercase: Given the string "javascript", convert it to uppercase and display it.
const texto2 = "javascript";
console.log(`En mayúsculas: ${texto2.toUpperCase()}`);

//Exercise 3: Convert to lowercase: Given the string "THIS TEXT IS IN UPPERCASE", convert it to lowercase.
const texto3 = "THIS TEXT IS IN UPPERCASE";
console.log(`En minúsculas: ${texto3.toLowerCase()}`);

//Exercise 4: Find the position: Find the position of the first occurrence of the letter "e" in the string "Welcome to the JavaScript class".
const texto4 = "Welcome to the JavaScript class";
const posicionPrimeraE = texto4.indexOf("e");

console.log(`Primera posición de 'e': ${posicionPrimeraE}`);

//Exercise 5: Find the last position: Find the position of the last occurrence of the letter "o" in the string "Hello, how are you today".
const texto5 = "Hello, how are you today";
const posicionUltimaO = texto5.lastIndexOf("o");

console.log(`Última posición de 'o': ${posicionUltimaO}`);

//Exercise 6: Check if it contains a substring: Check if the string "The weather is sunny" contains the word "sunny".
const texto6 = "The weather is sunny";
const contieneSunny = texto6.includes("sunny");

console.log(`¿Contiene 'sunny'? ${contieneSunny}`); // true

//Exercise 7: Starts with: Check if the string "Programming in JavaScript" starts with "Programming".
const texto7 = "Programming in JavaScript";
const empiezaConProgramming = texto7.startsWith("Programming");

console.log(`¿Empieza con 'Programming'? ${empiezaConProgramming}`); // true

//Exercise 8: Ends with: Check if the string "Learning is fun!" ends with "fun!".
const texto8 = "Learning is fun!";
const terminaConFun = texto8.endsWith("fun!");

console.log(`¿Termina con 'fun!'? ${terminaConFun}`); // true

//Exercise 9: Extract part of a string: Extract the word "JavaScript" from the string "Learning JavaScript is fun".
const texto9 = "Learning JavaScript is fun";
const extraerJavaScript = texto9.slice(9, 19); // Índices de la palabra "JavaScript"

console.log(`Palabra extraída: ${extraerJavaScript}`);

//Exercise 10: Slice from the end: Extract the last 5 characters from the string "Hello, cruel world".
const texto10 = "Hello, cruel world";
const ultimos5Caracteres = texto10.slice(-5); // Extraer los últimos 5 caracteres

console.log(`Últimos 5 caracteres: ${ultimos5Caracteres}`);

//Exercise 11: Replace a word: In the string "I like coffee", replace the word "coffee" with "tea".
const texto11 = "I like coffee";
const reemplazo11 = texto11.replace("coffee", "tea");

console.log(`Texto modificado: ${reemplazo11}`); // "I like tea"

//Exercise 12: Replace all words: Given the string "Hello hello hello", replace all occurrences of the word "hello" with "goodbye".
const texto12 = "Hello hello hello";
const reemplazo12 = texto12.replace(/hello/gi, "goodbye"); // La bandera 'gi' permite reemplazo global e ignorar mayúsculas/minúsculas

console.log(`Texto modificado: ${reemplazo12}`); // Salida: "goodbye goodbye goodbye"

//Exercise 13: Remove spaces: Remove the spaces from the beginning and the end of the string " JavaScript ".
const texto13 = " JavaScript ";
const sinEspacios13 = texto13.trim();

console.log(`Texto sin espacios: "${sinEspacios13}"`);

//Exercise 14: Remove leading spaces: Remove only the leading spaces from the string " Welcome to JavaScript".
const texto14 = " Welcome to JavaScript";
const sinEspaciosIniciales14 = texto14.trimStart();

console.log(`Texto sin espacios iniciales: "${sinEspaciosIniciales14}"`);

//Exercise 15: Remove trailing spaces: Remove only the trailing spaces from the string "JavaScript class ".
const texto15 = "JavaScript class ";
const sinEspaciosFinales15 = texto15.trimEnd();

console.log(`Texto sin espacios finales: "${sinEspaciosFinales15}"`);

//Exercise 16: Split the string into words: Split the string "JavaScript is fun" into an array of words.
const texto16 = "JavaScript is fun";
const palabras16 = texto16.split(" ");

console.log(`Palabras en la cadena:`, palabras16); // ["JavaScript", "is", "fun"]

//Exercise 17: Get the Unicode value: Get the Unicode value of the first character in the string "Hello".
const texto17 = "Hello";
const unicode17 = texto17.charCodeAt(0); // Obtiene el valor Unicode del primer carácter

console.log(`Valor Unicode del primer carácter: ${unicode17}`); // 72

//Exercise 18: Iterate over a string: Given the string "string", display each letter on a new line.
const texto18 = "string";
console.log("Letras de la cadena:");

for (const letra of texto18) {
    console.log(letra); // Muestra cada letra en una nueva línea
}

//Exercise 19: Given the string " JavaScript, Python, Ruby, PHP, C++ ", remove the whitespace at the beginning and end, and convert the rest of the string into an array with the names of the programming languages.
const idiomas19 = " JavaScript, Python, Ruby, PHP, C++ ";
const limpio19 = idiomas19.trim().split(", ");

console.log(`Lenguajes de programación:`, limpio19); // ["JavaScript", "Python", "Ruby", "PHP", "C++"]

//Exercise 20: Given the string "123456789", split the numbers into pairs of two digits and then reverse the order of each pair, returning the result as "21436587".
const numeros20 = "123456789";
const pares20 = numeros20.match(/.{1,2}/g).map(par => par.split("").reverse().join(""));
const resultado20 = pares20.join("");

console.log(`Pares invertidos: ${resultado20}`); // 21436587

//Exercise 21: Write a function that takes a string like "El lenguaje JavaScript es popular" and replaces all the vowels with their accented equivalents: a -> á, e -> é, i -> í, o -> ó, u -> ú. The resulting string should be "Él lénguáje Jávascrípt és pópulár".
function reemplazarVocales21(texto) {
    return texto.replace(/[aeiou]/gi, char => {
        const acentos = { a: "á", e: "é", i: "í", o: "ó", u: "ú" };
        return acentos[char.toLowerCase()] || char;
    });
}

const oracion21 = "El lenguaje JavaScript es popular";
console.log(reemplazarVocales21(oracion21)); // "Él lénguáje Jávascrípt és pópulár"

//Exercise 22: Given the string "Hola-mundo-bonito", replace all the hyphens with spaces and then capitalize the first letter of each word, resulting in "Hola Mundo Bonito".
const texto22 = "Hola-mundo-bonito";
const formateado22 = texto22.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase());

console.log(`Texto formateado: ${formateado22}`); // "Hola Mundo Bonito"

//Exercise 23: Create a function that takes a number as a string, such as "987654321", and inserts a comma every three digits from the right. The result for "987654321" should be "987,654,321".
function formatearNumero23(numeroStr) {
    return numeroStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const numero23 = "987654321";
console.log(`Número formateado: ${formatearNumero23(numero23)}`); // "987,654,321"

//Exercise 24: Given the string " A very long text with spaces, commas, and periods. ", remove all extra spaces (from the beginning, end, and double spaces in the middle), and replace punctuation marks with ellipses "...". The result should be "A very long text with spaces...and commas...and periods...".
const texto24 = " A very long text with spaces, commas, and periods. ";
const limpio24 = texto24.trim().replace(/\s+/g, " ").replace(/[,.]/g, "...");

console.log(`Texto formateado: ${limpio24}`); // "A very long text with spaces...and commas...and periods..."

//Exercise 25: Create a function that takes a sentence and returns the words in reverse order. For example, the input "I love the JavaScript language" should return "language JavaScript the love I".
function revertirPalabras25(oracion) {
    return oracion.split(" ").reverse().join(" ");
}

const oracion25 = "I love the JavaScript language";
console.log(`Oración invertida: ${revertirPalabras25(oracion25)}`); // "language JavaScript the love I"

//Exercise 26: Write a function that checks if a string is a palindrome, ignoring case and spaces. For example, "A man a plan a canal Panama" should return true.
function esPalindromo26(texto) {
    const limpio26 = texto.replace(/[\s]/g, "").toLowerCase();
    return limpio26 === limpio26.split("").reverse().join("");
}

const frase26 = "A man a plan a canal Panama";
console.log(esPalindromo26(frase26)); // true

//Exercise 27: Given the string "abc123def456ghi789", extract all sequences of numbers and create a new string with them, leaving a space between each group of numbers. The result should be "123 456 789".
const texto27 = "abc123def456ghi789";
const resultado27 = texto27.match(/\d+/g).join(" ");

console.log(`Números extraídos: ${resultado27}`); // "123 456 789"

//Exercise 28: Given the sentence "Programming in JavaScript is amazing", replace all the vowels in the first half of the sentence with their uppercase equivalents. The result should be "PrOgrAmmIng in JavaScript is amazing".
function reemplazarVocales28(oracion) {
    const mitad = Math.ceil(oracion.length / 2);
    const primeraMitad = oracion.slice(0, mitad).replace(/[aeiou]/gi, char => char.toUpperCase());
    const segundaMitad = oracion.slice(mitad);
    return primeraMitad + segundaMitad;
}

const frase28 = "Programming in JavaScript is amazing";
console.log(reemplazarVocales28(frase28)); // "PrOgrAmmIng in JavaScript is amazing"

//Exercise 30: Find Numbers in a String. Write a function extractNumbers(string) that takes a string and returns an array containing all the numbers it contains. Use a regular expression to find the numbers.
function extraerNumeros30(cadena) {
    return cadena.match(/\d+/g).map(Number);
}

const texto30 = "En el año 2024, habrán 3 eclipses solares y 2 lunares.";
console.log(extraerNumeros30(texto30)); // [2024, 3, 2]

//Exercise 31: Replace Spaces with Hyphens. Create a function replaceSpaces(string) that takes a string and replaces all whitespace with hyphens (-). Use a regular expression to perform the replacement.
function replaceSpaces31(string) {
    return string.replace(/\s+/g, '-');
}

const texto31 = "Esto es un ejemplo de texto";
console.log(replaceSpaces31(texto31)); // "Esto-es-un-ejemplo-de-texto"

//Exercise 32: Count Words. Write a function countWords(string) that takes a string and returns the total number of words it contains. Use a regular expression to identify the words.
function countWords32(string) {
    const palabras = string.match(/\b\w+\b/g);
    return palabras ? palabras.length : 0;
}

const texto32 = "Contemos cuántas palabras hay en esta oración.";
console.log(countWords32(texto32)); // 7

//Exercise 33: Validate Phone Numbers. Create a function validatePhone(phone) that takes a phone number in a format of 10 digits (e.g., 1234567890) and returns true if it is valid and false otherwise. Consider that the number should contain only digits.
function validatePhone33(phone) {
    return /^\d{10}$/.test(phone);
}

const telefono33 = "1234567890";
console.log(validatePhone33(telefono33)); // true
console.log(validatePhone33("123-456-7890")); // false

//Exercise 34: Extract Hashtags. Write a function extractHashtags(string) that takes a string and returns an array containing all the hashtags it contains. A hashtag is a word that begins with the # symbol.
function extractHashtags34(string) {
    return string.match(/#\w+/g) || [];
}

const texto34 = "Publica tus fotos con #viajes, #naturaleza y #fotografía.";
console.log(extractHashtags34(texto34)); // ['#viajes', '#naturaleza', '#fotografía']

//Exercise 35: Validate Passwords. Create a function validatePassword(password) that takes a string and returns true if the password is valid. A valid password must have at least 8 characters, at least one uppercase letter, at least one lowercase letter, and at least one number.
function validatePassword35(password) {
    const esValida = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password);
    return esValida;
}

const contraseña35 = "Secure123";
console.log(validatePassword35(contraseña35)); // true
console.log(validatePassword35("insecure")); // false
