module.exports = (function() {

  var Socket = require("../socket");
  var Functional = require("../functional");

  return function(sender, connections, msg) {
    var others = Functional.filter(sender, connections);
    Socket.sendToConnection(sender, "Goodbye!");
    sender.end();

    others.forEach(function(connection) {
      Socket.sendToConnection(connection, "someone left the game.");
    });
  };

})();
