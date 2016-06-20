/**
 * Created by menzhongxin on 16/6/19.
 */
const VERSION = '/1'
  ,HOST = 'localhost:3000';
let constants = {
  'X-USER-ID':''
  ,AUTH: VERSION + '/auth'
};

let install = function(vue){
  console.log('constants');
  if(install.installed)
    return;
  vue.constants = constants;
  install.installed = true;
  console.log('constants');
};
export default install