
var walk = require('domwalk')

/**
 *
 *
 */

module.exports = function(arr, ...args) {
  // may be should be outside
  var parent = document.createElement('div')
  var str = arr.join('${0}')
  // innerHTML faster?
  parent.innerHTML = str
  var el = parent.children[0]
  bind(el, args) // children, childNodes?
  return el
}



function bind(el, args) {
  var h = 0
  walk(el, function(node) {
    if(node.nodeType == 1) {
      var attrs = node.attributes
      // forEach faster?
      for(var i = 0, l = attrs.length; i < l; i++) {
        parse(attrs[i], args[h++])
      }
    } else {
      parse(node, args[h++])
    }
  });
}

function parse(node, value) {
  node.nodeValue = node.nodeValue.replace(/\$\{0\}/g, function() {
    return value
  });
  console.log(node.nodeValue)
}
