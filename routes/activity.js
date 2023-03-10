'use strict';
var util = require('util');
const axios = require('axios')
const superagent = require('superagent');
const Path = require('path');
//const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
var util = require('util');
var http = require('https');

exports.logExecuteData = [];

function logData(req) {
    exports.logExecuteData.push({
        body: req.body,
        headers: req.headers,
        trailers: req.trailers,
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        route: req.route,
        cookies: req.cookies,
        ip: req.ip,
        path: req.path,
        host: req.host,
        fresh: req.fresh,
        stale: req.stale,
        protocol: req.protocol,
        secure: req.secure,
        originalUrl: req.originalUrl
    });
    console.log("body: " + util.inspect(req.body));
    console.log("headers: " + req.headers);
    console.log("trailers: " + req.trailers);
    console.log("method: " + req.method);
    console.log("url: " + req.url);
    console.log("params: " + util.inspect(req.params));
    console.log("query: " + util.inspect(req.query));
    console.log("route: " + req.route);
    console.log("cookies: " + req.cookies);
    console.log("ip: " + req.ip);
    console.log("path: " + req.path);
    console.log("host: " + req.host);
    console.log("fresh: " + req.fresh);
    console.log("stale: " + req.stale);
    console.log("protocol: " + req.protocol);
    console.log("secure: " + req.secure);
    console.log("originalUrl: " + req.originalUrl);
}

/*
 * POST Handler for / route of Activity (this is the edit route).
 */
exports.edit = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    console.log( req.body );
    logData(req);
    res.send(200, 'Edit');
};

/*
 * POST Handler for /save/ route of Activity.
 */
exports.save = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    console.log( req.body );
    logData(req);
    res.send(200, 'Save');
};

/*
 * POST Handler for /execute/ route of Activity.
 */
exports.execute =  async function (req, res) {
    try{
        console.log('testdata');
        let data = '';
        superagent
                .post('https://appiyo.karix.solutions/appiyo/callbacks/api/63aad24b78cdd0fb70bc9cb1/panasonic_callback')
                .send({  
                    "phone_number": "918826512821",
                    "name": "Raghav",
                    "template_id": "wmdiwali22final"
                 }) 
                .set({
                    'Host': 'appiyo.karix.solutions',
                            'Content-Type': 'application/json;charset=UTF-8',
                            "Access-Control-Allow-Origin": "*",
                            "Connection": "close"
                })
                .end((err, res) => {
                    data = res;
                    console.log('res',res);
                    console.log('err',err);
                    // Calling the end function will send the request
                });
console.log('test',data)
    let config = {
        headers: {
            route: req.route,
            cookies: req.cookies,
            path: req.path,
            hostname: req.hostname
        }
      }
     console.log('config', config);
 //    let data;
    //  await axios.post('https://appiyo.karix.solutions/appiyo/callbacks/api/63aad24b78cdd0fb70bc9cb1/panasonic_callback', {
    //     "phone_number": "919996291540",
    //     "name": "Raghav",
    //     "template_id": "wmdiwali22final"
    //   },{
    //     host: 'appiyo.karix.solutions',
    //     protocol: 'https:',
    //     path: '/appiyo/callbacks/api/63aad24b78cdd0fb70bc9cb1/panasonic_callback/',
    //     headers: {
    //         'Host': 'appiyo.karix.solutions',
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         "Access-Control-Allow-Origin": "*",
    //         "Connection": "close"
    //     }
    //   })
    //   .then(function (response) {
    //     data = response;
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     data = error;
    //     console.log(error);
    //   });
    //   console.log('axios>>>>>>>>>>>>>>',axios);
      return res.status(200).send('success');

    }catch(err){
        res.send('error',err);
    }
};


/*
 * POST Handler for /publish/ route of Activity.
 */
exports.publish = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    console.log( req.body );
    logData(req);
    res.send(200, 'Publish');
};

/*
 * POST Handler for /validate/ route of Activity.
 */
exports.validate = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    console.log( req.body );
    logData(req);
    res.send(200, 'Validate');
};
