'use strict';

var util = require('./../lib/util.js'),
    signService = require('./../services/signService.js'),
    logger = require('./../lib/logger.js').get('signController');

function signIn(body, res) {
    logger.info("Entering signIn");
    util.validateRequest(body.email, body.password, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        signService.signIn(body.email, body.password, function (err, result) {
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

function signUp(body, res) {
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
    signIn: signIn,
    signUp: signUp
};
