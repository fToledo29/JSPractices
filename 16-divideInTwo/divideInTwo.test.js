const { divideInTwo } = require("./divideInTwo");

describe('Testing Divide In Two', () => {
	it('Should have exactly 2 arrays', () => {
		const res = divideInTwo([2, 4, 5, 2, 1, 4]);
		expect(res.length).toBe(2);
	});

	it('Should index 0 contain unique values', () => {
		const res = divideInTwo([[2, 4, 5, 2, 1, 4]]);
		const hasUniqueValues = (new Set(res[0])).size === res[0].length;
		expect(hasUniqueValues).toBeTruthy();
	});

	it('Should index 1 contain unique values', () => {
		const res = divideInTwo([[2, 4, 5, 2, 1, 4]]);
		const hasUniqueValues = (new Set(res[1])).size === res[1].length;
		expect(hasUniqueValues).toBeTruthy();
	})
});