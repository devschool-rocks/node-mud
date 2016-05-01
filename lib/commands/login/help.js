module.exports = (function() {

  var glob = require('glob-fs');

  var Connection = require("../../connection");
  var Functional = require("../../functional");

  var execFn = function(sender, connections, arg) {
    var files = glob({}).readdirSync('./lib/commands/login/*.js');
    var obj = {};

    var commands = files.map(function(file) {
      return file.split("/").reverse()[0].split(".")[0];
    });

    var help_string = "You can use any of the following commands:\r\n\r\n";

    Connection.send(sender, help_string + commands.join(", "));
  };

  return {
    fn: execFn,
    description: "Displays this help file"
  };

})();
