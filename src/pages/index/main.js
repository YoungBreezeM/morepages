import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '../../control/filter/http'
// import axios from 'axios'
import store from '../../store/store'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
