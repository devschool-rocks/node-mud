module.exports = (function() {

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    var others = Functional.filter(sender, connections);

    sender.player.description = arg;

    Connection.send(sender, "You describe yourself as " + arg + '.');
  };

  return {
    fn: execFn,
    description: "Describe yourself to the world",
    eg: 'describe <long description of what you look like>'
  };

})();
