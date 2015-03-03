/**
 * Created by arunsahni on 3/3/15.
 */

var  mongoose = require('mongoose'),
    passport = require('passport'),
    localStrategy = require('passport-local').Strategy,
    User = mongoose.model('User');

module.exports = function(){

    passport.use(new localStrategy(
        function(username, password,done){
            User.findOne({username: username}).exec(function(err, user){
                if(user && user.authenticate(password)){
                    return done(null, user);
                } else{
                    return done(null, false);
                }
            })
        }
    ));

    passport.serializeUser(function(user, done){
        if(user){
            done(null, user._id);
        }
    });

    passport.deserializeUser(function(id, done){
        User.findOne({_id: id}).exec(function(err, user){
            if(user){
                return done(null, user);
            } else{
                return done(null, false);
            }
        })
    });
}