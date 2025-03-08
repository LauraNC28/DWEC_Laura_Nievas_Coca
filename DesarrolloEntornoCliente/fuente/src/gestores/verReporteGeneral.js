import { ListaEstudiantes } from "../clases/ListaEstudiantes.js";
import { ListaAsignaturas } from "../clases/ListaAsignaturas.js";
import { listaEstudiantes } from "../clases/ListaEstudiantes.js";
import { listaAsignaturas } from "../clases/ListaAsignaturas.js";


/**
 * Función para generar el reporte general de los estudiantes.
 * Incluye una lista de estudiantes con sus calificaciones y el promedio general.
 */
export function verReporteGeneral() {
    /*try {

        console.log("\n--- Reporte General ---");

        // Reporte de estudiantes
        console.log("\n Reporte de Estudiantes:");
        listaEstudiantes.generarReporte(); // Genera un reporte con los estudiantes y sus calificaciones
        
        // Mostrar el promedio general
        const promedioGeneral = listaEstudiantes.obtenerPromedioGeneral();
            
        if (isNaN(promedioGeneral)) {
            throw new Error("No se pudo calcular el promedio general. Verifique la lista de estudiantes.");
        }
        
        console.log(`Promedio general de la lista: ${promedioGeneral.toFixed(2)}`);

        // Reporte de asignaturas
        console.log("\n Reporte de Asignaturas:");
        listaAsignaturas.generarReporte();
    
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}*/


    try {
        const contenidoReporte = document.getElementById('contenido-reporte');
        let reporte = "<h3>--- Reporte General ---</h3>";

        // Reporte de estudiantes
        reporte += "<h4>Reporte de Estudiantes:</h4>";
        reporte += listaEstudiantes.generarReporte();

        // Mostrar el promedio general
        const promedioGeneral = listaEstudiantes.obtenerPromedioGeneral();
        if (isNaN(promedioGeneral)) {
            throw new Error("No se pudo calcular el promedio general. Verifique la lista de estudiantes.");
        }
        reporte += `<p><strong>Promedio general de la lista:</strong> ${promedioGeneral.toFixed(2)}</p>`;

        // Reporte de asignaturas
        reporte += "<h4>Reporte de Asignaturas:</h4>";
        reporte += listaAsignaturas.generarReporte();

        // Mostrar el reporte en el DOM
        contenidoReporte.innerHTML = reporte;

    } catch (error) {
        console.error(`Error: ${error.message}`);
        const contenidoReporte = document.getElementById('contenido-reporte');
        contenidoReporte.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}