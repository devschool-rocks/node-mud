module.exports = (function() {

  var Connection = require("../connection");
  var Functional = require("../functional");

  return function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    Connection.sendToConnection(sender, "Goodbye!");
    sender.end();

    others.forEach(function(connection) {
      Connection.send(connection, "someone left the game.");
    });
  };

})();
