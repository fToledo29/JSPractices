const { canConstruct } = require("./canConstruct");

describe('Testing canConstruct', () => {
	it('Should return a boolean', () => {
		expect(typeof canConstruct('ab', ['ab', 'c'])).toBe('boolean');
	});
	it('Should return true', () => {
		expect(canConstruct('ILoveJavaScript', ['I', 'Love', 'JavaScript'])).toBe(true);
	});
	it('Should return false', () => {
		expect(canConstruct('I have a dinosaur', ['I', 'Love', 'dinosaur'])).toBe(false);
	});
	it('Should retun false', () => {
		expect(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', [
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