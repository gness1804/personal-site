import VueRouter from 'vue-router';
import Vue from 'vue';
import App from '../components/App.vue';
import Code from '../components/Code.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/',
    component: Code,
  },
];

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

export default router;
