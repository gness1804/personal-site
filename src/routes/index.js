import VueRouter from 'vue-router';
import Vue from 'vue';
import App from '../components/App';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: App,
  },
];

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

export default router;
