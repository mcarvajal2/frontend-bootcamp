// Importamos herramientas de pruebas y el componente Child
import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import Child from '@/components/Child.vue';

// Verifica que al hacer clic en el botón, se emite el texto ingresado
test('envía texto al hacer clic en el botón', async () => {
    const wrapper = mount(Child); // Monta el componente Child
    const input = wrapper.find('input'); // Encuentra el input dentro del componente
    await input.setValue('Hola'); // Cambia el valor del input a 'Hola'
    await wrapper.find('button').trigger('click'); // Simula un clic en el botón
    expect(wrapper.emitted().textoEnviado[0]).toEqual(['Hola']); // Verifica que el evento se emitió con el texto 'Hola'
});
