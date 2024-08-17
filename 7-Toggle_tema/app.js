

//compositon 
const { createApp, reactive, watch } = Vue;

createApp({
    setup() {
        // Estado reactivo para manejar el tema actual
        const estado = reactive({
            tema: 'claro'  // Inicialmente el tema es 'claro'
        });

        // Observador para cambiar la clase del <body> según el tema actual
        watch(
            () => estado.tema,
            (nuevoTema) => {
                document.body.className = nuevoTema;
            },
            { immediate: true } // Para aplicar el tema inmediatamente
        );

        // Función para cambiar entre tema claro y oscuro
        const cambiarTema = () => {
            estado.tema = estado.tema === 'claro' ? 'oscuro' : 'claro';
        };

        // Retornamos el estado y la función para que estén disponibles en la plantilla
        return {
            estado,
            cambiarTema
        };
    }
}).mount('#app');

