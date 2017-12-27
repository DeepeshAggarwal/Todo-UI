'use strict';

var signController = require('./../controllers/sign.js'),
    taskController = require('./../controllers/task.js'),
    teamController = require('./../controllers/team.js'),
    commentController = require('./../controllers/comment.js'),
    logger = require('./../lib/logger.js').get('routes');

var appRouter = function (app) {

    //sign
    app.post("/signIn", function (req, res) {
        signController.signIn(req.body, res);
    });

    app.post("/signup", function (req, res) {
        signController.signUp(req.body, res);
    });

    //tasks
    app.post("/user/:userId/task", function(req, res) {
        taskController.createTask(req.params.userId, req.body, res);
    });

    app.get("/user/:userId/task/:taskId", function(req, res) {
        taskController.getTask(req.params.userId, req.params.taskId, res);
    });

    app.get("/user/:userId/tasks", function(req, res) {
        taskController.getTasks(req.params.userId, res);
    })
    app.put('/user/:userId/task/:taskId', function(req, res) {
        res.status(200).send('Under Construction')
    });

    //team
    app.post('/team', function(req, res) {
        logger.debug(req.body);
        teamController.createTeam(req.body, res);
    });

    app.post('/team/:teamId/user', function(req, res) {
        logger.debug(req.params.teamId, req.body);
        teamController.addUserToTeam(req.params.teamId, req.body, res);
        // res.status(200).send('Under Construction');
    });

    app.delete('/team/:teamId/user/:userId', function(req, res) {
        logger.debug(req.params.teamId, req.params.userId);
        teamController.removeUserFromTeam(req.params.teamId, req.params.userId, res);
    });

    app.get('/team/:teamId/user', function(req, res) {
        logger.debug(req.params.teamId);
        teamController.getAllUsersOfTeam(req.params.teamId, res);
        // res.status(200).send('Under Construction');
    })

    //comments
    app.post('/task/:taskId/comment', function(req, res) {
        logger.debug(req.params.taskId, req.body);
        commentController.addComment(req.body, req.params.taskId, res);
        // res.status(200).send('Under Construction');
    });

    app.put('/task/:taskId/comment/:commentId', function(req, res) {
        logger.debug(req.params.taskId, req.params.commentId, req.body);
        commentController.updateComment(req.params.taskId, req.params.commentId, req.body, res);
        // res.status(200).send('Under Construction');
    })

};
module.exports = appRouter;
