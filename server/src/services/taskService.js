'use strict';

var dao = require('./../dao/dao.js'),
  logger = require('./../lib/logger.js').get('taskService');

function createTask(userId, task, next) {
  return new Promise((resolve, reject) => {
    dao
      .userExists(userId)
      //TODO have to validate if the result have some id or not
      .then(result => {
        logger.debug(result);
        return dao.createTask(userId, task);
      })
      .then(result => resolve(result))
      .catch(error => {
        logger.error(error);
        reject(error);
      });
  });
}

function getTasks(userId) {
  return new Promise((resolve, reject) => {
    dao
      .userExists(userId)
      .then(result => {
        return dao.getTasks(userId);
      })
      .then(tasks => {
        resolve(tasks);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function getTask(userId, taskId, next) {
  signService.userExists(userId, function(err, result) {
    if (err) {
      next(err);
    } else if (!result || !result._id) {
      next(new Error('No User Exists with Id ' + userId));
    } else {
      dao.getTask(userId, taskId, next);
    }
  });
}

module.exports = {
  createTask: createTask,
  getTasks: getTasks,
  getTask: getTask
};
