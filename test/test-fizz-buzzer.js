// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzbuzzer = require('../fizzBuzzer');

// unit tests for our fizzBuzzer function
describe('module.exports', function() {
	it('should divide two numbers', function() {
		const normalCases = [
			{num: 15, expected: 'fizz-buzz'}
		];
		normalCases.forEach(function(input) {
			const answer =  fizzbuzzer(input.num);
			expect (answer).to.equal(input.expected);
		});
	});

	it('should raise error if args not numbers', function() {
		const badInputs = [
			['a'],
			['l'],
			[false]
		];
		badInputs.forEach(function(input) {
			expect(function() {
				fizzbuzzer(input[0]);
			}).to.throw(Error);
		});
	});
});

