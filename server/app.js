var express         = require('express');
var config          = require('./config');
var mongoose        = require('mongoose');
var app             = express();        
var userController  = require('./controllers/user-controller');
var bodyParser      = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(config.getDbConnection(), function(err, result) {
    if (err) throw err; 
});

var port = 3002 || process.env.port;

app.post('/create', userController.createUser);
app.listen(port);

