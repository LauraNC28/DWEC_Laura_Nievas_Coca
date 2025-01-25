//1.- Establishing Context
//Exercise 1. Given an object with a greet method, create another object and use the greet method from the first object with it.
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    greet() {
        return `Hola, soy ${this.nombre}.`;
    }
}

class OtraPersona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const persona1 = new Persona("Alice");
const persona2 = new OtraPersona("Bob");

// Usar el método greet de persona1 con el contexto de persona2
console.log(persona1.greet.call(persona2)); //Hola, soy Bob.

//Exercise 2. Create a function that accepts an object as an argument and adds a new property to it. Use call to execute the function with different objects.
function agregarPropiedad(propiedad, valor) {
    this[propiedad] = valor;
}

const objA = { nombre: "Carlos" };
const objB = { nombre: "Lucía" };

// Usar la función con `call` para modificar diferentes objetos
agregarPropiedad.call(objA, "edad", 30);
agregarPropiedad.call(objB, "profesion", "Ingeniera");

console.log(objA); // { nombre: 'Carlos', edad: 30 }
console.log(objB); // { nombre: 'Lucía', profesion: 'Ingeniera' }

//Exercise 3. Define an object with a describe method. Create another object and use bind to link the describe method to the new object.
class ObjetoBase {
    constructor(nombre) {
        this.nombre = nombre;
    }

    describe() {
        return `Soy un objeto con nombre: ${this.nombre}.`;
    }
}

class NuevoObjeto {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const objetoBase = new ObjetoBase("Objeto Base");
const nuevoObjeto = new NuevoObjeto("Objeto Vinculado");

// Vincular el método describe del objetoBase al nuevoObjeto
const describeVinculado = objetoBase.describe.bind(nuevoObjeto);

console.log(describeVinculado()); // Soy un objeto con nombre: Objeto Vinculado.

//Exercise 4. Write a function that logs the values of an object’s properties. Use bind to create a new function with a predefined context for this logging.
function logValues() {
    console.log(Object.values(this));
}

const objeto = { a: 1, b: 2, c: 3 };

// Crear una nueva función vinculada al objeto
const logValuesVinculado = logValues.bind(objeto);

logValuesVinculado(); // [1, 2, 3]

//2.- Inheritance
//Exercise 5. Define a base class Person with a greet method. Create a Student class that inherits from Person and adds a study method.
class Person {
    constructor(nombre) {
        this.nombre = nombre;
    }

    greet() {
        return `Hola, soy ${this.nombre}.`;
    }
}

class Student extends Person {
    constructor(nombre, asignatura) {
        super(nombre); // Llama al constructor de la clase base
        this.asignatura = asignatura;
    }

    study() {
        return `${this.nombre} está estudiando ${this.asignatura}.`;
    }
}

const estudiante1 = new Student("Ana", "Matemáticas");

console.log(estudiante1.greet());  
console.log(estudiante1.study());  

//Exercise 6. Create a Vehicle base class with a drive method. Define a Car subclass that inherits from Vehicle and adds an accelerate method.
class Vehicle {
    constructor(nombre) {
        this.nombre = nombre;
    }

    drive() {
        return `El vehículo de marca ${this.nombre} está conduciendo.`;
    }
}

class Car extends Vehicle {
    constructor(nombre, modelo) {
        super(nombre); 
        this.modelo = modelo;
    }

    accelerate() {
        return `El ${this.modelo} está acelerando.`;
    }
}

const coche1 = new Car("Toyota", "Corolla");

console.log(coche1.drive());        
console.log(coche1.accelerate()); 

//Exercise 7. Write a Product class with a displayInfo method. Create a Book subclass that inherits from Product and adds an author property.
class Product {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    displayInfo() {
        return `Producto: ${this.nombre}, Precio: $${this.precio}.`;
    }
}

class Book extends Product {
    constructor(nombre, precio, autor) {
        super(nombre, precio); 
        this.autor = autor;
    }

    displayInfo() {
        return `${super.displayInfo()} Autor: ${this.author}.`;
    }
}

const libro1 = new Book("JavaScript: The Good Parts", 30, "Douglas Crockford");

console.log(libro1.displayInfo());  

//Exercise 8. Define a Device class with a turnOn method. Create a Smartphone class that inherits from Device and adds a call method.
class Device {
    constructor(marca) {
        this.marca = marca;
    }

