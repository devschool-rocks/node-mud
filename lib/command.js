module.exports = (function() {

  var say   = require('./commands/say');
  var quit  = require('./commands/quit');
  var sit   = require('./commands/sit');
  var stand = require('./commands/stand');

  var Connection = require('./connection');
  var Util = require('./utility');

  var commands = {
    say: say,
    quit: quit,
    sit: sit,
    stand: stand
  };

  var execute = function(sender, connections, args) {
    var parsed  = parse(args);
    var command = Util.cleanString(parsed[0].toString());
    var argStr  = Util.cleanString(parsed[1].join(" ").toString());
    var cmdFn   = commands[command];

    if (cmdFn === undefined) {
      Connection.send(sender, "Huh?");
    } else {
      cmdFn(sender, connections, argStr);
    }
  };

  var parse = function(data) {
    var d       = data.split(" ");
    var command = d[0];
    var args    = d.slice(1, d.length);
    return [command, args];
  };

  return {
    execute: execute
  };
})();
