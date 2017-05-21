'use strict';

var signController = require('./../controllers/sign.js'),
    logger = require('./../lib/logger.js').get('routes');

var appRouter = function (app) {

    //sign
    app.post("/signIn", function (req, res) {
        signController.signIn(req.body, res);
    });

    app.post("/signup", function (req, res) {
        signController.signUp(req.body, res);
    });

};
module.exports = appRouter;
