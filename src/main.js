import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/font-awesome/css/font-awesome.css'
import './assets/pagination.css'
import './assets/loading.css'
import App from './App'


Vue.config.productionTip = false
Vue.prototype.$http = axios
const debug = process.env.NODE_ENV !== 'production';
const url = debug ? '/api/' : 'http://www.mydandan.com/';
Vue.prototype.URL = url;
Vue.use(ElementUI)

Vue.filter('time', function (unixtimestamp) {
var unixtimestamp = new Date(unixtimestamp*1000);  
    var year = 1900 + unixtimestamp.getYear();  
    var month = "0" + (unixtimestamp.getMonth() + 1);  
    var date = "0" + unixtimestamp.getDate();  
    var hour = "0" + unixtimestamp.getHours();  
    var minute = "0" + unixtimestamp.getMinutes();  
    var second = "0" + unixtimestamp.getSeconds();  
    return year + "-" + month.substring(month.length-2, month.length)  + "-" + date.substring(date.length-2, date.length);
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})