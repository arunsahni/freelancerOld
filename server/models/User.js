/**
 * Created by arunsahni on 3/3/15.
 */
var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: {type:String, required:'{PATH} is required!'},
    lastName: {type:String, required:'{PATH} is required!'},
    username: {type:String,
        required:'{PATH} is required!',
        unique: true},
    salt: {type:String, required:'{PATH} is required!'},
    hashed_pwd: {type:String, required:'{PATH} is required!'},
    roles: [String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch){
        return encrypt.hashedPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
};

var User = mongoose.model('User',userSchema);

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {

            //console.log("collection", collection);

    })
}

exports.createDefaultUsers = createDefaultUsers;