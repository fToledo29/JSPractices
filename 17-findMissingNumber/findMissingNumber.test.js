const { findMissingNumber } = require("./findMissingNumber");

describe('Test Find Missing Number', () => {
	it('Should return a number', () => {
		expect(typeof findMissingNumber([5, 3, 2, 1]) === 'number').toBe(true);
	});
	it('Should return 4', () => {
		expect(findMissingNumber([5, 3, 2, 1])).toBe(4);
	});
	it('Should return 12', () => {
		const arr = [2, 3, 1, 5, 6,
			4, 9, 8, 7, 10, 
			11, 30, 29, 28,
			27, 26, 25, 24,
			23, 22, 21, 20, 
			15, 17, 16, 18, 
			19, 14, 13];
		expect(findMissingNumber(arr)).toBe(12);
	});
});