document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear una estructura temporal
    const estructuraTemporal = document.createElement('div');

    // 2. Crear sección con comentario y dos artículos
    const nuevaSeccion = document.createElement('section');
    const comentario = document.createComment('Este es una nueva sección');
    nuevaSeccion.appendChild(comentario);

    const articulo1 = document.createElement('article');
    const parrafo1 = document.createElement('p');
    parrafo1.textContent = 'Párrafo del primer artículo';
    const enlace1 = document.createElement('a');
    enlace1.href = 'https://www.duckduckgo.com';
    enlace1.textContent = 'DuckDuckGo';
    articulo1.appendChild(parrafo1);
    articulo1.appendChild(enlace1);
    nuevaSeccion.appendChild(articulo1);

    const articulo2 = document.createElement('article');
    const parrafo2 = document.createElement('p');
    parrafo2.textContent = 'Párrafo del segundo artículo';
    const enlace2 = document.createElement('a');
    enlace2.href = 'https://www.duckduckgo.com';
    enlace2.textContent = 'DuckDuckGo';
    articulo2.appendChild(parrafo2);
    articulo2.appendChild(enlace2);
    nuevaSeccion.appendChild(articulo2);

    estructuraTemporal.appendChild(nuevaSeccion);

    // 3. Adjuntar la estructura temporal al DOM
    document.body.appendChild(estructuraTemporal);

    // 4. Clonar la sección anterior
    const seccionClonada = nuevaSeccion.cloneNode(true);
    document.body.appendChild(seccionClonada);

    // 5. Eliminar el contenido insertado en el paso 3
    estructuraTemporal.remove();

    // 6. Comprobar si la estructura temporal existe y está conectada al DOM
    console.log('La estructura temporal existe:', !!estructuraTemporal); // Si estructuraTemporal era un elemento del DOM, !!estructuraTemporal será true. Si estructuraTemporal era nulo o indefinido, !!estructuraTemporal será false.
    console.log('La estructura temporal está conectada al DOM:', document.body.contains(estructuraTemporal));

    // 7. Conectar la estructura temporal al DOM
    document.body.appendChild(estructuraTemporal);

    // 8. Eliminar todos los elementos de la lista marcados como verduras
    const verduras = document.querySelectorAll('li.verdura');
    verduras.forEach(verdura => verdura.remove());

    // 9. Reemplazar el párrafo del primer artículo insertado en el paso 7 con el último párrafo del documento
    const parrafoPrimerArticulo = nuevaSeccion.querySelector('article:first-of-type p');
    const ultimoParrafo = document.querySelector('body > section:last-of-type article:last-of-type p:last-of-type');
    parrafoPrimerArticulo.textContent = ultimoParrafo.textContent;

    // 10. Insertar un párrafo después de cualquier imagen con el nombre del archivo
    const imagenes = document.querySelectorAll('img');
    imagenes.forEach(imagen => {
        const parrafo = document.createElement('p');
        parrafo.textContent = imagen.src.split('/').pop();
        imagen.parentNode.insertBefore(parrafo, imagen.nextSibling);
    });

    // 11. Insertar un comentario antes de cualquier imagen
    imagenes.forEach(imagen => {
        const comentario = document.createComment('Imagen: ' + imagen.src);
        imagen.parentNode.insertBefore(comentario, imagen);
    });

    // 12. Insertar un párrafo antes del primer y después del último hijo
    const primerHijo = document.body.firstChild;
    const ultimoHijo = document.body.lastChild;
    const parrafoAntes = document.createElement('p');
    parrafoAntes.textContent = 'Este es un párrafo antes del primer hijo';
    const parrafoDespues = document.createElement('p');
    parrafoDespues.textContent = 'Este es un párrafo después del último hijo';
    document.body.insertBefore(parrafoAntes, primerHijo);
    document.body.appendChild(parrafoDespues);

    // 13. Reemplazar todo el contenido del primer artículo insertado en el paso 7
    articulo1.innerHTML = '';

    // 14. Reemplazar, del contenido de cualquier artículo insertado en el paso 7, solo los párrafos
    const parrafos = articulo1.querySelectorAll('p');
    parrafos.forEach(parrafo => parrafo.textContent = 'Texto del nuevo párrafo');

    // 15. Insertar un texto descriptivo antes del artículo del gato
    const articuloGato = document.getElementById('gato');
    const descripcion = document.createElement('p');
    descripcion.textContent = 'Esta es una descripción del gato';
    articuloGato.parentNode.insertBefore(descripcion, articuloGato);

    // 16. Insertar un mensaje agradable sobre los gatos después de su sección
    const seccionGato = articuloGato.parentNode;
    const mensaje = document.createElement('p');
    mensaje.textContent = '¡Los gatos son geniales!';
    seccionGato.parentNode.insertBefore(mensaje, seccionGato.nextSibling);

    // 17. Reemplazar la lista de compras mixta con dos listas: una para verduras y otra para frutas
    const listaCompras = document.getElementById('lista_compra');
    const listaVerduras = document.createElement('ul');
    const listaFrutas = document.createElement('ul');

    listaCompras.querySelectorAll('li').forEach(elemento => {
        if (elemento.classList.contains('verdura')) {
            listaVerduras.appendChild(elemento);
        } else if (elemento.classList.contains('fruta')) {
            listaFrutas.appendChild(elemento);
        }
    });

    listaCompras.parentNode.replaceChild(listaVerduras, listaCompras);
    listaVerduras.parentNode.insertBefore(listaFrutas, listaVerduras.nextSibling);
});