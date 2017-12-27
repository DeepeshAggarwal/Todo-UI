'use strict';

var dao = require('./../dao/dao.js'),
    signService = require('./signService.js'),
    logger = require('./../lib/logger.js');

function createTeam(team, next) {
    signService.userExists(team.userId, function(err, result) {
          if(err) {
              next(err)
          } else if(!result || !result._id) {
              next(new Error("No User Exists with Id " + userId));
          } else {
              dao.createTeam(team, next);
          }
    });
}

function addUserToTeam(teamId, userInfo, next) {
    signService.userExistsMoreInfo(userInfo, function(err, result) {
          if(err) {
              next(err)
          } else if(!result || !result._id) {
              next(new Error("No User Exists with email " + userInfo.email));
          } else {
              dao.addUserToTeam(teamId, result, next);
          }
    });
}

function removeUserFromTeam(teamId, userId, next) {
    signService.userExists(userId, function(err, result) {
          if(err) {
              next(err)
          } else if(!result || !result._id) {
              next(new Error("No User Exists with Id " + userId));
          } else {
              dao.removeUserFromTeam(teamId, userId, next);
          }
    });
}

function getAllUsersOfTeam(teamId, next) {
    dao.getAllUsersOfTeam(teamId, next);
}

module.exports = {
    createTeam: createTeam,
    addUserToTeam: addUserToTeam,
    removeUserFromTeam: removeUserFromTeam,
    getAllUsersOfTeam: getAllUsersOfTeam
}
