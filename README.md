# vomit
 > **v**~~irtual d~~**om it** ~~sucks~~

Makes me sick how cool is virtual dom :s

## usage

```js
var vomit = require('vomit');
var arr = ['foo', 'bar', 'beep'];

vomit('ul', arr.map(function(name) {
  return vomit('li', name);
}))
```

### create element

Vomit can quickly create a DOM element as following:

```js
var btn = vomit('button');
```

### inner text

Vomit can add text as a node child:

```js
var btn = vomit('button', 'hello');
```

### children elements

Vomit can add arrays as a node children:

```js
var btn = vomit('button', [
  'hello',
  vomit('span', 'world')
]);
```

## composition

Composition is at the core of vomit. As seen above, you can compose text and DOM node(s). But vomit
doesn't stop there and allows you to create disgusting concoction of functions, streams or promises. Berk!

### function

Functions are at the core of JavaScript. Would be bummer to not add a function as a
vomit element isn't?

```js
vomit('span', function() {
  return puke ? 'hamburger' : 'salad';
});
```
A vomit function can return text, DOM elements, arrays and more (see below).

### stream

```js

```
