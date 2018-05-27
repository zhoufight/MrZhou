import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/font-awesome/css/font-awesome.css'
import './assets/pagination.css'
import App from './App'


Vue.config.productionTip = false
Vue.prototype.$http = axios
const debug = process.env.NODE_ENV !== 'production';
const url = debug ? '/api/' : 'http://mydandan.com/api/';
Vue.prototype.URL = url

Vue.use(ElementUI)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})