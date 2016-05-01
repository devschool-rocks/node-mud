module.exports = (function() {

  var Connection = require("../connection");
  var Functional = require("../functional");

  return function(sender, connections, args) {
    var msg = args.join(" ");
    var others = Functional.filter(sender, connections);

    Connection.send(sender, "\r\nYou said: \"" + msg);

    others.forEach(function(connection) {
      Connection.send(connection, "\r\nSomeone said: \"" + msg);
    });
  };

})();
