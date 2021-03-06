/**
 * Created by menzhongxin on 16/6/16.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Validator from 'vue-validator'
import Resource from 'vue-resource'
import secretaryValid from './lib/validate'
import App from './components/App.vue'
Vue.use(Router)
Vue.use(Resource)
Vue.use(Validator)
secretaryValid.init(Vue)
var router = new Router()

var router = new Router()

router.start(App, '#app')