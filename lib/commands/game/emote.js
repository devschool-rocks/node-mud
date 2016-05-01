module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    Connection.send(sender, "You strain very hard to convey a thought to the room generally.");
    others.map(function(other) {
      Connection.send(other, sender.player.name + " " + arg);
    });
  };

  return {
    fn: execFn,
    description: "Do a custom emotion",
    eg: 'flaps their arms about like a weirdo.'
  };

})();
