

//composition
const { createApp, reactive } = Vue;

createApp({
    setup() {
        const estado = reactive({
            inputValue: ''  
        });
 
        const mostrarAlerta = () => {
            alert(`Alerta: ${estado.inputValue}`);  
        };

        return {
            estado,
            mostrarAlerta
        };
    }
}).mount('#app');
