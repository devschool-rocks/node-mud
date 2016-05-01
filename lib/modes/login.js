module.exports = (function() {

  var Commands = require('./commands');
  var Util = require('../utility');
  var Command = require('../command');
  var Connection = require('../connection');

  var receive = function(sender, connections, data) {
    var cmd = Util.cleanString(data.toString());
    sender.mode.command.execute(sender, connections, cmd);
  };

  return {
    command: Command,
    commands: Commands('login'),
    receiveData: receive
  };
})();
