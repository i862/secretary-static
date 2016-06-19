/**
 * Created by menzhongxin on 16/6/19.
 */

const validators = {
  'mobile': function (val) {
    return /^1[3|4|5|7|8][0-9]\d{8}$/.test(val)
  },
  'password' : function(val){
    return /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}$/.test(val)
  }
}

module.exports.init = function(Vue){
  for(const key in validators){
    Vue.validator(key,validators[key])
  }
}