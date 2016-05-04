module.exports = (function() {

  var utility    = require('../../../utility');
  var Connection = require("../../../connection");
  var Functional = require("../../../functional");

  var room = function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    Connection.send(sender, "You grin evilly around the room.");
    others.forEach(function(other) {
      Connection.send(other, sender.player.name + "'s face breaks out in a devilish grin.");
    });
  };

  return {
    grin: room
  };

})();

