## Simple event listener

```js
var btn = vomit`<button onclick="${submit}"></button>`

function submit() {
  // do something
}
```

## Chained event listeners

```js
var btn = vomit`<button onclick="${add}${submit}"></button>`

function add() {
  // do something
}

function submit() {
  // do something
}
```
