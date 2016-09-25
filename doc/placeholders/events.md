# Event listener

When a function is used as a placeholder inside an attribute starting with 'on', Vomit will add that function as an event listener of the DOM element.

```js
vomit`<button onclick="${doSomething}">Hello World!</button>`

function doSomething() {
  // do something
}
```

It is also possible to call multiple functions on a single event:

```js
var btn = vomit`<button onclick="${add}${submit}">Hello World!</button>`

function add() {
  // add something
}

function submit() {
  // submit something
}
```
