// Exercise 1: Create an object with properties that describe a car (brand, model, year).
class Coche {
    constructor (marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
        
    getDescripcion() {
        return `El coche es ${this.marca} ${this.modelo} ${this.anio}.`;
    }
}

const miCoche = new Coche("Toyota", "Corolla", 2020);

console.log(miCoche.getDescripcion());

// Exercise 2: Create a constructor function for a Person and instantiate two objects from it.
class Persona {
    constructor (nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

const persona1 = new Persona("Laura", "Nievas Coca", 20);
const persona2 = new Persona("Concepción", "Sánchez López", 76);

console.log(persona1);
console.log(persona2);

// Exercise 3: Access properties of a book object using both dot notation and bracket notation.
const libro = {
        autor: "Harper Lee",
        titulo: "To Kill a Mockingbird",
        anio: 1960
    }

console.log(libro.autor);
console.log(libro.titulo);
console.log(libro.anio);


console.log(libro["autor"]);
console.log(libro["titulo"]);
console.log(libro["anio"]);

// Exercise 4: Modify the year published property of the book object.
libro.anio = 2000;

console.log(libro);

// Exercise 5: Add a new property (color) to the car object.
miCoche.color = "Negro";

console.log(`El color del coche es ${miCoche.color}.`);

// Exercise 6: Remove the model property from the car object.
delete miCoche.modelo;

console.log(miCoche);

// Exercise 7: Create an object and freeze it. Try to change one of its properties.
class Persona1 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona = new Persona("Juan", 30);

Object.freeze(persona);

// Intentar cambiar una propiedad
persona.nombre = "Pedro"; 

console.log(persona.nombre); // Salida: Juan

// Intentar añadir una nueva propiedad
persona.altura = 180; 

console.log(persona.altura); // Salida: undefined

// Exercise 8: Create an object and prevent it from having new properties added. Try to add a new property.
class Animal {
    constructor(especie, habitat) {
        this.especie = especie;
        this.habitat = habitat;
    }
}

const animal = new Animal("Tigre", "Selva");

Object.preventExtensions(animal);

// Intentar añadir una nueva propiedad
animal.color = "Naranja";

console.log(animal.color); // Salida: undefined

// Las propiedades existentes aún se pueden modificar
animal.especie = "León";

console.log(animal.especie); // Salida: León

// Verificar si el objeto es extensible
console.log(Object.isExtensible(animal)); // Salida: false

// Exercise 9: Use Object.keys() to get the keys of a student object and print them.
const estudiante = {
    nombre: "Carlos",
    edad: 20,
    carrera: "Ingeniería",
    semestre: 5
};

const claves = Object.keys(estudiante);

console.log("Claves del objeto estudiante:", claves);

// Exercise 10: Use Object.values() to get the values of a student object and print them.
const valores = Object.values(estudiante);

console.log("Valores del objeto estudiante:", valores);

// Exercise 11: Iterate through the properties of a pet object and print each property with its value.
const mascota = {
    nombre: "Max",
    especie: "Perro",
    edad: 5,
    color: "Marrón"
};

for (const propiedad in mascota) {
    console.log(`${propiedad}: ${mascota[propiedad]}`);
}

// Exercise 12: Write a function that checks if two objects have at least one property in common.
function tienenPropiedadEnComun(obj1, obj2) {
    const claves1 = Object.keys(obj1);
    const claves2 = Object.keys(obj2);

    // Comprobar si al menos una clave está en ambos objetos
    return claves1.some(clave => clave in obj2);
}

const objeto1 = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
const objeto2 = { profesion: "Ingeniero", edad: 25, pais: "España" };

console.log(tienenPropiedadEnComun(objeto1, objeto2)); // Salida: true (ambos tienen 'edad')

// Exercise 13: Create a function that returns a new object that merges two given objects.
function combinarObjetos(obj3, obj4) {
    return { ...obj3, ...obj4 }; // Combina ambos objetos
}

const objeto3 = { nombre: "Alice", edad: 25 };
const objeto4 = { profesion: "Ingeniera", pais: "España" };

const objetoCombinado = combinarObjetos(objeto1, objeto2);

console.log(objetoCombinado);

// Exercise 14: Create a function that clones a given object.
function clonarObjeto(obj) {
    return { ...obj }; // Devuelve un nuevo objeto con las mismas propiedades
}

const original = { nombre: "Carlos", edad: 30 };
const clon = clonarObjeto(original);

console.log(clon);

console.log(clon === original); // Salida: false (son objetos diferentes)

// Exercise 15: Create a function that compares two objects and returns true if they are equal, false otherwise.
function sonIguales(obj1, obj2) {
    const claves1 = Object.keys(obj1);
    const claves2 = Object.keys(obj2);

    // Verificar si tienen el mismo número de propiedades
    if (claves1.length !== claves2.length) {
        return false;
    }

    // Comparar cada propiedad
    return claves1.every(clave => obj1[clave] === obj2[clave]);
}

const objA = { nombre: "Lucía", edad: 25 };
const objB = { nombre: "Lucía", edad: 25 };
const objC = { nombre: "Lucía", edad: 30 };

console.log(sonIguales(objA, objB)); // true

console.log(sonIguales(objA, objC)); // false

// Exercise 16: Write a function that destructures an object and returns its properties as variables.
function desestructurarObjeto(obj) {
    const { nombre, edad, profesion } = obj; // Desestructuración
    return `Nombre: ${nombre}, Edad: ${edad}, Profesión: ${profesion}`;
}

const persona = { nombre: "Ana", edad: 28, profesion: "Diseñadora" };

console.log(desestructurarObjeto(persona));

// Exercise 17: Create an object that uses 'this' in a method and show how to call it correctly.
class Mascota {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    saludar() {
        return `Hola, soy ${this.nombre}, un ${this.especie}.`;
    }
}

const miMascota = new Mascota("Luna", "Gato");

console.log(miMascota.saludar());
