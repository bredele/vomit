/**
 * Test dependencies.
 */

var tape = require('tape')
var vomit = require('..')


tape('should substitute element with an other element content', (test) => {
  test.plan(1)
  var weather = vomit`<weather><span>Calgary</span></weather>`
  vomit(weather, vomit`<section><content /></section>`)
  test.equal(weather.outerHTML, '<section><span>Calgary</span></section>')
})
