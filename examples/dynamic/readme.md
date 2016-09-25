## A Dynamic Component

It is possible to create component that update themselves by simply wrapping a function (or static component) with vomit.


```vomit
var component = vomit(function(data) {
  return vomit`<h2>${data}</h2>`
})

var titles = [
  'Vomit is a simple function',
  'Functions are the smallest composition unit',
  'Vomit is pure and predictable',
  'Vomit is awesome'
]

var i = 0
setInterval(function() {
  component(titles[++i % 4])
}, 1000)
```

Minimum amount of changes are update thanks to a diffing strategy similar to other virtual dom implementations out there.
