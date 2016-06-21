
/**
 * Created by menzhongxin on 16/6/18.
 */
import MD5 from 'blueimp-md5'
import Vue from 'vue'
/**
 * md5加密
 * @param phoneNum
 * @param password
 */
exports.encryptPassword = function(phoneNum,password){
  return MD5(phoneNum + password);
};

exports.loginInit = function(user){
  window.localStorage.setItem('user',JSON.stringify(user));
  window.sessionStorage.setItem('user',user);
};

/**
 *
 * @returns {string}
 */
exports.getUserId = function(){
  var user = window.localStorage.getItem('user');
  return user?JSON.parse(user)._id:'';
};

exports.getCurrentUser = function(){
  return window.localStorage.getItem('user');
};