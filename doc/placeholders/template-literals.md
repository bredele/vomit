
ES6 Template Literals use back-ticks rather than the single or double quotes we’re used to with regular strings. A template string could thus be written as follows:

```js
var greeting = `Hello World!`
```

Nothing really impressive here but that's not all! Template literals allows to substitute placeholders (using the `${}`) with any valid JavaScript expression.

```js
var name = 'Bob'
var greeting = `Hello ${name}!`
```

  > [Get literal with ES6 Template Strings](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings) for more information

Vomit uses Template Strings and allows you to substitute a lot more than variable and allows string coercion on object, arrays, functions, DOM elements, promises and even streams. Here's a simple example:

```js
var states = ['shown', 'active']

var weather = vomit`<section class="${states}">
  <h1>Weather is ${$.ajax('/dummy/weather/api').then(transform)}!</h1>
</section>`

document.body.appendChild(weather)

function transform(data) {
  // parse and process data
  return data
}
```

  > Have you noticed? Template Strings allows to create multiline strings and vomit makes easy to address all concerns
  in the same language : JavaScript.
