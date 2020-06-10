import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ButtonDefault from './components/Ui/ButtonDefault'
import NotificationMessage from './components/Ui/NotificationMessage'
import PageTitle from './components/PageTitle'
import '@/assets/css/app.css';


Vue.component('button-default', ButtonDefault)
Vue.component('toast-message', NotificationMessage)
Vue.component('page-title', PageTitle)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
