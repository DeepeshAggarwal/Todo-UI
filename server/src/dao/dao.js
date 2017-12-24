'use strict';

var pw = require('credential')(),
    mongoose = require('./../models'),
    logger = require('./../lib/logger.js').get('dao');

function signIn(email, password, next) {
    logger.info('entered getUser', email, password);
    var User = mongoose.model('User');
    User.findOne({'email': email}, function (err, result) {
        if (err)
            return next(err);
        if (result.length < 1)
            return next(new Error('No combination with this username and password found'));
        else {
            validateUser(result.password, password, function(err, isValid) {
                logger.debug(isValid, result);
                if (err)
                    return next(err);
                else if (isValid)
                    return next(null, result.getPublicFields())
                else
                    return next(new Error('No combination with this username and password found'));
            });
        }
    });
}

function signUp(email, password, next) {
    logger.info('entered saveUser', email);
    var User = mongoose.model('User');
    User.findOne({'email': email}, function(err, result) {
        logger.debug(result, next);
        if (err)
            return next(err);
        if (result) {
            logger.info('User already exists');
            return next(new Error('User with this email already exists'));
        } else {
            pw.hash(password, function (err, hash) {
                if (err)
                    return next(err);
                var request = {
                    'email': email,
                    'password': hash
                };
                getNextSequence('userid', function(err, result) {
                    if (err)
                        next(err);
                    else {
                        logger.debug('seq number', result.value.seq);
                        request._id = result.value.seq;
                        var user = new User(request);
                        user.save(function (err, result) {
                            if (err) return next(err);
                            else
                                return next(undefined, result.getPublicFields());
                        });
                    }
                });
            });
        }
    });
}

function createTask(userId, task, next) {
    logger.info('entered createTask', userId, task);
    // Confirm the userId exists
    var Task = mongoose.model('Task');
    getNextSequence('taskid', function(err, result) {
      //TODO have to update result.value.seq to result.seq
      logger.debug('seq number', result, result.value.seq);
      task._id = result.value.seq;
      task.userId = userId
      var tasks = new Task(task);
      tasks.save(function (err, result) {
          if (err) return next(err);
          else
              return next(undefined, result);
      });
    });

}

function getTasks(userId, next) {
    logger.info('entered getTasks', userId);
    var Task = mongoose.model('Task');
    Task.find({'userId' : userId}).select({'__v' : 0}).exec(next);
}

function getTask(userId, taskId, next) {
    logger.info('entered getTask', userId, taskId);
    logger.debug('userId Type' , typeof userId );
    var Task = mongoose.model('Task');
    Task.findOne({'_id': taskId, 'userId' : userId}).populate('comments').populate('userId', 'id').select({'__v' : 0}).exec(next);
}

function getNextSequence(name, cb) {
    logger.info('entered getNextSequence', name);
    var Counter = mongoose.model('Counter');
    Counter.findAndModify(name, cb);
}

function userExists(userId, cb) {
  logger.info('entered userExists', userId);
  var User = mongoose.model('User');
  User.findOne({'_id': userId}).select({'_id': 1}).exec(cb);

}

function validateUser(storedPassword, requestPassword, cb) {
    pw.verify(storedPassword, requestPassword, function(err, isValid) {
        if (err)
            return cb(err);
        if (isValid)
            return cb(null, true);
        else
            return cb(null, false)

    });
}


module.exports = {
    signIn: signIn,
    signUp: signUp,
    createTask: createTask,
    getTasks: getTasks,
    getTask: getTask,
    userExists: userExists
};
