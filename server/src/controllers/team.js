'use strict';

var util = require('./../lib/util.js'),
    teamService = require('./../services/teamService.js'),
    logger = require('./../lib/logger.js').get('taskController');

function createTeam(team, res) {
    logger.info("Entering createTeam ", team);
    util.validateRequest(team, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        taskService.createTeam(team, function (err, result) {
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

function addUserToTeam(teamId, userInfo, res) {
    logger.info("Entering addUserToTeam for user, task", userId, taskId);
    util.validateRequest(teamId, userInfo, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        taskService.addUserToTeam(teamId, userInfo, function (err, result) {
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

function removeUserFromTeam(teamId, userId, res) {
    logger.info("Entering removeUserFromTeam for user", teamId, userId);
    util.validateRequest(teamId, userId, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        taskService.removeUserFromTeam(userId, function (err, result) {
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

function getAllUsersOfTeam(teamId, next) {
  logger.info("Entering getAllUsersOfTeam for user", teamId, userId);
  util.validateRequest(teamId, function (err) {
      if (err) {
          return res.status(400).send("Invalid Request");
      }
      taskService.getAllUsersOfTeam(teamId, function (err, result) {
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
    createTeam: createTeam,
    addUserToTeam: addUserToTeam,
    removeUserFromTeam: removeUserFromTeam,
    getAllUsersOfTeam: getAllUsersOfTeam
};
