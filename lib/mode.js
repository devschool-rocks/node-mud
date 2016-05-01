module.exports = (function() {
  var Login = require('./modes/login');
  var Game = require('./modes/game');

  return {
    login: Login,
    game: Game
  };

})();
