/**
 * Test dependencies.
 */

var tape = require('tape')
var vomit = require('..')

tape('should create element', (test) => {
  test.plan(1)
  var btn = vomit`<button>hello</button>`
  test.equal(btn.outerHTML, '<button>hello</button>')
})

tape('should interpolate string', (test) => {
  test.plan(1)
  var label = 'hello'
  var btn = vomit`<button>${label}</button>`
  test.equal(btn.outerHTML, '<button>hello</button>')
})
