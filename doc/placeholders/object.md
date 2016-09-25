# Objects

When an object is used as placeholder, Vomit will serialize the object and insert it as following:

```js
var styles = {
  width: 100 + 'px',
  background: 'red'
}
vomit`<button style="${styles}">Hello world!</button>`
```

result:

```html
<button style="width:100px;background:red;">Hello world!</button>
```

This behaviour is especially useful to create animations and apply inline styles on elements.

## Serialization

When an object is not [promise](/doc/placeholders/promise.md) or a [stream](/doc/placeholders/stream.md), Vomit will automatically serialize it as seen above. You might want to serialize your data an other way and in order to do that, you can simply pass it to a function.

```js
var obj = {
 name: 'vomit',
 version: '1.0.0'
}
vomit`<span>${serialize(obj)}</span>`

function serialize(obj) {
  return `${obj.name} is at the version ${obj.version}`
}
```

result:

```html
<span>vomit is at the version 1.0.0</span>
```

Learning curve with Vomit is minimal because you only need to know JavaScript.
