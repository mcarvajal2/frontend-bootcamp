import { mount } from '@vue/test-utils';
import CounterView from '@/views/CounterView.vue';
import router from '@/router';
import store from '@/store';

test('existe el componente CounterView', async () => {
    const wrapper = mount(CounterView, {
        global: {
            plugins: [store, router], // Agrega el store y el router
        },
    });
    await router.isReady(); // Asegúrate de que el router esté listo
    expect(wrapper.exists()).toBe(true);
});