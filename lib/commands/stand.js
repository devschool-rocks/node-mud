module.exports = (function() {

  var Connection = require("../connection");
  var Functional = require("../functional");

  return function(sender, connections, args) {
    var others = Functional.filter(sender, connections);

    Connection.send(sender, "\r\nYou stand up.");

    others.forEach(function(connection) {
      Connection.send(connection, "\r\nSomeone stands up.");
    });
  };

})();
