
/**
 * Todo dependencies.
 */

var vomit = require('vomit')


function header() {
  return vomit`<header>
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" value="">
  </header>`
}
