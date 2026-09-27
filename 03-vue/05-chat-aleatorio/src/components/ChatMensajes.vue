<script>
export default {
    props: {
        mensajes: Array,
        nombreCompletoUsuario1: String,
        nombreCompletoUsuario2: String
    }
};
</script>

<template>
    <div class="chat">
        <div v-for="(mensaje, index) in mensajes" :key="index" class="mensaje"
            :class="{ 'mensaje-izquierda': mensaje.nombre === nombreCompletoUsuario1, 'mensaje-derecha': mensaje.nombre === nombreCompletoUsuario2 }">
            <strong class="nombre-mensaje">{{ mensaje.nombre }}</strong>
            <div class="contenido-mensaje" :style="{ backgroundColor: mensaje.color }">
                {{ mensaje.contenido }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.chat {
    width: 100%;
    height: auto;
    padding: 10px;
    border-radius: 10px;
    overflow-y: auto;
    overflow-x: hidden;
}

.mensaje {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
}

.nombre-mensaje {
    color: #333;
    font-weight: bold;
    margin-bottom: 5px;
}

.mensaje-izquierda {
    align-items: flex-start;
}

.mensaje-derecha {
    align-items: flex-end;
}

.contenido-mensaje {
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    max-width: 75%;
    word-wrap: break-word;
    display: inline-block;
}

.mensaje-izquierda .contenido-mensaje {
    margin-right: auto;
}

.mensaje-derecha .contenido-mensaje {
    margin-left: auto;
}
</style>