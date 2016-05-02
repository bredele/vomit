

module.exports = function(tag, content) {
  var el = document.createElement(tag);
  if(typeof content === 'string') el.innerHTML = content;
  else if(content) el.appendChild(content);
  return el;
};
