// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzbuzzer = require('../fizzBuzzer');

// unit tests for our fizzBuzzer function
describe('module.exports', function() {
	it('should divide two numbers', function() {
		const normalCases = [
			{num: 15, expected: 0}
		];
		normalCases.forEach(function(input) {
			const answer =  fizzbuzzer(input.a);
			expect (answer).to.equal(input.expected);
		});
	});

	it('should raise error if args not numbers', function() {
		const badInputs = [
			['a', 1],
			['1', 2],
			[2, false]
		];
		badInputs.forEach(function(input) {
			expect(function() {
				fizzbuzzer(input[0]);
			}).to.throw(Error);
		});
	});
});

/*
module.exports = function(num) {
	if (typeof num !== 'number') {
		throw Error('`num` must be a number');
	}
	if (num % 15 === 0) {
		return 'fizz-buzz';
	}
	if (num % 5 === 0) {
		return 'buzz';
	}
	if (num % 3 === 0) {
		return 'fizz';
	}
	else {
		return num;
	}
}
*/
