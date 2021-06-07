import Vue from 'vue';
import VueRouter from 'vue-router';
import Autorization from '../views/Autorization.vue';
import Registration from '../views/Registration.vue';
import Main from '../views/Main.vue';
import Dashboard from '../views/Dashboard.vue';
import Options from '../views/Options.vue';
import Report from '../views/Report.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'autorization',
  component: Autorization,
  meta: { public: true },
},
{
  name: 'registration',
  path: '/registration',
  component: Registration,
},
{
  name: 'main',
  path: '/main',
  component: Main,
},
{
  name: 'options',
  path: '/options',
  component: Options,
},
{
  name: 'report',
  path: '/report',
  component: Report,
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
