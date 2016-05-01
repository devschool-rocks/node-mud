module.exports = (function() {

  var net = require('net');
  var Command = require('./command');
  var Socket = require('./socket');
  var server;
  var connections = [];

  var start = function(port) {
    net.createServer(handleConnection)
       .listen(port);
    console.log("Server started.");
  };

  var receiveData = function(sender, data) {
    var cmd = data.toString();
    Command.execute(sender, connections, cmd);
  };

  var closeConnection = function(connection) {
    var i = connections.indexOf(connection);
    if (i != -1) { connections.splice(i, 1); }
  };

  var handleConnection = function(connection) {
    Socket.sendToConnection(connection, 'Welcome to the Telnet server!');

    connection.on('data', function(data) {
      receiveData(connection, data);
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
