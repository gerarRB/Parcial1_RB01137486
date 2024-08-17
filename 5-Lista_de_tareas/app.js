
//composition 
const { createApp, ref } = Vue;

// Función de composition para manejar la lista de tareas
const usarListaTareas = () => {
    // Array reactivo para almacenar las tareas
    const tareas = ref([]);
    // Variable reactiva para la nueva tarea
    const nuevaTarea = ref('');

    // Función para añadir una tarea
    const agregarTarea = () => {
        if (nuevaTarea.value.trim()) {
            tareas.value.push(nuevaTarea.value);
            nuevaTarea.value = '';
        }
    };

    // Función para eliminar una tarea
    const eliminarTarea = (indice) => {
        tareas.value.splice(indice, 1);
    };

    // Función para obtener tareas enumeradas
    const tareasEnumeradas = () => {
        return tareas.value.map((tarea, indice) => ({
            numero: indice + 1,
            texto: tarea
        }));
    };

    // Devolvemos las variables y funciones que necesitamos
    return {
        tareas,
        nuevaTarea,
        agregarTarea,
        eliminarTarea,
        tareasEnumeradas
    };
};

// Creamos la aplicación Vue
const app = createApp({
    setup() {
        const titulo = ref('Lista de Tareas');
        // Usamos nuestra función de composición
        const { tareas, nuevaTarea, agregarTarea, eliminarTarea, tareasEnumeradas } = usarListaTareas();

        // Devolvemos las variables y funciones para usarlas en el template
        return {
            titulo,
            tareas,
            nuevaTarea,
            agregarTarea,
            eliminarTarea,
            tareasEnumeradas
        };
    }
});

app.mount('#app');
