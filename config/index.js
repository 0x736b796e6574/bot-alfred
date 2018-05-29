var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        token: process.env.SLACK_BOT_TOKEN,
        bot: {
            name: process.env.SLACK_BOT_NAME,
            id: process.env.SLACK_BOT_ID
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
