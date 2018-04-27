'use strict';

var dao = require('./../dao/dao.js'),
    logger = require('./../lib/logger.js');

function signIn(email, password) {
    return dao.signIn(email, password);
}

function signUp(email, password, name) {
    return dao.signUp(email, password, name);
}

function userExists(userId, next) {
    return dao.userExists(userId, next);
}

function userExistsMoreInfo(userInfo, next) {
    dao.userExistsMoreInfo(userInfo, next);
}


module.exports = {
    signIn: signIn,
    signUp: signUp,
    userExists : userExists,
    userExistsMoreInfo: userExistsMoreInfo
}
