module.exports = (function() {

  var glob = require('glob-fs')({});
  var Table = require('easy-table');

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    var files = glob.readdirSync('./lib/commands/game/*.js');
    var obj = {};

    var commands = files.map(function(file) {
      return file.split("/").reverse()[0].split(".")[0];
    });

    var table = new Table();
    table.cell("name", sender.player.name);
    table.cell("position", sender.player.position);
    table.cell("state",   sender.player.state);
    table.newRow();


    Connection.send(sender, table.toString());
  };

  return {
    fn: execFn,
    description: "Shows important info about the character"
  };

})();
