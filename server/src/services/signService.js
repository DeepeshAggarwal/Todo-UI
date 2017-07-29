'use strict';

var dao = require('./../dao/dao.js'),
    logger = require('./../lib/logger.js');

function signIn(email, password, next) {
    dao.signIn(email, password, next);
}

function signUp(email, password, next) {
    dao.signUp(email, password, next);
}

function userExists(userId, next) {
    dao.userExists(userId, next);
}


module.exports = {
    signIn: signIn,
    signUp: signUp,
    userExists : userExists
}
