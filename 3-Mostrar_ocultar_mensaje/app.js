

//Composition 
const { createApp, reactive } = Vue;

createApp({
    setup() {
        const estado = reactive({
            mostrarMensaje: false  
        });

        const toggleMensaje = () => {
            estado.mostrarMensaje = !estado.mostrarMensaje;  
        };

        return {
            estado,
            toggleMensaje
        };
    }
}).mount('#app');
