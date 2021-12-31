const { buildAndOrder } = require("./buildNewAndCheckOrder");

describe('Test Build New Array and Check Order', () => {
	it('Should return true', () => {
		expect(buildAndOrder([1, 3, 5, 6, 4, 2])).toBe(true);
	});
	it('Should return false', () => {
		expect(buildAndOrder([1, 4, 5, 6, 3])).toBe(false);
	});
	it('Should return false', () => {
		expect(buildAndOrder([1, 2, 3, 4, 5, 6, 7, 8])).toBe(false);
	});
	it('Should return true', () => {
		expect(buildAndOrder([11, 13, 15, 17, 19, 20, 18, 16, 14, 12])).toBe(true);
	});
});