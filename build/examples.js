/**
 * Examples dependencies.
 */

var fs = require('fs')
var join = require('path').join
var markdown = require('vomit-markdown')
var vomit = require('..')
var browserify = require('browserify')
var app = require('express')()

/**
 * Return example
 */

app.use('/examples/:name', (req, res) => {
  var name = req.params.name
  var dir = join(__dirname, '../examples', name)
  fs.readFile(dir + '/vomit.json',  (err, data) => {
    vomit`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${name} example</title>
        <script src="/bundle.js"></script>
      </head>
      <body>
      ${fs.createReadStream(dir + '/readme.md').pipe(markdown(JSON.parse(data)))}
      </body>
    </html>
    `.pipe(res)
  })
})


/**
 * Serve vomit.
 */

app.use('/bundle.js', (req, res) => {
  browserify({standalone: 'vomit'})
    .add('./vomit.js')
    .bundle()
    .pipe(res)
})


/**
 * Returns list of examples.
 */

app.use('/', (req, res) => {
  vomit`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Vomit examples</title>
    </head>
    <body>
    ${fs.createReadStream(join(__dirname, '../examples/readme.md')).pipe(markdown())}
    </body>
  </html>
  `.pipe(res)
})


app.listen(8080)
