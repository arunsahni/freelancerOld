/**
 * Created by arunsahni on 3/3/15.
 */

var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app, config){
    function compile(str, path){
        return stylus(str).set('filename',path);
    }
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/client',
            compile: compile
        }
    ));

    app.use(express.static(config.rootPath + '/client'));

    app.set('views',config.rootPath + '/server/views');
    //app.set('view engine', 'html');
    app.set('view engine', require('html'));
    //app.set('views', './server/views');

    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(session({secret: 'freelancer'}));
    app.use(passport.initialize());
    app.use(passport.session());


};
