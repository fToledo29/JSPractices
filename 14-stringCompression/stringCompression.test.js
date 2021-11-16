const stringCompression = require("./stringCompression").stringCompression;

describe('String Compression', () => {
	it('should count characters', () => {
		expect(stringCompression('Fernando')).toBe('Fernando');
	});
	it('should return abcd', () => {
		expect(stringCompression('abcd')).toBe('abcd');
	});
	it('should return w3a2b4', () => {
		expect(stringCompression('wwwaabbbb')).toBe('w3a2b4');
	});
	it('should return w3a2b4', () => {
		expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3');
	});
});