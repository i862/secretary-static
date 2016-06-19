<template>
  <div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4 login_box">
      <div class="row" style="background: #5A90E5;">
        <div class="col-sm-1"></div>
        <div class="col-sm-10" style="text-align:center;color:white;"><h2>登录</h2></div>
        <div class="col-sm-1"></div>
      </div>
      <validator name="login">
        <div class="row input_item">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="icon icon-user icon-dq"></i></span>
              <input type="tel" class="form-control" v-model="info.phoneNum"
                     v-validate:tel="['mobile']"  placeholder="用户名">
            </div>
            <div>
              <span v-if="$login.tel.dirty && $login.tel.mobile">Your user name is too short.</span>
            </div>
          </div>
          <div class="col-sm-1"></div>
        </div>
        <div class="row input_item">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="icon icon-lock icon-dq"></i></span>
              <input type="password" class="form-control" v-model="info.password"
                     v-validate:password="['password']" placeholder="密码">
            </div>
            <div>
              <span v-if="$login.password.dirty && $login.password.password">Your user name is too short.</span>
            </div>
          </div>
          <div class="col-sm-1"></div>
        </div>
        <div class="row input_item">
        <div class="col-sm-1"></div>
        <div class="col-md-10">
          <input class="btn btn-block btn-info" :disabled="!$login.valid" style="background: #5A90E5;" @click="submit" type="button" value="登录">
        </div>
        <div class="col-sm-1"></div>
      </div>
      </validator>


    </div>
    <div class="col-sm-4"></div>
  </div>
</template>

<script>
  import util from '../lib/commonUtil.js'
  module.exports = {
    data: function(){
      return {
        info:{},
        phoneNum:'',
        password:''
      }
    },
    methods:{
      submit:function(){
        var passwd = util.encryptPassword(this.info.phoneNum,this.info.password)
        alert(this.info.phoneNum + '  ()  ' + this.info.password + ' : ' + passwd)
      }
    }
  }
</script>
