<template>
    <div>
        <!-- Incluye el componente hijo y escucha el evento "textoEnviado" -->
        <Child @textoEnviado="recibirTexto" />
        <!-- Muestra el texto recibido del componente hijo -->
        <p>{{ texto }}</p>
    </div>
</template>

<script>
import Child from './Child.vue';

export default {
    components: { Child }, // Declara el componente hijo
    data() {
        return {
            texto: '', // Define una propiedad para almacenar el texto recibido
        };
    },
    methods: {
        // Método que se ejecuta cuando se recibe el evento desde el hijo
        recibirTexto(texto) {
            this.texto = texto; // Actualiza el texto con el valor recibido
        },
    },
};
</script>