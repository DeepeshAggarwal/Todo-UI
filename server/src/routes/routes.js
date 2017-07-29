'use strict';

var signController = require('./../controllers/sign.js'),
    taskController = require('./../controllers/task.js'),
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
        taskController.getTask(req.params.userId, res);
    })

};
module.exports = appRouter;
