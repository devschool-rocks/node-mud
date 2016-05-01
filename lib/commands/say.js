module.exports = (function() {

  var Connection = require("../connection");
  var Functional = require("../functional");

  return function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    Connection.send(sender, "\r\nYou said: \"" + arg + "\"");

    others.forEach(function(connection) {
      Connection.send(connection, "\r\nSomeone said: \"" + arg + "\"");
    });
  };

})();
