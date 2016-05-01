module.exports = (function() {

  var Connection = require('./connection');
  var Util = require('./utility');

  var execute = function(connection, connections, args) {
    var parsed  = parse(args);
    var command = Util.cleanString(parsed[0].toString());
    var argStr  = Util.cleanString(parsed[1].join(" ").toString());
    var cmd     = connection.mode.commands[command];

    if (cmd === undefined) {
      Connection.send(connection, "Huh?");
    } else {
      cmd.fn(connection, connections, argStr);
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
