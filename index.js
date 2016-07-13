var start = /^<([-A-Za-z0-9_]+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/
var end = endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/


/**
 *
 *
 */

module.exports = function(arr, ...args) {
  var i = 0
  var str = arr[i]
  var length = arr.length;
  var match
  var node
  var chars
  var parent = document.createDocumentFragment()
  while(str) {
    chars = true
    if(str.indexOf('</') == 0) {
      match = str.match(end)
      if(match) {
        str = str.substring(match[0].length)
        var tmp = node.parentElement
        if(tmp) parent = tmp
        chars = false;
      }
    } else if(str.indexOf('<') == 0 ) {
      match = str.match(start)
      if(match) {
        str = str.substring(match[0].length)
        node = document.createElement(match[1])
        parent.appendChild(node)
        parent = node
        chars = false
      }
    }
    if(chars) {
      var index = str.indexOf('<')
      var text = index < 0 ? str : str.substring(0, index)
      str = index < 0 ? '' : str.substring(index)
      parent.appendChild(document.createTextNode(text))
    }

    if(!str && ++i != length) {
      str = args[i - 1] + arr[i]
    }
  }
  return parent
}
