module.exports = (function() {

  var net  = require('net');

  var Util       = require('./utility');
  var Mode       = require('./mode');
  var Connection = require('./connection');
  var Player     = require('./player');

  var server;
  var connections = [];

  var start = function(port) {
    net.createServer(handleConnection)
       .listen(port);
    console.log("Server started.");
  };

  var closeConnection = function(connection) {
    var i = connections.indexOf(connection);
    if (i != -1) { connections.splice(i, 1); } // mutation
  };

  var handleConnection = function(connection) {
    Connection.send(connection, 'Welcome to the game server!');

    connection.mode = Mode.game;
    connection.player = Player;

    connection.on('data', function(data) {
      connection.mode.receiveData(connection, connections, data);
    });

    connection.on('end', function() {
      closeConnection(connection);
    });

    connections.push(connection);
  };

  return {
    start: start
  };

})();
