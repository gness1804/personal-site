import VueRouter from 'vue-router';
import Vue from 'vue';
import Landing from '../components/Landing.vue';
import Code from '../components/Code.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/code',
    component: Code,
  },
];

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

export default router;
