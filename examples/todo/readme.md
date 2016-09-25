## An application

Snap together components like you would do with lego bricks to create a small Todo application.

```vomit
function component(todos) {
  var list = vomit(ul)
  var add = function(ev) {
    var input = this.todo
    todos.push(input.value)
    list(todos)
    ev.preventDefault()
    input.value = ''
  }
  return vomit`<div>
    <h3>TODO</h3>
    ${list(todos)}
    <form onsubmit="${add}">
      <input name="todo"/>
      <button>Add</button>
    </form>
  </div>`
}

function ul(arr) {
  return vomit`<ul>
    ${arr.map(item => vomit`<li>${item}</li>`)}
  </ul>`
}
```

Have you noticed? Vomit allows you to easily compose together functions and elements with the placeholder syntax `${}`. Most important you are not limited by the architectural choices made for you.
