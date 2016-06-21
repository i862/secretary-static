/**
 * Created by menzhongxin on 16/6/16.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Validator from 'vue-validator'
import Resource from 'vue-resource'
import secretaryValid from './lib/validate'
import HttpUtil from './lib/httpUtil'
import Constants from './lib/constants'
import filters from './lib/filters'
import App from './components/App.vue'
import Main from './components/Main.vue'
import Login from './components/Login.vue'
import Dashbord from './components/Dashbord.vue'
import User from './components/User.vue'

Vue.use(Router);
Vue.use(Resource);
Vue.use(Validator);
Vue.use(Constants);
Vue.use(HttpUtil);
secretaryValid.init(Vue);

var router = new Router();
router.map({
  '/':{
    component:Login
  },
  '/secretary': {
    component: Main,
    subRoutes:{
      '/dashboard':{
        component:Dashbord
      },
      '/users':{
        component:User
      }
    }
  }
});

router.beforeEach(filters.loginFilter());
router.start(App, '#app');