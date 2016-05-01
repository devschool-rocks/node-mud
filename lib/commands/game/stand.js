module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  return function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    if (sender.player.position === 'standing') {
      Connection.send(sender, "\r\nYou are already standing.");
      return;
    }

    if (sender.player.state === 'sleeping') {
      sender.player.state = 'awake';
      Connection.send(sender, "\r\nYou wake and stand up.");
    } else {
      Connection.send(sender, "\r\nYou stand up.");
    }

    sender.player.position = 'standing';

    others.forEach(function(connection) {
      Connection.send(connection, "\r\nSomeone stands up.");
    });
  };

})();
