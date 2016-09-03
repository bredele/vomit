/**
 * Test dependencies.
 */

var tape = require('tape')
var vomit = require('..')


tape('should create element with attributes', (test) => {
  test.plan(1)
  var btn = vomit`<button id="btn" class="test">hello</button>`
  test.equal(btn.outerHTML, '<button id="btn" class="test">hello</button>')
})


tape('should interpolate attributes', (test) => {
  test.plan(1)
  var name = 'olivier'
  var btn = vomit`<button id="${name}" class="${name}">hello</button>`
  test.equal(btn.outerHTML, '<button id="olivier" class="olivier">hello</button>')
})
