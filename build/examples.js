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
 * Serve vomit.
 */

app.use('/bundle.js', (req, res) => {
 browserify({standalone: 'vomit'})
   .add('./vomit.js')
   .bundle()
   .pipe(res)
})


/**
 * Serve styles.
 */

app.use('/bundle.css', (req, res) => {
 fs.createReadStream(__dirname + '/build.css')
   .pipe(res)
})

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
        <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Roboto:400,700,900/Open+Sans:400,700,900/Raleway:100,400,500,700,800,900">
        <link rel="stylesheet" href="/bundle.css">
        <script src="/bundle.js"></script>
      </head>
      <body>
      <div class="wrapper">
      ${fs.createReadStream(dir + '/readme.md').pipe(markdown(JSON.parse(data)))}
      </div>
      </body>
    </html>
    `.pipe(res)
  })
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
      <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Roboto:400,700,900/Open+Sans:400,700,900/Raleway:100,400,500,700,800,900">
      <link rel="stylesheet" href="bundle.css">
    </head>
    <body>
      <div class="wrapper">
      ${fs.createReadStream(join(__dirname, '../examples/readme.md')).pipe(markdown())}
      </div>
    </body>
  </html>
  `.pipe(res)
})


app.listen(8080)
