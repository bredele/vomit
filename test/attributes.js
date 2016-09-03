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


tape('should interpolate strings', (test) => {
  test.plan(1)
  var name = 'olivier'
  var btn = vomit`<button id="${name}" class="${name}">hello</button>`
  test.equal(btn.outerHTML, '<button id="olivier" class="olivier">hello</button>')
})


tape('should interpolate booleans', (test) => {
  test.plan(1)
  var bool = true
  var btn = vomit`<button hidden="${bool}">hello</button>`
  test.equal(btn.outerHTML, '<button hidden="true">hello</button>')
})

tape('should interpolate arrays', (test) => {
  test.plan(1)
  var classes = ['hello', 'world']
  var btn = vomit`<button class="${classes}">hello</button>`
  test.equal(btn.outerHTML, '<button class="hello world">hello</button>')
})