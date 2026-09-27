import store from '@/store';

beforeEach(() => {
    // Restablece el estado inicial antes de cada prueba
    store.replaceState({
        contador: 0, // Estado inicial por defecto
    });
});

test('incrementar el contador', () => {
    store.commit('incrementar');
    expect(store.state.contador).toBe(1); // Incrementa el valor inicial en 1
});

test('decrementar el contador (valor inicial mayor a 0)', () => {
    // Establece un estado inicial válido para decrementar
    store.replaceState({
        contador: 2, // Valor inicial mayor a 0
    });

    store.commit('decrementar');
    expect(store.state.contador).toBe(1); // Debería decrementar en 1
});

test('decrementar el contador hasta llegar a 0', () => {
    // Establece un estado inicial igual a 1
    store.replaceState({
        contador: 1,
    });

    store.commit('decrementar');
    expect(store.state.contador).toBe(0); // Debería llegar a 0

    store.commit('decrementar');
    expect(store.state.contador).toBe(0); // No debería decrementar más allá de 0
});