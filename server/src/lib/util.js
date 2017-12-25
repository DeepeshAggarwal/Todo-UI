'use strict';

var fs = require('fs'),
    js2xmlparser = require("js2xmlparser"),
    jsf = require('json-schema-faker');

function validateRequest(req, method, cb) {
      return cb(undefined);
}


module.exports = {
    validateRequest: validateRequest
};
