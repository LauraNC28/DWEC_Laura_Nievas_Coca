import { Asignatura } from "./clases/Asignatura.js";
import { Estudiante } from "./clases/Estudiante.js";
import { Direccion } from "./clases/Direccion.js";
import { listaEstudiantes } from "./clases/ListaEstudiantes.js";
import { listaAsignaturas } from "./clases/ListaAsignaturas.js";


//let lista = new listaEstudiantes(); // La lista se carga automáticamente desde localStorage

document.addEventListener('DOMContentLoaded', () => {
    console.log('subido');
    
    const agregarEstudianteBtn = document.getElementById('agregarEstudianteBtn');
    const eliminarEstudianteBtn = document.getElementById('eliminarEstudianteBtn');
    const matricularrEstudianteBtn = document.getElementById('matricularEstudianteBtn');
    const formularioAgregarEstudiante = document.getElementById('formularioAgregarEstudiante');
    const formularioEliminarEstudiante = document.getElementById('formularioEliminarEstudiante');
    const formularioMatricularEstudiante = document.getElementById('formularioMatricularEstudiante');
    const formularioDesatricularEstudiante = document.getElementById('formularioDesMatricularEstudiante');
    const nuevoEstudianteForm = document.getElementById('nuevoEstudianteForm');
    const nuevoCalifiacionForm = document.getElementById('aniadirCalificacionform');
    const eliminarEstudianteForm = document.getElementById('eliminarEstudianteForm');
    const cancelarForm = document.getElementById('cancelarForm');
    const resultadoContainer = document.getElementById('resultadoContainer');
    const formularioDesMatricularEstudiante = document.getElementById('formularioDesMatricularEstudiante');
    const formularioAniadirCalifiacion = document.getElementById('formularioaniadirCalifiacion');
    const formularioCalcularPromedio = document.getElementById('formulariocalcularPromedio');
    const formularioBuscarAsignaturas = document.getElementById('formulariobuscarAsignaturas');
    const formularioMostrarEstudiantes = document.getElementById('formularioMostrarEstudiantes');
    const formularioBuscarEstudiante = document.getElementById('formularioBuscarEstudiante');


    // Mostrar estudiantes al cargar la página
    mostrarEstudiantes();

    // Mostrar formulario de agregar estudiante
    agregarEstudianteBtn.addEventListener('click', () => {
        formularioAgregarEstudiante.classList.remove('hidden');
        formularioEliminarEstudiante.classList.add('hidden');
        document.getElementById('formularioMatricularEstudiante')?.classList.add('hidden');
    });


    // Mostrar formulario de eliminar estudiante
    eliminarEstudianteBtn.addEventListener('click', () => {
        formularioEliminarEstudiante.classList.remove('hidden');
        formularioAgregarEstudiante.classList.add('hidden');
        document.getElementById('formularioMatricularEstudiante')?.classList.add('hidden');
    });


    // Ocultar formulario de agregar estudiante
    const cancelarForms = document.querySelectorAll('#cancelarForm');

    cancelarForms.forEach(btn => {
        btn.addEventListener('click', () => {
            formularioAgregarEstudiante.classList.add('hidden');
            formularioEliminarEstudiante.classList.add('hidden');
            formularioMatricularEstudiante.classList.add('hidden');
            formularioDesMatricularEstudiante.classList.add('hidden');
            formularioAniadirCalifiacion.classList.add('hidden');
            formularioCalcularPromedio.classList.add('hidden');
            formularioBuscarAsignaturas.classList.add('hidden');
            formularioMostrarEstudiantes.classList.add('hidden');
            formularioBuscarEstudiante.classList.add('hidden');
        });
    });




    // Manejar el envío del formulario de agregar estudiante
    nuevoEstudianteForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        // Limpiar mensajes de error anteriores
        limpiarErrores();
    
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const edad = parseInt(document.getElementById('edad').value.trim(), 10);
        const calle = document.getElementById('calle').value.trim();
        const numero = document.getElementById('numero').value.trim();
        const piso = document.getElementById('piso').value.trim(); // Opcional
        const codigoPostal = document.getElementById('codigoPostal').value.trim();
        const provincia = document.getElementById('provincia').value.trim();
        const localidad = document.getElementById('localidad').value.trim();
    
        let isValid = true;
    
        // Validar Nombre
        if (!nombre) {
            mostrarError('error-nombre', 'El nombre es obligatorio.');
            isValid = false;
        }
    
        // Validar Edad
        if (isNaN(edad) || edad <= 0) {
            mostrarError('error-edad', 'La edad debe ser un número válido mayor a 0.');
            isValid = false;
        }
    
        // Validar Calle
        if (!calle) {
            mostrarError('error-calle', 'La calle es obligatoria.');
            isValid = false;
        }
    
        // Validar Número
        if (!numero) {
            mostrarError('error-numero', 'El número es obligatorio.');
            isValid = false;
        }
    
        // Validar Código Postal
        if (!/^\d{5}$/.test(codigoPostal)) {
            mostrarError('error-codigoPostal', 'El código postal debe tener exactamente 5 números.');
            isValid = false;
        }
    
        // Validar Provincia
        if (!provincia) {
            mostrarError('error-provincia', 'La provincia es obligatoria.');
            isValid = false;
        }
    
        // Validar Localidad
        if (!localidad) {
            mostrarError('error-localidad', 'La localidad es obligatoria.');
            isValid = false;
        }
    
        // Si todas las validaciones pasan, proceder a crear el estudiante
        if (isValid) {
            try {
                // Crear la dirección y el estudiante
                const direccion = new Direccion(calle, numero, piso, codigoPostal, provincia, localidad);
                const nuevoEstudiante = new Estudiante(nombre, edad, direccion);
    
                // Agregar el estudiante a la lista
                listaEstudiantes.agregarEstudiante(nuevoEstudiante);
                listaEstudiantes.guardarEstudiantes(); // Guardar la lista en localStorage

                // Mostrar mensaje de éxito
                resultadoContainer.innerHTML = `<p>Estudiante ${nombre} agregado correctamente.</p>`;
    
                // Actualizar la lista de estudiantes
                mostrarEstudiantes();
    
                // Ocultar el formulario y limpiarlo
                formularioAgregarEstudiante.classList.add('hidden');
                nuevoEstudianteForm.reset();
            } catch (error) {
                alert(error.message);
            }
        }
    });
    

    // Manejar el envío del formulario de eliminar estudiante
    document.getElementById('eliminarEstudianteForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
    
        limpiarErrores();
    
        const idEliminarInput = document.getElementById("idEliminar");
    
        if (!idEliminarInput) {
            alert("El campo con ID 'idEliminar' no se encontró en el formulario.");
            return;
        }
    
        const idEliminarValor = idEliminarInput.value?.trim();
        const idEliminar = Number(idEliminarValor);
    
        if (idEliminarValor === "" || isNaN(idEliminar)) {
            mostrarError('error-idEliminar', 'El ID del estudiante es obligatorio y debe ser un número.');
            return;
        }
    
        try {
            listaEstudiantes.eliminarEstudiante(idEliminar);
            listaEstudiantes.guardarEstudiantes();
    
            resultadoContainer.innerHTML = `<p>Estudiante con ID ${idEliminar} eliminado correctamente.</p>`;
            mostrarEstudiantes();
            document.getElementById('formularioEliminarEstudiante')?.classList.add('hidden');
            e.target.reset();
        
        } catch (error) {
            mostrarError('error-idEliminar', error.message);
        }
    });
    
    // Función para mostrar errores
    function mostrarError(idError, mensaje) {
        const errorContainer = document.getElementById(idError);
        errorContainer.textContent = mensaje;
        errorContainer.style.color = 'red';
    }
    
    // Función para limpiar errores
    function limpiarErrores() {
        const errorContainers = document.querySelectorAll('.error-container');
        errorContainers.forEach(container => {
            container.textContent = '';
        });
    }

    // Función para mostrar la lista de estudiantes
    function mostrarEstudiantes() {
        const listaEstudiantesContainer = document.getElementById('listaEstudiantesContainer');
        listaEstudiantesContainer.innerHTML = '<h2>Lista de Estudiantes</h2>';
        if (listaEstudiantes.lista.length === 0) {
            listaEstudiantesContainer.innerHTML += '<p>No hay estudiantes en la lista.</p>';
        } else {
            listaEstudiantes.lista.forEach(est => {
                listaEstudiantesContainer.innerHTML += `<p>(${est.id}) ${est.nombre} (${est.edad} años)</p>`;
            });
        }
    }

    // Función para guardar la lista en localStorage




    // Botón para mostrar el formulario de matrícula
    document.getElementById('matricularEstudianteBtn').addEventListener('click', () => {
        const formularioMatricularEstudiante = document.getElementById('formularioMatricularEstudiante');
        if (formularioMatricularEstudiante) {
            formularioMatricularEstudiante.classList.remove('hidden');
            formularioAgregarEstudiante.classList.add('hidden');
            formularioEliminarEstudiante.classList.add('hidden');
        }
    });

    // Manejar el envío del formulario de matrícula
    document.getElementById('matricularEstudianteForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
    
        // Limpiar mensajes de error anteriores
        limpiarErrores();
    
        // Obtener valores del formulario
        const estudianteId = parseInt(document.getElementById('estudianteidMat').value.trim());
        const asignaturaNombre = document.getElementById('asignaturaMatricular').value.trim();
    
        let isValid = true;
    
        // Validar ID del Estudiante
        if (!estudianteId || isNaN(estudianteId)) {
            mostrarError('error-estudianteidMat', 'Por favor, ingresa un ID de estudiante válido.');
            isValid = false;
        }
    
        // Validar Nombre de la Asignatura
        if (!asignaturaNombre) {
            mostrarError('error-asignaturaMatricular', 'Por favor, ingresa el nombre de la asignatura.');
            isValid = false;
        }
    
        // Si todas las validaciones pasan, proceder a matricular al estudiante
        if (isValid) {
            // Crear la asignatura y matricular al estudiante
            //const asignatura = new Asignatura(asignaturaNombre, calificacion);
            listaEstudiantes.matricularEstudiante(estudianteId, asignaturaNombre, listaAsignaturas);
            listaEstudiantes.guardarEstudiantes(); // Guardar la lista en localStorage

            // Mostrar mensaje de éxito
            alert(`El estudiante ${estudianteId} ha sido matriculado en ${asignaturaNombre}.`);
    
            // Limpiar el formulario
            formularioMatricularEstudiante.classList.add('hidden');
            document.getElementById('matricularEstudianteForm').reset();
            // Solo limpiar si el contenedor existe
            const calificacionesContainer = document.getElementById('calificacionesContainer');
            if (calificacionesContainer) {
                calificacionesContainer.innerHTML = '';
            }
        }
    });


    document.getElementById('desMatricularEstudianteBtn').addEventListener('click', () => {
        const formularioMatricularEstudiante = document.getElementById('formularioDesMatricularEstudiante');
        if (formularioMatricularEstudiante) {
            formularioMatricularEstudiante.classList.remove('hidden');
            formularioAgregarEstudiante.classList.add('hidden');
            formularioEliminarEstudiante.classList.add('hidden');
        }
    });

 

    document.getElementById('desMatricularEstudianteForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
    
        // Limpiar mensajes de error anteriores
        limpiarErrores();
    
        // Obtener valores del formulario
        const estudianteId = parseInt(document.getElementById('estudianteidDes').value.trim());
        const asignaturaNombre = document.getElementById('asignaturaDesmatricular').value.trim();
    
        let isValid = true;
    
        // Validar ID del Estudiante
        if (!estudianteId || isNaN(estudianteId)) {
            mostrarError('error-estudianteidDes', 'Por favor, ingresa un ID de estudiante válido.');
            isValid = false;
        }
    
        // Validar Nombre de la Asignatura
        if (!asignaturaNombre) {
            mostrarError('error-asignaturaDesmatricular', 'Por favor, ingresa el nombre de la asignatura.');
            isValid = false;
        }
    
        // Si todas las validaciones pasan, proceder a desmatricular al estudiante
        if (isValid) {
            // Desmatricular al estudiante de la asignatura
            listaEstudiantes.desmatricularEstudiante(estudianteId, asignaturaNombre);
            listaEstudiantes.guardarEstudiantes(); // Guardar la lista en localStorage

            // Mostrar mensaje de éxito
            alert(`El estudiante ${estudianteId} ha sido desmatriculado de ${asignaturaNombre}.`);
    
            // Limpiar y ocultar el formulario
            const formularioDesMatricularEstudiante = document.getElementById('formularioDesMatricularEstudiante');
            if (formularioDesMatricularEstudiante) {
                formularioDesMatricularEstudiante.classList.add('hidden'); // Ocultar el formulario
            }
    
            // Limpiar los campos del formulario
            document.getElementById('desMatricularEstudianteForm').reset();
        }
    });
    

    // Mostrar el formulario de añadir calificación cuando se hace clic en el botón
    document.getElementById('aniadirCalificacionBtn')?.addEventListener('click', () => {
        const formularioAniadirCalificacion = document.getElementById('formularioaniadirCalifiacion');
        if (formularioAniadirCalificacion) {
            formularioAniadirCalificacion.classList.remove('hidden'); // Mostrar el formulario
            document.getElementById('formularioAgregarEstudiante')?.classList.add('hidden');
            document.getElementById('formularioEliminarEstudiante')?.classList.add('hidden');
            document.getElementById('formularioMatricularEstudiante')?.classList.add('hidden');
            document.getElementById('formularioDesMatricularEstudiante')?.classList.add('hidden');
        }
    });
    
    // Manejar el envío del formulario de añadir calificación
    document.getElementById('aniadirCalificacionform')?.addEventListener('submit', (e) => {
        e.preventDefault();
        limpiarErrores();
    
        const idRaw = document.getElementById('estudianteid').value;
    console.log("Valor ingresado en ID:", idRaw);
    const idEstudiante = Number(idRaw.trim());
        const nombreAsignatura = document.getElementById('asignatura').value.trim();
        const calificacion = parseInt(document.getElementById('califiaciones').value);
    
        let isValid = true;
    
        if (isNaN(idEstudiante) || idEstudiante <= 0) {
            mostrarError('error-estudianteid', 'ID del estudiante inválido.');
            isValid = false;
        }
    
        if (!nombreAsignatura) {
            mostrarError('error-asignatura', 'El nombre de la asignatura es obligatorio.');
            isValid = false;
        }
    
        if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
            mostrarError('error-califiaciones', 'Calificación inválida. Debe estar entre 0 y 10.');
            isValid = false;
        }
    
        if (isValid) {
            try {
                listaEstudiantes.añadirCalificacion(idEstudiante, nombreAsignatura, calificacion);
                listaEstudiantes.guardarEstudiantes();
    
                alert(`Calificación ${calificacion} añadida a ${nombreAsignatura} para el estudiante con ID ${idEstudiante}.`);
    
                document.getElementById('aniadirCalificacionform').reset();
                document.getElementById('formularioaniadirCalifiacion')?.classList.add('hidden');
            } catch (error) {
                alert("Error al añadir calificación: " + error.message);
            }
        }
    });

    document.getElementById('btnAgregarAsignatura').addEventListener('click', () => {
        document.getElementById('formularioAgregarAsignatura').classList.remove('hidden');
    });
    
    document.getElementById('agregarAsignaturaForm').addEventListener('submit', (e) => {
        e.preventDefault();
    
        const nombre = document.getElementById('nombreAsignaturaNueva').value.trim();
        if (!nombre) {
            alert("El nombre es obligatorio.");
            return;
        }
    
        try {
            const nueva = new Asignatura(nombre);
            listaAsignaturas.añadirAsignatura(nueva);
            localStorage.setItem("asignaturas", JSON.stringify(listaAsignaturas.lista));
            alert(`Asignatura "${nombre}" añadida correctamente.`);
            e.target.reset();
            document.getElementById('formularioAgregarAsignatura').classList.add('hidden');
        } catch (error) {
            alert(error.message);
        }
    });


    document.getElementById('btnEliminarAsignatura').addEventListener('click', () => {
        document.getElementById('formularioEliminarAsignatura').classList.remove('hidden');
    });

    document.getElementById('eliminarAsignaturaForm').addEventListener('submit', (e) => {
        e.preventDefault();
    
        const nombre = document.getElementById('nombreAsignaturaEliminar').value.trim();
        if (!nombre) {
            alert("El nombre es obligatorio.");
            return;
        }
    
        try {
            listaAsignaturas.eliminarAsignatura(nombre);
            localStorage.setItem("asignaturas", JSON.stringify(listaAsignaturas.lista));
            alert(`Asignatura "${nombre}" eliminada correctamente.`);
            e.target.reset();
            document.getElementById('formularioEliminarAsignatura').classList.add('hidden');
        } catch (error) {
            alert(error.message);
        }
    });


    // Mostrar el formulario de calcular promedio cuando se hace clic en el botón
    document.getElementById('calcularPromedioBtn')?.addEventListener('click', () => {
        const formularioCalcularPromedio = document.getElementById('formulariocalcularPromedio');
        if (formularioCalcularPromedio) {
            formularioCalcularPromedio.classList.remove('hidden'); // Mostrar el formulario

            // Ocultar otros formularios
            document.getElementById('formularioAgregarEstudiante')?.classList.add('hidden');
            document.getElementById('formularioEliminarEstudiante')?.classList.add('hidden');
            document.getElementById('formularioMatricularEstudiante')?.classList.add('hidden');
            document.getElementById('formularioDesMatricularEstudiante')?.classList.add('hidden');
            document.getElementById('formularioaniadirCalifiacion')?.classList.add('hidden'); // Ocultar formulario de añadir calificación
            document.getElementById('formulariobuscarAsignaturas')?.classList.add('hidden'); // Ocultar formulario de buscar asignaturas
            document.getElementById('formularioMostrarEstudiantes')?.classList.add('hidden'); // Ocultar formulario de mostrar estudiantes
            document.getElementById('formularioBuscarEstudiante')?.classList.add('hidden'); // Ocultar formulario de buscar estudiantes
        }
    });

    // Mostrar el formulario de calcular promedio cuando se hace clic en el botón
    document.getElementById('calcularPromedioform')?.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    
        // Limpiar mensajes de error anteriores
        limpiarErrores();
    
        // Obtener valores del formulario
        const nombreEstudiante = document.getElementById('nombreEstudiantee').value.trim();
    
        let mensaje = "";

        try {
            if (!nombreEstudiante) {
                // Calcular promedio general de todos los estudiantes
                const promedioGeneral = listaEstudiantes.obtenerPromedioGeneral();
                mensaje = `Promedio general de todos los estudiantes: ${promedioGeneral.toFixed(2)}`;
            
            } else {
                // Calcular promedio individual del estudiante
                const estudiante = listaEstudiantes.lista.find(est =>
                    est.nombre.toLowerCase() === nombreEstudiante.toLowerCase()
                );

                if (!estudiante) {
                    throw new Error(`No se encontró un estudiante con el nombre: ${nombreEstudiante}`);
                }

                const promedio = estudiante.obtenerPromedioGeneral();
                mensaje = `El promedio del estudiante ${nombreEstudiante} es: ${promedio.toFixed(2)}`;
            }

            alert(mensaje);
            
            // Ocultar y limpiar el formulario
            document.getElementById('formulariocalcularPromedio')?.classList.add('hidden');
            document.getElementById('calcularPromedioform').reset();
            
        } catch (error) {
            alert("Error: " + error.message);
        }
    });

    // Mostrar el promedio general de todos los estudiantes
