'use strict';

var dao = require('./../dao/dao.js'),
    logger = require('./../lib/logger.js');

function addComment(comment, taskId, next) {
    dao.addComment(comment, taskId, next);
}

function updateComment(taskId, commentId, commentMessage, next) {
    dao.updateComment(commentId, commentMessage, next);
}

module.exports = {
    addComment: addComment,
    updateComment: updateComment
}
