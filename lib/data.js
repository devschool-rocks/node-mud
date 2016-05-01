module.exports = (function(){
  var jsonfile = require('jsonfile');

  var pFilePath = function(name) {
    return ['data/players/', name, '.json'].join("");
  };

  var pFile = function(name) {
    return pFilePath(name);
  };

  var load = function(name) {
    return jsonfile.readFileSync(pFilePath(name));
  };

  var save = function(player) {
    jsonfile.writeFile(pFile(player.name), player, function (err) {
      console.log(err);
    });
  };

  return {
    load: load,
    save: save
  };
})();
