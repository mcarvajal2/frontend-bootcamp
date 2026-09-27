<script>
import CitaCard from './components/CitaCard.vue';

export default {
  data() {
    return {
      cita: {
        paciente: '',
        fecha: '',
        hora: '',
        gravedad: '',
        motivo: ''
      },
      citas: []
    };
  },
  components: {
    CitaCard
  },
  computed: {
    camposCompletos() {
      return Object.values(this.cita).every(field => field !== '');
    }
  },
  methods: {
    agregarCita() {
      this.citas.push({ ...this.cita });
      this.cita = { paciente: '', fecha: '', hora: '', gravedad: '', motivo: '' };
    },
    eliminarCita(index) {
      this.citas.splice(index, 1);
    }
  }
};
</script>

<template>
  <div id="app">
    <h1>Administrador de Citas Médicas</h1>

    <form @submit.prevent="agregarCita" class="cita-form">
      <!-- Campo de Paciente -->
      <div class="input-group">
        <label :style="{ color: cita.paciente === '' ? 'red' : 'white' }">Paciente </label>
        <input v-model="cita.paciente" type="text" />
      </div>

      <!-- Campo de Fecha (input de tipo date) -->
      <div class="input-group">
        <label :style="{ color: cita.fecha === '' ? 'red' : 'white' }">Fecha </label>
        <input v-model="cita.fecha" type="date" />
      </div>

      <!-- Campo de Hora (input de tipo time) -->
      <div class="input-group">
        <label :style="{ color: cita.hora === '' ? 'red' : 'white' }">Hora </label>
        <input v-model="cita.hora" type="time" />
      </div>

      <!-- Campo de Gravedad (select) -->
      <div class="input-group">
        <label :style="{ color: cita.gravedad === '' ? 'red' : 'white' }">Gravedad </label>
        <select v-model="cita.gravedad">
          <option disabled value="">Selecciona la gravedad</option>
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      <!-- Campo de Motivo -->
      <div class="input-group">
        <label :style="{ color: cita.motivo === '' ? 'red' : 'white' }">Motivo </label>
        <input v-model="cita.motivo" type="text" />
      </div>

      <!-- Botón Agregar -->
      <div class="submit-btn">
        <button :disabled="!camposCompletos">Agregar Cita</button>
      </div>
    </form>

    <!-- Mensaje de citas no registradas -->
    <p v-if="citas.length === 0" :style="{ color: 'red' }">Aún no hay consultas registradas</p>

    <!-- Renderización de citas -->
    <div v-else class="cards-container">
      <cita-card 
        v-for="(c, index) in citas" 
        :key="index" 
        :cita="c" 
        @eliminar="eliminarCita(index)">
      </cita-card>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para el formulario */
.cita-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: 1px solid white;
  padding: 10px;
  border-radius: 5px;
}

.input-group {
  flex: 1 1 30%;
}

.submit-btn {
  flex-basis: 100%;
  text-align: center;
  margin-top: 10px;
}

button {
  padding: 10px 20px;
}

/* Estilos para el contenedor de cards */
.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.cita-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: black
}

</style>
