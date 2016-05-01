module.exports = (function(){
  var jsonfile = require('jsonfile');

  var playerSavePath = function(email) {
    return ['data/players/', email, '.json'].join("");
  };

  var loadPlayer = function(email) {
    return jsonfile.readFileSync(playerSavePath(email));
  };

  var save = function(player) {
    jsonfile.writeFile(pFile(player.email), player, function (err) {
      console.log(err);
    });
  };

  return {
    loadPlayer: loadPlayer,
    save: save
  };
})();
