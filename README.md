# Vomit

  > [![Build Status](https://travis-ci.org/bredele/vomit.svg?branch=master)](https://travis-ci.org/bredele/vomit)
  [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vomitjs/Lobby)
  [![NPM](https://img.shields.io/npm/v/vomit.svg)](https://www.npmjs.com/package/vomit)
  [![Downloads](https://img.shields.io/npm/dm/vomit.svg)](http://npm-stat.com/charts.html?package=vomit)
  [![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)

[![vomit](http://static.tumblr.com/67e9d19760f9ab511ea7142b267a0840/etrtigr/zohmqv4pn/tumblr_static_unicornpuke.jpg)](http://requirebin.com/?gist=df0d460eb9506d5e8a17b3f33141b30b)


Vomit is a JavaScript library for building stateless user interfaces.

  * **Declarative**: Vomit leverages JavaScript template strings to create interactive UIs. Logic is written in JavaScript instead of templates, making your code more predictable, simple to understand and easier to debug.
  * **Component-Based**: Build encapsulated components and compose them to make complex UIs. Everything is as simple as a function call!
  * **Async**: Vomit has been built with promises and streams at its core. Dealing with IO bounds has never been so easy!
  * **Easy to learn**: Simple is better! We don't make any assumptions about your coding style or technology stack. 5 minutes are enough to learn Vomit!

[Try it online!](http://requirebin.com/?gist=bbf4a3420785e831bdfa7a2dccc8b7ff)

## Usage

```js
var vomit = require('vomit')

function stopwatch(start) {
  // create timer dynamic component
  var timer = vomit(function(seconds) {
    return vomit`<div>Seconds Elapsed: ${seconds}</div>`
  })

  // update timer dom element every second
  setInterval(() => timer(++start), 1000)

  // return timer dom element
  return timer(start)
}

document.body.appendChild(stopwatch(0));
```

Vomit does not force you into any syntax/API but instead uses the power of JavaScript [template literals](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings) built in your browser. Quickly create DOM element that you can [compose](/doc/placeholders/) with Objects, Arrays, other DOM elements, Functions, **Promises and even Streams**.

Check out [examples](/examples) and [docs](/doc) for more information.

## Installation

```shell
npm install vomit --save
```

[![NPM](https://nodei.co/npm/vomit.png)](https://nodei.co/npm/vomit/)

## Features

<!--- Check out our [5 minutes getting started](https://github.com/bredele/vomit/blob/master/doc/getting-started.md)! -->

Vomit stands for **V**~~irtual d~~**OM IT** ~~sucks~~ and ironically uses a virtual dom strategy based on real DOM to efficiently update your components . Other features are:
- Separate and optimize rendering of static and dynamic content
- HTML5 Web Component
- Server side rendering (check out [steroid](http://github.com/bredele/steroid))
- Works with SVG
- 3kb minified + gzipped, ideal for mobile and to include as dependency
- Share the same core engine than the MVVM library [brick](http://github.com/bredele/brick)

You'll find Vomit disgustingly easy to learn. Please check out our [5 minutes tutorial](https://github.com/bredele/vomit/blob/master/doc/getting-started.md) to get started,

## Question

For questions and feedback please use the [Gitter chat room](https://gitter.im/vomitjs/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link) our our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Vomit is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">guideline</a> before making a pull request. If you have any vomit-related project, component or other let everyone know on our [chat room](https://gitter.im/vomitjs/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link) or in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
