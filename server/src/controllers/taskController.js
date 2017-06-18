'use strict';

var util = require('./../lib/util.js'),
    taskService = require('./../services/taskService.js'),
    logger = require('./../lib/logger.js').get('taskController');

function createTask(body, res) {
    logger.info("Entering createTask");
    util.validateRequest(body, body, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        taskService.createTask(body, function (err, result) {
            if (err) {
                logger.error(err);
                var error = {'message': err.message};
                res.status(400).send(error)
            }
            logger.info(result);
            res.send();
        });
    });

}

function getTasks(body, res) {
    logger.info("Entering signUp");
    util.validateRequest(body.email, body.password, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        signService.signUp(body.email, body.password, function (err, result) {
            if (err) {
                var error = {'message': err.message};
                res.status(400).send(error)
            }
            logger.info(result);
            res.status(201).send();
        });
    });
}

module.exports = {
    createTask: createTask,
    getTasks: getTasks
};
