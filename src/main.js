import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
//npm install vue-router
import VueRouter from 'vue-router'



Vue.use(VueRouter)
Vue.config.productionTip = false

import './scss/main.scss'
//import 'bootstrap/dist/css/bootstrap.min.css'


const router = new VueRouter({

  mode: 'hash'
})


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
