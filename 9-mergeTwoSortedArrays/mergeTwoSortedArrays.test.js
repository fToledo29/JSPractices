const { merge } = require("./mergeTwoSortedArrays");

describe('Merge Two Sorted Arrays', () => {
	it('should return a sorted array', () => {
		expect(merge([2, 4, 6, 8, 9], [3, 5, 7, 9, 12, 24, 26, 27])[5]).toBe(7);
		expect(Array.isArray(merge([1, 2], [3, 5]))).toBe(true);
		expect(merge([1, 2, 5, 7, 9], [2, 5, 7, 12, 100])[5]).toBe(7);
	});
});