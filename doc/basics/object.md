Object can be substituted in all possible DOM nodes.

## attribute

Here's a quick example:

```js
var styles = {
  width: 100 + 'px',
  display: 'block'
}
vomit`<button style="${styles}"></button>`
```

When used inside an attribute, an object is serialized as below.

```html
<button style="width:100px;display:block;"></button>
```

 > straight objects in attributes are only useful for styles.

## Child node

Objects in a child node should be either a [stream](/doc/advanced/promises-streams.md) or a [promise](/doc/advanced/promises-streams.md). 
