import { createRouter, createWebHistory } from 'vue-router';
import CounterView from '@/views/CounterView.vue';
import InfoView from '@/views/InfoView.vue';
import ParentView from '@/views/ParentView.vue';

const routes = [
  {
    path: '/',
    name: 'counter',
    component: CounterView,
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView,
  },
  {
    path: '/parent',
    name: 'parent',
    component: ParentView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;