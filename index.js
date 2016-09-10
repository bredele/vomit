
/**
 * Vomit dependencies.
 */

var walk = require('domwalk')
var styles = require('stylon')
var morph = require('morphdom')
var append = require('regurgitate')


/**
 * Expose 'vomit'
 */

module.exports = function(arr, ...args) {
  if(typeof arr === 'function') {
    var el;
    return function(data) {
      var result = arr(data)
      el = el ? morph(el, result) : result
      return el
    }
  } else {
    // may be should be outside (or use brick)
    var parent = document.createElement('div')
    // innerHTML faster?
    parent.innerHTML = arr.join('${0}')
    var el = parent.children[0]
    bind(el, args) // children, childNodes?
    return el
  }
}


/**
 * Bind element children and attributes
 * with template variables.
 * 
 * @note should be in brick core
 * 
 * @param  {Element} el   
 * @param  {Array} values 
 * @api private  
 */

function bind(el, values) {
  walk(el, function(node) {
    if(node.nodeType == 1) {
      var attrs = node.attributes
      // forEach faster?
      for(var i = 0, l = attrs.length; i < l; i++) {
        attribute(attrs[i], values)
      }
    } else text(node, values)
  });
}


/**
 * Interpolate attribute with values.
 *
 * @param {Node} node 
 * @param  {Array]} values 
 * @api private   
 */

function attribute(node, values) {
  // nodeValue faster than setAttribute?
  // faster than split?
  node.nodeValue = node.nodeValue.replace(/\$\{0\}/g, function() {
    var value = values.shift();
    var type = typeof value
    if(type === 'function') value = value()
    if(type === 'object') {
      if(value instanceof Array) value = value.join(' ')
      else value = styles(value)
    }
    return value
  })
}


/**
 * Interpolate text nodes with values.
 * 
 * @param  {Node} node   
 * @param  {Array]} values 
 * @api private       
 */

function text(node, values) {
  // parent could be passe from walk
  var parent = node.parentElement
  var str = node.nodeValue
  node.nodeValue = ''
  var arr = str.split('${0}')
  // arr[0] is always a string we could optimize!
  if(arr[0]) append(parent, arr[0]) 
  for(var i = 1, l = arr.length; i < l ; i++) {
    append(parent, values.shift())
    var val = arr[i]
    if(val) append(parent, val)
  } 
}

