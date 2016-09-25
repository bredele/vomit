# Primitives

All primitive types will be coerced into strings by vomit:
  - String
  - Boolean
  - Number
  - others

## String

```js
var str = 'Nyan'
vomit`<span>${str} the cat!</span>`
```

result:

```html
<span>Nyan the cat!</span>
```

## Boolean

```js
var bool = true
vomit`<span>Is it ${bool} Vomit is awesome?</span>`
```
result:

```html
<span>Is it true Vomit is awesome?</span>
```

## Number

```js
var size = 2
vomit`<span>Vomit is only ${size}kb</span>`
```

```html
<span>Vomit is only 2kb</span>
```
