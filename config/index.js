var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        token: 'xoxb-370454623632-371481934869-nPBAgpt2NBQslaPuJX8BpyZI',
        bot: {
            name: 'Alfred',
            id: 'UAXE5TGRK'
        },
        simsimi_key: '84c35046-2538-4a5e-8810-1edf86326749'
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
