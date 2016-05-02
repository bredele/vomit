

module.exports = function(tag, content) {
  var el = document.createElement(tag);
  if(typeof content === 'function') content = content();
  if(typeof content === 'string') content = document.createTextNode(content);
  if(content) el.appendChild(content);
  return el;
};
