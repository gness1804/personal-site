import VueRouter from 'vue-router';
import Vue from 'vue';
import Landing from '../components/Landing.vue';
import Code from '../components/Code.vue';
import Writing from '../components/Writing.vue';
import People from '../components/People.vue';

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
    path: '/people',
    component: People,
  },
];

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

export default router;
