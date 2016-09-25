Element can be inserted between DOM child nodes.

Here's an example:

```js

var span = document.createElement('span')
span.innerHTML = 'hello world!'

vomit`<button>${span}</button>`
```

Using vomit features, you can start composing your components in a really easy and
natural way:

```js
var people = 'world'

var body = vomit`
  ${header}
  <main>
    <h1>Hello ${people}!</h1>
  </main>
  ${footer(['home', 'about'])}
`

function header() {
  return vomit`
    <header></header>
  `
}

function footer(links) {
  return vomit`<ul>
    ${links.map(link => vomit`<li>${link}</li>`)}
  </ul>`
}
```

By decomposing your applications into multiple functions, you can choose which part you want [to update](/doc/basics/static-dynamic.md) and reuse or maintain each part separately.
