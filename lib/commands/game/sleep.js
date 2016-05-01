module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  return function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    if (sender.player.state === 'sleeping') {
      Connection.send(sender, "\r\nYou are already asleep.");
      return;
    }

    Connection.send(sender, "\r\nYou lay down and go to sleep.");

    sender.player.position = 'laying';
    sender.player.state    = 'sleeping';

    others.forEach(function(connection) {
      Connection.send(connection, "\r\nSomeone stands up.");
    });
  };

})();
