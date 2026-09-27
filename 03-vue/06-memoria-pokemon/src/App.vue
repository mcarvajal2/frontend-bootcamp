<script>
import axios from 'axios';
import TarjetaPokemon from './components/TarjetaPokemon.vue';

export default {
  name: 'App',
  data() {
    return {
      pokemones: [],
      contadorDescubiertos: 0
    };
  },
  methods: {
    incrementarContador() {
      this.contadorDescubiertos++;
    },
    async obtenerPokemones() {
      const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      this.pokemones = respuesta.data.results.map(pokemon => ({
        nombre: pokemon.name,
        url: pokemon.url
      }));
    }
  },
  mounted() {
    this.obtenerPokemones();
  },
  components: {
    TarjetaPokemon
  }
};
</script>

<template>
  <div id="app">
    <img class="logo" src="../public/pokemon-logo.png" alt="">
    <h1>¿Quién es ese Pokémon?</h1>
    <div class="contendor-info">
      <p>Pokémones descubiertos: {{ contadorDescubiertos }}</p>
    </div>
    <div class="lista-pokemones">
      <TarjetaPokemon 
        v-for="(pokemon, index) in pokemones" 
        :key="index" 
        :pokemon="pokemon" 
        @descubierto="incrementarContador" />
    </div>
  </div>
</template>

<style>
.lista-pokemones {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
.logo {
  width: 400px;
  height: auto;
}
.contendor-info {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 1rem
}
</style>
