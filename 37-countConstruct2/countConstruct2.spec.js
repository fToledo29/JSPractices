
const { canConstruct2 } = require("./countConstruct2");

describe('Testing canConstruct', () => {
	it('Should return a boolean', () => {
		expect(typeof canConstruct2('ab', ['ab', 'c'])).toBe('boolean');
	});
	it('Should return true', () => {
		expect(canConstruct2('ILoveJavaScript', ['I', 'Love', 'JavaScript'])).toBe(true);
	});
	it('Should return false', () => {
		expect(canConstruct2('I have a dinosaur', ['I', 'Love', 'dinosaur'])).toBe(false);
	});
	it('Should retun false', () => {
		expect(canConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeef', [
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