<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['juegos'])
  },
  methods: {
    ...mapActions(['modifyStock']),
    reducirStock(codigo) {
      const juego = this.juegos.find(j => j.codigo === codigo);
      if (juego && juego.stock > 0) {
        const nuevoStock = parseInt(juego.stock) - 1;
        this.modifyStock({ codigo, newStock: nuevoStock });
      }
    },
    aumentarStock(codigo) {
      const juego = this.juegos.find(j => j.codigo === codigo);
      if (juego) {
        const nuevoStock = parseInt(juego.stock) + 1;
        this.modifyStock({ codigo, newStock: nuevoStock });
      }
    },
    formatoPrecio(precio) {
      return `$${parseInt(precio).toLocaleString('es-CL')}`;
    }
  }
};
</script>

<template>
  <div>
    <h1>Tienda 32 Bits</h1>
    <h2>Lista de juegos</h2>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ formatoPrecio(juego.precio) }}</td>
          <td>
            <button @click="aumentarStock(juego.codigo)">+</button>
            <button @click="reducirStock(juego.codigo)" :disabled="juego.stock === 0">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h1{
  text-align: center;
}
h2{
  text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
button {
  margin: 0 5px;
  padding: 5px 10px;
}
</style>
