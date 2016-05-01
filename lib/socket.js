module.exports = (function() {

  var prompt = function() {
    return "your command? ";
  };

  var sendToConnection = function(connection, string) {
    connection.write(string + "\r\n");
    connection.write(prompt());
  };

  return {
    sendToConnection: sendToConnection
  };
})();
