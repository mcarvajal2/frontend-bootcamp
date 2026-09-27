<template>
    <div>
        <!-- Campo de texto para que el usuario escriba -->
        <input v-model="texto" />
        <!-- Botón que envía el texto al componente padre -->
        <button @click="enviarTexto">Enviar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            texto: '', // Define una propiedad para almacenar el texto ingresado
        };
    },
    methods: {
        // Método que emite el texto ingresado al componente padre
        enviarTexto() {
            this.$emit('textoEnviado', this.texto); // Lanza un evento con el texto como parámetro
        },
    },
};
</script>