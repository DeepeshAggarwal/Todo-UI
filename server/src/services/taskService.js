'use strict';

var dao = require('./../dao/dao.js'),
    signService = require('./signService.js'),
    logger = require('./../lib/logger.js');

function createTask(userId, task, next) {
    signService.userExists(userId, function(err, result) {
          if(err) {
              next(err)
          } else if(!result || !result._id) {
              next(new Error("No User Exists with Id " + userId));
          } else {
              dao.createTask(userId, task, next);
          }
    });
}

function getTasks(userId, next) {
    signService.userExists(userId, function(err, result) {
          if(err) {
              next(err)
          } else if(!result || !result._id) {
              next(new Error("No User Exists with Id " + userId));
          } else {
              dao.getTasks(userId, next);
          }
    });
}

module.exports = {
    createTask: createTask,
    getTasks: getTasks
}
