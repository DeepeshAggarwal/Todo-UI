'use strict';

const pw = require('credential')();
// const mongooseModels = require('./../models');
const mongoose = require('mongoose');
const logger = require('./../lib/logger.js').get('dao');

function signIn(email, password) {
  logger.info('entered getUser', email, password);
  var User = mongoose.model('User');
  return new Promise(function(resolve, reject) {
    User.findOne({ email: email }, function(err, result) {
      if (err) reject(err);
      if (result.length < 1)
        reject(
          new Error('No combination with this username and password found')
        );
      else {
        logger.debug(result);
        validateUser(result.password, password, function(err, isValid) {
          logger.debug(isValid, result);
          if (err) reject(err);
          else if (isValid) resolve(result.getPublicFields());
          else
            reject(
              new Error('No combination with this username and password found')
            );
        });
      }
    });
  });
}

function signUp(email, password, name) {
  logger.info('entered saveUser', email);
  var User = mongoose.model('User');
  return new Promise(function(resolve, reject) {
    pw.hash(password, function(err, hash) {
      if (err) reject(err);
      var request = {
        email: email,
        password: hash,
        name: name
      };
      getNextSequence('userid', function(err, result) {
        if (err) reject(err);
        else {
          logger.debug('seq number', result.value.seq);
          request._id = result.value.seq;
          var user = new User(request);
          user.save(function(err, result) {
            if (err) {
              if (err.name === 'MongoError' && err.code === 11000)
                reject(new Error('User already exist!'));
              else reject(err);
            } else resolve(result.getPublicFields());
          });
        }
      });
    });
  });
}

function createTask(userId, task) {
  logger.info('entered createTask', userId, task);
  const Task = mongoose.model('Task');
  return new Promise((resolve, reject) => {
    getNextSequence('taskid', (err, result) => {
      //TODO have to update result.value.seq to result.seq
      logger.debug('seq number', result, result.value.seq);
      task._id = result.value.seq;
      task.userId = userId;
      const tasks = new Task(task);
      tasks.save((err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  });
}

function getTasks(userId) {
  logger.info('entered getTasks', userId);
  const Task = mongoose.model('Task');
  return Task.find({ userId: userId });
}

function getTask(userId, taskId, next) {
  logger.info('entered getTask', userId, taskId);
  var Task = mongoose.model('Task');
  Task.findOne({ _id: taskId, userId: userId })
    .populate({
      path: 'comments',
      model: 'Comment',
      populate: {
        path: 'userId',
        model: 'User',
        select: { _id: 1 }
      }
    })
    .exec(next);
}

function getNextSequence(name, cb) {
  logger.info('entered getNextSequence', name);
  var Counter = mongoose.model('Counter');
  Counter.findAndModify(name, cb);
}

function userExists(userId) {
  logger.info('entered userExists', userId);
  const User = mongoose.model('User');
  const result = User.findOne({ _id: userId }).select({ _id: 1 });
  return result.exec();
}

function userExistsMoreInfo(user, cb) {
  logger.info('entered userExists', user);
  var User = mongoose.model('User');
  User.findOne({
    $or: [{ _id: user.id }, { name: user.name }, { email: user.email }]
  }).exec(cb);
}

function validateUser(storedPassword, requestPassword, cb) {
  logger.debug(storedPassword, requestPassword);
  pw.verify(storedPassword, requestPassword, function(err, isValid) {
    if (err) return cb(err);
    if (isValid) return cb(null, true);
    else return cb(null, false);
  });
}

function createTeam(team, next) {
  logger.info('entered createTeam', team);
  getNextSequence(
    'teamid',
    function(err, result) {
      this.team._id = result.value.seq;
      var Team = mongoose.model('Team');
      var team = new Team(this.team);
      team.save(function(err, result) {
        if (err) return next(err);
        else {
          logger.debug(result);
          var teamResult = new Team(result);
          var User = mongoose.model('User');
          User.update(
            { _id: team.userId },
            {
              $addToSet: { teamId: result._id }
            },
            function(err, result) {
              next(undefined, teamResult);
            }
          );
        }
      });
    }.bind({ team: team })
  );
}

function addUserToTeam(teamId, userInfo, next) {
  logger.info('entered addUserToTeam', teamId, userInfo);
  var Team = mongoose.model('Team');
  userInfo.teamId.push(teamId);
  var User = mongoose.model('User');
  var user = new User(userInfo);
  user.save(function(err, result) {
    if (err) return next(err);
    else {
      Team.update(
        { _id: teamId },
        {
          addToSet: { userId: userInfo._id }
        },
        next
      );
    }
  });
}

function removeUserFromTeam(teamId, userId, next) {
  var User = mongoose.model('User');
  User.update(
    { _id: userId },
    {
      $pull: { teamId: teamId }
    },
    function() {
      var Team = mongoose.model('Team');
      Team.update(
        { _id: teamId },
        {
          $pull: { userId: userId }
        },
        next
      );
    }
  );
}

function getAllUsersOfTeam(teamId, next) {
  logger.info('entered getAllUsersOfTeam', teamId);
  var Team = mongoose.model('Team');
  Team.find({ _id: teamId })
    .populate('userId', ['_id', 'name'])
    .select({ __v: 0 })
    .exec(next);
}

function addComment(comment, taskId, next) {
  var Comment = mongoose.model('Comment');
  // var commentModel = new Comment(comment);
  getNextSequence('commentid', function(err, result) {
    comment._id = result.value.seq;
    var commentModel = new Comment(comment);
    commentModel.save(comment, function(err, commentSaveResult) {
      if (err) next(err);
      else {
        var Task = mongoose.model('Task');
        Task.update(
          { _id: taskId },
          {
            $push: { comments: commentSaveResult._id }
          },
          function(err, result) {
            if (err) next(err);
            else next(undefined, commentSaveResult);
          }
        );
      }
    });
  });
}

function updateComment(commentId, commentMessage, next) {
  var Comment = mongoose.model('Comment');
  Comment.update(
    { _id: commentId },
    { $set: { comment: commentMessage.comment } },
    function(err, result) {
      if (err) next(err);
      else next(undefined, result);
    }
  );
}

module.exports = {
  signIn: signIn,
  signUp: signUp,
  createTask: createTask,
  getTasks: getTasks,
  getTask: getTask,
  userExists: userExists,
  createTeam: createTeam,
  getAllUsersOfTeam: getAllUsersOfTeam,
  userExistsMoreInfo: userExistsMoreInfo,
  addUserToTeam: addUserToTeam,
  removeUserFromTeam: removeUserFromTeam,
  addComment: addComment,
  updateComment: updateComment
};
