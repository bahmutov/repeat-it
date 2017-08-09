'use strict'

const oldIt = global.it
console.assert(typeof oldIt === 'function', 'missing global it function')

function repeatIt (times) {
  if (typeof times !== 'number') {
    // probably plain it('name', ...) call
    return oldIt.apply(null, arguments)
  }

  console.assert(times >= 0, 'repeat times should be non-negative')

  return function (title, fn) {
    let k
    for (k = 0; k < times; k += 1) {
      oldIt(k + 1 + ' ' + title, fn)
    }
  }
}

module.exports = repeatIt
