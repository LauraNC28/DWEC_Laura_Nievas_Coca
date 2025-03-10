document.addEventListener('DOMContentLoaded', () => {
    // 1. Incluir una nueva clase en el padre de la imagen del gato
    const imagenGato = document.querySelector('#gato img');
    imagenGato.parentNode.classList.add('contenedor-imagen');

    // 2. Incluir una nueva clase en cualquier hijo de la sección con ID "animales"
    const seccionAnimales = document.getElementById('animales');
    seccionAnimales.querySelector('.contenedor-flex-horizontal').classList.add('lista-animales');

    // 3. Listar todos los hijos del formulario
    const formulario = document.getElementById('formulario-contacto');
    console.log('Hijos del formulario:', formulario.children);

    // 4. Cambiar el texto del primer y último elemento de la lista de compras
    const listaCompras = document.getElementById('listaCompra');
    listaCompras.firstElementChild.textContent = 'Primer elemento';
    listaCompras.lastElementChild.textContent = 'Último elemento';

    // 5. Cambiar el texto de la primera etiqueta del formulario
    const primeraEtiqueta = formulario.querySelector('label');
    primeraEtiqueta.textContent = 'Nuevo texto de etiqueta';

    // 6. Mostrar en la consola el tipo del nodo padre de la imagen del perro
    const imagenPerro = document.querySelector('#perro img');
    console.log('Tipo de nodo padre de la imagen del perro:', imagenPerro.parentNode.nodeName);

    // 7. Mostrar en la consola el tipo del hermano anterior del artículo donde está el gato
    const articuloGato = document.getElementById('gato');
    console.log('Tipo de hermano anterior del artículo del gato:', articuloGato.previousElementSibling.nodeName);
});