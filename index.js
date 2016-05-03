

module.exports = function(tag, content) {
  var el = document.createElement(tag);
  append(el, content);
  return el;
};


function append(el, content) {
  if(content) {
    if(typeof content === 'function') content = content();
    if(typeof content === 'string') content = document.createTextNode(content);
    if(content instanceof Array) content = fragment(content);
    el.appendChild(content);
  }
}


function fragment(arr) {
  var frag = document.createDocumentFragment();
  for(var i = 0, l = arr.length; i < l; i++) {
    append(frag, arr[i]);
  }
  return frag;
}
