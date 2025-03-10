/*Exercise 1: Converting an object to JSON
Create an object person with properties name, age, and profession. Then, convert that object to a JSON string using JSON.stringify().*/
const person = {
    name: "Juan",
    age: 30,
    profession: "Developer"
};

// Convertir el objeto a una cadena JSON
const jsonString = JSON.stringify(person);

console.log("Objeto convertido a JSON:", jsonString);


/*Exercise 2: Converting a JSON string to an object
You have a JSON string representing an object with properties title and author. Convert that JSON string to a JavaScript object using JSON.parse(). Then, print the title and author to the console.*/
const jsonString2 = '{"title": "JavaScript Essentials", "author": "John Doe"}';

// Convertir la cadena JSON a un objeto
const book = JSON.parse(jsonString2);

console.log("Título:", book.title);
console.log("Autor:", book.author);


/*Exercise 3: Filtering properties when converting to JSON
Create an object with several properties, including a sensitive property called password. Use JSON.stringify() with a replacer to exclude the password property from the resulting JSON string.*/
const user = {
    username: "johndoe",
    email: "john@example.com",
    password: "123456",
    age: 28
};

// Usar JSON.stringify() con un replacer para excluir la propiedad 'password'
const jsonString3 = JSON.stringify(user, (key, value) => {
    if (key === "password") {
        return undefined; // Excluir la propiedad
    }

    return value; // Incluir las demás propiedades
});

console.log("JSON sin la propiedad 'password':", jsonString3);


/*Exercise 4: Transform values during conversion to JSON
Create a product object with properties name, price, and discount. Use JSON.stringify() with a replacement function to transform the values of price and discount, e.g., multiply price by 1.1 (to include VAT) and add a fixed amount to discount.*/
const product = {
    name: "Laptop",
    price: 1000, 
    discount: 50
};

// Usar JSON.stringify() con un replacer para transformar 'price' y 'discount'
const jsonString4 = JSON.stringify(product, (key, value) => {
    if (key === "price") {
        return value * 1.1; // Incrementar el precio un 10% (impuesto incluido)
    }

    if (key === "discount") {
        return value + 10; // Incrementar el descuento en 10 unidades
    }

    return value; // Dejar los demás valores sin cambios
});

console.log("JSON con valores transformados:", jsonString4);


/*Exercise 5: Retrieving a value from a deserialised object
 You have a JSON string representing a list of students. Convert the JSON string into a JavaScript object and then access the name of the first student in the list.*/
 const studentsJson = '[{"name": "Alice", "age": 20}, {"name": "Bob", "age": 22}, {"name": "Charlie", "age": 23}]';

 const students = JSON.parse(studentsJson);

 // Acceder al nombre del primer estudiante en la lista
const firstStudentName = students[0].name;

console.log("El nombre del primer estudiante es:", firstStudentName);


/*Exercise 6: Using JSON.parse() with a replacement
Convert the following JSON string to an object, but change the age value to 35:
const json = '{"nombre": "Juan", "edad": 30, "direccion": "Madrid"}';*/
const json = '{"nombre": "Juan", "edad": 30, "direccion": "Madrid"}';

// Usar JSON.parse() con un replacer para modificar el valor de 'edad'
const obj = JSON.parse(json, (key, value) => {
    if (key === "edad") {
        return 35; // Cambiar el valor de 'edad' a 35
    }
    
    return value; // Mantener el resto sin cambios
});

console.log("Objeto modificado:", obj);

