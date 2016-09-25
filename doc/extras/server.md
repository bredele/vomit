# Server side rendering

Vomit also works server side with Nodejs with the only difference that Vomit returns a Stream and not a DOM element.

Here's an example of web server using Vomit:

```js
var http = require('http')
var fs = require('fs')
var vomit = require('vomit')

http.createServer((req, res) => {
  var name = 'Nyan'
  vomit`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${name}</title>
    </head>
    <body>
      ${name} the cat!
      ${main}
    </body>
  </html>
  `.pipe(res)  
}).listen(8000)


function main() {
  return vomit`
  <section role="main">
    <article>${fs.createReadStream(__dirname + '/article.txt')}</article>
  </section>
  `
}
```

It's never been as easy to create and compose HTML server side.
