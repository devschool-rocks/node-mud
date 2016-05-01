module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    Connection.send(sender, "You grin evilly around the room.");
    others.map(function(other) {
      Connection.send(other, sender.player.name + "'s face breaks out in a devilish grin.");
    });
  };

  return {
    fn: execFn,
    description: "Grin demonically, because you can",
    eg: 'grin'
  };

})();
