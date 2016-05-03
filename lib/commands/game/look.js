module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    Connection.send(sender, "\r\n" + sender.player.room.description + "\r\n");

    others.map(function(other) {
      Connection.send(sender, other.name + ' is here, ' + other.position + ".");
      Connection.send(other, sender.player.name + ' looks around.');
    });
  };

  return {
    fn: execFn,
    description: "Looks about the current room",
    eg: 'look'
  };

})();
