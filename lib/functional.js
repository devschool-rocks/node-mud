module.exports = (function() {

  var headTail = function(array) {
    var head = array[0];
    var tail = array.slice(1, array.lenth);

    return [head, tail];
  };

  var filter = function(item, array) {
    return array.filter(function(current) {
      return item !== current;
    });
  };

  return {
    headTail: headTail,
    filter: filter
  };
})();
