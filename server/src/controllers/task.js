'use strict';

var util = require('./../lib/util.js'),
    taskService = require('./../services/taskService.js'),
    logger = require('./../lib/logger.js').get('taskController');

function createTask(userId, task, res) {
    logger.info("Entering createTask");
    util.validateRequest(task, task, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        taskService.createTask(userId, task, function (err, result) {
            if (err) {
                logger.error(err);
                var error = {'message': err.message};
                res.status(500).send(error)
            }
            logger.info(result);
            res.send(result);
        });
    });

}

function getTask(userId, taskId, res) {
    logger.info("Entering getTask for user, task", userId, taskId);
    util.validateRequest(userId, taskId, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        taskService.getTask(userId, taskId, function (err, result) {
            if (err) {
                logger.error(err);
                var error = {'message': err.message};
                res.status(500).send(error)
            }
            logger.info(result);
            res.send(result);
        });
    });
}

function getTasks(userId, res) {
    logger.info("Entering getTasks for user", userId);
    util.validateRequest(userId, userId, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        taskService.getTasks(userId, function (err, result) {
            if (err) {
                logger.error(err);
                var error = {'message': err.message};
                res.status(500).send(error)
            }
            logger.info(result);
            res.send(result);
        });
    });
}

module.exports = {
    createTask: createTask,
    getTasks: getTasks,
    getTask: getTask
};
