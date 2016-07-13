/**
 * Test dependencies.
 */

var tape = require('tape')
var vomit = require('..')

tape('should create element', (test) => {
  test.plan(1)
  var btn = vomit`<button></button>`
  test.equal(btn.outerHTML, '<button></button>')
})
