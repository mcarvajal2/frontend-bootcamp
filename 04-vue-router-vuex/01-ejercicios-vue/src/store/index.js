import { createStore } from 'vuex';

// Configuración del store
export default createStore({
  state: {
    contador: 0,
  },
  mutations: {
    incrementar(state) {
      state.contador++;
    },
    decrementar(state) {
      if (state.contador > 0) {
        state.contador--;
      }
    },
  },
  actions: {
    incrementar({ commit }) {
      commit('incrementar');
    },
    decrementar({ commit }) {
      commit('decrementar');
    },
  },
  getters: {
    contador: (state) => state.contador,
  },
});