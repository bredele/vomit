
/**
 * Vomit dependencies.
 */

var walk = require('domwalk')
var morph = require('morphdom')
var append = require('regurgitate')
var spitup = require('spitup')
var component = require('molder')


/**
 * Expose 'vomit'
 */

module.exports = function(arr, ...args) {
  var el
  if(arr instanceof Array) {
    var parent = document.createElement('div')
    // innerHTML faster?
    parent.innerHTML = arr.join('${0}')
    el = parent.children[0]
    bind(el, args)
    return el
  } else {
    if(typeof arr == 'function') {
      return function(...data) {
        var result = arr(...data)
        el = el ? morph(el, result) : result
        return el
      }
    } else return component(...arguments)
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
        attribute(node, attrs[i], values)
      }
    } else text(node, values)
  })
}


/**
 * Interpolate attribute with values.
 *
 * @param {Node} node
 * @param  {Array} values
 * @api private
 */

function attribute(parent, node, values) {
  var str = node.value
  var name = node.nodeName
  var arr = str.split('${0}')
  node.value = ''
  if(name.slice(0,2) == 'on') {
    parent[name] = listen(values.splice(0, arr.length - 1))
  } else {
    if(arr[0]) spitup(node, arr[0])
    for(var i = 1, l = arr.length; i < l; i++) {
      spitup(node, values.shift())
      var val = arr[i]
      if(val) spitup(node, val)
    }
  }
}

/**
 * Create simple event listener from multiple functions.
 *
 * @note right now we check they are function when event is trigerred.
 *
 * @param {Array} arr
 * @return {Function}
 * @api private
 */

function listen(arr) {
  return function(event) {
    var el = this
    arr.map(fn => typeof fn == 'function' ? fn.call(this, event) : null)
  }
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
  if(arr[0]) parent.replaceChild(document.createTextNode(arr[0]), node)
  for(var i = 1, l = arr.length; i < l ; i++) {
    append(parent, values.shift())
    var val = arr[i]
    if(val) append(parent, val)
  }
}
