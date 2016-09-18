/**
 * Test dependencies.
 */

var tape = require('tape')
var vomit = require('..')


tape('should substitute element with an other element content', (test) => {
  test.plan(1)
  var el = vomit(vomit`<weather><span>Calgary</span></weather>`, vomit`<section><content /></section>`)
  console.log(el)
  test.equal(el.outerHTML, '<section><span>Calgary</span></section>')
})
