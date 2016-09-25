# Dynamic component

We've seen it is possible to create [static components](/doc/component/static.md). A way to update an element returned by a static component is to call that component again and replace the old element with the newly created element.

```js
var oldBtn = button('hello')
document.body.appendChild(oldBtn)

var newBtn = button('world')
oldBtn.parentElement.replaceChild(oldBtn, oldBtn)

// static component
function button(name) {
  return vomit`<button>${name}</button>`
}
```

While replacing elements will actually be very fast, it comes with a cost. The cost is that all of the internal state associated with the existing DOM element (scroll positions, event listeners, CSS transition states, etc.) will be lost.

A dynamic component is a function that takes some data as input and returns a unique DOM element. Everytime this function is called, the element is updated with a minimum amount of changes.


```js
// vomit wraps a static component and make it dynamic
var dynamic = vomit(button)

document.body.appendChild(dynamic('hello'))
dynamic('world')

// static component
function button(name) {
  return vomit`<button>${name}</button>`
}
```

**Vomit swallow a function and regurgitate it** to create a dynamic component. Everytime that function is called, Vomit updates the DOM by applying a diffing algorithm.

Check our [examples](/examples) for more use of dynamic component.

# Virtual DOM

The diffing strategy is sometimes called Virtual DOM. Though Vomit uses a strategy based on real DOM and not on a virtual tree like [React](https://facebook.github.io/react/) does. We believe DOM is fast, we believe web browsers make everything they can to make DOM faster and faster, we believe the DOM that the web browser is maintaining will always be the source of truth.
