'use strict';
var request = require('request');

var exports = module.exports = {};

exports.capture = function(key,secret,params, callbacks) {
  var url_api = "https://url-screenshot.com/v1/";
  request.post(url_api+key+'/'+secret,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        body = JSON.parse(body);
        let token = body.token;
        params = Object.keys(params).map((i) => i+'='+params[i]).join('&');
        request.get(url_api+key+'/'+token+'/?'+params,
          function (error, response, body) {
            if (!error && response.statusCode == 200) {
              callbacks(url_api+key+'/'+token+'/?'+params);
            }else{
              callbacks(null, 'SCREENSHOT API ERROR : RESQUEST PARAMS INVALID');
            }
          }
        )
      }else{
        callbacks(null, 'SCREENSHOT API ERROR : API KEY OR API PRIVATE KEY INVALID');
      }
    });
};
