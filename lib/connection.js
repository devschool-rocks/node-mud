module.exports = (function() {

  var prompt = function() {
    return "> ";
  };

  var send = function(connection, string) {
    connection.write(string + "\r\n");
    connection.write(prompt());
  };

  return {
    send: send
  };
})();
