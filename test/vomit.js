/**
 * Test dependencies.
 */

var tape = require('tape');
var vomit = require('..');
var Stream = require('stream');


tape('create dom element', function(assert) {
  assert.plan(1);
  var el = vomit('div');
  assert.equal(el.outerHTML, '<div></div>');
});

tape('should create any kind of dom element', function(assert) {
  assert.plan(1);
  var el = vomit('button');
  assert.equal(el.outerHTML, '<button></button>');
});

tape('should set element class names and/or id');

tape('should set text as innerHTML', function(assert) {
  assert.plan(1);
  var el = vomit('button', 'hello world!');
  assert.equal(el.outerHTML, '<button>hello world!</button>');
});

tape('should set other vomit element as innerHTML', function(assert) {
  assert.plan(1);
  var el = vomit('button', vomit('span', 'hello world!'));
  assert.equal(el.outerHTML, '<button><span>hello world!</span></button>');
});

tape('should set returned value of a function as innerHTML', function(assert) {
  assert.plan(1);
  var el = vomit('button', function() {
    return 'hello world!';
  });
  assert.equal(el.outerHTML, '<button>hello world!</button>');
});

tape('should set array of inner HTML as children', function(assert) {
  assert.plan(1);
  var el = vomit('ul', [
    'hello ',
    vomit('span', 'world!')
  ]);
  assert.equal(el.outerHTML, '<ul>hello <span>world!</span></ul>');
});

tape('should set event emitter based interface as inner element', function(assert) {
  assert.plan(1);
  var src = reader();
  var el = vomit('button', src);
  src.emit('data', 'hello world!');
  assert.equal(el.outerHTML, '<button>hello world!</button>');
});

tape('should morph elements', function(assert) {
  assert.plan(2);
  var button = vomit(function(data) {
    return vomit('button', data || 'hello');
  });
  var el = button();
  assert.equal(typeof button, 'function');
  button('world');
  assert.equal(el.outerHTML, '<button>world</button>');
});

tape('should return a writable stream', function(assert) {
  assert.plan(1);
  var src = reader();
  var writer = vomit(function(data) {
    return vomit('span', data);
  });
  var el = vomit('h1', src.pipe(writer));
  src.emit('data', 'hello');
  assert.equal(el.outerHTML, '<h1><span>hello</span></h1>')
});



/**
 * Create stream.
 * @api private
 */

function reader() {
  var src = new Stream();
  src.readable = true;
  return src;
}