document.getElementById('promedioGeneral')?.addEventListener('click', () => {
    try {
        const promedio = listaEstudiantes.obtenerPromedioGeneral();
        alert(`Promedio general de todos los estudiantes: ${promedio.toFixed(2)}`);
    } catch (error) {
        alert("Error al calcular el promedio general: " + error.message);
    }
});

    // Mostrar el formulario de buscar asignaturas cuando se hace clic en el botón
    document.getElementById('buscarAsignaturasbtn')?.addEventListener('click', () => {
        const formularioBuscarAsignaturas = document.getElementById('formulariobuscarAsignaturas');
        if (formularioBuscarAsignaturas) {
            formularioBuscarAsignaturas.classList.remove('hidden'); // Mostrar el formulario
            // Ocultar otros formularios
            document.getElementById('formularioAgregarEstudiante')?.classList.add('hidden');
            document.getElementById('formularioEliminarEstudiante')?.classList.add('hidden');
            document.getElementById('formularioMatricularEstudiante')?.classList.add('hidden');
            document.getElementById('formularioDesMatricularEstudiante')?.classList.add('hidden');
            document.getElementById('formularioaniadirCalifiacion')?.classList.add('hidden');
        }
    });

    // Manejar el envío del formulario de buscar asignaturas
    document.getElementById('buscarAsignaturasform')?.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    
        // Limpiar mensajes de error anteriores
        limpiarErrores();
    
        // Obtener valores del formulario
        const nombreAsignatura = document.getElementById('asignaturasNombre').value.trim();
    
        let isValid = true;
    
        // Validar Nombre de la Asignatura
        if (!nombreAsignatura) {
            mostrarError('error-asignaturasNombre', 'Por favor, ingresa el nombre de la asignatura.');
            isValid = false;
        }
    
        // Si todas las validaciones pasan, proceder a buscar la asignatura
        if (isValid) {
            try {
                // Buscar la asignatura por nombre
                const resultado = listaAsignaturas.busquedaAsignaturas(nombreAsignatura);
                if (!resultado || resultado.length === 0) {
                    throw new Error(`No se encontraron asignaturas con el nombre: ${nombreAsignatura}`);
                }
    
                // Mostrar el resultado en el contenedor HTML
                const resultadoBusquedaContainer = document.getElementById('resultadoBusqueda');
                if (resultadoBusquedaContainer) {
                    resultadoBusquedaContainer.innerHTML = `<p>Resultado de la búsqueda:</p><pre>${resultado}</pre>`;
                    resultadoBusquedaContainer.classList.add('visible'); // Mostrar el contenedor
                }
    
                // Ocultar y limpiar el formulario
                const formularioBuscarAsignaturas = document.getElementById('formulariobuscarAsignaturas');
                if (formularioBuscarAsignaturas) {
                    formularioBuscarAsignaturas.classList.add('hidden'); // Ocultar el formulario
                }
                document.getElementById('buscarAsignaturasform').reset(); // Limpiar el formulario
            } catch (error) {
                alert(error.message); // Mostrar mensaje de error si algo falla
            }
        }
    });


    // Mostrar el formulario de buscar asignatura cuando se hace clic en el botón
    document.getElementById('mostrarEstudiantesbtn')?.addEventListener('click', () => {
        const resultadoContainer = document.getElementById('resultadoContainer');
        if (resultadoContainer) {
            resultadoContainer.innerHTML = `<p>Estudiantes  "${listaEstudiantes.generarReporte()}":</p>`;
        }
    });


    // Mostrar el formulario de buscar asignatura cuando se hace clic en el botón
    document.getElementById('buscarEstudiantebtn')?.addEventListener('click', () => {
        const formularioBuscarEstudiante = document.getElementById('formularioBuscarEstudiante');
        if (formularioBuscarEstudiante) {
            formularioBuscarEstudiante.classList.remove('hidden'); // Mostrar el formulario
            // Ocultar otros formularios
            document.getElementById('formularioAgregarEstudiante')?.classList.add('hidden');
            document.getElementById('formularioEliminarEstudiante')?.classList.add('hidden');
            document.getElementById('formularioMatricularEstudiante')?.classList.add('hidden');
            document.getElementById('formularioDesMatricularEstudiante')?.classList.add('hidden');
            document.getElementById('formularioaniadirCalifiacion')?.classList.add('hidden');
        }
    });

    //
    document.getElementById('buscarEstudiantebtn')?.addEventListener('click', () => {
        const formularioBuscarEstudiante = document.getElementById('formularioBuscarEstudiante');
        if (formularioBuscarEstudiante) {
            formularioBuscarEstudiante.classList.remove('hidden'); // Mostrar el formulario
            // Ocultar otros formularios
            document.getElementById('formularioAgregarEstudiante')?.classList.add('hidden');
            document.getElementById('formularioEliminarEstudiante')?.classList.add('hidden');
            document.getElementById('formularioMatricularEstudiante')?.classList.add('hidden');
            document.getElementById('formularioDesMatricularEstudiante')?.classList.add('hidden');
            document.getElementById('formularioaniadirCalifiacion')?.classList.add('hidden');
        }
    });

    // Manejar el envío del formulario de búsqueda de estudiante
    document.getElementById('buscarEstudianteform')?.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        // Limpiar mensajes de error anteriores
        limpiarErrores();

        // Obtener valores del formulario
        const nombreEstudiante = document.getElementById('estudianteBuscar').value.trim();

        let isValid = true;

        // Validar Nombre del Estudiante
        if (!nombreEstudiante) {
            mostrarError('error-estudianteBuscar', 'Por favor, ingresa el nombre del estudiante.');
            isValid = false;
        }

        // Si todas las validaciones pasan, proceder a buscar el estudiante
        if (isValid) {
            try {
                // Buscar el estudiante por nombre
                const estudiantes = listaEstudiantes.buscarEstudiante(nombreEstudiante);

                // Verificar si se encontraron estudiantes
                if (!estudiantes || estudiantes.length === 0) {
                    throw new Error(`No se encontraron estudiantes con el nombre: ${nombreEstudiante}`);
                }

                // Mostrar los resultados en el contenedor
                const resultadoContainer = document.getElementById('resultadoContainer');
                if (resultadoContainer) {
                    resultadoContainer.innerHTML = `<p>Estudiantes encontrados:${estudiantes
                        
                        }</p>`;
                    resultadoContainer.classList.add('visible'); // Mostrar el contenedor
                }

                // Ocultar y limpiar el formulario
                const formularioBuscarEstudiante = document.getElementById('formularioBuscarEstudiante');
                if (formularioBuscarEstudiante) {
                    formularioBuscarEstudiante.classList.add('hidden'); // Ocultar el formulario
                }

                document.getElementById('buscarEstudianteform').reset(); // Limpiar el formulario
            
            } catch (error) {
                alert(error.message); // Mostrar mensaje de error si algo falla
            }
        }
    });
    
    //
    document.getElementById('promedioGeneral')?.addEventListener('click', () => {
        try {
            // Calcular el promedio general de todos los estudiantes


            const resultadoContainer = document.getElementById('resultadoContainer');
            if (resultadoContainer) {
                resultadoContainer.innerHTML = `
                <p>Promedio General de la Clase: ${listaEstudiantes.obtenerPromedioGeneral()}</p>
                `;
            }

        } catch (error) {
            alert(error.message); // Mostrar mensaje de error si algo falla
        }
        });

});