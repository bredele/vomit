# Functions

When an array is used as a placeholder, Vomit will concatenate and insert the values of every item into this array.

```js
var arr = ['hello ', 'world!']
vomit`<button>${arr}</button>`
```

result:

```html
<button>Hello world!</button>
```

Arrays are especially useful to create lists.

```js
var rainbow = ['red', 'orange', 'yellow']
vomit`<ul>${rainbow.map(color => vomit`<li>${color}</li>`)}</ul>`
```

result:

```html
<ul>
  <li>red</li>
  <li>orange</li>
  <li>yellow</li>    
</ul>
```


## Attribute

Arrays placeholder are a bit different when used inside HTML attributes. Vomit will insert and separate the values of every items with a whitespace. This behaviour is especially useful with the attribute `class`:

```js
var classes = ['active', 'shown']
vomit`<button class="${classes}"></button>`
```

and the result:

```html
<button class="active shown"></button>
```
