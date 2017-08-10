'use strict'

/* eslint-env mocha */
const it = require('.')

describe('repeat-it', () => {
  let counter = 0

  it(10)('repeated test', () => {
    counter += 1
  })

  it('has .only function', () => {
    console.assert(typeof it.only === 'function')
  })

  after(() => {
    console.assert(counter === 10, 'runs ' + counter + ' times')
  })
})
