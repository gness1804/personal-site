import Vue from 'vue'
import App from './components/App'
import router from './routes'
import './styles/main.scss'

new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app')
