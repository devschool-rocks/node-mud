module.exports = (function() {

  var net  = require('net');

  var Util       = require('./utility');
  var Mode       = require('./mode');
  var Connection = require('./connection');
  var Player     = require('./player');
  var Room       = require('./room');
  var Functional = require('./functional');

  var server;
  var connections = [];
  var rooms = [];

  var listen = function(port) {
    net.createServer(handleConnection)
       .listen(port);

    console.log("Server listening.");
  };

  var start = function(port) {
    console.log("Loading world..");
    var room = Room();
    rooms.push(room);

    listen(port);
  };

  var closeConnection = function(connection) {
    var i = connections.indexOf(connection);
    if (i != -1) { connections.splice(i, 1); } // mutation
  };

  var handleConnection = function(connection) {
    Connection.send(connection, 'Welcome to the game server');

    var player = Player();
    connection.mode = Mode.game;

    connection.player = player;
    connections.push(connection);

    rooms[0].players.push(connection.player);
    connection.player.room = rooms[0];


    var others = Functional.filter(connection, connections);
    Connection.send(connection, "You descend from the heavens to this earthly realm.");
    others.forEach(function(other) {
      Connection.send(other, connection.player.name + " " + connection.player.entrance);
    });


    connection.on('data', function(data) {
      connection.mode.receiveData(connection, connections, data);
    });

    connection.on('end', function() {
      closeConnection(connection);
    });

  };

  return {
    start: start
  };

})();
