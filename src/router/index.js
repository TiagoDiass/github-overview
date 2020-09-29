import Vue from 'vue';
import VueRouter from 'vue-router';
import InputUsername from '../views/InputUsername.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'InputUsername',
    component: InputUsername,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
