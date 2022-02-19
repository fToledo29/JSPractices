const { maxProfit } = require("./bestTimeBuySellStock");



describe('Testing bestTimeBuySellStock', () => {
	it('Should Return a Number', () => {
		expect(typeof maxProfit([4, 5, 6])).toBe('number');
	});

	it('Should Return 1', () => {
		expect(maxProfit([7,1,5,3,6,4])).toBe(5);
	});

	it('Should Return 1', () => {
		expect(maxProfit([7,6,5,4,3,3])).toBe(0);
	});

	it('Should Return 1', () => {
		expect(maxProfit([1,5,5,2,7,1])).toBe(6);
	});
});