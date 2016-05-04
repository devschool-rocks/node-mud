module.exports = (function() { 
  var utility    = require('../../../utility');
  var Connection = require("../../../connection");
  var Functional = require("../../../functional");

  var target = function(sender, connections, arg) {
    if (utility.isSender(sender, arg)) {
      grinSelf(sender, connections, arg);
    } else {
      var target = utility.target(sender, arg);
      if (target) {
        grinTarget(sender, connections, target);
      } else {
        Connection.send(sender, "You don't see that here!");
      }
    }
  };

  var grinSelf = function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    Connection.send(sender, "You grin evilly to yourself.");
    others.forEach(function(other) {
      Connection.send(other, sender.player.name + " grins evilly to themselves.");
    });
  };

  var grinTarget = function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    Connection.send(sender, "You grin evilly at " + arg.name);
    others.forEach(function(other) {
      if (arg.name.toLowerCase() == other.player.name.toLowerCase()) {
        Connection.send(other, sender.player.name + " grins evilly at you.");
      } else {
        Connection.send(other, sender.player.name + " grins evilly at " + arg.name);
      }
    });
  };

  return {
    grin: target
  };

})();
