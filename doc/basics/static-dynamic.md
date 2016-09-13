You've seen that vomit makes it really easy to create DOM elements using [Template Literals](/docs/basics/template-literals.md). It does not stop there
though and can create DOM elements that update themselves with a simple function call:

```js
var list = vomit(function(arr) {
  return vomit`<ul>
    ${arr.map(item => vomit`<li>${item}</li>`)}
  </ul>`
})

document.body.apendChild(list([]))
list(['hello'])
list(['hello', 'world'])
```
**Vomit swallow a function and regurgitate it**. Everytime that function is called, Vomit updates the DOM by applying
a diffing algorithm.

  > Vomit uses a diffing strategy based on real DOM and not on virtual dom like [React](https://facebook.github.io/react/) does.

No states, classes or weird API, everything is as simple as a function call making Vomit probably the most composable library out there.

Quick reminder:

```js
// static rendering
var btn = vomit`<button>Hello</button>`

// dynamic rendering
var btn = vomit(function(data) {
  return vomit`<button>${data}</button>`
})
btn('Hello')
btn('Hello World')
```

You know now how to separate static and dynamic content : you can choose to optimize your application and only "diff" renders that have dynamic values.

```js
var title = vomit(function(data) {
  return vomit`<h1>${data}</h1>`
})

document.body.appendChild(vomit`
  <section>
    <header><header/>
    <article>
        ${title}
        <p>Some static text</p>
    </article>
  </section>
`)

title('Vomit is a simple function')
title('Functions are the smallest composition unit')
title('Vomit is pure and predictable')
title('Vomit is awesome')
```
