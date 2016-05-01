module.exports = (function() {
  var Socket = require("../socket");
  var Functional = require("../functional");

  return function(sender, connections, args) {
    var msg = args.join(" ");
    var others = Functional.filter(sender, connections);
    Socket.sendToConnection(sender, "\r\nYou said: \"" + msg + "\".");
    others.forEach(function(connection) {
      Socket.sendToConnection(connection, "\r\nSomeone said: \"" + msg + "\".");
    });
  };

})();
