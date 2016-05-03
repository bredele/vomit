
/**
 * Expose 'vomit'.
 *
 * @param {String} tag
 * @param {Element|Function|String|Array} content
 * @api public
 */

module.exports = function(tag, content) {
  var el = document.createElement(tag);
  append(el, content);
  return el;
};


/**
 * Append inner element(s).
 *
 * @param {Element} el
 * @param {Element|Function|String|Array} content
 * @api private
 */

function append(el, content) {
  if(content) {
    if(typeof content === 'function') content = content();
    if(typeof content === 'string') content = document.createTextNode(content);
    if(content instanceof Array) content = fragment(content);
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
