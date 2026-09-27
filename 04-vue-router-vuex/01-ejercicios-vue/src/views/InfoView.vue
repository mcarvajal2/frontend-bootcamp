<template>
  <div class="info-view">
    <h1>Información del Proyecto</h1>
    <p>
      Esta es una aplicación desarrollada con Vue.js que incluye funcionalidad de
      manejo de estado con Vuex, navegación con Vue Router, y pruebas unitarias.
    </p>
    <ul>
      <li>Manejo del contador en la vista principal.</li>
      <li>Navegación entre diferentes vistas.</li>
      <li>Pruebas para validar el correcto funcionamiento de los componentes.</li>
    </ul>
    <p>¡Gracias por revisar este proyecto!</p>
  </div>
</template>

<script>
export default {
  name: 'InfoView',
};
</script>

<style scoped>
.info-view {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

ul {
  text-align: left;
  margin: 0 auto;
  padding: 0;
  list-style-type: disc;
  max-width: 400px;
}
</style>