const isAnagram = require('./anagram').isAnagram;
const getObj = require('./anagram').getObj;


describe('Is an Anagram', () => {
	it('should validate if given string make an anagram', () => {
		expect(isAnagram('tomato', 'otamot%%')).toBe(true);
		expect(isAnagram('rail safety', 'fairy tales')).toBe(true);
		expect(isAnagram('RAIL! SAFETY!', 'fairy tales')).toBe(true);
		expect(isAnagram('Fernando', 'otamot')).toBe(false);
	});

	it('should get an object', () => {
		expect(getObj('fernando').f).toBe(1);
		expect(getObj('banana').n).toBe(2);
		expect(getObj('money$').$).toBe(undefined);
	});
});