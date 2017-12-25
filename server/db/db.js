// TO run this file
// open bash/terminal
// mongo localhost:27017/todo db.js

db.createCollection('users');
db.createCollection('tasks');
db.createCollection('counters');
db.createCollection('comments');
db.counters.insert({_id: "userid", seq: 0 });
db.counters.insert({_id: "taskid", seq: 0 });
db.counters.insert({_id: "commentid", seq: 0 });
db.counters.insert({_id: "teamid", seq: 0 });
