const uniqueCharacters = require('./uniqueCharacters').uniqueCharacters;

describe('Unique Characters', () => {
  it('should validate if given string has unique characters', () => {
	expect(uniqueCharacters('fernando')).toBe(false);
	expect(uniqueCharacters('fernado')).toBe(true);
	expect(uniqueCharacters('ana')).toBe(false);
	expect(uniqueCharacters('car')).toBe(true);
	expect(uniqueCharacters('murcielago')).toBe(true);
	expect(uniqueCharacters('murcielago uno')).toBe(false);
  });
});
