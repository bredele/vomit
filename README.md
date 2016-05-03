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

### DOM morphing

What would be virtual dom without morphing? Morphing is a fancy word to apply a diff patch on a DOM element in order to keep its state. Basically, it updates DOM elements for you this way you don't have to care about it.

```js
var list = vomit(function(data) {
  return vomit('ul', data.map(function(name) {
    return vomit('li', name);
  }));
});

// both lines return the same DOM element with an updated content
list(['beep']);
list(['beep', 'boop']);
```

Vomit can swallow functions and regurgitate them in order to create reusable components. What's nasty about it is that
it updates your DOM everytime you call that function!

## composition

Composition is at the core of vomit. As seen above, you can compose text and DOM node(s). But vomit
doesn't stop there and allows you to create disgusting concoction of functions, streams or promises. Berk!

### function

Functions are at the JavaScript first class objects. Would be bummer to not add a function as a
vomit element isn't?

```js
vomit('span', function() {
  return puke ? 'hamburger' : 'salad';
});
```
A vomit function can return text, DOM elements, arrays and more (see below).

### stream

If you are trying to build applications with I/O bound (such as XHR, WebSockets, WebRTC, etc) wouldn't it be
great if you could easily interface with all these things? Vomit favorite's junk food is [streams](). With streams, vomit allows you to incrementally build DOM nodes as soon as data is available. Imagine an Ajax streams that fetch some data on a third server and return a title:

```js
vomit('h1', ajax);
```
This example is silly! Let's do something worth your time...what about an Ajax stream that fetch a list of junk food:

```js
var stream = ajax()
  .pipe(vomit(function(data) {
    return data.map(function(name) {
      return vomit('li', name);
    });
  }));

vomit('article', [
  'Vomit list:',
  vomit('ul', stream),
]);
```
