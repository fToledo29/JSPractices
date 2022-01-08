const { ascendingIfTwoDigitSwapped } = require("./ascendingIfTwoDigitSwapped");

describe('Testing AscendingIfTwoDigitSwapped', () => {
	it('Should return boolean', () => {
		expect(typeof ascendingIfTwoDigitSwapped([1, 5, 0])).toBe('boolean');
	});

	it('Should return true', () => {
		expect(ascendingIfTwoDigitSwapped([1, 5, 6])).toBe(true);
	});

	it('Should return false', () => {
		expect(ascendingIfTwoDigitSwapped([13, 31, 30])).toBe(false);
	});

	it('Should return true', () => {
		expect(ascendingIfTwoDigitSwapped([1, 3, 900, 10])).toBe(true);
	});

	it('Should return true', () => {
		expect(ascendingIfTwoDigitSwapped([100, 122, 323, 900, 2122, 3144, 3222])).toBe(true);
	});

	it('Should return false', () => {
		expect(ascendingIfTwoDigitSwapped([100, 122, 2122, 323, 900, 2122, 3144, 3222])).toBe(false);
	});
});