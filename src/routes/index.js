import VueRouter from 'vue-router';
import Vue from 'vue';
import Landing from '../components/Landing.vue';
import Code from '../components/Code.vue';
import Writing from '../components/Writing.vue';
import Introversion from '../components/Introversion.vue';

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
  {
    path: '/writing',
    component: Writing,
  },
  {
    path: '/introversion',
    component: Introversion,
  },
];

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

export default router;
