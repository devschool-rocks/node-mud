module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  return function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    others.map(function(other) {
      Connection.send(sender, other.player.name + ' is here, ' + other.player.position + ".");
      Connection.send(other, sender.player.name + ' looks around.');
    });
  };

})();
