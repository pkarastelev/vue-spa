import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/app.css';

import VModal from 'vue-js-modal'
Vue.use(VModal)


import { Server } from "miragejs"
new Server({
  routes() {
    this.namespace = "api"

    this.get("/movies", () => {
      return {
        movies: [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ],
      }
    })
  },
})

import ButtonDefault from './components/Ui/ButtonDefault'
import NotificationMessage from './components/Ui/NotificationMessage'
import PageTitle from './components/PageTitle'
Vue.component('button-default', ButtonDefault)
Vue.component('toast-message', NotificationMessage)
Vue.component('page-title', PageTitle)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
