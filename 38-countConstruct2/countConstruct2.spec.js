const { countConstruct2 } = require("./countConstruct2");

describe('Testing Count Construct', () => {
	it('Should return a number', () => {
		expect(typeof countConstruct2('ab', ['a', 'b'])).toBe('number');
	});
	it('Should return 2', () => {
		expect(countConstruct2('abc', ['ab', 'c', 'a', 'bc'])).toBe(2);
	});
	it('Should return 0', () => {
		expect(countConstruct2('abcdf', ['ab', 'cd', 'fg', 'abcd'])).toBe(0);
	});
	it('Should retun false', () => {
		expect(countConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeuuuuuuuuuuuuuueeeeeef', [
			'e',
			'ee',
			'eee',
			'eeee',
			'eeeee',
			'eeeeee',
			'eeeeeee',
			'eeeeeeee'])).toBe(0);
	});
});