module.exports = (function() {

  var Commands = require('./commands');
  var Util = require('../utility');
  var Connection = require('../connection');

  var receive = function(sender, connections, data) {
    var cmd = Util.cleanString(data.toString());
    sender.mode.command.execute(sender, connections, cmd.fn);
  };

  return {
    commands: Commands('login'),
    receiveData: receive
  };
})();
