module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    Connection.send(sender, "Goodbye!");
    sender.end();
  };

  return {
    fn: execFn,
    description: "Quits the game"
  };

})();
