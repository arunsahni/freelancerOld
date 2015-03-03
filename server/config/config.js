/**
 * Created by arunsahni on 3/3/15.
 */

var path = require('path');
var rootPath = path.normalize(__dirname +'/../../');
module.exports = {
    development: {
        db: 'mongodb://localhost/freelancer',
        rootPath: rootPath,
        port: process.env.PORT || 5001
    }
};
