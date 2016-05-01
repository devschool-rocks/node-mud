module.exports = (function() {

  var glob = require('glob-fs');
  var Table = require('easy-table');

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    var files = glob({}).readdirSync('./lib/commands/game/*.js');
    var obj = {};
    var table = new Table();

    var commands = files.map(function(file) {
      return file.split("/").reverse()[0].split(".")[0];
    });

    var help_string = "You can use any of the following commands:\r\n\r\n";

    commands.forEach(function(cmd) {
      table.cell("command", cmd);
      table.cell("description", sender.mode.commands[cmd].description);
      table.cell("example", sender.mode.commands[cmd].eg);
      table.newRow();
    });

    Connection.send(sender, help_string);
    Connection.send(sender, table.toString());
  };

  return {
    fn: execFn,
    description: "Displays this help file",
    eg: 'help'
  };

})();
