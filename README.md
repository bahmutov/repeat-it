# repeat-it

> Run a Mocha BDD &#34;it&#34; test as many times as you want

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Why

You know a particularly flaky test can drive you crazy? This module makes it
simple to run any test as many times as you want to figure out the flaky
behavior.

## Install

Requires [Node](https://nodejs.org/en/).

```sh
npm install --save-dev repeat-it
```

## Use

A Mocha / BDD test you want to repeat

### before

```js
describe('repeat-it', () => {
  it('repeated test', () => {})
})
```

### after

```js
const it = require('repeat-it')
describe('repeat-it', () => {
  it(10)('repeated test', () => {})
})
```

output:

```
  repeat-it
    ✓ 1 repeated test
    ✓ 2 repeated test
    ✓ 3 repeated test
    ✓ 4 repeated test
    ✓ 5 repeated test
    ✓ 6 repeated test
    ✓ 7 repeated test
    ✓ 8 repeated test
    ✓ 9 repeated test
    ✓ 10 repeated test

  10 passing (10ms)
```

## Features

* Supports `it.only(n)(...)` syntax to run single text N times

## Related projects

* [focha](https://github.com/bahmutov/focha) - Mocha wrapper
  that runs previously failed tests first
* [rocha](https://github.com/bahmutov/rocha) - Runs Mocha unit
  tests but randomizes their order
* [snap-shot](https://github.com/bahmutov/snap-shot) - Jest-like
  snapshot feature for any framework, including Mocha
* My blog posts about [testing](https://glebbahmutov.com/blog/tags/testing/)

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/repeat-it/issues) on Github

## MIT License

Copyright (c) 2017 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/repeat-it.svg?downloads=true
[npm-url]: https://npmjs.org/package/repeat-it
[ci-image]: https://travis-ci.org/bahmutov/repeat-it.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/repeat-it
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
