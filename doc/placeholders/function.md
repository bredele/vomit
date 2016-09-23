Functions can be substituted in all possible DOM nodes.

Here's below quick example.

```js
function hello() {
  return 'hello world!'
}

function state(bool) {
  return bool ? 'active' : 'disable'
}

vomit`<button class="${state(true)}">${hello}</button>`
```

and the result is:

```html
<button class="active">hello world!</button>
```

When vomit encounters a function, it execute it and substitute what the function returned. A function can return any type of primitives, object, streams, promises, elements and even an other function.
