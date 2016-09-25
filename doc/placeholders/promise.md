## Promises

When a promise is used as a placeholder, Vomit will insert the value returned by the promise only once this promise has been fulfilled.

Here's a simple example without Vomit:

```js
var h1 = document.createElement('h1')
h1.innerHTML = 'Weather in Calgary is <span></span>'
fetch('/weather/yyc').then(data => {
  h1.querySelector('span').innerHTML = data
})
```

and with Vomit:

```js
vomit`<h1>Weather in Calgary is ${fetch('/weather/yyc')}</h1>`
```

immediate result:

```html
<h1>Weather in Calgary is </h1>
```

result once AJAX request as completed:

```html
<h1>Weather in Calgary is to damn cold</h1>
```

Accepting promises as placeholder does not only make asynchronous calls easier but also allows you to compose DOM element with libraries using promises as their main interface.
