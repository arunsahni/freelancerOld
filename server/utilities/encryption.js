/**
 * Created by arunsahni on 3/3/15.
 */
var crypto = require('crypto');

exports.createSalt = function(){
    return crypto.randomBytes(128).toString('base64');
};

exports.hashedPwd = function(salt, pwd){
    var hmac = crypto.createHmac('sha1',salt);
    return hmac.update(pwd).digest('hex');
};