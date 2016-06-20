/**
 * Created by menzhongxin on 16/6/19.
 */
import promise from 'promise'
let spellUrl = function({url,query={}}){
  if(url.lastIndexOf('?') < 0)
    url += '?1=1';
  if(url.endsWith('&'))
    url = url.slice(0,-1);

  for (let k in query){
    if(query[k] === null || query[k] === undefined)
      continue;
    if(query[k] instanceof Array){
      for(let v in query[k]){
        url += '&' + k + '=' + v;
      }
    }else{
      url += '&' + k + '=' + query[k];
    }
  }
};

let install = function(Vue){
  if(install.installed)
    return;

  let headers = {
    'x-user-id':Vue.constants['X-USER-ID'],
    'Content-Type':'application/json'
  };

  let getReq = function(url,query){
    console.log(url);
    console.log(query);
    headers.timestamp = Date.now();
    Vue.http.get(spellUrl(url,query),headers)
      .then(function(data){
        return promise.resolve(data.data);
      }
      ,function(err){
        return promise.reject(err.data);
      });
  };

  let postReq = function(url,data){
    console.log(url);
    console.log(data);
    headers.timestamp = Date.now();
    return Vue.http.post(url,data,headers)
      .then(function(data){
        return promise.resolve(data.data);
      }
      ,function(err){
        return promise.reject(err.data);
      });
  };

  Vue.getReq = getReq;
  Vue.postReq = postReq;
  Vue.putReq = postReq;
  Vue.deleteReq = getReq;

  install.installed = true;
  console.log('httpUtil');
};

export default install