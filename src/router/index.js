import Vue from 'vue';
import VueRouter from 'vue-router';
import Autorization from '../views/Autorization.vue';
import Dashboard from '../views/Dashboard.vue';
import Options from '../views/Options.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'slaves',
  },
  {
    path: '/login',
    name: 'login',
    component: Autorization,
    meta: { public: true },
  },
  {
    name: 'slaves',
    path: '/slaves',
    component: Options,
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
