<script>
export default {
  props: ['cita'],
  computed: {
    colorDeGravedad() {
      if (this.cita.gravedad === 'Alta') return 'red';
      if (this.cita.gravedad === 'Media') return 'yellow';
      return 'green';
    }
  }
};
</script>

<template>
    <div :style="{ backgroundColor: colorDeGravedad }" class="cita-card">
      <h4>Paciente</h4>
      <p>{{ cita.paciente }}</p>
  
      <h4>Fecha</h4>
      <p>{{ cita.fecha }}</p>
  
      <h4>Hora</h4>
      <p>{{ cita.hora }}</p>
  
      <h4>Gravedad</h4>
      <p>{{ cita.gravedad }}</p>
  
      <h4>Motivo</h4>
      <p>{{ cita.motivo }}</p>
  
      <button @click="$emit('eliminar')">Eliminar</button>
    </div>
  </template>

<style scoped>
.cita-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: black;
}

.cita-card h4 {
  margin: 5px 0;
  font-weight: bold;
}

.cita-card p {
  margin: 0 0 10px;
  color: black;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: 2px solid black;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #d32f2f;
}
</style>
