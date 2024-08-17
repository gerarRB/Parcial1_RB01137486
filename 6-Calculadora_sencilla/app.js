

//composition 
const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const numero1 = ref(0);  // Primer número ingresado
        const numero2 = ref(0);  // Segundo número ingresado
        const operacion = ref('suma');  // Tipo de operación seleccionada

        // Computado para calcular el resultado basado en la operación seleccionada
        const resultado = computed(() => {
            let res = 0;
            switch (operacion.value) {
                case 'suma':
                    res = numero1.value + numero2.value;
                    break;
                case 'resta':
                    res = numero1.value - numero2.value;
                    break;
                case 'multiplicacion':
                    res = numero1.value * numero2.value;
                    break;
                case 'division':
                    // Se evita la división por cero
                    res = numero2.value !== 0 ? numero1.value / numero2.value : 'No se puede dividir por cero';
                    break;
            }
            return res;
        });

        return {
            numero1,
            numero2,
            operacion,
            resultado
        };
    }
}).mount('#app');
