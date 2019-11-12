import Vue from 'vue'
import Login from './Login'
import axios from '../../control/filter/http'
// import axios from 'axios'
import store from '../../store/store'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(Login),
}).$mount('#login')
