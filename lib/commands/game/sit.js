module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  return function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    if (sender.player.position === 'sitting') {
      Connection.send(sender, "\r\nYou are already sitting.");
      return;
    }

    if (sender.player.state === 'sleeping') {
      sender.player.state = 'awake';
      Connection.send(sender, "\r\nYou wake and sit up.");
    } else {
      Connection.send(sender, "\r\nYou sit down.");
    }
    sender.player.position = 'sitting';

    others.forEach(function(connection) {
      Connection.send(connection, "\r\nSomeone sat down.");
    });
  };

})();
