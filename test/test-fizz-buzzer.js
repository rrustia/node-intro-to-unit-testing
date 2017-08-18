const should = require('chai').should();

const fizzbuzz = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzbuzz', function() {

  // test the normal case
  it('should correctly evaluate a number according to fizzbuzz rules', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 5, expected: 'buzz'},
      {a: 3, expected: 'fizz'},
      {a: 2, expected: 2}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzbuzz(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a', 'w', 'test'];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          adder(input)
      }).should.throw(Error);
    });
  });
});