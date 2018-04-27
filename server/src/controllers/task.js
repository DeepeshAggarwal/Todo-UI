'use strict';

const util = require('./../lib/util.js');
const taskService = require('./../services/taskService.js');
const logger = require('./../lib/logger.js').get('taskController');
const constants = require('./../constants/index.js');

function createTask(userId, task, res) {
	logger.info('Entering createTask');
	if (util.isValidTaskRequest(task) === true) {
		taskService
			.createTask(userId, task)
			.then(response => {
				logger.info(response);
				res.send(response);
			})
			.catch(error => {
				logger.error(error);
				res
					.status(constants.STATUSCODE.SERVER_ERROR)
					.send({ message: error.message });
			});
	} else {
		res
			.status(constants.STATUSCODE.INVALID_REQUEST)
			.send(constants.SERVERMESSAGE.INVALID_REQUEST);
	}
}

function getTasks(userId, res) {
	logger.info('Entering getTasks for user', userId);
	if (util.isValidTaskRequest(userId) === true) {
		taskService
			.getTasks(userId)
			.then(response => {
				logger.info(response);
				res.send(response);
			})
			.catch(error => {
				logger.error(error);
				res
					.status(constants.STATUSCODE.SERVER_ERROR)
					.send({ message: error.message });
			});
	} else {
		res
			.status(constants.STATUSCODE.INVALID_REQUEST)
			.send(constants.SERVERMESSAGE.INVALID_REQUEST);
	}
}

//THIS HAS TO BE ENABLED ONE START WORKING ON COMMENTS
function getTask(userId, taskId, res) {
	// 	logger.info('Entering getTask for user, task', userId, taskId);
	// 	util.validateRequest(userId, taskId, function(err) {
	// 		if (err) {
	// 			return res.status(400).send('Invalid Request');
	// 		}
	// 		taskService.getTask(userId, taskId, function(err, result) {
	// 			if (err) {
	// 				logger.error(err);
	// 				var error = { message: err.message };
	// 				res.status(500).send(error);
	// 			}
	// 			logger.info(result);
	// 			res.send(result);
	// 		});
	// 	});
}

module.exports = {
	createTask: createTask,
	getTasks: getTasks,
	getTask: getTask
};
