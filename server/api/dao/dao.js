'use strict';

var pw = require("credential")(),
    constants = require("./../lib/constants.js"),
    mongoose = require("./../models"),
    logger = require('./../lib/logger.js').get('dao');

function signIn(email, password, next) {
    logger.info('entered getUser', email, password);
    var User = mongoose.model("Users");
    User.find({"email": email}, {"_id": 0}).toArray(function (err, result) {
        if (err)
            return next(err);
        if (result.length < 1) {
            return next(new Error('No combination with this username and password found'));
        } else {
            validateUser(result[0], password, next);
        }

    });
}

function signUp(email, password, next) {
    logger.info('entered saveUser', email);
    var User = mongoose.model("Users");
    User.findOne({"email": email}, function(err, result) {
        if (err)
            return next(err);
        logger.debug(result);
        if (result) {
            logger.info("User already exists");
            return next(new Error('User with this email already exists'));
        } else {
            pw.hash(password, function (err, hash) {
                if (err)
                    return next(err);
                var request = {
                    "email": email,
                    "password": hash
                };
                var user = new User(request);
                user.save(function (err, result) {
                    if (err) return next(err);
                    else
                        return next(undefined, "Inserted");
                });
            });
        }
    });
}


module.exports = {
    signIn: signIn,
    signUp: signUp
};