    turnOn() {
        return `${this.marca} está encendido.`;
    }
}

class Smartphone extends Device {
    constructor(marca, modelo) {
        super(marca); 
        this.modelo = modelo;
    }

    call(numero) {
        return `Llamando al número ${numero} desde el ${this.modelo}.`;
    }
}

const movil1 = new Smartphone("Apple", "iPhone 13");

console.log(movil1.turnOn());    
console.log(movil1.call("123-456-7890")); 

//3.- Encapsulation
//Exercise 9. Create a constructor function that initializes private properties name and age. Add public getters and setters to access and modify them.
function Person1 (name, age) {
    this.#name = name;  // Propiedad privada
    this.#age = age;   

    this.getName = function() {
        return this.#name;
    };

    this.setName = function(newName) {
        this.#name = newName;
    };

    this.getAge = function() {
        return this.#age;
    };

    this.setAge = function(newAge) {
        if (newAge >= 0) {
            this.#age = newAge;
        }
    };
}

const person1 = new Person1("Laura", 25);
console.log(person1.getName());  
console.log(person1.getAge());  

person1.setName("Bob");
person1.setAge(30);

console.log(person1.getName());  
console.log(person1.getAge());   

//Exercise 10. Define a class that has a private property balance. Add a method to increase the balance and another to retrieve its value.
class Account {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance; 

        // Método para aumentar el balance
        this.deposit = function(amount) {
            if (amount > 0) {
                this.#balance += amount;
            }
        };

        // Método para obtener el balance
        this.getBalance = function() {
            return this.#balance;
        };
    }
}

const account1 = new Account(100);
console.log(account1.getBalance());  // 100

account1.deposit(50);
console.log(account1.getBalance());  // 150

//Exercise 11. Create a constructor function for an object with a private property score. Add a getter that returns the score and a setter that updates it only if it’s higher than the previous score.
function Game() {
    this.#score = 0;  

    this.getScore = function() {
        return this.#score;
    };

    this.setScore = function(newScore) {
        if (newScore > this.#score) {
            this.#score = newScore;
        }
    };
}

const game = new Game();
console.log(game.getScore());  // 0

game.setScore(10);
console.log(game.getScore());  // 10

game.setScore(5);  // No se actualiza porque 5 no es mayor que 10
console.log(game.getScore());  // 10

//Exercise 12. Define a class with a private password property. Add a setter that allows updating the password only if a certain condition is met (e.g., minimum length).
class User {
    #password;
    constructor() {
        this.#password = "";  
    }

    // Setter para #password
    setPassword(newPassword) {
        if (newPassword.length >= 8) {
            this.#password = newPassword;
        } else {
            console.log("La contraseña debe tener al menos 8 caracteres.");
        }
    }

    // Getter para #password
    getPassword() {
        return this.#password;
    }
}

const user1 = new User();
user1.setPassword("short");
user1.setPassword("longpassword123");

console.log(user1.getPassword()); 

//4.- Overriding methods
//Exercise 13. Define a Person class with a greet method. Create a Friend class that overrides greet to provide a personalized greeting.
class Person {
    greet() {
        return "Hola!";
    }
}

class Friend extends Person {
    greet() {
        return "Hola, me alegro de verte amigo!";
    }
}

const person2 = new Person();
console.log(person2.greet()); 

const friend1 = new Friend();
console.log(friend1.greet());  

//Exercise 14. Create a Shape class with a draw method. Define a Circle class that overrides the draw method with a specific message for circles.
class Shape {
    draw() {
        return "Dibujando figura";
    }
}

class Circle extends Shape {
    draw() {
        return "Dibujando círculo";
    }
}

const shape = new Shape();
console.log(shape.draw());  

const circle = new Circle();
console.log(circle.draw()); 

//Exercise 15. Define a Player class with a play method. Create a Musician subclass that overrides play to specify the instrument being played.
class Player {
    play() {
        return "Jugando un juego";
    }
}

class Musician extends Player {
    play() {
        return "Tocando la guitarra";
    }
}

const player1 = new Player();
console.log(player1.play()); 

const musician1 = new Musician();
console.log(musician1.play());  

