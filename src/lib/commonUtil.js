
/**
 * Created by menzhongxin on 16/6/18.
 */
import MD5 from 'blueimp-md5'

/**
 * md5加密
 * @param phoneNum
 * @param password
 */
exports.encryptPassword = function(phoneNum,password){
  return MD5(phoneNum + password);
};