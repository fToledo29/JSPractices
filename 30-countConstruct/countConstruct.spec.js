const { countConstruct } = require("./countConstruct");

describe('Testing Count Construct', () => {
	it('Should return a number', () => {
		expect(typeof countConstruct('ab', ['a', 'b'])).toBe('number');
	});
	it('Should return 2', () => {
		expect(countConstruct('abc', ['ab', 'c', 'a', 'bc'])).toBe(2);
	});
	it('Should return 0', () => {
		expect(countConstruct('abcdf', ['ab', 'cd', 'fg', 'abcd'])).toBe(0);
	});
	it('Should retun false', () => {
		expect(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeuuuuuuuuuuuuuueeeeeef', [
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