//Exercise 16. Write a Machine class with a start method. Create a Car subclass that overrides start to add a message about engine type.
class Machine {
    start() {
        return "La máquina esta arrancando";
    }
}

class Car extends Machine {
    start() {
        return "El coche está arrancando";
    }
}

const machine1 = new Machine();
console.log(machine1.start());  

const car1 = new Car();
console.log(car1.start());

//5- Static method and properties
//Exercise 17: Create a class with static properties. Create a class called Vehicle that has a static property numberOfWheels with value 4. Then, add a static method getNumberOfWheels() that returns the value of numberOfWheels.
class Vehicle {
    static numberOfWheels = 4;

    static getNumberOfWheels() {
        return this.numberOfWheels;
    }
}

console.log(Vehicle.getNumberOfWheels());

//Exercise 18: Create a class called InstanceAccount that has a static counter property that is incremented each time a new instance of the class is created. Add a static method getInstances() that returns the total number of instances created.
class InstanceAccount {
    static contador = 0;

    constructor() {
        InstanceAccount.contador++;
    }

    static getInstances() {
        return this.contador;
    }
}

const cuenta1 = new InstanceAccount();
const cuenta2 = new InstanceAccount();
const cuenta3 = new InstanceAccount();

console.log(InstanceAccount.getInstances());  // 3

//Exercise 19: Create a class called Product that has the properties name and price. Define a static method called comparePrices() that receives two instances of Product and returns which one has the higher price.
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    static comparadorPrecios(product1, product2) {
        if (product1.price > product2.price) {
            return `${product1.name} is more expensive than ${product2.name}`;
        } else if (product1.price < product2.price) {
            return `${product2.name} is more expensive than ${product1.name}`;
        } else {
            return `${product1.name} and ${product2.name} have the same price`;
        }
    }
}

const producto1 = new Product("Portátil", 1000);
const producto2 = new Product("Tablet", 700);

console.log(Product.comparadorPrecios(producto1, producto2));

//Exercise 20: Create a class called Text with a static method capitalize() that receives a text string and returns that string with the first letter capitalized.
class Text {
    static capitalize(text) {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}

console.log(Text.capitalize("hello world"));  // Hello world

//6.- Unstructuring objects
//Exercise 21. Given an object with properties title, author, and year, destructure it to extract these values and log them.
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

const { title, author, year } = book;

console.log(title); 
console.log(author);
console.log(year);

//Exercise 22. Destructure an array with three elements and assign them to individual variables, then log the values.
const fruits = ["manzana", "plátano", "cereza"];

const [first, second, third] = fruits;

console.log(first);  
console.log(second); 
console.log(third);

//Exercise 23. Create a function that takes an object with properties name, age, and country and destructures them directly in the parameter list.
function displayInfo({ name, age, country }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
}

const person = { name: "Ana", age: 30, country: "Estados Unidos" };

displayInfo(person);

//Exercise 24. Given a nested object with properties user and address, destructure it to extract userName and city.
const data = {
    user: {
        userName: "LauraNC",
        age: 28,
    },
    address: {
        city: "Granada",
        code: "18230",
    },
};

const {
    user: { userName },
    address: { city },
} = data;

console.log(userName);
console.log(city);

//7.- Object operators
//Exercise 25. Create an object with a user property containing nested properties. Use optional chaining to access a non-existent property without causing an error.
const userProfile = {
    user: {
        name: "Alice",
        details: {
            age: 30,
            city: "New York",
        },
    },
};

// Uso de encadenamiento opcional para acceder a una propiedad inexistente o existente
console.log(userProfile.user?.details?.country); // undefined
console.log(userProfile.user?.details?.city);    // New York




//Exercise 26. Given a book object with an author property, use optional chaining to access the authorName. Try to access a property that doesn’t exist, verifying that it returns undefined.
const libro = {
    title: "1984",
    author: {
        authorName: "George Orwell",
    },
};


console.log(libro.author?.authorName);    // George Orwell
console.log(libro.author?.birthYear);    // undefined

/*Exercise 27. Create a class hierarchy with the following classes:

    Animal: a base class with a property name and a method speak().
    Dog: a class that inherits from Animal and adds a method bark().
    Cat: a class that inherits from Animal and adds a method meow().

Then, create objects of type Dog and Cat and use the instanceof operator to check:

    If the object is an instance of Animal.
    If the object is an instance of Dog or Cat.*/

