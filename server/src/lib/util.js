'use strict';

var fs = require('fs'),
    js2xmlparser = require("js2xmlparser"),
    jsf = require('json-schema-faker');

function validateRequest(req, method, cb) {
      return cb(undefined);
}

function isValidSignInRequest(email) {
    return true;
}

function isValidSignUpRequest(email, name) {
    return true;
}

function isValidTaskRequest(task) {
    return true;
}

module.exports = {
    validateRequest: validateRequest,
    isValidSignInRequest: isValidSignInRequest,
    isValidSignUpRequest: isValidSignUpRequest,
    isValidTaskRequest: isValidTaskRequest
};
