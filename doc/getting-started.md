Let's start with a quick 5 minutes tutorial of Vomit features.

## Hello World

Let's create a vomit component called `hello-world`. If you've not already [installed](/doc/installation.md) vomit and its CLI, please clone vomit and type the following command in your terminal:

```shell
# install cli
$ npm link
```
and then type:

```shell
# create component
$ vomit create hello-world
```

The command `vomit` creates and bootstrap components in a second. No build configuration, open your browser [http://localhost:3000](http://localhost:3000) to see your component.

  > Vomit components come with live reload out of the box (check the [component]() documentation for more information). Try modifying files in your component and see what's happening.

## Dynamic component

So far we've generated a static vomit component. The code generated basically looks like this:

```js
function component(data) {
  return vomit`
    <button aria-expanded="${data.expanded}">Hello ${data.name}</button>
    <ul aria-hidden="${!data.expanded}">
      ${data.rainbow.map(item => vomit`<li>${item}</li>`)}
    </ul>
  `
}
```

A static component in vomit is a function that takes some data as input and return a DOM element as output. Every time you call that function, a new element will be created.

  > vomit followed by back-ticks ```vomit`...` ``` generates a DOM element.


But what if you don't want to return a new element as new data arrive but instead just refresh the parts that need to be updated? This is called vomit dynamic component.

Let's see it in action and add a little bit more colour to our example:

```js
function component(data) {
  var rainbow = vomit(list)

  var arr = data.rainbow
  setInterval(function() {
    var random = Math.floor(Math.random() * arr.length) + 1  
    rainbow(arr.slice(0, random))
  }, 100)

  return vomit`
    <button aria-expanded="${data.expanded}">Hello ${data.name}</button>
    ${rainbow(arr)}
  `
}

/**
 * List component.
 *
 * @param {Array} arr
 * @param {Element}
 */

function list(arr) {
  return vomit`
    <ul>${arr.map(item => {
      return vomit`<li style="background:${item};">${item}</li>`
    })}</ul>
  `
}
```

When vomit takes a function as argument (instead of the back-ticks), it generates a DOM element and return a new function that patch this element with a minimal set of changes to apply. Every time you call the returned function, updates will be performed as efficiently as possible on that element.

## A quick break

So far you've seen how to create DOM elements (static component) with the vomit library and also how to update those element using efficient data binding (dynamic component). You also probably noticed that it is possible with vomit to substitute the placeholders ```${}``` with primitives such as String, Booleans, Arrays or even with Functions.

We believe Vomit is the right fit for you because it allows to address concerns in one language and syntax you already know : JavaScript. No weird and limited template language, with Vomit you can create reusable and predictable piece of code. Vomit is as simple as a function and because of it, it is really easy to compose components together.

## Async component

Rare are the applications that do not have to deal with IO bounds. Most of the times you will have to update your components with data coming from a server with AJAX for example.
Vomit is the only library out there that allows you to substitute async patterns such as Promises or Streams to facilitate asynchronous update.

Here's our example with a list of colours fetched from an external server:

```js
function component(data) {
  return vomit`
    <button aria-expanded="${data.expanded}">Hello ${data.name}</button>
    ${fetch('/rainbow.json').then(list)}
  `
}

/**
 * List component.
 *
 * @param {Array} arr
 * @param {Element}
 */

function list(arr) {
  return vomit`
    <ul>${arr.map(item => {
      return vomit`<li style="background:${item};">${item}</li>`
    })}</ul>
  `
}
```

The 5 minutes are now gone! We hope you got a gist of what vomit is capable to do and how easy it is to learn. Please refer to the documentation to know how to use other feature such as HTML5 web components, server side rendering or SVG components.
