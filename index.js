/**
 * Module dependencies.
 */

var morph = require('morphdom');
var transform = require('./lib/transform');


/**
 * Expose 'vomit'.
 *
 * @param {String} tag
 * @param {Element|Function|String|Array|Object} content
 * @api public
 */

module.exports = function(tag, content) {
  var el;
  if(typeof tag !== 'string') {
    return transform(function(data) {
      var dom = tag(data);
      if(el) morph(el, dom);
      else el = dom;
      return el;
    });
  }
  el = document.createElement(tag);
  append(el, content);
  return el;
};


/**
 * Append inner element(s).
 *
 * @param {Element} el
 * @param {Element|Function|String|Array|Object} content
 * @api private
 */

function append(el, content) {
  if(content) {
    var bool = content.on;
    if(typeof content === 'function' && !bool) content = content(el);
    if(typeof content === 'string') content = document.createTextNode(content);
    if(content instanceof Array) content = fragment(content);
    if(bool) return content.on('data', function(data) {
      append(el, data);
    });
    el.appendChild(content);
  }
}


/**
 * Append fragment of elements.
 *
 * It is more performant to compute elements
 * into a fragment to voir reflow and repaints.
 *
 * @param {Array} arr
 * @api private
 */

function fragment(arr) {
  var frag = document.createDocumentFragment();
  for(var i = 0, l = arr.length; i < l; i++) {
    append(frag, arr[i]);
  }
  return frag;
}
