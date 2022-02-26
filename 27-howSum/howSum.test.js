const { howSum } = require("./howSum");

describe('Testing HowSum', () => {
	it('Should return an array', () => {
		expect(Array.isArray(howSum(2, [1, 1]))).toBe(true);
	});
	it('Should return null', () => {
		expect(howSum(3, [2])).toBe(null);
	});
	it('Should return [2, 2]', () => {
		expect(howSum(4, [2, 2, 5]).join(',')).toBe('2,2');
	});
	it('Should return null', () => {
		expect(howSum(300, [7, 14])).toBe(null);
	});
});