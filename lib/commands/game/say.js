module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
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

  return {
    fn: execFn,
    description: "Says something generally to the room",
    eg: 'say Hello world!'
  };

})();
