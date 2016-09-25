# Functions

When a function is used as a placeholder, Vomit will insert the value returned by this function into the DOM element.

```js
vomit`<button>${content}</button>`

function content() {
  return 'Hello world!'
}
```

result:

```html
<button>Hello world!</button>
```

Placeholders allows you to take any valid JavaScript expression but we didn't want to limit you to just a subset of JavaScript. Using functions as placeholders, you can then decompose your code into smaller units with more complex computation.


## Separation of concerns

A code that embodies separation of concerns is a modular and reusable code with a well-defined interface. What's best than functions to achieve that goal?

Using vomit and functions, you can build application made of separate sections of code that can be reused, as well as developed and updated independently. Here's a basic example of todo application:

```js
function todo(arr) {
  return vomit`
    <h1>Todo</h1>
    ${form}
    <ul>
      ${arr.map(item)}
    </ul>
  `
}

function form() {
  return vomit`
  <form>
    <input />
    <button>submit</button>
  </form>
  `
}

function item(text) {
  return vomit`<li>${text}</li>`
}
```

  > this example also illustrates the use of [array](/doc/placeholders/array.md) and [element](/doc/placeholders/element.md) placeholders.

The value of separation of concerns is simplifying development and maintenance of your code. With vomit we didn't want to create any kind of weird syntax or stateful abstraction that are difficult to learn and hard to reuse with native APIs. Framework and libraries come and go, functions aren't. Functions are vomit!

## Inline

It is not considered best practice but you can inline functions in your HTML.

```js
vomit`<button>${function() {
  return 'Hello world!'
}}</button>`
```

result:

```html
<button>Hello world!</button>
```
