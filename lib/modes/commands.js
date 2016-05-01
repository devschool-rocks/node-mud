module.exports = (function() {
  var glob = require('glob-fs')({});

  var commands = function(mode) {
    var files = glob.readdirSync('./lib/commands/' + mode + '/*.js');
    var obj = {};

    var attrs = files.map(function(file) {
      return file.split("/").reverse()[0].split(".")[0];
    });

    var builtObject = function(mode) {
      attrs.forEach(function(attr) {
        console.log("loading: require('../commands/" + mode + '/' + attr + ")");
        obj[attr] = require('../commands/' + mode + '/' + attr);
      });
      return obj;
    };

    return builtObject(mode);

  };

  return commands;
})();
