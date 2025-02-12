import { ListaEstudiantes } from "../clases/ListaEstudiantes.js";


const listaEstudiantes = new ListaEstudiantes();


/**
 * Función para generar el reporte general de los estudiantes.
 * Incluye una lista de estudiantes con sus calificaciones y el promedio general.
 */
export function verReporteGeneral() {
    try {

        console.log("\n--- Reporte General ---");
        listaEstudiantes.generarReporte(); // Genera un reporte con los estudiantes y sus calificaciones
        
        const promedioGeneral = listaEstudiantes.obtenerPromedioGeneral();
            
        if (isNaN(promedioGeneral)) {
            throw new Error("No se pudo calcular el promedio general. Verifique la lista de estudiantes.");
        }
        
        console.log(`Promedio general de la lista: ${promedioGeneral.toFixed(2)}`);
    
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}