    class Animal {
        constructor(nombre) {
            this.nombre = nombre;
        }
    
        hablar() {
            return `${this.nombre} hace un sonido.`;
        }
    }
    
    class Perro extends Animal {
        ladrar() {
            return `${this.nombre} ladra: ¡Guau!`;
        }
    }
    
    class Gato extends Animal {
        maullar() {
            return `${this.nombre} maúlla: ¡Miau!`;
        }
    }
    
    const miPerro = new Perro("Julie");
    const miGato = new Gato("Mimi");
    
    // Uso del operador instanceof
    console.log(miPerro instanceof Animal); // true
    console.log(miPerro instanceof Perro);  // true
    console.log(miPerro instanceof Gato);   // false
    
    console.log(miGato instanceof Animal); // true
    console.log(miGato instanceof Gato);   // true
    console.log(miGato instanceof Perro);  // false
     
    console.log(miGato.hablar());  
    console.log(miGato.maullar());

/*Exercise 28.  Create a function called isVehicle that takes an object and uses instanceof to check if the object is an instance of the Vehicle class. The Vehicle class should have the properties brand and model.

Then, create the following classes:

    Vehicle: a base class with properties brand and model.
    Car: a class that inherits from Vehicle and adds a property numberOfDoors.
    Motorcycle: a class that inherits from Vehicle and adds a property handlebarType.

Create instances of Car and Motorcycle and check if they are vehicles using the isVehicle function.*/
class Vehicle {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Car extends Vehicle {
    constructor(marca, modelo, numeroDePuertas) {
        super(marca, modelo); 
        this.numeroDePuertas = numeroDePuertas;
    }
}

class Motorcycle extends Vehicle {
    constructor(marca, modelo, tipoDeManubrio) {
        super(marca, modelo); 
        this.tipoDeManubrio = tipoDeManubrio;
    }
}

// Función para verificar si un objeto es instancia de Vehicle
function isVehicle(objeto) {
    return objeto instanceof Vehicle;
}

const miCoche = new Car("Toyota", "Corolla", 4);
const miMoto = new Motorcycle("Yamaha", "MT-07", "Deportivo");

// Verificar si los objetos son instancias de Vehicle
console.log(isVehicle(miCoche)); // true
console.log(isVehicle(miMoto));  // true

// Verificar si un objeto genérico no es instancia de Vehicle
const objetoGenerico = { marca: "Genérico", modelo: "Modelo" };
console.log(isVehicle(objetoGenerico)); // false

console.log(miCoche); 
console.log(miMoto); 

//8.- Mixins
/*Exercise 29: Mixin for Logging. Create a mixin LoggerMixin that adds two methods to any class: logInfo (to log basic information about an object) and logError (to log an error message). Then, use this mixin with a User class to add logging functionality.
Instructions:
    Create a LoggerMixin that includes the two methods: logInfo and logError.
    Create a User class that has properties name and email.
    Apply the LoggerMixin to the User class.
    Create a User instance and call the logInfo and logError methods.*/
    const LoggerMixin = {
        logInfo() {
            console.log(`Información: ${JSON.stringify(this)}`);
        },
        logError(mensaje) {
            console.error(`Error: ${mensaje}`);
        }
    };
    
    // Clase User
    class User {
        constructor(nombre, email) {
            this.nombre = nombre;
            this.email = email;
        }
    }
    
    // Función para aplicar el mixin a una clase
    function applyMixin(targetClass, mixin) {
        Object.assign(targetClass.prototype, mixin);
    }
    
    // Aplicar el LoggerMixin a la clase User
    applyMixin(User, LoggerMixin);
    
    const usuario = new User("Juan Pérez", "juan.perez@example.com");
    
