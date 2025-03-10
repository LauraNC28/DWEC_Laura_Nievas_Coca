document.addEventListener('DOMContentLoaded', () => {
    // 1. Rebajar la etiqueta h1 a una etiqueta h2
    const h1 = document.getElementById('titulo1');
    const h2 = document.createElement('h2');
    h2.textContent = h1.textContent;
    h1.parentNode.replaceChild(h2, h1);
  
    // 2. Reemplazar solo el contenido de h2 con un nuevo texto
    h2.textContent = 'Nuevo título para el ejemplo de DOM';
  
    // 3. Modificar las propiedades de la fuente y el texto alternativo de la primera imagen
    const firstImage = document.querySelector('figure#gato img');
    firstImage.src = '../img/gato2.jpg'; // Reemplazar con la ruta de otra imagen
    firstImage.alt = 'Un gato diferente';
  
    // 4. Reemplazar el texto de cualquier etiqueta p con "Hello, I'm a paragraph"
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
      p.textContent = "Hello, I'm a paragraph";
    });
  
    // 5. Modificar el texto de la segunda imagen
    const secondImage = document.querySelector('figure#perro img');
    secondImage.alt = 'Un lindo perrito'; 
  
    // 6. Asignar una propiedad no estándar al cuerpo llamada info-fecha y asignar la fecha de hoy
    document.body.infoFecha = new Date().toLocaleDateString();
  
    // 7. Mostrar en la consola todos los atributos de la primera imagen
    console.log(firstImage.attributes);
  
    // 8. Cambiar la propiedad "tamaño" de la última imagen (después de verificar que existe)
    const lastImage = document.querySelector('figure#perro img');
    if (lastImage.size) {
      lastImage.size = 'medium'; // Ajustar el valor según sea necesario
    }
  
    // 9. Agregar un id="ultima_imagen" a la última imagen
    lastImage.id = 'ultima_imagen';
  
    // 10. Agregar un atributo tipo="parrafo" a todos los p
    paragraphs.forEach(p => {
      p.setAttribute('tipo', 'parrafo');
    });
  
    // 11. Agregar un texto a cada elemento de la lista (debe ser escalable)
    const listItems = document.querySelectorAll('ul#listaCompra li');
    listItems.forEach((li, index) => {
      li.textContent = `Elemento ${index + 1} de la lista`;
    });
  
    // 12. Agregar un párrafo después del último elemento con un texto que cuente el número de elementos en la lista
    const listCount = listItems.length;
    const listParagraph = document.createElement('p');
    listParagraph.textContent = `La lista contiene ${listCount} elementos.`;
    document.getElementById('listaCompra').appendChild(listParagraph);
  
    // 13. Agregar un párrafo, al final del documento, que contenga cuántas clases tiene el último párrafo del primer artículo y sus nombres
    const lastParagraph = document.querySelector('article.contenedor-flex-vertical p:last-of-type');
    const classCount = lastParagraph.classList.length;
    const classNames = Array.from(lastParagraph.classList).join(', ');
    const classesParagraph = document.createElement('p');
    classesParagraph.textContent = `El último párrafo del primer artículo tiene ${classCount} clases: ${classNames}.`;
    document.body.appendChild(classesParagraph);
  
    // 14. Agregar dos clases al párrafo anterior: "clase1" y "clase2"
    classesParagraph.classList.add('clase1', 'clase2');
  
    // 15. Eliminar la última clase creada
    classesParagraph.classList.remove('clase2');
  
    // 16. Agregar un atributo booleano a la primera imagen
    firstImage.toggleAttribute('data-destacada', true);
});