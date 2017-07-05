const assert = require('assert')
const fizzbuzz = require('./app')

// assert는 Node.js 내장 테스트 모듈 입니다.
// https://nodejs.org/api/assert.html#assert_assert_value_message
assert.equal(fizzbuzz(1), 1)
assert.equal(fizzbuzz(2), 2)

assert.equal(fizzbuzz(3), 'fizz')
assert.equal(fizzbuzz(5), 'buzz')
assert.equal(fizzbuzz(15), 'fizzbuzz')

assert.equal(fizzbuzz(6), 'fizz')
assert.equal(fizzbuzz(10), 'buzz')
assert.equal(fizzbuzz(30), 'fizzbuzz')
