# Web components

Vomit provides a partial implementation of HTML5 Web component and custom elements. All with the ease of simple function call:

```js
var carousel = vomit`
  <section>
    <h2>Carousel</h2>
    <content query=".slide"/>
  </section>
`

vomit(carousel, vomit`
  <div class="slide">
    This is a slide.
  </div>
`)
```

When using Vomit, you can define how composition works with your component using the tag `<content>`. This creates an insertion point in the presentation of your component, and the insertion point cherry-picks content to present. This is a way to create flexible components by separating content and presentation into multiple functions.
