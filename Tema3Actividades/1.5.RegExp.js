//Problem 1: Create a regular expression to validate if a string is a valid email address, ensuring it ends with .com, .net, or .org.
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org)$/;

console.log(emailRegex.test("ejemplo@gmail.com"));  // true
console.log(emailRegex.test("ejemplo@domain.xyz")); // false

//Problem 2: Design a regular expression that finds all words that begin with an uppercase letter in a text, using word boundaries.
const PalabrasMayusRegex = /\b[A-Z][a-z]*\b/g;

// Texto de ejemplo
const text = "Esto es un Ejemplo";
const PalabrasMayus = text.match(PalabrasMayusRegex);

//Problem 3: Find all occurrences of the syllable "ex" that are not at the start of a word.
const exRegex = /\Bex/g;

// Texto de ejemplo
const textoConEx = "This is an example text with exercises and examples.";
const matches = textoConEx.match(exRegex);

console.log(matches); // [ 'ex', 'ex' ]

//Problem 4: Use a regular expression with the metacharacter . to find any sequence of three characters that starts with "a" and ends with "b".
const text4 = "abc axb a1b adb";
const regex4 = /a.b/g;
const result4 = text4.match(regex4);

//Problem 5: Create a regular expression to capture numbers in currency format (e.g., $50, €30.99), using capture groups.
const text5 = "$50, €30.99, £1000, ¥300.5";
const regex5 = /([€$¥£])(\d+(?:\.\d{1,2})?)/g;
const result5 = [...text5.matchAll(regex5)];

console.log(result5.map(match => ({ currency: match[1], amount: match[2] })));
// [ { currency: '$', amount: '50' }, { currency: '€', amount: '30.99' }, { currency: '£', amount: '1000' }, { currency: '¥', amount: '300.5' } ]

//Problem 6: Design a regular expression that validates an IPv4 address, ensuring the entire string is a valid IP address.
const text6 = "Valid IPs: 192.168.1.1, 127.0.0.1. Invalid IPs: 256.256.256.256, 123.456.78.90";
const regex6 = /\b((25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})\.){3}(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})\b/g;
const result6 = text6.match(regex6);

console.log(result6); // [ '192.168.1.1', '127.0.0.1' ]

//Problem 7: Create a regular expression that finds words that repeat consecutively in a text, such as "hello hello" or "goodbye goodbye".
const texto7 = "hola hola mundo adiós adiós otra vez";
const regex7 = /\b(\w+)\s\1\b/g;
const resultado7 = [...texto7.matchAll(regex7)];

console.log(resultado7.map(coincidencia => ({ palabra: coincidencia[1], indice: coincidencia.index })));
// [ { palabra: 'hola', indice: 0 }, { palabra: 'adiós', indice: 11 } ]

//Problem 8: Use a regular expression that finds strings with at least 2 consecutive "a" letters.
const texto8 = "banana manzana aardvark bazar cabaña";
const regex8 = /\b\w*a{2,}\w*\b/g;
const resultado8 = texto8.match(regex8);

console.log(resultado8); // [ 'banana', 'aardvark', 'bazar', 'cabaña' ]

//Problem 9: Find all occurrences of the word "JavaScript" (case-insensitive) in a paragraph, showing each match's index.
const texto9 = "Me encanta JavaScript! JavaScript es increíble. javascript es divertido.";
const regex9 = /javascript/gi;
const resultado9 = [...texto9.matchAll(regex9)];

console.log(resultado9.map(coincidencia => ({ palabra: coincidencia[0], indice: coincidencia.index })));
// [ { palabra: 'JavaScript', indice: 10 }, { palabra: 'JavaScript', indice: 25 }, { palabra: 'javascript', indice: 48 } ]

//Problem 10: Validate if a string contains exactly two words separated by a space.
const texto10 = "Hola mundo";
const regex10 = /^\w+\s\w+$/;

console.log(regex10.test(texto10));

//Problem 11: Design a regular expression to validate passwords that have at least 8 characters, contain an uppercase letter, a lowercase letter, a number, and a special symbol.
const contrasena = "Hola123!";
const regex11 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

console.log(regex11.test(contrasena));

//Problem 12: Find all sentences that end with an exclamation mark ! or a question mark ?.
const texto12 = "¿Cómo estás? ¡Hola mundo! Esto es un ejemplo. ¿Qué opinas!";
const regex12 = /[^.!?]*[!?]/g;
const resultado12 = texto12.match(regex12);

