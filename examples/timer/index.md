## A Dynamic Component

We did the choice with vomit to not introduce any kind of state in your component. Creating a component is a simple as a function call. Updating a component should be the same.

```vomit
function component(seconds) {
  var ui = vomit(timer)
  setInterval(() => ui(++seconds), 1000)
  return ui
}

function timer(seconds) {
  return vomit`<div>Seconds Elapsed: ${seconds}</div>`
}
```

When a component (aka function) is passed to vomit, vomit returns a function that takes data as input and return a DOM element. What's special about this function is that it always return the same element and updates it whenever the data passed change.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and predict what's gonna be displayed. Vomit components are functions, nothing more and for this simple reason building complex UIs by encapsulating components has never been so easy.