    usuario.logInfo(); 
    usuario.logError("Este es un mensaje de error.");

/*Exercise 30: Mixin for Shape Area Calculation. Create a mixin AreaMixin that provides a method calculateArea for calculating the area of a shape. Use this mixin with a Rectangle class and a Circle class to calculate the areas of both shapes.
Instructions:
    Create a Rectangle class with properties width and height.
    Create a Circle class with property radius.
    Create a mixin AreaMixin that adds a method calculateArea to both classes.
    Apply AreaMixin to both Rectangle and Circle.
    Create instances of Rectangle and Circle and calculate their areas.*/
    const AreaMixin = {
        calculateArea() {
            if (this.width !== undefined && this.height !== undefined) {
                // Cálculo del área de un rectángulo
                return this.width * this.height;
            
            } else if (this.radius !== undefined) {
                // Cálculo del área de un círculo
                return Math.PI * Math.pow(this.radius, 2);
            } else {
                throw new Error("No se puede calcular el área: propiedades insuficientes.");
            }
        }
    };
    
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }
    
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
    }
    
    // Función para aplicar el mixin
    function applyMixin(targetClass, mixin) {
        Object.assign(targetClass.prototype, mixin);
    }
    
    // Aplicar el AreaMixin a Rectangle y Circle
    applyMixin(Rectangle, AreaMixin);
    applyMixin(Circle, AreaMixin);
    
    const rectangulo = new Rectangle(10, 5);
    const circulo = new Circle(7);
    
    console.log(`Área del rectángulo: ${rectangulo.calculateArea()}`); 
    console.log(`Área del círculo: ${circulo.calculateArea().toFixed(2)}`); 

/*Exercise 31: Mixin for Extendable Methods. Create a mixin ExtendableMixin that adds two methods: extend (to add a new method to a class) and removeMethod (to remove a method from a class). Use this mixin with a Car class to extend and modify its methods.
Instructions:
    Create a Car class with a drive method.
    Create a mixin ExtendableMixin that adds extend and removeMethod methods to the class.
    Use the extend method to add a stop method to the Car class.
    Use the removeMethod method to remove the drive method from the Car class.
    Show the result of calling the drive and stop methods before and after modifying the class.*/
    const ExtendableMixin = {
        extend(methodName, methodFunction) {
            this.prototype[methodName] = methodFunction;
        },
        removeMethod(methodName) {
            delete this.prototype[methodName];
        }
    };
    
    class Car {
        drive() {
            return "El coche está en movimiento.";
        }
    }
    
    // Aplicar el mixin ExtendableMixin a la clase Car
    Object.assign(Car, ExtendableMixin);
    
    const myCar = new Car();
    
    console.log("Antes de modificar:");
    console.log(myCar.drive()); 
    
    // Añadir un nuevo método stop utilizando el mixin
    Car.extend("stop", function () {
        return "El coche se ha parado.";
    });
    
    console.log(myCar.stop()); 
    
    // Eliminar el método drive utilizando el mixin
    Car.removeMethod("drive");
    
    // Intentar llamar al método drive después de eliminarlo
    console.log("Después de modificar:");
    try {
        console.log(myCar.drive()); // Error: myCar.drive is not a function
    } catch (error) {
        console.error("Error:", error.message); 
    }
    
    console.log(myCar.stop());

/*Exercise 32: Mixin for Data Validation. Create a mixin ValidationMixin that provides data validation methods for an object. Use this mixin with a Product class to validate product data (e.g., name, price).
Instructions:
    Create a Product class with properties name and price.
    Create a mixin ValidationMixin that includes a validateName method (to check if the name is not empty) and a validatePrice method (to ensure the price is a positive number).
    Apply the ValidationMixin to the Product class.
    Create a Product instance and call the validation methods to check if the data is valid.*/
    const ValidationMixin = {
        validateName() {
            if (!this.name || this.name.trim() === "") {
                return "El nombre no puede estar vacío.";
            }
            return "El nombre es válido.";
        },
        validatePrice() {
            if (typeof this.price !== "number" || this.price <= 0) {
                return "El precio debe ser un número positivo.";
            }
            return "El precio es válido.";
        }
    };
 
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }
    
    // Aplicar el mixin ValidationMixin a la clase Product
    Object.assign(Product.prototype, ValidationMixin);
    
    const myProduct = new Product("Manzana", 1.5);
    
    console.log(myProduct.validateName()); 
    console.log(myProduct.validatePrice());
    
    // Crear un producto con datos no válidos
    const invalidProduct = new Product("", -5);
    
    console.log(invalidProduct.validateName());  
    console.log(invalidProduct.validatePrice());