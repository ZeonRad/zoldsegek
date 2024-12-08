import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue';
import Vegetable from '@/pages/vegetable.vue';

const routes = [
  { path: '/', name: 'index', component: Index, meta: { title: 'Zöldségek' }},
  { path: '/vegetables/:vegetable', name: 'vegetable', component: Vegetable, meta: { title: 'Zöldség' }}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
