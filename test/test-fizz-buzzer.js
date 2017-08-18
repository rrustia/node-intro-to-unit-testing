const should = require('chai').should();

const fizzbuzz = require('../fizzBuzzer');


// unit tests for our `fizzbuzz` function
describe('fizzbuzz', function() {

  // test the normal case
  it('should correctly evaluate a number according to fizzbuzz rules', function() {
    // range of normal inputs, including
    // notable cases like non-fizz-buzz numbers
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 5, expected: 'buzz'},
      {a: 3, expected: 'fizz'},
      {a: 2, expected: 2}
    ];
    // for each set of inputs (a), `fizzbuzz` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzbuzz(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if arg is not a number', function() {
    // range of bad inputs are not numbers
    const badInputs = ['a', 'w', 'test'];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzbuzz(input)
      }).should.throw(Error);
    });
  });
});