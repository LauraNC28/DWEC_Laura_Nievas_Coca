import { menuEstudiantes } from "../menus/menuEstudiantes.js";
import { ListaEstudiantes } from "../clases/ListaEstudiantes.js";
import { Direccion } from "../clases/Direccion.js";
import { Estudiante } from "../clases/Estudiante.js";

// Se crean instancias de las listas para gestionar estudiantes
import { listaEstudiantes } from "../clases/ListaEstudiantes.js";
import { listaAsignaturas } from "../clases/ListaAsignaturas.js";


/**
 * Gestión interactiva de estudiantes mediante un menú.
 * Permite realizar diversas operaciones relacionadas con estudiantes, como agregar, buscar y matricular.
 */
export function gestionarEstudiantes() {
    /*let salir = false; // Variable de control para salir del bucle
    do {
        try {

            const opcion = menuEstudiantes(); // Muestra el menú de estudiantes y obtiene la opción
            switch (opcion) {
                case 1: { // Añadir estudiante
                    console.log("\n--- Añadir Estudiante ---");
                    // Se solicitan los datos del estudiante y se crea la dirección
                    const nombre = prompt("Nombre: ").trim();
                    if (!nombre) throw new Error("El nombre no puede estar vacío.");

                    const edad = parseInt(prompt("Edad: "));
                    if (isNaN(edad) || edad <= 0) throw new Error("Edad no válida.");

                    const calle = prompt("Calle: ").trim();
                    const numero = prompt("Número: ").trim();
                    const piso = prompt("Piso (opcional): ").trim();
                    const codigoPostal = prompt("Código Postal: ").trim();
                    const provincia = prompt("Provincia: ").trim();
                    const localidad = prompt("Localidad: ").trim();
                    
                    if (!calle || !numero || !codigoPostal || !provincia || !localidad) {
                        throw new Error("Todos los campos de dirección son obligatorios, excepto el piso.");
                    }
                    
                    const direccion = new Direccion(calle, numero, piso, codigoPostal, provincia, localidad);

                    // Se crea un nuevo estudiante y se añade a la lista
                    const estudiante = new Estudiante(nombre, edad, direccion);
                    listaEstudiantes.agregarEstudiante(estudiante);
                    
                    console.log("Estudiante añadido correctamente.");
                    break;
                }

                case 2: { // Eliminar estudiante
                    console.log("\n--- Eliminar Estudiante ---");
                    const id = parseInt(prompt("ID del estudiante: "));

                    if (isNaN(id)) throw new Error("ID no válido.");

                    listaEstudiantes.eliminarEstudiante(id);
                    console.log("Estudiante eliminado correctamente.");
                    break;
                }

                case 3: { // Buscar estudiante
                    console.log("\n--- Buscar Estudiante ---");
                    const patron = prompt("Nombre a buscar: ").trim();
                    
                    if (!patron) throw new Error("El patrón de búsqueda no puede estar vacío.");
                    
                    const resultados = listaEstudiantes.buscarEstudiante(patron);
                    
                    if (resultados.length > 0) {
                        // Muestra los resultados encontrados
                        resultados.forEach(est => console.log(est.toString()));
                    } else {
                        console.log("No se encontraron estudiantes.");
                    }
                    break;
                }

                case 4: { // Matricular estudiante en asignatura
                    console.log("\n--- Matricular Estudiante ---");
                    const id = parseInt(prompt("ID del estudiante: "));
                    const nombreAsignatura = prompt("Nombre de la asignatura: ").trim();

                    listaEstudiantes.matricularEstudiante(id, nombreAsignatura, listaAsignaturas);
                    break;
                }

                case 5: { // Añadir calificación a un estudiante
                    console.log("\n--- Añadir Calificación ---");
                    const id = parseInt(prompt("ID del estudiante: "));
                    const nombreAsignatura = prompt("Nombre de la asignatura: ").trim();
                    const calificacion = parseInt(prompt("Calificación (0-10): "));

                    try {
                        listaEstudiantes.añadirCalificacion(id, nombreAsignatura, calificacion, listaAsignaturas);
                        console.log("Calificación añadida correctamente.");
                    
                    } catch (error) {
                        console.error(error.message);
                    }
                    break;
                }

                case 6: { // Desmatricular estudiante de asignatura
                    console.log("\n--- Desmatricular Estudiante ---");
                    const id = parseInt(prompt("ID del estudiante: "));
                    const nombreAsignatura = prompt("Nombre de la asignatura: ").trim();

                    try {
                        listaEstudiantes.desmatricularEstudiante(id, nombreAsignatura, listaAsignaturas);
                        console.log("El estudiante ha sido desmatriculado correctamente.");
                    
                    } catch (error) {
                        console.error(error.message);
                    }
                    break;
                }

                case 7: { // Obtener promedio general del estudiante
                    console.log("\n--- Obtener Promedio General ---");
                    const id = parseInt(prompt("ID del estudiante: "));

                    try {
                        const promedio = listaEstudiantes.obtenerPromedioGeneral(id);
                        console.log(`El promedio general del estudiante es: ${promedio.toFixed(2)}`);
                    
                    } catch (error) {
                        console.error(error.message);
                    }
                    break;
                }
                
                case 8: { // Volver al menú principal
                    console.log("Volviendo al menú principal...");
                    salir = true;  // Cambia el valor de la variable de control para salir
                    break;
                }

                default:
                    console.log("Opción inválida.");
            } 

        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    } while (!salir); // El bucle sigue hasta que el usuario elige salir
}*/

const formEstudiantes = document.getElementById('form-estudiantes');
    const listaEstudiantesUI = document.getElementById('lista-estudiantes');
    const btnBuscarEstudiante = document.getElementById('btn-buscar-estudiante'); // Si decides añadir un buscador
    const buscarEstudianteInput = document.getElementById('buscar-estudiante'); // Si decides añadir un buscador

    // Evento para añadir un estudiante
    formEstudiantes.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre-estudiante').value.trim();
        const edad = parseInt(document.getElementById('edad-estudiante').value);
        const calle = document.getElementById('calle-estudiante').value.trim();
        const numero = document.getElementById('numero-estudiante').value.trim();
        const piso = document.getElementById('piso-estudiante').value.trim();
        const codigoPostal = document.getElementById('codigo-postal-estudiante').value.trim();
        const provincia = document.getElementById('provincia-estudiante').value.trim();
        const localidad = document.getElementById('localidad-estudiante').value.trim();

        if (!nombre || !edad || !calle || !numero || !codigoPostal || !provincia || !localidad) {
            alert("Todos los campos obligatorios deben estar completos.");
            return;
        }

        const direccion = new Direccion(calle, numero, piso, codigoPostal, provincia, localidad);
        const estudiante = new Estudiante(nombre, edad, direccion);
        listaEstudiantes.agregarEstudiante(estudiante);
        localStorage.setItem('estudiantes', JSON.stringify(listaEstudiantes.estudiantes));
        actualizarListaEstudiantes();
        formEstudiantes.reset();
    });

    // Evento para eliminar un estudiante (al hacer clic en la lista)
    listaEstudiantesUI.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const id = parseInt(e.target.dataset.id); // Asume que cada <li> tiene un data-id
            listaEstudiantes.eliminarEstudiante(id);
            localStorage.setItem('estudiantes', JSON.stringify(listaEstudiantes.estudiantes));
            actualizarListaEstudiantes();
        }
    });

    // Función para actualizar la lista de estudiantes en la UI
    function actualizarListaEstudiantes() {
        listaEstudiantesUI.innerHTML = '';
        listaEstudiantes.estudiantes.forEach(estudiante => {
            const li = document.createElement('li');
            li.textContent = estudiante.toString();
            li.dataset.id = estudiante.id; // Asigna el ID del estudiante al elemento <li>
            listaEstudiantesUI.appendChild(li);
        });
    }

    // Cargar estudiantes del localStorage al iniciar
    if (localStorage.getItem('estudiantes')) {
        listaEstudiantes.estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
        actualizarListaEstudiantes();
    }
}