module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  return function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    if (sender.player.state === 'sleeping') {
      Connection.send(sender, "\r\nYou groan and mumble something in your sleep.");
      return;
    }

    Connection.send(sender, "\r\nYou said: \"" + arg + "\"");

    others.forEach(function(connection) {
      Connection.send(connection, "\r\nSomeone said: \"" + arg + "\"");
    });
  };

})();
