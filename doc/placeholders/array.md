Arrays can be substituted in all possible DOM nodes.

## attribute

Here's an example of array substitution in a button `class` attribute.

```js
var classes = ['active', 'shown']
vomit`<button class="${classes}"></button>`
```

and the result:

```html
<button class="active shown"></button>
```

## child node

Arrays can be used to generate multiple child nodes in a easy and comprehensive way.

```js
var rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
vomit`<ul>${rainbow.map(color => {
  return vomit`<li class="${color}">${color}</li>`
})}</ul>`
```

Here's the result :


```html
<ul>
  <li class="red">red</li>
  <li class="orange">orange</li>
  <li class="yellow">yellow</li>
  <li class="green">green</li>
  <li class="blue">blue</li>
  <li class="purple">purple</li>        
</ul>
```
