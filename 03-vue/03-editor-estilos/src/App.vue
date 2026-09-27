<script>
export default {
  data() {
    return {
      bgColor: '#ffffff',
      textColor: '#000000',
      MostrarTexto: true,
      borderRadius: 0,
      texto: 'Texto de ejemplo',
      fontStyle: 'normal',
      Opacidad: false,
      fontSize: '16px',
      fontSizes: [
        { label: 'Pequeño', value: '12px' },
        { label: 'Mediano', value: '16px' },
        { label: 'Grande', value: '20px' }
      ]
    };
  },
};
</script>

<template>
  <div id="app">
    <div class="contenedor">
      <form>
        <div class="verticales">
          <label for="bgColor">Color de Fondo:</label>
          <input type="color" v-model="bgColor" />
        </div>

        <div class="verticales">
          <label for="textColor">Color de Texto:</label>
          <input type="color" v-model="textColor" />
        </div>

        <div class="horizontales">
          <label for="showText">Mostrar Texto:</label>
          <input type="checkbox" v-model="MostrarTexto" />
        </div>

        <div class="verticales">
          <label for="borderRadius">Borde (Radius):</label>
          <input type="range" v-model="borderRadius" min="0" max="100" />
        </div>

        <div class="verticales">
          <label for="texto">Contenido Textual:</label>
          <input type="text" v-model="texto" />
        </div>

        <div class="verticales">
          <label for="fontStyle">Tipografía:</label>
          <select v-model="fontStyle">
            <option value="normal">Normal</option>
            <option value="italic">Cursiva</option>
          </select>
        </div>

        <div class="horizontales">
          <label for="opacity">Opaco:</label>
          <input type="checkbox" v-model="Opacidad" />
        </div>

        <div class="verticales">
          <label>Tamaño de Letra:</label>
          <div class="horizontales">
            <div v-for="size in fontSizes" :key="size.value">
              <input type="radio" :value="size.value" v-model="fontSize" /> {{ size.label }}
            </div>
          </div>
        </div>
      </form>

      <div 
        class="contenedorEstilos" 
        :class="{ 'opaco': Opacidad }"
        :style="{
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: borderRadius + 'px',
          fontStyle: fontStyle,
          fontSize: fontSize,
        }">
        <span v-show="MostrarTexto">{{ texto }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  display: flex;
  padding: 20px;
  height: auto;
  align-items: center;
  background-color: black;
}

form {
  width: 300px;
  padding: 20px;
  margin-right: 50px;
  background-color: darkslategrey;
}

.verticales {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid white;
}

.horizontales {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid white;
}

.opaco {
  opacity: 0.5;
}

.contenedorEstilos {
  width: 150px;
  height: 150px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
}
</style>
