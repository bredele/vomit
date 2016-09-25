# Functions

When a DOM element is used as a placeholder, Vomit will simply append this child element into the DOM element returned.

```js
var span = document.createElement('span')
span.innerHTML = 'Hello world!'
vomit`<button>${span}</button>`

// or even better
var span = vomit`<span>Hello world!</span>`
vomit`<button>${span}</button>`
```

result:

```html
<button><span>Hello world!</span></button>
```

Vomit interfaces organically with all native APIs when some other libraries force you to use closed abstraction that do not play well with others. Element placeholders and [functions](/doc/placeholders/function.md) are the perfect cocktail to create complex applications. 
