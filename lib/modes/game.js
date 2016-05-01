module.exports = (function() {

  var Commands = require('./commands');
  var Util = require('../utility');
  var Command = require('../command');
  var Connection = require('../connection');

  var receive = function(player, players, data) {
    var cmd = Util.cleanString(data.toString());
    player.mode.command.execute(player, players, cmd);
  };

  return {
    command: Command,
    commands: Commands('game'),
    receiveData: receive
  };
})();
