module.exports = (function() {
  var cleanString = function(string) {
    return string.replace(/(\r\n|\n|\r)/gm,"");
  };

  var isSender = function(sender, target) {
    if (target.player !== undefined) {
      return sender.player.name.toLowerCase() === target.player.name.toLowerCase();
    }
    return false;
  };

  var target = function(sender, arg) {
    var roomItems   = sender.player.room.items;
    var roomPlayers = sender.player.room.players;
    var roomNpcs    = sender.player.room.npcs;

    var foundItem = roomItems.filter(function(obj) {
      return arg.toLowerCase() === obj.name.toLowerCase();
    })[0];

    var foundPlayer = roomPlayers.filter(function(obj) {
      return arg.toLowerCase() === obj.name.toLowerCase();
    })[0];

    var foundNpc = roomNpcs.filter(function(obj) {
      return arg.toLowerCase() === obj.name.toLowerCase();
    })[0];

    return (foundPlayer || foundNpc || foundItem);

  };

  return {
    cleanString: cleanString,
    isSender: isSender,
    target: target
  };
})();
