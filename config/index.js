var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        token: '',
        bot: {
            name: 'Alfred',
            id: ''
        }
    },

    production: {
        root: rootPath,
        token: '',
        bot: {
            name: 'slack-bot',
            id: ''
        }
    }
};

module.exports = config[env];
