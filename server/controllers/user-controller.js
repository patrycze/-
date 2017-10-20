var mongoose    = require('mongoose');
var config      = require('../config');
var User        = require('../models/user-models').userModel;
var bodyParser  = require('body-parser');

module.exports.createUser = function(req, res) { 
    var newUser = User({
        name: req.body.name,
        lastname: 'test'
    })

    newUser.save(function(err, result) {
        if (err) throw err; 
        
        res.send(result);
    });
}