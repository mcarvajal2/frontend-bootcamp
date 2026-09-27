import { createStore } from 'vuex';
import juegos from '/src/juegos.json';

export default createStore({
    state: {
        juegos: juegos
    },
    mutations: {
        updateStock(state, { codigo, newStock }) {
            const juego = state.juegos.find(j => j.codigo === codigo);
            if (juego) {
                juego.stock = newStock;
            }
        }
    },
    actions: {
        modifyStock({ commit }, payload) {
            commit('updateStock', payload);
        }
    },
    getters: {}
});
