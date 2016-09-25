# Static component

A static component in Vomit is a term used to describe functions that take some data as input and return a DOM element.

```js
function greeting(name) {
  return vomit`<h1>Hello ${name}</h1>`
}
```
A static component will always return a new DOM element when called.
