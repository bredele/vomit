## Streams

Promises are not the only interface to deal with IO bounds. Streams are well-defined interfaces mainly used server side. With Vomit you can use streams as following on both server and front-end side:

```js
vomit`<p>${fs.createReadStream(__dirname + '/lorem.txt')}</p>`
```

result:

```js
<p>This is the content of the file lorem.txt</p>
```

  > Take a look at our examples [server](build/examples.js) for some example of vomit server side.

The stream placeholder syntax is the same than everything else in Vomit. It opens the door to a multitude of libraries and modules out there using stream as their main interface.

## Event emitter

Because streams use underneath the Event Emitter pattern, Vomit makes possible to use event emitters as placeholder and insert the values returned by `data` events.

```js
var emitter = new Emitter()
vomit`<span>${emitter}</span>`

emitter.emit('data', 'hello ')
emitter.emit('data', 'world!')
```

result:

```html
<span>hello world!</span>
```
