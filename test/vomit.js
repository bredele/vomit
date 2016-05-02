/**
 * Test dependencies.
 */

var tape = require('tape');
var vomit = require('..');

tape('create dom element', function(assert) {
  assert.plan(1);
  var el = vomit('div');
  assert.equal(el.outerHTML, '<div></div>');
});
