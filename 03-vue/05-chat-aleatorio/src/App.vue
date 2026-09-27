<script>
import axios from 'axios';
import ChatMensajes from './components/ChatMensajes.vue';

export default {
  components: {
    ChatMensajes
  },
  data() {
    return {
      usuario1: null,
      usuario2: null,
      mensaje1: '',
      mensaje2: '',
      color1: '#000000',
      color2: '#000000',
      mensajes: []
    };
  },
  mounted() {
    axios.get('https://randomuser.me/api/?results=2')
      .then(respuesta => {
        this.usuario1 = respuesta.data.results[0];
        this.usuario2 = respuesta.data.results[1];
      })
      .catch(error => {
        console.error("Error al obtener usuarios:", error);
      });
  },
  methods: {
    enviarMensaje(usuario, mensaje, color) {
      if (mensaje.trim() !== '') {
        this.mensajes.push({
          nombre: `${usuario.name.first} ${usuario.name.last}`,
          contenido: mensaje,
          color: color
        });
        if (usuario === this.usuario1) {
          this.mensaje1 = '';
        } else if (usuario === this.usuario2) {
          this.mensaje2 = '';
        }
      }
    }
  }
};
</script>

<template>
  <div id="app" class="app-container">
    <div class="perfil-usuario" v-if="usuario1 && usuario1.picture && usuario1.name">
      <img :src="usuario1.picture.large" alt="Usuario 1">
      <p>{{ usuario1.name.first }} {{ usuario1.name.last }}</p>
      <input type="color" v-model="color1" />
      <textarea v-model="mensaje1"></textarea>
      <button @click="enviarMensaje(usuario1, mensaje1, color1)">Enviar</button>
    </div>

    <div class="area-chat">
      <chat-mensajes 
        v-if="mensajes.length" 
        :mensajes="mensajes" 
        :nombreCompletoUsuario1="usuario1 ? usuario1.name.first + ' ' + usuario1.name.last : ''" 
        :nombreCompletoUsuario2="usuario2 ? usuario2.name.first + ' ' + usuario2.name.last : ''">
      </chat-mensajes>
    </div>

    <div class="perfil-usuario" v-if="usuario2 && usuario2.picture && usuario2.name">
      <img :src="usuario2.picture.large" alt="Usuario 2">
      <p>{{ usuario2.name.first }} {{ usuario2.name.last }}</p>
      <input type="color" v-model="color2" />
      <textarea v-model="mensaje2"></textarea>
      <button @click="enviarMensaje(usuario2, mensaje2, color2)">Enviar</button>
    </div>
  </div>
</template>

<style>
.app-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 20px;
  height: 100vh;
  width: 100vh;
}

.perfil-usuario {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 40%;
  background: #bee07e;
  color: black;
  font-weight: bold;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.582);
}

textarea {
  margin-top: 10px;
  width: 100%;
  height: 80px;
  background-color: white;
  color: black;
  resize: none;
}

input[type="color"] {
  margin-top: 10px;
  width: 100%;
}

button {
  margin-top: 10px;
}

.area-chat {
  width: 100%;
  height: 44%;
  margin: 0 20px;
  background: #ddd2d2;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.562);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 20px;
}
</style>
