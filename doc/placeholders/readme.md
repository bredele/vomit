# Placeholders

Vomit uses [JavaScript Template Literals]((https://developers.google.com/web/updates/2015/01/ES6-Template-Strings)) to create multiline templates and address all concerns in the same language : JavaScript.

## Template Literals

ES6 Template Literals use back-ticks rather than the single or double quotes we’re used to with regular strings. A template string could thus be written as follows:

```js
var greeting = `Hello World!`
```

Creating a DOM element with Vomit is then as simple as

```js
var greeting = vomit`<h1>Hello World!</h1>`
```

## String substitution

Template literals allows to substitute **placeholders** (using the `${}`) with any valid JavaScript expression and coerce the result into a String.

```js
var name = 'Bob'
var greeting = `Hello ${name}!`
```

  > [Get literal with ES6 Template Strings](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings) for more information

Vomit uses Template Literals to create DOM elements and allows you to substitute a lot more than strings. With vomit you can use:
  * [Primitives](/doc/placeholders/primitive.md)
  * [Arrays](/doc/placeholders/array.md)
  * [Functions](/doc/placeholders/function.md)
  * [DOM elements](/doc/placeholders/element.md)  
  * [Objects](/doc/placeholders/object.md)  
  * [Promises](/doc/placeholders/promise.md)  
  * [Streams](/doc/placeholders/stream.md)

as placeholders.

## Example

Here's a simple example using vomit placeholders:

```js
var name = 'Bob'
var user = vomit`<span>${name}</span>`
var greeting = vomit`<h1 onclick="${show}">Hello ${user}!</h1>`

function show() {
  // show user details
}
```

Practice makes perfect and you will find examples of placeholders in our [dedicated section](/examples).
