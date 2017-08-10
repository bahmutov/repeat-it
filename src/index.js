'use strict'

const oldIt = global.it

function isFunction (x) {
  return typeof x === 'function'
}

function isNumber (x) {
  return typeof x === 'number'
}

function isNonNegative (x) {
  return isNumber(x) && x >= 0
}

console.assert(isFunction(oldIt), 'missing global it function')
console.assert(isFunction(oldIt.only), 'missing it.only function')

function checkTimes (times) {
  console.assert(isNonNegative(times), 'repeat times should be non-negative')
}

function formatMessage (title, times) {
  return function finishFormat (k) {
    return k + 1 + '/' + times + ' ' + title
  }
}

function only (times) {
  if (!isNumber(times)) {
    // probably plain it('name', ...) call
    return oldIt.only.apply(null, arguments)
  }

  checkTimes(times)

  return function (title, fn) {
    let k
    const fullTitle = formatMessage(title, times)
    for (k = 0; k < times; k += 1) {
      oldIt.only(fullTitle(k), fn)
    }
  }
}

function repeatIt (times) {
  if (!isNumber(times)) {
    // probably plain it('name', ...) call
    return oldIt.apply(null, arguments)
  }

  checkTimes(times)

  return function (title, fn) {
    let k
    const fullTitle = formatMessage(title, times)
    for (k = 0; k < times; k += 1) {
      oldIt(fullTitle(k), fn)
    }
  }
}

repeatIt.only = only
repeatIt.skip = oldIt.skip

module.exports = repeatIt
