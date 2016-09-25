## An application

Snap together components like you would do with lego bricks to create a small Todo application.

```vomit
function component() {
  var todos = []
  var list = vomit(ul)
  return vomit`<div>
    <h3>TODO</h3>
    ${list(todos)}
    ${form((todo) => {
      todos.push(todo)
      list(todos)
    })}
  </div>`
}

function form(cb) {
  var el = vomit`<form>
    <input name="todo" type="text"/>
    <button>Add</button>
  </form>`
  el.addEventListener('submit', event => {
    cb(el.todo.value)
    event.preventDefault()
  })
  return el
}

function ul(arr) {
  return vomit`<ul>
    ${arr.map(item => vomit`<li>${item}</li>`)}
  </ul>`
}
```

Have you noticed? Vomit allows you to easily compose together functions and elements with the placeholder syntax `${}`. Most important you are not limited by the architectural choices made for you.
