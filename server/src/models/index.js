"use strict";

var fs = require("fs");
var path = require("path");
var logger = require('../lib/logger.js').get('dbConnection');
var mongoose = require("mongoose");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '../../', 'config', 'config.json'))[env];
var db;
if (process.env.DATABASE_URL) {
    db = mongoose.connect(process.env.DATABASE_URL);
} else {
    var url = 'mongodb://' + config.host + ':' + config.port + '/' + config.database;
    db = mongoose.connect(url);
}

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = require(path.join(__dirname, file));
    });

module.exports = db;
