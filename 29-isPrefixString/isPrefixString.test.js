const { isPrefixString } = require("./isPrefixString");

describe('Testing IsPrefixString', () => {
	it('Should return a boolean', () => {
		expect(typeof isPrefixString('ab', ['ab', 'c'])).toBe('boolean');
	});
	it('Should return true', () => {
		expect(isPrefixString('ILoveJavaScript', ['I', 'Love', 'JavaScript'])).toBe(true);
	});
	it('Should return false', () => {
		expect(isPrefixString('I have a dinosaur', ['I', 'Love', 'dinosaur'])).toBe(false);
	});
	it('Should retun false', () => {
		expect(isPrefixString('eeeeeeeeeeeeeeeeeeeeeeeeef', [
			'e',
			'ee',
			'eee',
			'eeee',
			'eeeee',
			'eeeeee',
			'eeeeeee',
			'eeeeeeee'])).toBe(false);
	});
});