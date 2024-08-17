


//Composition api
const { createApp, reactive } = Vue;

createApp({
    setup() {
        const estado = reactive({
            mensaje: 'Hola bienvenido al ejercicio 1 '
        });

        return {
            estado
        };
    }
}).mount('#app');

