var config = require('./config');

var slack = require('./config/slack')(config);
var simsimi = require('./config/simsimi');

slack.on('message', function(data) {
  if (data.text.indexOf("<@"+config.bot.id+">") == 0) {
      var message = data.text.replace("<@"+config.bot.id+">","")
      simsimi.callSimsimiAPI(message, function(response) {
        slack.sendMessage(response, data.channel)
        .then((res) => {
          console.log('Message sent: ', data);
        })
        .catch(console.error);
      })
  }

});

slack.start();
