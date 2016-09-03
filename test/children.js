/**
 * Test dependencies.
 */

var tape = require('tape')
var vomit = require('..')
var promise = require('promises-a');
var Readable = require('stream').Readable;


tape('should interpolate string', (test) => {
  test.plan(1)
  var label = 'hello'
  var btn = vomit`<button>${label}</button>`
  test.equal(btn.outerHTML, '<button>hello</button>')
})


tape('should interpolate element', (test) => {
  test.plan(1)
  var btn = vomit`<button>hello</button>`
  var section = vomit`<section>${btn}</section>`
  test.equal(section.outerHTML, '<section><button>hello</button></section>')
})


tape('should interpolate promise returning string', (test) => {
	test.plan(1)
	var value = async('hello world')
	var btn = vomit`<button>${value} and others</button>`
	value.then(() => test.equal(btn.outerHTML, '<button>hello world and others</button>'))
})


tape('should interpolate promise returning any type of value', (test) => {
	test.plan(1)
	var value = async(vomit`<button>hello world</button>`)
	var section = vomit`<section>${value} and others</section>`
	value.then(() => test.equal(section.outerHTML, '<section><button>hello world</button> and others</section>'))
})


tape('should interpolate stream', (test) => {
	test.plan(1)
	var btn = vomit`<button>${stream()}</button>`
	setTimeout(function() {
		test.equal(btn.outerHTML, '<button>hello world</button>')
	}, 1000)
})


tape('should interpolate function', (test) => {
	test.plan(1)
	var fn = function() {
		return 'hello world'
	}
	var btn = vomit`<button>${fn}</button>`
	test.equal(btn.outerHTML, '<button>hello world</button>')
})


/**
 * Return value after 500ms using promises.
 * 
 * @param  {Any} value
 * @return {Promise}
 * @api private
 */

function async(value) {
  var def = promise()
  setTimeout(function() {
	def.fulfill(value)
  }, 500)
  return def.promise
}


/**
 * Return 'hello world' using streams.
 * 
 * @param  {Any} value
 * @return {Promise}
 * @api private
 */

function stream() {
	var rs = new Readable
	rs._read = function() {}
	rs.push('hello ')
	setTimeout(function() {
		rs.push('world')
		rs.push(null)
	}, 500)
  return rs
}