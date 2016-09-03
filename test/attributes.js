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


tape('should interpolate numbers', (test) => {
  test.plan(1)
  var nb = 2
  var btn = vomit`<button data-nb="${nb}">hello</button>`
  test.equal(btn.outerHTML, '<button data-nb="2">hello</button>')
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


tape('should interpolate objects', (test) => {
  test.plan(1)
  var styles = {
    width: 100 + 'px',
    height: 200 + 'px'
  }
  var btn = vomit`<button style="${styles}">hello</button>`
  test.equal(btn.outerHTML, '<button style="width:100px;height:200px;">hello</button>')
})


tape('should interpolate function', (test) => {
  test.plan(1)
  var bool = true
  var fn = function() {
    return bool ? 'show' : 'hide'
  }
  var btn = vomit`<button class="${fn}">hello</button>`
  test.equal(btn.outerHTML, '<button class="show">hello</button>')
})

