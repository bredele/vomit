## NPM

Vomit has been built with modularity in mind and for this reason, it is recommended to use NPM has the primary installation method. Vomit's code follows CommonJS standards and pairs nicely with module bundler such as Browserify or Webpack

```shell
# latest stable
$ npm install vomit
```

## CLI

Vomit also comes with tools to test, visualize and author components. Using NPM, you can install the cli `vomit` with a simple command:

```shell
# install cli
$ npm link

# display vomit cli help
$ vomit --help
```

## Standalone

If you don't use modules bundler, you can include vomit as a global variable by downloading the standalone version and include it with a script tag:


<a style="color:#EE6650;border:1px solid #EE6650;padding: 1em 1.5em;display:block;" href="https://github.com/bredele/vomit/blob/master/dist/vomit.js" target="_blank">Development version</a><br>
<a style="color:#EE6650;border:1px solid #EE6650;padding: 1em 1.5em;display:block;" href="https://github.com/bredele/vomit/blob/master/dist/vomit.min.js" target="_blank">Production version</a>


Important: because Vomit relies on ES6 syntax, you can only use standalone versions with the latest browsers or compile your code for next generation JavaScript.

## Dev Build

```shell
git clone https://github.com/bredele/vomit.git
cd vomit
npm install
npm run build
```
