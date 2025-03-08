import { gestionarEstudiantes } from "./gestores/gestionarEstudiantes.js";
import { gestionarAsignaturas } from "./gestores/gestionarAsignaturas.js";
import { verReporteGeneral } from "./gestores/verReporteGeneral.js";
import { menuPrincipal } from "./menus/menuPrincipal.js";
import { Asignatura } from "./clases/Asignatura.js";
import { Estudiante } from "./clases/Estudiante.js";
import { ListaAsignaturas } from "./clases/ListaAsignaturas.js";
import { ListaEstudiantes } from "./clases/ListaEstudiantes.js";

import { listaEstudiantes } from "./clases/ListaEstudiantes.js";
import { listaAsignaturas } from "./clases/ListaAsignaturas.js";

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



/*
//COMPROBAR CLASE ASIGNATURA
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



//COMPROBAR CLASE LISTA ASIGNATURA
const matematicas1 = new Asignatura("Matematicas");
const historia1 = new Asignatura("Historia");
const fisica = new Asignatura("Fisica");

// Crear la lista de asignaturas
//const lista = new ListaAsignaturas(matematicas1, historia1);
listaAsignaturas.añadirAsignatura(matematicas1, historia1);
console.log(listaAsignaturas.lista.toString());  // Mostrar las asignaturas iniciales

// Agregar una asignatura
listaAsignaturas.añadirAsignatura(fisica);
console.log(listaAsignaturas.lista.toString());  // Mostrar todas las asignaturas

// Buscar asignaturas
listaAsignaturas.busquedaAsignaturas("Mat");  // Buscar "Mat"

try {
    // Intentar eliminar una asignatura que no está en la lista
    listaAsignaturas.eliminarAsignatura("Quimica");
} catch (error) {
    console.error(error.message);  // Debería lanzar error: "La asignatura no se encuentra en la lista."
}

// Eliminar asignatura
listaAsignaturas.eliminarAsignatura("Historia");
console.log(listaAsignaturas.lista.toString());  // Verifica que "Historia" ha sido eliminada



//COMPROBAR CLASE ESTUDIANTE
const estudiante1 = new Estudiante("Juan", 20, "Calle Falsa 123");

const matematicas2 = new Asignatura("Matematicas");
const historia2 = new Asignatura("Historia");

estudiante1.matricular(matematicas2);
estudiante1.matricular(historia2);

estudiante1.agregarCalificacion(matematicas2, 8);
estudiante1.agregarCalificacion(historia2, 10);

console.log("Promedio inicial:", estudiante1.obtenerPromedioGeneral()); // Debería ser 9

estudiante1.desmatricular(historia2);

console.log("Asignaturas actuales:", estudiante1.asignaturas); // No debe contener Historia
console.log("Promedio tras eliminar Historia:", estudiante1.obtenerPromedioGeneral()); // Debería ser 8


//PARTE 2
const matematicas3 = new Asignatura("Matematicas");
const historia3 = new Asignatura("Historia");

// Crear un estudiante
const estudiante2 = new Estudiante("Juan Perez", 20, "Calle Falsa 123");

// Mostrar información inicial del estudiante
console.log(estudiante2.toString());

// Matricular al estudiante en asignaturas
estudiante2.matricular(matematicas3);
estudiante2.matricular(historia3);
console.log("Asignaturas tras matrícula:", estudiante2.asignaturas);

// Agregar calificaciones
estudiante2.agregarCalificacion(matematicas3, 8);
estudiante2.agregarCalificacion(matematicas3, 7);
estudiante2.agregarCalificacion(historia3, 9);

// Verificar calificaciones por asignatura
console.log("Asignaturas con calificaciones:", estudiante2.asignaturas);

// Obtener promedio general
const promedioGeneral = estudiante2.obtenerPromedioGeneral();
console.log("Promedio general del estudiante:", promedioGeneral);

// Desmatricular una asignatura
estudiante2.desmatricular(matematicas3);
console.log("Asignaturas tras desmatricular Matemáticas:", estudiante2.asignaturas);

// Intentar desmatricular una asignatura no matriculada
try {
    estudiante2.desmatricular(matematicas3);
} catch (e) {
    console.error(e.message);
}

// Intentar agregar calificación a asignatura no matriculada
try {
    estudiante2.agregarCalificacion(matematicas3, 10);
} catch (e) {
    console.error(e.message);
}



//COMPROBAR LISTA ESTUDIANTES
const estudiante3 = new Estudiante("Juan Perez", 20, "Calle Falsa 123");
const estudiante4 = new Estudiante("Maria Lopez", 22, "Calle Real 456");
const matematicas4 = new Asignatura("Matematicas");
const historia4 = new Asignatura("Historia");

// Matricular asignaturas y añadir calificaciones
estudiante3.matricular(matematicas4);
estudiante3.agregarCalificacion(matematicas4, 9);

estudiante4.matricular(matematicas4);
estudiante4.agregarCalificacion(matematicas4, 7);
estudiante4.matricular(historia4);
estudiante4.agregarCalificacion(historia4, 8);

// Añadir estudiantes a la lista
listaEstudiantes.agregarEstudiante(estudiante3);
listaEstudiantes.agregarEstudiante(estudiante4);

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


// 1️ Crear asignaturas
const matematicas = new Asignatura("Matematicas");
const historia = new Asignatura("Historia");
const fisica = new Asignatura("Fisica");

listaAsignaturas.añadirAsignatura(matematicas);
listaAsignaturas.añadirAsignatura(historia);
listaAsignaturas.añadirAsignatura(fisica);

// 2️ Crear estudiantes
const estudiante1 = new Estudiante("Ana Gonzalez", 19, "Av. Siempre Viva 742");
const estudiante2 = new Estudiante("Luis Martinez", 21, "Calle Central 10");
const estudiante3 = new Estudiante("Carla Rojas", 22, "Paseo del Sol 5");

listaEstudiantes.agregarEstudiante(estudiante1);
listaEstudiantes.agregarEstudiante(estudiante2);
listaEstudiantes.agregarEstudiante(estudiante3);

// 3️ Matricular estudiantes en asignaturas
estudiante1.matricular(matematicas);
estudiante1.matricular(historia);
estudiante2.matricular(matematicas);
estudiante2.matricular(fisica);
estudiante3.matricular(historia);
estudiante3.matricular(fisica);

// 4️ Agregar calificaciones
estudiante1.agregarCalificacion(matematicas, 8);
estudiante1.agregarCalificacion(historia, 7);
estudiante2.agregarCalificacion(matematicas, 9);
estudiante2.agregarCalificacion(fisica, 6);
estudiante3.agregarCalificacion(historia, 10);
estudiante3.agregarCalificacion(fisica, 8);

// 5️ Probar búsqueda de asignaturas
console.log("\n Buscando asignaturas con 'ma':");
console.log(listaAsignaturas.busquedaAsignaturas("ma"));

// 6️ Probar búsqueda de estudiantes
console.log("\n Buscando estudiante con 'Luis':");
console.log(listaEstudiantes.buscarEstudiante("Luis"));

// 7️ Generar reportes
console.log("\n Reporte de estudiantes:");
listaEstudiantes.generarReporte();

console.log("\n Reporte de asignaturas:");
listaAsignaturas.generarReporte();

// 8️ Eliminar un estudiante y ver resultados
console.log("\n Eliminando a Carla Rojas...");
listaEstudiantes.eliminarEstudiante(estudiante3.id);

console.log("\n Reporte de estudiantes después de eliminar:");
listaEstudiantes.generarReporte();

// 9️ Eliminar una asignatura y ver resultados
console.log("\n Eliminando asignatura Física...");
listaAsignaturas.eliminarAsignatura("Fisica");

console.log("\n Reporte de asignaturas después de eliminar:");
listaAsignaturas.generarReporte();


// Llama a la función principal para ejecutar el programa
main();