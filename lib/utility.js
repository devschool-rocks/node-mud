module.exports = (function() {
  var cleanString = function(string) {
    return string.replace(/(\r\n|\n|\r)/gm,"");
  };

  return {
    cleanString: cleanString
  };
})();
