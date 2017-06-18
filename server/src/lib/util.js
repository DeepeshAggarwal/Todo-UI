'use strict';

var fs = require('fs'),
    js2xmlparser = require("js2xmlparser"),
    jsf = require('json-schema-faker');

function validateRequest(req, method, cb) {
    if (req || method)
        return cb(undefined);
    return cb(new Error("Invalid Request"));
}


module.exports = {
    validateRequest: validateRequest
};
