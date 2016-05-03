# vomit
 > **v**~~irtual d~~**om it** ~~sucks~~

## usage

```js
var vomit = require('vomit');
var arr = ['foo', 'bar', 'beep'];

vomit('ul', arr.map(function(name) {
  return vomit('li', name);
}))
```
