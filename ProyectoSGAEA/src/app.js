import { gestionarEstudiantes } from "./gestores/gestionarEstudiantes.js";
import { gestionarAsignaturas } from "./gestores/gestionarAsignaturas.js";
import { verReporteGeneral } from "./gestores/verReporteGeneral.js";
import { menuPrincipal } from "./menus/menuPrincipal.js";


/**
 * Función principal que controla el flujo del programa.
 * Permite al usuario navegar por las distintas opciones del menú principal:
 * gestionar estudiantes, gestionar asignaturas, ver el reporte general,
 * o salir del programa.
 */
function main() {

    let opcion; // Variable para almacenar la opción seleccionada por el usuario
    
    do {
        try {
            // Muestra el menú principal y obtiene la opción
            opcion = menuPrincipal(); 
            
            switch (opcion) {
                case 1: // Gestionar estudiantes
                    gestionarEstudiantes(); // Llama a la función para gestionar estudiantes
                    break;

                case 2: // Gestionar asignaturas
                    gestionarAsignaturas(); // Llama a la función para gestionar asignaturas
                    break;

                case 3: // Ver reporte general
                    verReporteGeneral(); // Genera y muestra el reporte general
                    break;

                case 4: // Salir del programa
                    console.log("Saliendo del programa..."); // Mensaje de salida
                    break;

                default: // Maneja opciones inválidas
                    console.log("Opción inválida. Intente nuevamente."); // Mensaje si la opción es inválida
            }

        } catch (error) {
            // Captura y muestra errores inesperados
            console.error(`Error: ${error.message}`);
        }
        
    } while (opcion !== 4); // El bucle sigue hasta que el usuario elige salir
}

// Llama a la función principal para ejecutar el programa
main();



/*PRUEBAS
COMPROBAR CLASE ASIGNATURA
try {
    const matematicas = new Asignatura("Matemáticas I");

    // Verificar el nombre
    console.log(matematicas.nombre); // Debe mostrar: "Matemáticas I"

    // Agregar calificaciones válidas
    matematicas.agregarCalificacion(8);
    matematicas.agregarCalificacion(7);
    matematicas.agregarCalificacion(9);

    // Verificar las calificaciones
    console.log(matematicas.calificaciones); // Debe mostrar: [8, 7, 9]

    // Obtener el promedio
    console.log(matematicas.obtenerPromedio()); // Debe mostrar: 8

    // Usar el método toString
    console.log(matematicas.toString()); // Debe mostrar: "Nombre: Matemáticas I"
} catch (error) {
	console.error("Error al crear o manejar la asignatura:", error.message);
}



COMPROBAR CLASE LISTA ASIGNATURAS
const matematicas = new Asignatura("Matemáticas");
const historia = new Asignatura("Historia");
const fisica = new Asignatura("Física");

// Crear la lista de asignaturas
const lista = new ListaAsignaturas(matematicas, historia);

console.log(lista.lista.toString());  // Mostrar las asignaturas iniciales

// Agregar una asignatura
lista.añadirAsignatura(fisica);
console.log(lista.lista.toString());  // Mostrar todas las asignaturas

// Buscar asignaturas
lista.busquedaAsignaturas("Mat");  // Buscar "Mat"

try {
    // Intentar eliminar una asignatura que no está en la lista
    lista.eliminarAsignatura("Química");
} catch (error) {
    console.error(error.message);  // Debería lanzar error: "La asignatura no se encuentra en la lista."
}

// Eliminar asignatura
lista.eliminarAsignatura("Historia");
console.log(lista.lista.toString());  // Verifica que "Historia" ha sido eliminada



COMPROBAR CLASE ESTUDIANTE
const estudiante1 = new Estudiante("Juan", 20, "Calle Falsa 123");

const matematicas = new Asignatura("Matemáticas");
const historia = new Asignatura("Historia");

estudiante1.matricular(matematicas);
estudiante1.matricular(historia);

estudiante1.agregarCalificacion(matematicas, 8);
estudiante1.agregarCalificacion(historia, 10);

console.log("Promedio inicial:", estudiante1.obtenerPromedioGeneral()); // Debería ser 9

estudiante1.desmatricular(historia);

console.log("Asignaturas actuales:", estudiante1.asignaturas); // No debe contener Historia
console.log("Promedio tras eliminar Historia:", estudiante1.obtenerPromedioGeneral()); // Debería ser 8


PARTE 2
const matematicas = new Asignatura("Matemáticas");
const historia = new Asignatura("Historia");

// Crear un estudiante
const estudiante1 = new Estudiante("Juan Pérez", 20, "Calle Falsa 123");

// Mostrar información inicial del estudiante
console.log(estudiante1.toString());

// Matricular al estudiante en asignaturas
estudiante1.matricular(matematicas);
estudiante1.matricular(historia);
console.log("Asignaturas tras matrícula:", estudiante1.asignaturas);

// Agregar calificaciones
estudiante1.agregarCalificacion(matematicas, 8);
estudiante1.agregarCalificacion(matematicas, 7);
estudiante1.agregarCalificacion(historia, 9);

// Verificar calificaciones por asignatura
console.log("Asignaturas con calificaciones:", estudiante1.asignaturas);

// Obtener promedio general
const promedioGeneral = estudiante1.obtenerPromedioGeneral();
console.log("Promedio general del estudiante:", promedioGeneral);

// Desmatricular una asignatura
estudiante1.desmatricular(matematicas);
console.log("Asignaturas tras desmatricular Matemáticas:", estudiante1.asignaturas);

// Intentar desmatricular una asignatura no matriculada
try {
    estudiante1.desmatricular(matematicas);
} catch (e) {
    console.error(e.message);
}

// Intentar agregar calificación a asignatura no matriculada
try {
    estudiante1.agregarCalificacion(matematicas, 10);
} catch (e) {
    console.error(e.message);
}



COMPROBAR LISTA ESTUDIANTES
const listaEstudiantes = new ListaEstudiantes();

const estudiante1 = new Estudiante("Juan Pérez", 20, "Calle Falsa 123");
const estudiante2 = new Estudiante("María López", 22, "Calle Real 456");
const matematicas = new Asignatura("Matemáticas");
const historia = new Asignatura("Historia");

// Matricular asignaturas y añadir calificaciones
estudiante1.matricular(matematicas);
estudiante1.agregarCalificacion(matematicas, 9);

estudiante2.matricular(matematicas);
estudiante2.agregarCalificacion(matematicas, 7);
estudiante2.matricular(historia);
estudiante2.agregarCalificacion(historia, 8);

// Añadir estudiantes a la lista
listaEstudiantes.agregarEstudiante(estudiante1);
listaEstudiantes.agregarEstudiante(estudiante2);

// Probar métodos
console.log("Promedio general de la lista:", listaEstudiantes.obtenerPromedioGeneral()); // Promedio esperado: 8

console.log("\nBuscar estudiante con patrón 'Mar':");
listaEstudiantes.buscarEstudiante("Mar").forEach(e => console.log(e.toString()));

console.log("\nReporte de estudiantes:");
listaEstudiantes.generarReporte();

console.log("\nDespués de eliminar a Juan Pérez:");
listaEstudiantes.eliminarEstudiante(1);
listaEstudiantes.generarReporte();
*/ 