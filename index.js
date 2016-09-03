
/**
 * Vomit dependencies.
 */

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


/* this should be in brick core */
function bind(el, args) {
  walk(el, function(node) {
    if(node.nodeType == 1) {
      var attrs = node.attributes
      // forEach faster?
      for(var i = 0, l = attrs.length; i < l; i++) {
        interpolate(attrs[i], args)
      }
    } else {
      interpolate(node, args)
    }
  });
}


/**
 * Interpolaten text nodes with values.
 * 
 * @param  {Node} node   
 * @param  {Array]} values 
 * @api private       
 */

function interpolate(node, values) {
  var str = node.nodeValue;
  node.nodeValue = '';
  node.nodeValue = str.replace(/\$\{0\}/g, function() {
    var value = values.shift();
    return value
  });
}
