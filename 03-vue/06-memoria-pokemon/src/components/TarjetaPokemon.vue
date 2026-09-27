<script>
import axios from 'axios';
export default {
    props: ['pokemon'],
    data() {
        return {
            adivinanza: '',
            esDescubierto: false,
            imagenPokemon: ''
        };
    },
    computed: {
        estiloImagen() {
            return this.esDescubierto ? {} : { filter: 'blur(5px) grayscale(100%)' };
        }
    },
    methods: {
        async cargarImagen() {
            const respuesta = await axios.get(this.pokemon.url);
            this.imagenPokemon = respuesta.data.sprites.front_default;
        },
        verificarAdivinanza() {
            if (this.adivinanza.toLowerCase() === this.pokemon.nombre.toLowerCase()) {
                this.esDescubierto = true;
                this.$emit('descubierto');
            } else {
                alert('Nombre incorrecto. Intenta de nuevo.');
            }
        }
    },
    mounted() {
        this.cargarImagen();
    }
};
</script>

<template>
    <div class="tarjeta-pokemon">
        <img :src="imagenPokemon" :style="estiloImagen" alt="pokemon" />
        <div v-if="!esDescubierto">
            <input type="text" v-model="adivinanza" placeholder="Adivina el nombre" />
            <button @click="verificarAdivinanza">Descubrir</button>
        </div>
        <div v-else>
            <h3>{{ pokemon.nombre }}</h3>
        </div>
    </div>
</template>

<style>
.tarjeta-pokemon {
    width: 150px;
    text-align: center;
}
</style>