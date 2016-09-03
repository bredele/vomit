/**
 * Test dependencies.
 */

var tape = require('tape')
var vomit = require('..')


tape('should interpolate string', (test) => {
  test.plan(1)
  var label = 'hello'
  var btn = vomit`<button>${label}</button>`
  test.equal(btn.outerHTML, '<button>hello</button>')
})


tape('should interpolate element', (test) => {
  test.plan(1)
  var btn = vomit`<button>hello</button>`
  var section = vomit`<section>${btn}</section>`
  test.equal(section.outerHTML, '<section><button>hello</button></section>')
})
