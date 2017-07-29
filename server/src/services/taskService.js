'use strict';

var dao = require('./../dao/dao.js'),
    logger = require('./../lib/logger.js');

function createTask(userId, task, next) {
    dao.createTask(userId, task, next);
}

module.exports = {
    createTask: createTask
}
