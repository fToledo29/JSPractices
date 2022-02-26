const { canSum } = require("./canSum");


describe('Testing CanSum', () => {
	it('Should return boolean', () => {
		expect(typeof canSum(1, [1, 2])).toBe('boolean');
	});

	it('Should return true', () => {
		expect(canSum(7, [2, 3])).toBe(true);
	});

	it('Should return true', () => {
		expect(canSum(8, [2, 3, 5])).toBe(true);
	});

	it('Should return false', () => {
		expect(canSum(7, [2, 4])).toBe(false);
	});

	it('Should return false', () => {
		expect(canSum(300, [7, 14])).toBe(false);
	});

});