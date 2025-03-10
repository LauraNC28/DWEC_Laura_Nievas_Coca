//Exercise 1: Area Calculation: Write a function that calculates the area of a circle given its radius. Use π to perform the calculation.
function calcularAreaCirculo(radio) {
    const PI = Math.PI; // Usamos Math.PI para obtener el valor de π
    
    if (radio <= 0) {
        return "El radio debe ser un número positivo.";
    }

    const area = PI * Math.pow(radio, 2); // Fórmula: π * radio^2
    
    return `El área del círculo con radio ${radio} es: ${area.toFixed(2)} unidades cuadradas.`;
}

//Exercise 2: Price Rounding: You have a product price with decimals. Create one function that rounds the price up and another that rounds it down.
function redondearHaciaArriba(precio) {
    return Math.ceil(precio); // Redondea hacia el siguiente entero más alto
}

function redondearHaciaAbajo(precio) {
    return Math.floor(precio); // Redondea hacia el siguiente entero más bajo
}

//Exercise 3: Random Number: Create a function that returns a random number between 1 and 100.
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

//Exercise 4: Logarithms: Write a function that takes a positive number and returns its natural logarithm. Make sure to handle cases where the number is less than or equal to 0.
function calcularLogaritmo(numero) {
    if (numero > 0) {
        return Math.log(numero);
    } else {
        return "El número debe ser mayor que 0.";
    }
}

//Exercise 5: Powers: Write a function that calculates the power of a number. The function should take the base and the exponent as parameters.
function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
}

//Exercise 6: Square Root: Create a function that calculates the square root of a number. If the number is negative, it should return a message indicating that the square root cannot be calculated.
function calcularRaizCuadrada(numero) {
    if (numero >= 0) {
        return Math.sqrt(numero);
    } else {
        return "La raíz cuadrada no se puede calcular para números negativos.";
    }
}

//Exercise 7: Absolute Value: Write a function that takes a number and returns its absolute value.
function obtenerValorAbsoluto(numero) {
    return Math.abs(numero);
}

//Exercise 8: Maximum and Minimum Numbers: Write a function that takes a set of numbers and returns the largest and smallest among them.
function encontrarMaximoYMinimo(...numeros) {
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);
    
    return {maximo: maximo, minimo: minimo};
}

//Exercise 9: Distance in a Straight Line: Given the position of two points on a Cartesian plane (x1, y1) and (x2, y2), create a function that calculates the distance between them using the Euclidean distance formula.
function calcularDistancia(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    
    return distancia;
}

//Exercise 10: Cube Roots Calculation: Write a function that calculates the cube root of a number. If the number is negative, it should return a message indicating that the cube root cannot be calculated.
function calcularRaizCubica(numero) {
    if (numero >= 0) {
        return Math.cbrt(numero); // Calcula la raíz cúbica
    } else {
        return `La raíz cúbica de ${numero} es ${Math.cbrt(numero)}.`; 
    }
}

//Exercise 11: Sine of an Angle: Write a function that receives an angle in degrees and returns its sine. Be sure to convert the angle to radians before calculating the sine.
//radianes=grados×(π/180​)
function calcularSeno(anguloGrados) {
    const radianes = anguloGrados * (Math.PI / 180); // Convertir grados a radianes
    
    return Math.sin(radianes);
}

//Exercise 12: Cosine of an Angle: Create a function that receives an angle in degrees and returns its cosine. Remember to convert the angle to radians.
function calcularCoseno(anguloGrados) {
    const radianes = anguloGrados * (Math.PI / 180); // Convertir grados a radianes
    
    return Math.cos(radianes);
}

//Exercise 13: Tangent of an Angle: Write a function that takes an angle in degrees and returns its tangent. Perform the conversion to radians before the calculation.
function calcularTangente(anguloGrados) {
    const radianes = anguloGrados * (Math.PI / 180); // Convertir grados a radianes
    
    return Math.tan(radianes);
}

//Exercise 14: Arcsine: Create a function that receives a value between -1 and 1 and returns the arcsine of that value in degrees.
function calcularArcoSeno(valor) {
    if (valor < -1 || valor > 1) {
        return "El valor debe estar entre -1 y 1";
    }
    const radianes = Math.asin(valor);
    const grados = radianes * (180 / Math.PI); // Convertir radianes a grados
    
    return grados;
}

//Exercise 15: Arccosine: Write a function that takes a value between -1 and 1 and returns the arccosine of that value in degrees.
function calcularArcoCoseno(valor) {
    if (valor < -1 || valor > 1) {
        return "El valor debe estar entre -1 y 1";
    }
    const radianes = Math.acos(valor);
    const grados = radianes * (180 / Math.PI); // Convertir radianes a grados
    
    return grados;
}

//Exercise 16: Arctangent: Create a function that receives a number and returns its arctangent in degrees.
function calcularArcoTangente(valor) {
    const radianes = Math.atan(valor);
    const grados = radianes * (180 / Math.PI); // Convertir radianes a grados
    
    return grados;
}

//Exercise 17: Tangent and Angle: Write a function that receives an angle in degrees and returns its tangent and the arctangent of that angle in degrees.
function calcularTangenteYArco(anguloGrados) {
    const radianes = anguloGrados * (Math.PI / 180); // Convertir grados a radianes
    const tangente = Math.tan(radianes);
    const arcoTangente = Math.atan(tangente) * (180 / Math.PI); // Convertir radianes a grados
    
    return {tangente: tangente, arcoTangente: arcoTangente};
}

//Exercise 18: Euclidean Distance: Given the position of two points on a Cartesian plane (x1, y1) and (x2, y2), create a function that calculates the distance between them using the Euclidean distance formula, and also returns the angle in degrees that the line between those points makes with respect to the x-axis.
function calcularDistanciaYAngulo(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); // Fórmula de distancia euclidiana
    const anguloRadianes = Math.atan2(y2 - y1, x2 - x1); // Ángulo en radianes
    const anguloGrados = anguloRadianes * (180 / Math.PI); // Convertir a grados
    
    return {distancia: distancia, angulo: anguloGrados};
}

//Exercise 19: Area of a Triangle: Write a function that calculates the area of a triangle based on the lengths of its sides and the angle between them using the formula A=12absin⁡(C)A=21​absin(C), where aa and bb are the lengths of the sides and CC is the angle in degrees.
function calcularAreaTriangulo(a, b, anguloGrados) {
    const anguloRadianes = anguloGrados * (Math.PI / 180); // Convertir grados a radianes
    const area = 0.5 * a * b * Math.sin(anguloRadianes); // Fórmula del área
    
    return area;
}

//Exercise 20: Conversion from Degrees to Radians: Create a function that receives an angle in degrees and returns its equivalent in radians.
function convertirGradosARadianes(anguloGrados) {
    return anguloGrados * (Math.PI / 180); // Conversión de grados a radianes
}

