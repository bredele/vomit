## An application

Snap together components like you would do with lego bricks to create a small Todo application.

```vomit
function component() {
  var items = []
  var todos = vomit(list)
  return vomit`<div>
    <h3>TODO</h3>
    ${todos(items)}
    ${form((item) => {
      items.push(item)
      todos(items)
    })}
  </div>`
}

function form(cb) {
  var input = vomit`<input type="text"/>`
  var el = vomit`<form>
    ${input}
    <button>Add</button>
  </form>`
  el.addEventListener('submit', event => {
    cb(input.value)
    event.preventDefault()
  })
  return el
}

function list(arr) {
  return vomit`<ul>
    ${arr.map(item => vomit`<li>${item}</li>`)}
  </ul>`
}
```

Have you noticed? Vomit allows you to easily compose together functions and elements with the placeholder syntax `${}`.
