import Vue from 'vue'
import App from './components/App';
import router from './routes';

new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app')
