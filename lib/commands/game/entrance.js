module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    sender.player.entrance = arg;
    Connection.send(sender, "So be it, when you log in you will " + sender.player.entrance);
  };

  return {
    fn: execFn,
    description: "Changes the text the room sees when you log in",
    eg: 'entrance arrives in a swirling pink dust of manliness.'
  };

})();
