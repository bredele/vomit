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

tape('should create multiple elements', (test) => {
  test.plan(1)
  var label = 'hello'
  var section = vomit`<section><button>${label}</button></section>`
  test.equal(section.outerHTML, '<section><button>hello</button></section>')
})


// tape('should create element with attributes', (test) => {
//   test.plan(1)
//   var btn = vomit`<button id="btn" class="test">hello</button>`
//   test.equal(btn.outerHTML, '<button id="btn" class="test">hello</button>')
// })

// tape('should interpolate attributes', (test) => {
//   test.plan(1)
//   var name = 'olivier'
//   var btn = vomit`<button id="${name}" class="${name}">hello</button>`
//   test.equal(btn.outerHTML, '<button id="olivier" class="olivier">hello</button>')
// })


tape('should interpolate element', (test) => {
  test.plan(1)
  var btn = vomit`<button>hello</button>`
  var section = vomit`<section>${btn}</section>`
  test.equal(section.outerHTML, '<section><button>hello</button></section>')
})
