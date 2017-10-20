var mongoose = require('mongoose').set('debug', 'true');
var Schema = mongoose.Schema;

var User = new Schema({
    name: String, 
    lastname: String
});


module.exports = {
    userModel: mongoose.model('userModel', User)
}