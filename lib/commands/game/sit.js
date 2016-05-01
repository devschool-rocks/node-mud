module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
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
      Connection.send(connection, "\r\n" + sender.player.name + " sits down.");
    });
  };

  return {
    fn: execFn,
    description: "Sits your character down on the ground",
    eg: 'sit'
  };

})();
