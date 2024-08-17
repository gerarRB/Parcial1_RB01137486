
//Composition 
const { createApp, reactive } = Vue;

createApp({
    setup() {
        const estado = reactive({
            clics: 0  
        });

    
        const incrementarClics = () => {
            estado.clics++;  
        };

        return {
            estado,
            incrementarClics
        };
    }
}).mount('#app');
