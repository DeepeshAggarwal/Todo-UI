'use strict';

var util = require('./../lib/util.js'),
    teamService = require('./../services/teamService.js'),
    logger = require('./../lib/logger.js').get('TeamController');

function createTeam(team, res) {
    logger.info("Entering createTeam ", team);
    util.validateRequest(team, undefined, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        teamService.createTeam(team, function (err, result) {
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
    logger.info("Entering addUserToTeam for user, team", userInfo, teamId);
    util.validateRequest(teamId, userInfo, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        teamService.addUserToTeam(teamId, userInfo, function (err, result) {
            if (err) {
                logger.error(err);
                var error = {'message': err.message};
                res.status(500).send(error)
            }
            logger.info(result);
            res.status(200).send();
        });
    });
}

function removeUserFromTeam(teamId, userId, res) {
    logger.info("Entering removeUserFromTeam for user", teamId, userId);
    util.validateRequest(teamId, userId, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        teamService.removeUserFromTeam(teamId, userId, function (err, result) {
            if (err) {
                logger.error(err);
                var error = {'message': err.message};
                res.status(500).send(error)
            }
            logger.info(result);
            res.status(200).send();
        });
    });
}

function getAllUsersOfTeam(teamId, res) {
  logger.info("Entering getAllUsersOfTeam for user", teamId);
  util.validateRequest(teamId, undefined, function (err) {
      if (err) {
          return res.status(400).send("Invalid Request");
      }
      teamService.getAllUsersOfTeam(teamId, function (err, result) {
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
