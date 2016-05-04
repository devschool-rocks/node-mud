module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);
    var items = sender.player.room.items.map(function(item) {
      return item.name + " is here.";
    });

    var npcs = sender.player.room.npcs.map(function(npc) {
      return npc.name + " is here.";
    });

    Connection.send(sender, "\r\n[ " + sender.player.room.name + " ]\r\n\r\n" + 
                    sender.player.room.description + "\r\n\r\n" +
                    npcs.join("\r\n") + "\r\n" +
                    items.join("\r\n"));

    others.map(function(other) {
      Connection.send(sender, other.player.name + ' is here, ' + other.player.position + ".");
      Connection.send(other, sender.player.name + ' looks around.');
    });
  };

  return {
    fn: execFn,
    description: "Looks about the current room",
    eg: 'look'
  };

})();
