module.exports = (function() {

  var atTarget     = require("./grin/target");
  var atRoom       = require("./grin/room");

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    var args        = arg.split(" ");
    var preposition = args[0];
    var target      = args.slice(1,args.length).join(" ");

    if (args.length > 1 && preposition === "at") {
      atTarget.grin(sender, connections, target);
    } else {
      atRoom.grin(sender, connections, arg);
    }
  };

  return {
    fn: execFn,
    description: "Grin demonically, because you can",
    eg: 'grin'
  };

})();
