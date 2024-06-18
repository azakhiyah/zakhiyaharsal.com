import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router';
import Layout from './components/Layout.vue'
import Home from './views/Home.vue';
import About from './views/About.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
