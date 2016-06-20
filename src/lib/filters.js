/**
 * Created by menzhongxin on 16/6/20.
 */
import util from './commonUtil'
exports.loginFilter = function(){
  var utils = util;
  return function (transition){
    if(transition.to.path !== '/' && !utils.getUserId())
      transition.redirect('/');
    else
      transition.next();
  }
};