<template>
  <div class="counter-view">
    <h1>Contador</h1>
    <p>Valor actual: {{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
    <!-- Botón deshabilitado si el contador es 0 -->
    <button @click="decrementar" :disabled="contador <= 0">Decrementar</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CounterView',
  computed: {
    ...mapGetters(['contador']), // Accede al getter 'contador'
  },
  methods: {
    ...mapActions(['incrementar', 'decrementar']), // Usa acciones para modificar el estado
  },
};
</script>

<style scoped>
.counter-view {
  text-align: center;
  margin-top: 50px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>