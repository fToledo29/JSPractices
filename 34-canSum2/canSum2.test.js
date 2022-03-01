const { canSum2 } = require("./canSum2");


describe('Testing Can Sum 2', () => {
	it('Should return boolean', () => {
		expect(typeof canSum2(2, [1, 3])).toBe('boolean');
	});
	it('Should return true', () => {
		expect(canSum2(7, [5, 3, 4])).toBe(true);
	});
	it('Should return false', () => {
		expect(canSum2(7, [8, 4, 4])).toBe(false);
	});
	it('Should return true', () => {
		expect(canSum2(30, [3, 5, 10, 4, 6, 1, 2])).toBe(true);
	});
	it('Should return false', () => {
		expect(canSum2(7, [2, 4])).toBe(false);
	});
	it('Should return false', () => {
		expect(canSum2(300, [7, 14])).toBe(false);
	});
});