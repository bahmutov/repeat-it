'use strict'

/* eslint-env mocha */
const it = require('.')

describe('repeat-it', () => {
  let counter = 0

  it(10)('repeated test', () => {
    counter += 1
  })

  after(() => {
    console.assert(counter === 10, 'runs ' + counter + ' times')
  })
})
