// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'css/reset.css'
import Vue from 'vue'
import App from './App'
import router from 'router'
import store from 'store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from 'lang'
import api from 'api'
import "utils/common"
import {
    Message
} from 'element-ui'

Vue.use(VueAxios, axios)
Vue.use(api)

Vue.prototype.$message = Message

axios.defaults.baseURL = process.env.API_HOST
    // axios.defaults.withCredentials = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    store,
    components: {
        App
    },
    template: '<App/>'
})