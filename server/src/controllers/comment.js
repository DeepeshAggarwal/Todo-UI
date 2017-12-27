'use strict';

var util = require('./../lib/util.js'),
    commentService = require('./../services/commentService.js'),
    logger = require('./../lib/logger.js').get('CommentController');

function addComment(comment, taskId, res) {
    logger.info("Entering addComment ", comment, taskId);
    util.validateRequest(comment, taskId, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        commentService.addComment(comment, taskId, function (err, result) {
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

function updateComment(taskId, commentId, commentMessage, res) {
    logger.info("Entering updateComment ", taskId, commentId, commentMessage);
    util.validateRequest(taskId, commentId, function (err) {
        if (err) {
            return res.status(400).send("Invalid Request");
        }
        commentService.updateComment(taskId, commentId, commentMessage, function (err, result) {
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

module.exports = {
    addComment: addComment,
    updateComment: updateComment
};
