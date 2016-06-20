/**
 * Created by menzhongxin on 16/6/20.
 */
/**
 * Created by menzhongxin on 15/12/3.
 */
var
  Config = require('./server.js').config
  , HOST = Config.API_HOST
  , PORT = Config.API_HOST_PORT
  , http = require('http');
exports.autoRequest = function(req,res){

  var method = req.method,
    url = decodeURI(req.url);
  var options;
  if(method == 'get' || method == 'delete'){
    options = genOptions(url,method,req.headers);
    sendRequest(options, '', res);
  }else{
    var payload = JSON.stringify(req.body);
    options = genOptions(url,method,req.headers,payload);
    sendRequest(options, payload, res);
  }
};

/* Header options */
var genOptions = function (path, method, headers, payload) {
  return {
    host: HOST,
    port: PORT,
    path: encodeURI(path),
    method: method,
    headers: {
      "Content-Type": 'application/json',
      "x-user-id": headers["x-user-id"]||'',
      "Content-Length":  Buffer.byteLength(payload || '')
    }
  };
};
/* 发送请求 */
var sendRequest = function (options, payload,res) {

  var request =  http.request(options, function (resp) {

    var code = resp.statusCode;
    var data = "";

    resp.on('data', function (chunk) {
      data += chunk;
    });
    resp.on('error', function (e) {
      res.status(code).json(data);
    });
    resp.on('end', function () {
     res.status(code).json(data);
    })
  });
  if (payload && payload.length > 0)
    request.write(payload);
  request.end();
};


