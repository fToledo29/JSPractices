const fizzbuzzLoop = require('./fizzbuzz');

describe('Fizzbuzz', () => {

	it('should return fizz, buzz or fizzbuzz', () => {
		expect(fizzbuzzLoop.fizzbuzz(6)).toBe('fizz');
		expect(fizzbuzzLoop.fizzbuzz(10)).toBe('buzz');
		expect(fizzbuzzLoop.fizzbuzz(12)).toBe('fizz');
		expect(fizzbuzzLoop.fizzbuzz(15)).toBe('fizzbuzz');
	});

	it('should call fizzbuzz function', () => {
		const printFizzBuzz = jest.spyOn(fizzbuzzLoop, 'printFizzBuzz').mockReturnValue();
		fizzbuzzLoop.printFizzBuzz(4);
		expect(printFizzBuzz).toHaveBeenCalledTimes(1);
	});
})

