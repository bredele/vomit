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


tape('should create multiple elements', (test) => {
  test.plan(1)
  var label = 'hello'
  var section = vomit`<section><button>${label}</button></section>`
  test.equal(section.outerHTML, '<section><button>hello</button></section>')
})


tape('should wrap function', (test) => {
  test.plan(1)
  var btn = vomit(function(data) {
    return vomit`<button>${data}</button>`
  })
  test.equal(btn('hello').outerHTML, '<button>hello</button>')
})


tape('should diff and patch element', (test) => {
  test.plan(1)
  var btn = vomit(function(data) {
    return vomit`<button>${data}</button>`
  })
  var el = btn('hello')
  btn('world')
  test.equal(el.outerHTML, '<button>world</button>')
})


tape('should work with multilines', (test) => {
  test.plan(1)
  var el = vomit`
  <section>
     <button></button>
  </section>
  `
  test.equal(el.outerHTML, '<section>\n     <button></button>\n  </section>')
})
