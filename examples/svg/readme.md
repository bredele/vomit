# SVG

Vomit works with SVG elements as it does with regular DOM nodes:

```vomit
function component(text) {
  return vomit`
  <svg>
    <defs>
      <linearGradient id="filler" x="0%" y="100%">
        <stop stop-color="olivedrab" offset="0%"></stop>
        <stop stop-color="peru" offset="20%"></stop>
        <stop stop-color="goldenrod" offset="40%"></stop>
        <stop stop-color="firebrick" offset="60%"></stop>
        <stop stop-color="thistle" offset="80%"></stop>
        <stop stop-color="sandybrown" offset="100%"></stop>
      </linearGradient>
    </defs>
    <text y="70%" font-size="40" fill="url(#filler)">${text}</text>
  </svg>`
}
```

All placeholders are working with SVG nodes as well as dynamic components.
