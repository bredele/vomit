/**
 * Test dependencies.
 */

var tape = require('tape')
var vomit = require('..')


tape('should call function on event', (test) => {
  test.plan(1)
  var btn = vomit`<button onclick="${function() {
    test.equal(this.outerHTML, '<button onclick="">hello</button>')
  }}">hello</button>`
  trigger('click', btn)
})


tape('should call muiltiple function on event', (test) => {
  test.plan(1)
  var name = 'vomit'
  var hello = function() {
    this.innerHTML += 'hello '
  }

  var world = function() {
    this.innerHTML += 'world!'
  }
  var btn = vomit`<button onclick="${name}${hello}${world}"></button>`
  trigger('click', btn)
  test.equal(btn.outerHTML, '<button onclick="">hello world!</button>')
})

/**
 * Trigger event.
 *
 * @pram {String} type
 * @param {Element} el
 * @api private
 */

function trigger(type, el) {
  var event = new Event(type);
  el.dispatchEvent(event);
}
