

module.exports = function(tag, content) {
  var el = document.createElement(tag);
  el.innerHTML = content;
  return el;
};
