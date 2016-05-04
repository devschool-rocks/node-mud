module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    sender.player.name = arg;

    Connection.send(sender, "You introduce yourself as " + arg + '.');

    others.forEach(function(connection) {
      Connection.send(connection, arg + " introduces himself.");
    });
  };

  return {
    fn: execFn,
    description: "Introduce yourself to the world",
    eg: 'introduce <name>'
  };

})();
