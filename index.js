var start = /^<([-A-Za-z0-9_]+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/
var end = endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/


/**
 *
 *
 */

module.exports = function(arr) {
  var str = arr[0]
  var match
  var node
  var chars
  while(str) {
    chars = true
    if(str.indexOf('</') == 0) {
      match = str.match(end)
      if(match) {
        str = str.substring(match[0].length)
        console.log('match end', match)
        match[0].replace(end, ()  => {
          console.log(arguments)
        })
        chars = false;
      }
    } else if(str.indexOf('<') == 0 ) {
      match = str.match(start)
      if(match) {
        str = str.substring(match[0].length)
        node = document.createElement(match[1])
        chars = false
      }
    }
    if(chars) {
      var index = str.indexOf('<')
      var text = index < 0 ? str : str.substring(0, index)
      str = index < 0 ? '' : str.substring(index)
      node.innerHTML = text;
      console.log('text', text, str, index)
    }
  }
  return node
}
