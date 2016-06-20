<template>
  <div class="container">
    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
          </button>
          <a class="navbar-brand navbar_white" href="#" >Working-Days</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" class="nav_a">关于</a></li>
            <li><a href="#" class="nav_a">技术支持</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6 login_box">
        <div class="row icon_row">
          <span class="icon icon-trophy icon_white"></span>
        </div>

        <validator name="login">
          <div class="row input_item">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="info.phoneNum"
                     v-validate:tel="['mobile']" placeholder="手机号">
            </div>
            <div>
              <span v-if="$login.tel.dirty && $login.tel.mobile">Your user name is too short.</span>
            </div>
            <div class="col-sm-1"></div>
          </div>
          <div class="row input_item">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
              <input type="password" class="form-control" v-model="info.password"
                     v-validate:password="['password']" placeholder="密&nbsp&nbsp&nbsp码">
            </div>
            <div>
              <span v-if="$login.password.dirty && $login.password.password">Your user name is too short.</span>
            </div>
            <div class="col-sm-1"></div>
          </div>
          <div class="row input_item">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <input class="btn btn-block login_button" @click="submit" :disabled="!$login.valid" type="button" value="登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录">
          </div>
          <div class="col-sm-1"></div>
        </div>
        </validator>

      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
  import util from '../lib/commonUtil.js'
  import Vue from 'vue'
  module.exports = {
    data: function(){
      return {
        info:{}
      }
    },
    methods:{
      submit:function(){
        let passwd = util.encryptPassword('15169122789','amen@1991')
        ,url = Vue.constants.AUTH;
        alert(passwd);
        Vue.postReq(url,{phoneNum:'15169122789',password:passwd})
        .then(function(data){
          console.log(data);
        },function(err){
          console.log(err);
        });
      }
    }
  }
</script>

